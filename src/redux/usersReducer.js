import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "users/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id !== action.userId)],
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  currentPage: page,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
  userId,
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.followUser.bind(usersAPI),
    followSuccess
  );
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollowUser.bind(usersAPI),
    unfollowSuccess
  );
};

export default usersReducer;
