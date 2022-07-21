import React from "react";
import s from "./News.module.css";
import NewsPost from "./NewsPost/NewsPost";

const News = (props) => {

  const news = props.news?.map((n, i) => {
    const postComments = props.newsComments?.filter((c) => c.postId === n.id);
    return <NewsPost key={n.id} post={n} index={i} photo={props.newsPhotos[n.id]} postComments={postComments}/>;
  });

  return <div className={s.newsContent}>{news}</div>;
};

export default News;
