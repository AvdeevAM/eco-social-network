import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import FollowingUsers from "./ProfileInfo/FollowingUsers";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        saveData={props.saveData}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div className={s.profilePostsAndFollowingUsers}>
        <FollowingUsers />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
