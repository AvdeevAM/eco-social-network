import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import smallDefaultAvatar from "./../../assets/images/default_avatar_small.png";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.logodesign.net/images/nature-logo.png" alt="" />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <h3>
              {props.login}
              <br />
              {props.email}
            </h3>
            <img src={props.photo || smallDefaultAvatar} alt="avatar" />
            <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
