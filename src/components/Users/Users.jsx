import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";
import s from "./Users.module.css";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  ...props
}) => {
  return (
    <div className={s.content}>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div className={s.userList}>
        {props.users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
