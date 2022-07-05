import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { createField } from "../../../utils/FormControls";
import { createButton } from "../../common/Button/Button";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post
      message={p.message}
      likesCount={p.likesCount}
      key={p.id}
      postId={p.id}
      authorizedUserPhoto={props.authorizedUserPhoto}
      incrementLikes={props.incrementLikes}
      fullName={props.fullName}
    />
  ));

  const addPost = (values, { resetForm }) => {
    props.addPost(values.newPostText);
    resetForm({
      values: {
        newPostText: "",
      },
    });
  };

  const postSchema = yup.object().shape({
    newPostText: yup
      .string()
      .min(1, "type some text to add post")
      .max(15, "caution: message is too long")
  });

  return (
    <div className={s.postsBlock}>
      <div className={s.feedTitle}>
        <h4>My feed</h4>
      </div>
      <div>
        <FormikMyPosts addPost={addPost} postSchema={postSchema} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const FormikMyPosts = (props) => {
  return (
    <Formik
      onSubmit={props.addPost}
      initialValues={{
        newPostText: "",
      }}
      validationSchema={props.postSchema}
    >
      {({ handleSubmit, isValid, dirty, touched, errors }) => (
        <Form onSubmit={handleSubmit} className={s.newMessage}>
          <div className={s.newMessageBg}></div>
          {createField("textarea", "newPostText", "write your thoughts here")}
          {errors.newPostText && (
            <p className={s.error}>{errors.newPostText}</p>
          )}
          {createButton(null, "Add post", "submit", {
            disabled: !(isValid && dirty),
          })}
        </Form>
      )}
    </Formik>
  );
};

export default MyPosts;
