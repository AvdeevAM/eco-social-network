import { NavLink } from "react-router-dom";
import { createButton } from "../common/Button/Button";
import s from "./HeaderSettings.module.css";

const Settings = (props) => {
  return (
    <div className={s.settings}>
      <NavLink to="/profile">
        <h4>{props.fullName}</h4>
      </NavLink>
      <div className={s.settingsInfoWrapper}>
        nickname: {props.login} <br />
        e-mail: {props.email}
      </div>
      <div className={s.settingsButtons}>
        <div className={s.switchWrapper}>
          <p>Dark theme:</p>
          <label className={s.switch}>
            <input type="checkbox" />
            <span className={s.slider + " " + s.round} />
          </label>
        </div>
        {createButton(s.logoutButton, "Log out", "button", {
          onClick: props.logout,
        })}
      </div>
    </div>
  );
};

export default Settings;
