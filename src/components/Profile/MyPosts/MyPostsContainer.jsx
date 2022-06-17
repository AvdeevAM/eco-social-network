import { connect } from "react-redux";
import {
  addPost,
  incrementLikes,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    authorizedUserPhoto: state.auth.photo,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  incrementLikes,
})(MyPosts);

export default MyPostsContainer;
