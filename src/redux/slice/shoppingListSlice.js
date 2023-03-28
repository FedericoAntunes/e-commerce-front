
import { createSlice, current } from '@reduxjs/toolkit';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
     state.push(action.payload);
     console.log(current(state))
     return state;
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      state[itemIndex] = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
