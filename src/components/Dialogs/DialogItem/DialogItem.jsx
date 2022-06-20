import React from "react";
import s from "./DialogsItems.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink
      to={path}
      className={(navData) =>
        navData.isActive ? s.dialog + " " + s.active : s.dialog + " "
      }
    >
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
      <div>
        {props.name.length > 21
          ? props.name.substring(0, 18) + "..."
          : props.name}
      </div>
    </NavLink>
  );
};

export default DialogItem;
