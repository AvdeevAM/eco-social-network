import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import smallDefaultAvatar from "./../../assets/images/default_avatar_small.png";
import HeaderSettings from "./HeaderSettings";
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
      <div>
        <div>
          <h3>ECOsocial.net</h3>
        </div>
        {props.isAuth ? (
          <div
            className={s.loginBlock}
            onClick={toggleEditMode}
            autoFocus={true}
          >
            <img
              id={s.loginAvatar}
              className={s.loginAvatar}
              src={props.photo || smallDefaultAvatar}
              alt="avatar"
            />
            {settingsMode && (
              <HeaderSettings
                deactivateEditMode={deactivateEditMode}
                settingsMode={settingsMode}
                darkTheme={props.darkTheme}
                toggleUITheme={props.toggleUITheme}
                fullName={props.fullName}
                login={props.login}
                email={props.email}
                logout={props.logout}
              />
            )}
          </div>
        ) : (
          <div>
            <NavLink to="/login">
              {createButton(undefined, "Login", "button", { ...props })}
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
