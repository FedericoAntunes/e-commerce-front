import { createSlice } from "@reduxjs/toolkit";

const showShoppingCartSlice = createSlice({
  name: "showShoppingCart",
  initialState: { scroll: true, showCart: false },

  reducers: {
    toggleMenu(state, action) {
      return action.payload;
    },
  },
});

export const { toggleMenu } = showShoppingCartSlice.actions;
export default showShoppingCartSlice.reducer;
