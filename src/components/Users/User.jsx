import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar_small.png";
import { NavLink } from "react-router-dom";
import { createButton } from "../common/Button/Button";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.user}>
      <span>
        <div>
          <b>{user.name}</b>
        </div>
      </span>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
              className={s.userPhoto}
            />
          </NavLink>
        </div>
      </span>
      <span>
        <div>Status: {user.status ? (user.status.length > 20 ? user.status.substring(0, 17) + "..." : user.status) : "-"}</div>
      </span>
      <span>
        <div>
          {user.followed
            ? createButton(null, "Unfollow", "button", {
                disabled: followingInProgress.some((id) => id === user.id),
                onClick: () => {
                  unfollow(user.id);
                },
              })
            : createButton(null, "Follow", "button", {
                disabled: followingInProgress.some((id) => id === user.id),
                onClick: () => {
                  follow(user.id);
                },
              })}
        </div>
      </span>
        <span>
          <div className={s.userIdBlock}>
            #{user.id}
          </div>
        </span>
    </div>
  );
};

export default User;
