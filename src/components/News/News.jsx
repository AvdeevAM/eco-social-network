import React from "react";
import s from "./News.module.css";
import NewsPost from "./NewsPost/NewsPost";

const News = (props) => {
  const news = props.news?.map((n, i) => {
    return <NewsPost key={n.id} post={n} index={i} photo={props.newsPhotos[n.id]}/>;
  });

  return <div className={s.newsContent}>{news}</div>;
};

export default News;
