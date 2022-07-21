import React from "react";
import s from "../NewsPost/Comment.module.css";
import default_avatar_small from "./../../../assets/images/default_avatar_small.png";

const Comment = (props) => {
  return (
    <div className={s.content}>
      <div className={s.author}>
        <img src={default_avatar_small} alt="" />
        <span>
          {props.comment.email.length >= 14
            ? `${props.comment.email.substring(0, 11)}...`
            : props.comment.email}
        </span>
      </div>
      <div className={s.decorationArrow}></div>
      <div className={s.body}>
        <span><strong>{props.comment.name}</strong></span>
        <br />
        <span>{props.comment.body}</span>
      </div>
    </div>
  );
};

export default Comment;
