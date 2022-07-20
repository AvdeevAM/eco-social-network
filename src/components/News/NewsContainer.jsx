import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import News from "./News";
import { getNews, clearNews } from "../../redux/newsReducer";
import { WithAuthRedirect } from "../../HOC/WithAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import s from "./News.module.css";

const NewsContainer = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;
  const totalPages = Math.ceil(100 / limit);
  const lastElem = useRef();
  const observer = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (currentPage, limit) => {
    try {
      setIsLoading(true);
      await props.getNews(currentPage, limit);
    } catch (e) {
      alert(e);
    } finally {
      setIsLoading(false);
    }
  };

  const clear = () => {
    props.clearNews();
  };

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    const callback = function (entries) {
      if (entries[0].isIntersecting && currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
      return;
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElem.current); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (currentPage >= 1) {
      fetchNews(currentPage, limit);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    return () => clear(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.newsContainerContent}>
      {isLoading && <Preloader />}
      <News {...props} />
      <div className={s.lastElement} ref={lastElem}></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    newsPhotos: state.newsPage.newsPhotos,
    totalNewsCount: state.newsPage.totalNewsCount,
    isFetching: state.newsPage.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, { getNews, clearNews }),
  WithAuthRedirect
)(NewsContainer);
