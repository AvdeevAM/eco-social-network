import React from "react";
import s from "./Post.module.css";
import heart from "./../../../../assets/icons/heart.svg";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.postAuthor}>
        <img src={props.authorizedUserPhoto} alt="" />
        {props.authorName || "anonymous"}
      </div>
      <div className={s.postTextAreaWrapper}>
        <div className={s.postTextArea}>
          <span>{props.message}</span>
        </div>
        <div className={s.likeArea}>
          <button>like</button>
          <span>
            
            <img src={heart} alt="" />
            {props.likesCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
