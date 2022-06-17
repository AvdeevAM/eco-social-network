import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import Followed from "./Followed/Followed";

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
      {props.isOwner && (
        <div className={s.profilePostsAndFollowedUsers}>
          <Followed followed={props.followed} />
          <MyPostsContainer />
        </div>
      )}
    </div>
  );
};

export default Profile;
