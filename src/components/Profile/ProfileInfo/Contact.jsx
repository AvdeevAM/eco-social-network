import React from "react";
import s from "./Contact.module.css";

const Contact = ({ contactName, contactValue }) => {
  return (
    <div>
      <b>{contactName}</b>:{" "}
      <a
        className={s.contactLink}
        href={contactValue}
        rel="noreferrer"
        target="_blank"
      >
        {contactValue}
      </a>
    </div>
  );
};

export default Contact;
