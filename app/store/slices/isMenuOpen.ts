import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IsMenuOpenState {
  value: boolean;
}

const initialState: IsMenuOpenState = {
  value: false,
};

export const isMenuOpenSlice = createSlice({
  name: "isMenuOpen",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = isMenuOpenSlice.actions;

export default isMenuOpenSlice.reducer;
