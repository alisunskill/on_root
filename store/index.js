// store/index.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import recommendationReducer from "./reducers/recommendationReducer";
import savePostReducer from "./reducers/savePostReducer";
import createRecommendation from "./reducers/createRecommendationReducer";
import tripIdSaveReducer from "./reducers/tripReducer";

const store = configureStore({
  reducer: {
    recommendation: recommendationReducer,
    saveposts: savePostReducer,
    createRecommendation: createRecommendation,
    tripIdSave: tripIdSaveReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
