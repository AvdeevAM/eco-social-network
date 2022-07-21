import React, { useState } from "react";
import { createButton } from "../../common/Button/Button";
import Comment from "./Comment";
import s from "./NewsPost.module.css";

const NewsPost = (props) => {
  let [commentsToDisplay, setCommentsToDisplay] = useState(false);

  const showComments = () => {
    setCommentsToDisplay(true);
  };

  const closeComments = () => {
    setCommentsToDisplay(false);
  };

  const comments = props.postComments?.map((c) => {
    return <Comment key={c.id} comment={c} />;
  });

  return (
    <div className={props.index === 0 ? s.mainPost + " " + s.post : s.post}>
      <div className={s.title}>
        <span>
          {props.post.id}.
          {props.post.title[0].toUpperCase() + props.post.title.substring(1)}
        </span>
      </div>
      <div className={s.body}>
        <img src={props.photo?.url} alt="" />
        <span>
          {props.post.body[0].toUpperCase() +
            props.post.body.substring(1) +
            " " +
            props.post.body +
            "."}
        </span>
      </div>
      {!commentsToDisplay ? (
        createButton(s.commentsBtn, "Comments", "button", {
          onClick: showComments,
        })
      ) : (
        <>
          {createButton(s.commentsBtn, "close commentaries", "button", {
            onClick: closeComments,
          })}
          <div className={s.commentsSection}>
            <span>Latest commentaries:</span>
            {comments}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPost;
