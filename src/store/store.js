import { configureStore } from "@reduxjs/toolkit";
import targetNumReducer from "../slices/targetNumSlice";
import errorReducer from "../slices/errorMessageSlice";

const store = configureStore({
  reducer: {
    targetNum: targetNumReducer,
    error: errorReducer,
  },
});

export default store;
