import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showSearch: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleSearchBar(state) {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { toggleSearchBar } = uiSlice.actions;

export default uiSlice.reducer;
