import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import symbolYes from "./../../../assets/images/symbol_yes.png";
import symbolNo from "./../../../assets/images/symbol_no.png";
import ProfileStatusWithHooK from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/default_avatar_small.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
          <h2>{props.profile.fullName}</h2>
        </div>
        <img className={s.profilePhoto} src={props.profile.photos.large || userPhoto} alt="" />
        {props.isOwner && 
        <input type="file" onChange={onPhotoSelected}/>}
        <ProfileStatusWithHooK status={props.status} updateStatus={props.updateStatus}/>
        <div className={s.contacts}>
          My contacts:
          <ul>
            <li>{props.profile.contacts.facebook}</li>
            <li>{props.profile.contacts.vk}</li>
            <li>{props.profile.contacts.twitter}</li>
            <li>{props.profile.contacts.github}</li>
          </ul>
        </div>
        <div className={s.lookingForAJob}>
          Looking for a job right now:
          <img
            src={props.profile.lookingForAJob === true ? symbolYes : symbolNo} alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
