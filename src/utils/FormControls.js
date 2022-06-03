import { Field } from "formik";
import React from "react";

export const Textarea = (props) => {
  return (
    <div>
      <textarea {...props} />
    </div>
  );
};

export const Input = (props) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export const createField = (
  component,
  name,
  placeholder,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        component={component}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {text}
    </div>
  );
};
