import React from "react";
import s from "./../Dialogs.module.css";
import cn from "classnames";

const Message = (props) => {
  let avatar = props.message.isMine
    ? props.authPhoto
    : "https://cdn-icons-png.flaticon.com/512/147/147142.png";
  return (
    <div
      className={cn(
        {
          [s.mineMessage]: props.message.isMine === true,
        },
        s.messageItem
      )}
    >
      <img src={avatar} alt="" />
      <div className={s.messageItemText}>{props.message.message}</div>
    </div>
  );
};
export default Message;
