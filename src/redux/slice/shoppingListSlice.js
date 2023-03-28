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
        if (productInCart.quantity + product.quantity <= 0) {
          state = state.filter((item) => item.id !== productInCart.id);
          return state;
        }
        productInCart.quantity = productInCart.quantity + product.quantity;
        return state;
      }
      state.push(action.payload);
      console.log(current(state));
      return state;
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
      return state;
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
