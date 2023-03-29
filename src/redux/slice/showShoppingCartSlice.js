import { createSlice } from "@reduxjs/toolkit";

const showShoppingCartSlice = createSlice({
  name: "showShoppingCart",
  initialState: false,

  reducers: {
    toggleMenu(state, action) {
      return action.payload ? true : !state;
    },
  },
});

export const { toggleMenu } = showShoppingCartSlice.actions;
export default showShoppingCartSlice.reducer;
