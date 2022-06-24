import React from "react";
import s from "./Post.module.css";
import heart from "./../../../../assets/icons/heart.svg";
import default_avatar_small from "./../../../../assets/images/default_avatar_small.png";
import { createButton } from "../../../common/Button/Button";

const Post = (props) => {
  const likePost = () => {
    props.incrementLikes(props.postId);
  };

  return (
    <div className={s.item}>
      <div className={s.postAuthor}>
        <img src={props.authorizedUserPhoto || default_avatar_small} alt="" />
        {props.authorName || "anonymous"}
      </div>
      <div className={s.postTextAreaWrapper}>
        <div className={s.postTextArea}>
          <span>{props.message}</span>
        </div>
        <div className={s.likeArea}>
          {createButton(s.likeButton, "Like", "button", {
            onClick: likePost,
          })}
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
