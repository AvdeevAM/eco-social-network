import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import smallDefaultAvatar from "./../../assets/images/default_avatar_small.png";
import { createField } from "../../utils/FormControls";
import { createButton } from "../common/Button/Button";

const Header = (props) => {
  let [settingsMode, setSettingsMode] = useState(true);

  return (
    <header className={s.header}>
      <img
        className={s.headerLogo}
        src="https://www.logodesign.net/images/nature-logo.png"
        alt=""
      />
      {props.isAuth ? (
        <div className={s.loginBlock}>
          <h3>
            {props.login}
            <br />
            {props.email}
          </h3>
          <div className={s.avatarWrapper}>
            <img
              className={s.loginAvatar}
              src={props.photo || smallDefaultAvatar}
              alt="avatar"
            />
            {settingsMode && (
              <div className={s.settings}>
              <p>Theme:</p>
                <label className={s.switch}>
                  <input type="checkbox" />
                  <span className={s.slider + " " + s.round} />
                </label>
                <p className={s.switchLabel}>Light</p>
                <p className={s.switchLabelDark}>Dark</p>

                {createButton(s.logoutButton, "Log out", "button", {onClick: props.logout})}
              </div>
            )}
          </div>
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </header>
  );
};

export default Header;
