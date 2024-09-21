import { createSlice } from "@reduxjs/toolkit";

const targetNumSlice = createSlice({
  name: "targetNum",
  initialState: { value: 1 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = targetNumSlice.actions;
export default targetNumSlice.reducer;
