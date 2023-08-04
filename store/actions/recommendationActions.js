import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const FETCH_RECOMMENDATIONS_REQUEST = "FETCH_RECOMMENDATIONS_REQUEST";
export const FETCH_RECOMMENDATIONS_SUCCESS = "FETCH_RECOMMENDATIONS_SUCCESS";
export const FETCH_RECOMMENDATIONS_FAILURE = "FETCH_RECOMMENDATIONS_FAILURE";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const DATA_LIST = "DATA_LIST";

export const USER_ID = "USER_ID";

export const fetchRecommendationsRequest = () => ({
  type: FETCH_RECOMMENDATIONS_REQUEST,
});

export const fetchRecommendationsSuccess = (recommendations) => ({
  type: FETCH_RECOMMENDATIONS_SUCCESS,
  payload: recommendations,
});

export const fetchRecommendationsFailure = (error) => ({
  type: FETCH_RECOMMENDATIONS_FAILURE,
  payload: error,
});

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (fav) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: fav,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const searchData = (list) => ({
  type: DATA_LIST,
  payload: list,
});
export const setUserID = (email, userID) => {
  console.log("Email:", email);
  console.log("User ID:", userID);

  return {
    type: USER_ID,
    payload: { email, userID },
  };
};
// Async action
// get posts
export const fetchRecommendations = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRecommendationsRequest());
      const response = await axios.get(
        "http://localhost:8000/api/recommendations"
      );
      dispatch(fetchRecommendationsSuccess(response.data));
    } catch (error) {
      dispatch(fetchRecommendationsFailure(error.message));
    }
  };
};

// fav posts
export const fetchFavPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsRequest());
      const response = await axios.post(
        "http://localhost:8000/api/savepost"
      );
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
