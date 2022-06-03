import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return props.message.isMine === true ? (
    <div className={s.dialog + " " + s.mineMessage}>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
      {props.message.message}
    </div>
  ) : (
    <div className={s.dialog}>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
      {props.message.message}
    </div>
  );
};

export default Message;
