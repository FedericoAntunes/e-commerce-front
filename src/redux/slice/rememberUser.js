import { createSlice } from "@reduxjs/toolkit";

const rememberUser = createSlice({
  name: "rememberUser",
  initialState: {},

  reducers: {
    saveUserData(state, action) {
      return action.payload.remember ? action.payload : {};
    },
  },
});

export const { saveUserData } = rememberUser.actions;
export default rememberUser.reducer;
