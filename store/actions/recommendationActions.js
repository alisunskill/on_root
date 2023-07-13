// store/actions/recommendationActions.js
import axios from "axios";

export const FETCH_RECOMMENDATIONS_REQUEST = "FETCH_RECOMMENDATIONS_REQUEST";
export const FETCH_RECOMMENDATIONS_SUCCESS = "FETCH_RECOMMENDATIONS_SUCCESS";
export const FETCH_RECOMMENDATIONS_FAILURE = "FETCH_RECOMMENDATIONS_FAILURE";

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

// Async action
export const fetchRecommendations = () => {
  return (dispatch) => {
    dispatch(fetchRecommendationsRequest());
    axios
      .get("http://localhost:8000/api/recommendations")
      .then((response) => {
        dispatch(fetchRecommendationsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchRecommendationsFailure(error.message));
      });
  };
};
