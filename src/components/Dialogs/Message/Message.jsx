import React from "react";
import s from "./../Dialogs.module.css";
import cn from "classnames";

const Message = (props) => {
  return (
    <div
      className={cn(
        {
          [s.mineMessage]: props.message.isMine === true,
        },
        s.dialog
      )}
    >
      <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" />
      {props.message.message}
    </div>
  );
};
export default Message;
