import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import symbolYes from "./../../../assets/images/symbol_yes.png";
import symbolNo from "./../../../assets/images/symbol_no.png";
import ProfileStatusWithHOOK from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <div>
          <h2>{props.profile.fullName}</h2>
        </div>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatusWithHOOK status={props.status} updateStatus={props.updateStatus}/>
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
