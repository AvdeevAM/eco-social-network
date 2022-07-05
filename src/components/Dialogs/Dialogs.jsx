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
      .min(1, "type text to send message")
      .max(15, "caution: your message is too long to be sent"),
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
      initialValues={{
        newMessageBody: "",
      }}
      validationSchema={props.messageSchema}
    >
      {({ handleSubmit, isValid, dirty, errors }) => (
        <Form onSubmit={handleSubmit} className={s.newMessage}>
          <div>
            <Field
              component="textarea"
              name="newMessageBody"
              placeholder="Enter your message"
            />
            {errors.newMessageBody && (
              <p className={s.error}>{errors.newMessageBody}</p>
            )}
          </div>
          {createButton(null, "Send message", "submit", {
            disabled: !(isValid && dirty),
          })}
        </Form>
      )}
    </Formik>
  );
};

export default Dialogs;
