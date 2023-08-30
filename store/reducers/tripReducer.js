import {
  SET_TRIP_ID,
  FETCH_GETTRIPS_REQUEST,
  FETCH_GETTRIPS_SUCCESS,
  FETCH_GETTRIPS_FAILURE,
  FETCH_SAVED_TRIPS_REQUEST,
  FETCH_SAVED_TRIPS_SUCCESS,
  FETCH_SAVED_TRIPS_FAILURE,
} from "../actions/tripsAction";

const initialState = {
  // tripIds: [],
  savetrips: [],
  savedTripsId: [],
};

const selectTripReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_TRIP_ID:
    //   return {
    //     ...state,
    //     tripIds: action.payload,
    //   };
    case FETCH_SAVED_TRIPS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SAVED_TRIPS_SUCCESS:
      return {
        ...state,
        savedTripsId: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_SAVED_TRIPS_FAILURE:
      return {
        ...state,
        savedTripsId: [],
        loading: false,
        error: action.payload,
      };
    case FETCH_GETTRIPS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_GETTRIPS_SUCCESS:
      return {
        ...state,
        savetrips: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_GETTRIPS_FAILURE:
      return {
        ...state,
        savetrips: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default selectTripReducer;
