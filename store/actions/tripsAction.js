export const SET_TRIP_ID = "SET_TRIP_ID";

export const setTripId = (tripId) => {
  return {
    type: SET_TRIP_ID,
    payload: tripId,
  };
};
