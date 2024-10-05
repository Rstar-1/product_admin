import { createSlice } from "@reduxjs/toolkit";

const ColorSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = ColorSlice.actions;

export default ColorSlice.reducer;
