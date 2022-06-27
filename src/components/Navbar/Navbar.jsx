import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import treeLogo from "../../assets/images/tree-logo-long.png";

const Navbar = (props) => {
   return (
    <div className={s.navWrapper}>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/users"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            Settings
          </NavLink>
        </div>
      </nav>
      <img className={s.treeLogo} src={treeLogo} alt="" />
    </div>
  );
};

export default Navbar;
