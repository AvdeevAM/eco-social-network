import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import treeLogo from "../../assets/images/tree-logo-long.png";
// const Friend = (props) => {
//   return (
//     <div>
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/2048px-Avatar_icon_green.svg.png" alt="" />
//       {props.name}
//     </div>
//   );
// };
const Navbar = (props) => {
  // let friendsElements = props.state.friends.map((f) => (
  //   <Friend key={f.id} name={f.name} />
  // ));

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
        <div className={`${s.item} ${s.friends}`}>
          <NavLink
            to="/friends"
            className={(navData) => (navData.isActive ? s.activeLink : "")}
          >
            <h2>Friends</h2>
          </NavLink>
          {/* <div className={s.friendsContent}>{friendsElements}</div> */}
        </div>
      </nav>
      <img className={s.treeLogo} src={treeLogo} alt="" />

    </div>
  );
};

export default Navbar;
