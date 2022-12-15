import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    loadItems(state, action) {
      state.items = action.payload;
    },
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

export const loadWishlistData = () => {
  return async dispatch => {
    try {
      const res = await fetch(
        'https://zevon-ecom-default-rtdb.firebaseio.com/wishlist.json'
      );

      if (!res.ok) throw new Error('Error loading wishlist data');

      const data = await res.json();

      dispatch(loadItems(data || []));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const { loadItems, add, remove, clear } = wishlistSlice.actions;

export default wishlistSlice.reducer;
