import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import symbolYes from "./../../../assets/images/symbol_yes.png";
import symbolNo from "./../../../assets/images/symbol_no.png";
import ProfileStatusWithHooK from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/default_avatar_small.png";
import Contact from "./Contact";
import ProfileInfoDataForm from "./ProfileInfoDataForm";

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  const saveProfileInfoData = (values) => {
    props.saveData(values);
    setEditMode(false);
  };

  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={s.descriptionBlock}>
      <div>
        <h2>{props.profile.fullName}</h2>
      </div>
      <img
        className={s.profilePhoto}
        src={props.profile.photos.large || userPhoto}
        alt=""
      />
      {props.isOwner && <input type="file" onChange={onPhotoSelected} />}
      <ProfileStatusWithHooK
        status={props.status}
        updateStatus={props.updateStatus}
      />
      {editMode ? (
        <ProfileInfoDataForm
          {...props}
          saveProfileInfoData={saveProfileInfoData}
        />
      ) : (
        <ProfileInfoData
          {...props}
          switchOnEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

const ProfileInfoData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <div>
          <button onClick={props.switchOnEditMode}>Edit</button>
        </div>
      )}
      <div className={s.aboutMe}>
        <b>About me</b>: {props.profile.aboutMe}
      </div>
      <b>Contacts</b>:
      <div className={s.contacts}>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactName={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
      <div className={s.lookingForAJob}>
        <b>Looking for a job right now:</b>
        <img
          src={props.profile.lookingForAJob === true ? symbolYes : symbolNo}
          alt=""
        />
      </div>
      {props.profile.lookingForAJob && (
        <div className={s.lookingForAJobDescription}>
          <b>Job description</b>: {props.profile.lookingForAJobDescription}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
