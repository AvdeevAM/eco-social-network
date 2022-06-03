import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  ...props
}) => {
  return (
    <div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
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
  );
};

export default Users;
