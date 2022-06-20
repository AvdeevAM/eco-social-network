import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { createButton } from "../common/Button/Button";

const Dialogs = (props) => {
  let dialogsElements = props.messagesPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));
  let messagesElements = props.messagesPage.messages.map((m) => (
    <Message message={m} key={m.id} authPhoto={props.authPhoto} />
  ));

  let addNewMessage = (values, { resetForm }) => {
    props.sendMessage(values.newMessageBody);
    resetForm({
      values: {
        newMessageBody: "",
      },
    });
  };

  const messageSchema = yup.object().shape({
    newMessageBody: yup
      .string()
      .max(15, "Message is too long")
      .required("Type text to send message"),
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItemsWrapper}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
      </div>
      <div className={s.messagesBlock}>
        <div className={s.dialog}>{messagesElements}</div>
        <div>
          <FormikDialogs
            addNewMessage={addNewMessage}
            messageSchema={messageSchema}
          />
        </div>
      </div>
    </div>
  );
};

const FormikDialogs = (props) => {
  return (
    <Formik
      onSubmit={props.addNewMessage}
      initialValues={{}}
      validationSchema={props.messageSchema}
    >
      {({ handleSubmit, isValid, dirty, errors, touched }) => (
        <Form onSubmit={handleSubmit} className={s.newMessage}>
          <div>
            <Field
              component="textarea"
              name="newMessageBody"
              placeholder="Enter your message"
            />
            {touched.newMessageBody && errors.newMessageBody && (
              <p className={s.error}>{errors.newMessageBody}</p>
            )}
          </div>
          <div>
            {createButton(undefined, "Send message", "submit", {
              disabled: !isValid && !dirty && touched.newMessageBody,
            })}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Dialogs;