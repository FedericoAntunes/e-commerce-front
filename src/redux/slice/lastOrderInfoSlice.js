import { createSlice } from "@reduxjs/toolkit";

const lastOrderInfoSlice = createSlice({
  name: "lastOrderInfo",
  initialState: {},

  reducers: {
    saveLastOrderInfo(state, action) {
      return action.payload;
    },
  },
});

export const { saveLastOrderInfo } = lastOrderInfoSlice.actions;
export default lastOrderInfoSlice.reducer;
