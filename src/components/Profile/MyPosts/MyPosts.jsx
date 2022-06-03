import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const addPost = (values) => {
    props.addPost(values.newPostText);
  };

  const postSchema = yup.object().shape({
    newPostText: yup
      .string()
      .max(10, "Message is too long")
      .required("Type text to send message"),
  });

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <FormikProfile addPost={addPost} postSchema={postSchema} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const FormikProfile = (props) => {
  return (
    <Formik
      onSubmit={props.addPost}
      initialValues={{}}
      validationSchema={props.postSchema}
    >
      {({ handleSubmit, isValid, dirty, touched, errors }) => (
        <Form onSubmit={handleSubmit} className={s.newMessage}>
          <div>
            <Field
              component="textarea"
              placeholder="Type new post"
              name="newPostText"
            />
            {touched.newPostText && errors.newPostText && (
              <p className={s.error}>{errors.newPostText}</p>
            )}
          </div>
          <div>
            <button disabled={!isValid && !dirty} type="submit">
              Add post
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MyPosts;
