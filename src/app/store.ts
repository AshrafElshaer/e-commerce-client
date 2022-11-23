import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    categories: categoriesReducer,
    // user :
    // categories:
    // orders
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
