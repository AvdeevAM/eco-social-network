import { authAPI, profileAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_USER_PHOTO = "auth/SET_USER_PHOTO";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  photo: null,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_USER_PHOTO:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
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
  payload: { photo },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
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
  captcha,
  setStatus,
  setSubmitting
) => {
  return async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      setStatus(data.messages);
    }
    setSubmitting(false);
    dispatch(getCaptchaUrlSuccess(null));
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
export const getCaptchaUrl = () => async (dispatch) => {
  let data = await securityAPI.getCaptcha();
  let captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
