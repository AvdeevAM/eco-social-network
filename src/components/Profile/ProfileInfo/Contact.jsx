import React from "react";

const Contact = ({ contactName, contactValue }) => {
  return (
    <div>
      <b>{contactName}</b>: {contactValue}
    </div>
  );
};

export default Contact;
