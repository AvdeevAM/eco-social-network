import React from "react";
import s from "./Login.module.css";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { login } from "./../../redux/authReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { createField } from "../../utils/FormControls";
import { createButton } from "../common/Button/Button";

const Login = (props) => {
  let submitLogin = (values, submitProps) => {
    props.login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha,
      submitProps.setStatus,
      submitProps.setSubmitting
    );
    submitProps.setSubmitting(true);
  };

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: yup
      .string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    captcha: yup.string(),
  });

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={s.loginBlock}>
      <h3>LOGIN</h3>
      <FormikLogin
        submitLogin={submitLogin}
        loginSchema={loginSchema}
        {...props}
      />
    </div>
  );
};

const FormikLogin = (props) => {
  return (
    <Formik
      onSubmit={props.submitLogin}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={props.loginSchema}
    >
      {(formik) => (
        <Form className={s.loginForm} onSubmit={formik.handleSubmit}>
          {formik.status}
          <div>
            {createField("input", "email", "Email")}
            {formik.touched.email && formik.errors.email && (
              <p className={s.error}>{formik.errors.email}</p>
            )}
            {createField("input", "password", "******", { type: "password" })}
            {formik.touched.password && formik.errors.password && (
              <p className={s.error}>{formik.errors.password}</p>
            )}
            {createField(
              "input",
              "rememberMe",
              null,
              { type: "checkbox" },
              "Remember me"
            )}
            {props.captchaUrl && <img src={props.captchaUrl} alt="" />}
            {props.captchaUrl &&
              createField("input", "captcha", "Enter symbols from image")}
            <div>
              {createButton(undefined, "Log in", "submit", {
                disabled: !(formik.isValid && formik.dirty),
              })}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
