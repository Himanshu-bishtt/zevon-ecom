import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  idToken: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.idToken = action.payload.token;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.idToken = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
