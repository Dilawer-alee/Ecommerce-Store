import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: 'white',
  textColor: 'black',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      // Directly update the state with new color and textColor
      state.color = action.payload.color;
      state.textColor = action.payload.textColor;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
