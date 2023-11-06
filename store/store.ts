import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/userSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: UserReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
