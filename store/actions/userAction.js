import axios from "axios";

export const FETCH_USERID_REQUEST = "FETCH_USERID_REQUEST";
export const FETCH_USERID_SUCCESS = "FETCH_USERID_SUCCESS";
export const FETCH_USERID_FAILURE = "FETCH_USERID_FAILURE";

export const fetchUserIDRequest = () => ({
  type: FETCH_USERID_REQUEST,
});

export const fetchUserIDSuccess = (userId) => ({
  type: FETCH_USERID_SUCCESS,
  payload: userId,
});

export const fetchUserIDFailure = (error) => ({
  type: FETCH_USERID_FAILURE,
  payload: error,
});

export const fetchUserData = (userIds) => {
  return async (dispatch) => {
    dispatch(fetchUserIDRequest());
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/username/${userIds}`
      );
      dispatch(fetchUserIDSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserIDFailure(error.message));
    }
  };
};
