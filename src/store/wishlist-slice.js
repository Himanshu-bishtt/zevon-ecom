import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    clear(state) {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = wishlistSlice.actions;

export default wishlistSlice.reducer;
