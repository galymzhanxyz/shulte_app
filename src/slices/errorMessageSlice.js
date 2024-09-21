import { createSlice } from "@reduxjs/toolkit";

const errorMessageSlice = createSlice({
  name: "errorMessage",
  initialState: { value: "" },
  reducers: {
    setErrorMessage: (state, action) => {
      state.value = action.payload;
    },
    clearErrorMessage: (state) => {
      state.value = "";
    },
  },
});

export const { setErrorMessage, clearErrorMessage } = errorMessageSlice.actions;
export default errorMessageSlice.reducer;
