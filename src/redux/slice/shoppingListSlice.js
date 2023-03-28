import { createSlice, current } from "@reduxjs/toolkit";

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const alreadyInCart = state.some((item) => item.id === product.id);
      if (alreadyInCart) {
        const productInCart = state.find((item) => item.id === product.id);
        productInCart.quantity = productInCart.quantity + product.quantity;
        return state;
      }
      state.push(action.payload);
      console.log(current(state));
      return state;
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[itemIndex] = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
