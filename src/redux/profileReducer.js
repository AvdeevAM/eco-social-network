import { profileAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";
const INCREMENT_LIKES = "profile/INCREMENT_LIKES";

let initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      message: "It's my first post",
      likesCount: "15",
    },
    {
      id: 2,
      message: "Hi, how are you?",
      likesCount: "20",
    },
    {
      id: 3,
      message: "Bla bla bla",
      likesCount: "11",
    },
    {
      id: 4,
      message: "Is somebody reading it right now?",
      likesCount: "2",
    },
    {
      id: 5,
      message: "Very big post incoming...",
      likesCount: "3",
    },
    {
      id: 6,
      message:
        "I'm a big boy -------------------------------------------------------------------------------------------------------------",
      likesCount: "20",
    },
    {
      id: 7,
      message: "Ok, u r pretty far from start",
      likesCount: "20",
    },
  ],
  followed: [
    { name: "rafaelitos17", id: 24495, photo: null },
    { name: "Sorit", id: 24494, photo: null },
    { name: "Freyja", id: 24493, photo: null },
    { name: "6e3LaD", id: 24477, photo: null },
    { name: "KemtaTam2000", id: 24278, photo: null },
    { name: "AnnM", id: 24276, photo: null },
    { name: "mrte", id: 24274, photo: null },
    { name: "Ilya178", id: 24139, photo: null },
    { name: "Questra", id: 24085, photo: null },
    { name: "234234er324", id: 24081, photo: null },
    { name: "zidan671", id: 24080, photo: null },
    { name: "Andrey132", id: 24033, photo: null },
  ],
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        message: action.text,
        authorName: "Alexander",
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
    case INCREMENT_LIKES:
      state.posts.find((p) => p.id === action.postId).likesCount++;
      return {
        ...state,
        posts: [...state.posts],
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

export const addPost = (text) => ({ type: ADD_POST, text });
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
export const incrementLikes = (postId) => ({
  type: INCREMENT_LIKES,
  postId,
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
    }
    setSubmitting(false);
    return response.data;
  };
};
export default profileReducer;
