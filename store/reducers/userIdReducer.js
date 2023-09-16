import {
  FETCH_USERID_REQUEST,
  FETCH_USERID_SUCCESS,
  FETCH_USERID_FAILURE,
} from "../actions/userAction";

const initialState = {
    userId: null,
    loading: false,
    error: null,
};

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERID_SUCCESS:
      return {
        ...state,
        userId: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_USERID_FAILURE:
      return {
        ...state,
        userId: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userIdReducer;
