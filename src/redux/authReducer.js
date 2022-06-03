import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_PHOTO = "auth/SET_USER_PHOTO";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  photo: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, login, email, isAuth },
});
export const setUserPhoto = (photo) => ({
  type: SET_USER_PHOTO,
  photo,
});

export const getAuthUserData = () => {
  return async (dispatch) => {
    let userData = { id: null, login: null, email: null };
    let data = await authAPI.me();
    if (data.resultCode === 0) {
      userData = data.data;
      dispatch(
        setAuthUserData(userData.id, userData.login, userData.email, true)
      );
    }
    if (data.resultCode === 0) {
      let profile = await profileAPI.getProfile(userData.id);
      dispatch(setUserPhoto(profile.photos.small));
    }
  };
};

export const login = (
  email,
  password,
  rememberMe,
  setStatus,
  setSubmitting
) => {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      setStatus(data.messages);
    }
    setSubmitting(false);
    return data;
  };
};

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
  return data;
};

export default authReducer;
