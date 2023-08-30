import axios from "axios";

export const FETCH_SAVED_TRIPS_REQUEST = "FETCH_SAVED_TRIPS_REQUEST";
export const FETCH_SAVED_TRIPS_SUCCESS = "FETCH_SAVED_TRIPS_SUCCESS";
export const FETCH_SAVED_TRIPS_FAILURE = "FETCH_SAVED_TRIPS_FAILURE";

export const FETCH_GETTRIPS_REQUEST = "FETCH_GETTRIPS_REQUEST";
export const FETCH_GETTRIPS_SUCCESS = "FETCH_GETTRIPS_SUCCESS";
export const FETCH_GETTRIPS_FAILURE = "FETCH_GETTRIPS_FAILURE";

export const SET_TRIP_ID = "SET_TRIP_ID";

// export const setTripId = (tripId) => {
//   return {
//     type: SET_TRIP_ID,
//     payload: tripId,
//   };
// };

export const fetchSavedTripsRequest = () => ({
  type: FETCH_SAVED_TRIPS_REQUEST,
});

export const fetchSavedTripsSuccess = (savedTrips) => ({
  type: FETCH_SAVED_TRIPS_SUCCESS,
  payload: savedTrips,
});

export const fetchSavedTripsFailure = (error) => ({
  type: FETCH_SAVED_TRIPS_FAILURE,
  payload: error,
});

export const fetchGetTripsRequest = () => ({
  type: FETCH_GETTRIPS_REQUEST,
});

export const fetchGetTripsSuccess = (savetrips) => ({
  type: FETCH_GETTRIPS_SUCCESS,
  payload: savetrips,
});

export const fetchGetTripsFailure = (error) => ({
  type: FETCH_GETTRIPS_FAILURE,
  payload: error,
});

// save trips on the base of trip post id
export const fetchSavedTrips = (tripIdData) => {
  return async (dispatch) => {
    dispatch(fetchSavedTripsRequest());
    try {
      const response = await axios.get("http://localhost:8000/api/savetrip");
      dispatch(fetchSavedTripsSuccess(response.data, tripIdData));
    } catch (error) {
      dispatch(fetchSavedTripsFailure(error.message));
    }
  };
};

// all save trips
export const fetchGetTrips = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchGetTripsRequest());
      const response = await axios.get("http://localhost:8000/api/trips");
      console.log(response.data); // Add this line
      dispatch(fetchGetTripsSuccess(response.data));
    } catch (error) {
      dispatch(fetchGetTripsFailure(error.message));
    }
  };
};
