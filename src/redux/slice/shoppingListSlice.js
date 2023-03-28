
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      state.items[itemIndex] = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
