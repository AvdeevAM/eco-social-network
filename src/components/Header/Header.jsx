import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import smallDefaultAvatar from "./../../assets/images/default_avatar_small.png";
import Settings from "./Settings";
import { createButton } from "../common/Button/Button";

const Header = (props) => {
  let [settingsMode, setSettingsMode] = useState(false);

  const toggleEditMode = (e) => {
    if (e.target === document.getElementsByClassName(s.loginAvatar)[0]) {
      return !settingsMode ? activateEditMode() : deactivateEditMode();
    }
  };

  const activateEditMode = () => {
    setSettingsMode(true);
  };

  const deactivateEditMode = () => {
    setSettingsMode(false);
  };

  return (
    <header className={s.header}>
      <img
        className={s.headerLogo}
        src="https://www.logodesign.net/images/nature-logo.png"
        alt=""
      />
      {props.isAuth ? (
        <div className={s.loginBlock} onClick={toggleEditMode} autoFocus={true}>
          <img
            id={s.loginAvatar}
            className={s.loginAvatar}
            src={props.photo || smallDefaultAvatar}
            alt="avatar"
          />
          {settingsMode && (
            <Settings
              fullName={props.fullName}
              login={props.login}
              email={props.email}
              logout={props.logout}
            />
          )}
        </div>
      ) : (
        <NavLink to="/login">
          {createButton(undefined, "Login", "button", { ...props })}
        </NavLink>
      )}
    </header>
  );
};

export default Header;
