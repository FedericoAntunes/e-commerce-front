import { createSlice } from "@reduxjs/toolkit";

const previousUrlSlice = createSlice({
  name: "previousUrl",
  initialState: {},

  reducers: {
    previousUrl(state, action) {
      return action.payload;
    },
  },
});

export const { previousUrl } = previousUrlSlice.actions;
export default previousUrlSlice.reducer;
