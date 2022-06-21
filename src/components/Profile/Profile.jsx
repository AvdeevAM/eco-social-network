import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import Followed from "./Followed/Followed";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        saveData={props.saveData}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        followed={props.followed}
      />
      {props.isOwner && <Followed followed={props.followed} />}
      {props.isOwner && <MyPostsContainer />}
    </div>
  );
};

export default Profile;
