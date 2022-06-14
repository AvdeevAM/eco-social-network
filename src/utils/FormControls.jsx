import { Field } from "formik";
import React from "react";
import s from "./FormControls.module.css";

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
        class={s.defaultField}
        component={component}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {text}
    </div>
  );
};
