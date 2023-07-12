// store/reducers/recommendationReducer.js
import { FETCH_RECOMMENDATIONS_REQUEST, FETCH_RECOMMENDATIONS_SUCCESS, FETCH_RECOMMENDATIONS_FAILURE } from "../actions/recommendationActions";

const initialState = {
  recommendations: [],
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
        recommendations: action.payload, // Update the state property with the received recommendations
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
    default:
      return state;
  }
};

export default recommendationReducer;
