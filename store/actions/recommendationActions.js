import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const FETCH_RECOMMENDATIONS_REQUEST = "FETCH_RECOMMENDATIONS_REQUEST";
export const FETCH_RECOMMENDATIONS_SUCCESS = "FETCH_RECOMMENDATIONS_SUCCESS";
export const FETCH_RECOMMENDATIONS_FAILURE = "FETCH_RECOMMENDATIONS_FAILURE";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

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

// User Login
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

// Define the action creator for successful login
export const loginSuccess = (token, userID, email) => ({
  type: LOGIN_SUCCESS,
  token: token,
  userID: userID,
  email: email,
});

// Define the action creator for login failure
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const fetchLoginUser = (credentials) => {
  console.log(credentials, "credentials");
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        credentials
      );
      const { token, userID, email } = response.data;
      localStorage.setItem("userID", userID);
      localStorage.setItem("email", email);
      console.log(response.data, token, "bnbnb");
      dispatch({
        payload: loginSuccess(token, userID, email),
        type: LOGIN_SUCCESS,
      });
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const setUserID = (userID, email) => {
  console.log("Email:", userID, email);
  // console.log("User ID:", userID);

  return {
    type: USER_ID,
    payload: { userID, email },
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
      const response = await axios.post("http://localhost:8000/api/savepost");
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};
