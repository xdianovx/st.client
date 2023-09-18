"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import isMenuOpenReducer from "./slices/isMenuOpen";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    isMenuOpen: isMenuOpenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
