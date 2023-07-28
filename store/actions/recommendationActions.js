import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const FETCH_RECOMMENDATIONS_REQUEST = "FETCH_RECOMMENDATIONS_REQUEST";
export const FETCH_RECOMMENDATIONS_SUCCESS = "FETCH_RECOMMENDATIONS_SUCCESS";
export const FETCH_RECOMMENDATIONS_FAILURE = "FETCH_RECOMMENDATIONS_FAILURE";

export const DATA_LIST = "DATA_LIST";

export const USER_ID = "USER_ID"

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

export const searchData = (list) => ({
  type: DATA_LIST,
  payload: list,
});
export const setUserID = (id) => ({
  type: USER_ID,
  payload: id,
});

// Async action
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
