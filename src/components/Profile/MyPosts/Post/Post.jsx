import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
