import React from "react";
import s from "./Followed.module.css";
import defaultAvatar from "./../../../assets/images/default_avatar_small.png";
import { useNavigate } from "react-router-dom";

const Followed = (props) => {
  let followedList = props.followed.map((f) => {
    return <FollowedUser key={f.id} name={f.name} photo={f.photo} id={f.id} />;
  });
  followedList.length = 9;
  return (
    <div className={s.followedWrapper}>
      <div className={s.title}>I'm following them:</div>
      <div className={s.followedList}>{followedList}</div>
    </div>
  );
};

const FollowedUser = (props) => {
  const navigate = useNavigate();
  const photoSrc = props.photo ? props.photo : defaultAvatar;

  const toUserProfile = () => {
    navigate(`/profile/${props.id}`, { replace: true });
  };
  return (
    <div className={s.user} onClick={toUserProfile}>
      <div>
        <img src={photoSrc} width="40px" alt="" />
      </div>
      <div>
        {props.name.length > 10
          ? props.name.substring(0, 7) + "..."
          : props.name}
      </div>
    </div>
  );
};

export default Followed;
