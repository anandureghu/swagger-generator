import { configureStore } from "@reduxjs/toolkit";
import { HeaderReducer } from "./slice/swagger/header";

export const store = configureStore({
  reducer: {
    header: HeaderReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch