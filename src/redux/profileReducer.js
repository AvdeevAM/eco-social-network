import { profileAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

let initialState = {
  profile: null,
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "15" },
    { id: 2, message: "It's my first post", likesCount: "20" },
    { id: 3, message: "Bla", likesCount: "11" },
    { id: 4, message: "Dada", likesCount: "2" },
  ],
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.text,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
    dispatch(getAuthUserData());
  }
};
export const saveData = (profile, setSubmitting, setStatus) => {
  return async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let response = await profileAPI.saveData(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      setStatus(response.data.messages);
      console.log(response.data.messages);
    }
    setSubmitting(false);
    return response.data;
  };
};
export default profileReducer;
