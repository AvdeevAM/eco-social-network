import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
const TOGGLE_UI_THEME_SUCCESS = "app/TOGGLE_UI_THEME_SUCCESS";

let initialState = {
  initialized: false,
  darkTheme: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case TOGGLE_UI_THEME_SUCCESS:
      return {
        ...state,
        darkTheme: action.isDark,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
export const toggleUIThemeSuccess = (isDark) => ({
  type: TOGGLE_UI_THEME_SUCCESS,
  isDark,
});

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());
  dispatch(initializedSuccess());
};
export const toggleUITheme = (isDark) => async (dispatch) => {
  await dispatch(toggleUIThemeSuccess(isDark));
};

export default appReducer;
