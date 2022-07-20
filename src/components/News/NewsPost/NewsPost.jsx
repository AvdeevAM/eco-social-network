import React from "react";
import { createButton } from "../../common/Button/Button";
import s from "./NewsPost.module.css";
import pic from "../../../assets/images/default_avatar_small.png";

const NewsPost = (props) => {
  return (
    <div className={props.index === 0 ? s.mainPost + " " + s.post : s.post}>
      <div className={s.title}>
        {props.post.id}.
        {props.post.title[0].toUpperCase() + props.post.title.substring(1)}
      </div>
      <div className={s.body}>
        <img
          src={props.photo?.url}
          alt=""
        />
        {props.post.body[0].toUpperCase() +
          props.post.body.substring(1) +
          " " +
          props.post.body +
          "."}
      </div>
      {createButton(s.comments, "Comments", "button")}
    </div>
  );
};

export default NewsPost;
