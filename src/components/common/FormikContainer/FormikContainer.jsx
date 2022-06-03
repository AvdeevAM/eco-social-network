import { Formik, Form } from "formik";
import * as yup from "yup";
import s from "./FormiKContainer.module.css";

const FormiKContainer = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const validatePattern = yup.object().shape({
    firstName: yup
      .string()
      .typeError("Must be a string value")
      .required("Required"),
    lastName: yup
      .string()
      .typeError("Must be a string value")
      .required("Required"),
    email: yup.string().email("Email isn't correct").required("Required"),
    password: yup
      .string()
      .typeError("Must be a string value")
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords aren't equal")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validateOnBlur
      onSubmit={onSubmit}
      validationSchema={validatePattern}
    >
      {({
        values,
        errors,
        touched,
        isValid,
        dirty,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form className={s.form} onSubmit={handleSubmit}>
          <p>
            <label htmlFor={"firstName"}>Name</label>
            <input
              className={s.input}
              type={"text"}
              name={"firstName"}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.firstName}
            ></input>
          </p>
          {touched.firstName && errors.firstName && (
            <p className={s.error}>{errors.firstName}</p>
          )}
          <p>
            <label htmlFor={"lastName"}>Last name</label>
            <input
              className={s.input}
              type={"text"}
              name={"lastName"}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.lastName}
            ></input>
          </p>
          {touched.lastName && errors.lastName && (
            <p className={s.error}>{errors.lastName}</p>
          )}
          <p>
            <label htmlFor={"email"}>Email</label>
            <input
              className={s.input}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.email}
            ></input>
          </p>
          {touched.email && errors.email && (
            <p className={s.error}>{errors.email}</p>
          )}
          <p>
            <label htmlFor={"email"}>Password</label>
            <input
              className={s.input}
              type={"password"}
              name={"password"}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.password}
            ></input>
          </p>
          {touched.password && errors.password && (
            <p className={s.error}>{errors.password}</p>
          )}
          <p>
            <label htmlFor={"confirmPassword"}>Confirm password</label>
            <input
              className={s.input}
              type={"password"}
              name={"confirmPassword"}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.confirmPassword}
            ></input>
          </p>
          {touched.confirmPassword && errors.confirmPassword && (
            <p className={s.error}>{errors.confirmPassword}</p>
          )}
          <button
            className={s.button}
            disabled={!isValid && !dirty}
            type={"submit"}
          >
            Sign up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormiKContainer;
