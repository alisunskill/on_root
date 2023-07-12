// store/index.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import recommendationReducer from "./reducers/recommendationReducer";

const store = configureStore({
  reducer: {
    recommendation: recommendationReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
