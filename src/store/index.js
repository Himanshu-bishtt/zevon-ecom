import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import authSlice from './auth-slice';
import wishlistSlice from './wishlist-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    wishlist: wishlistSlice,
  },
});

export default store;
