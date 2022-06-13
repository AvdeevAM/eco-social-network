import { Formik, Form } from "formik";
import * as yup from "yup";
import s from "./ProfileInfo.module.css";
import { createField } from "../../../utils/FormControls";
import { createButton } from "../../common/Button/Button";

const ProfileInfoDataForm = (props) => {
  const profileInfoDataFormSchema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    aboutMe: yup
      .string()
      .min(3, "Too Short!")
      .max(35, "Too Long!")
      .required("Required"),
    contacts: yup.object({
      facebook: yup.string().min(3, "Too Short!").required("Required"),
      website: yup.string().min(3, "Too Short!").required("Required"),
      vk: yup.string().min(3, "Too Short!").required("Required"),
      twitter: yup.string().min(3, "Too Short!").required("Required"),
      instagram: yup.string().min(3, "Too Short!").required("Required"),
      youtube: yup.string().min(3, "Too Short!").required("Required"),
      github: yup.string().min(3, "Too Short!").required("Required"),
      mainLink: yup.string().min(3, "Too Short!").required("Required"),
    }),
  });
  return (
    <Formik
      onSubmit={props.saveProfileInfoData}
      initialValues={{
        ...props.profile,
      }}
      validationSchema={profileInfoDataFormSchema}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {formik.status}
          {createButton(undefined, "Save", "submit", { props: null })}
          <div className={s.fullName}>
            <b>Full name</b>: {createField("input", "fullName", "Full name")}
            {formik.errors.fullName && (
              <p className={s.error}>{formik.errors.fullName}</p>
            )}
          </div>
          <div className={s.aboutMe}>
            <b>About me</b>: {createField("input", "aboutMe", "About me")}
            {formik.errors.aboutMe && (
              <p className={s.error}>{formik.errors.aboutMe}</p>
            )}
          </div>
          <b>Contacts</b>:
          <div className={s.contacts}>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <div key={key}>
                  {key}: {createField("input", "contacts." + key, key)}
                  {formik.errors.contacts?.[key] && (
                    <p className={s.error}>{formik.errors.contacts?.[key]}</p>
                  )}
                </div>
              );
            })}
          </div>
          <div className={s.lookingForAJob}>
            <b>Looking for a job right now:</b>
            {createField("input", "lookingForAJob", null, { type: "checkbox" })}
          </div>
          <div className={s.lookingForAJobDescription}>
            <b>Job description</b>:{" "}
            {createField(
              "input",
              "lookingForAJobDescription",
              "Describe the job you are looking for..."
            )}
            <p className={s.error}>{formik.errors.lookingForAJobDescription}</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileInfoDataForm;
