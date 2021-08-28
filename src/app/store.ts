import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import watchListReducer from "../features/watchListSlice";

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
