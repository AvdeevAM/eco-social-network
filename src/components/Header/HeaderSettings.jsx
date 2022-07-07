import { NavLink } from "react-router-dom";
import { createButton } from "../common/Button/Button";
import s from "./HeaderSettings.module.css";
import cn from "classnames";

const HeaderSettings = (props) => {
  const changeTheme = () => {
    let checker = document.querySelector("." + s.switch + " input");
    props.toggleUITheme(checker.checked);
  };

  return (
    <div
      className={cn(
        {
          [s.active]: props.settingsMode === true,
        },
        s.settingsBg
      )}
      onClick={props.deactivateEditMode}
    >
    <div className={s.settingsWrapper}>
    <div className={s.settings} onClick={(e) => e.stopPropagation()}>
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
              <input
                type="checkbox"
                defaultChecked={props.darkTheme}
                onClick={changeTheme}
              />
              <span className={s.slider + " " + s.round} />
            </label>
          </div>
          {createButton(s.logoutButton, "Log out", "button", {
            onClick: props.logout,
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeaderSettings;
