import { newsAPI } from "../api/api";

const SET_NEWS_SUCCESS = "news/SET_NEWS_SUCCESS";
const SET_TOTAL_NEWS_COUNT = "news/SET_TOTAL_NEWS_COUNT";
const CLEAR_NEWS_SUCCESS = "news/CLEAR_NEWS_SUCCESS";
const SET_PHOTOS_SUCCESS = "news/SET_PHOTOS_SUCCESS";
const SET_COMMENTS_SUCCESS = "news/SET_COMMENTS_SUCCESS";

let initialState = {
  news: [],
  newsPhotos: [],
  newsComments: [],
  totalNewsCount: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_SUCCESS:
      return {
        ...state,
        news: [...state.news, ...action.news],
      };
    case SET_PHOTOS_SUCCESS:
      return {
        ...state,
        newsPhotos: [...state.newsPhotos, ...action.payload],
      };
    case SET_COMMENTS_SUCCESS:
      return {
        ...state,
        newsComments: [...state.newsComments, ...action.payload],
      };
    case SET_TOTAL_NEWS_COUNT:
      return {
        ...state,
        totalNewsCount: action.payload,
      };
    case CLEAR_NEWS_SUCCESS:
      return {
        ...state,
        news: [],
        newsPhotos: [],
        newsComments: [],
      };
    default:
      return state;
  }
};

export const setNewsSuccess = (news) => ({
  type: SET_NEWS_SUCCESS,
  news,
});
export const setTotalNewsCount = (payload) => ({
  type: SET_TOTAL_NEWS_COUNT,
  payload,
});
export const setPhotosSuccess = (payload) => ({
  type: SET_PHOTOS_SUCCESS,
  payload,
});
export const setCommentsSuccess = (payload) => ({
  type: SET_COMMENTS_SUCCESS,
  payload,
});
export const clearNewsSuccess = () => ({
  type: CLEAR_NEWS_SUCCESS,
});

export const clearNews = () => (dispatch) => {
  dispatch(clearNewsSuccess());
};

export const getNews = (page, limit) => async (dispatch) => {
  const newsResponse = await newsAPI.getNews(page, limit);
  const photosResponse = await newsAPI.getPhotos(page, limit);
  const commentsResponse = await newsAPI.getComments(page, limit * 5);
  dispatch(setTotalNewsCount(newsResponse.headers["x-total-count"]));
  dispatch(setPhotosSuccess(photosResponse.data));
  dispatch(setCommentsSuccess(commentsResponse.data));
  dispatch(setNewsSuccess(newsResponse.data));
};

export default newsReducer;
