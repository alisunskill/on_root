import { SET_TRIP_ID } from "../actions/tripsAction";

const initialState = {
  tripIds: [],
};

const selectTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIP_ID:
      return {
        ...state,
        tripIds: action.payload,
      };
    default:
      return state;
  }
};

export default selectTripReducer;
