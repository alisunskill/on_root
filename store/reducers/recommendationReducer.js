// store/reducers/recommendationReducer.js
import {
  FETCH_RECOMMENDATIONS_REQUEST,
  FETCH_RECOMMENDATIONS_SUCCESS,
  FETCH_RECOMMENDATIONS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/recommendationActions";

import { DATA_LIST, USER_ID } from "../actions/recommendationActions";

const initialState = {
  recommendations: [],
  favPosts: [],
  userID: "",
  email: "",
  data: [],
  loading: false,
  error: null,
};

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        recommendations: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_RECOMMENDATIONS_FAILURE:
      return {
        ...state,
        recommendations: [],
        loading: false,
        error: action.payload,
      };
    case DATA_LIST:
      return {
        ...state,
        loading: false,
        getSearchData: action.payload,
      };
    case USER_ID:
      console.log(action.payload, "payload is here");
      return {
        ...state,
        userID: action.payload.userID,
        email: action.payload.email,
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        favPosts: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        favPosts: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recommendationReducer;
