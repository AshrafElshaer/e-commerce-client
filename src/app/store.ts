import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import { authApipiSlice } from "../features/api/authApiSlice";

const middlewares = [apiSlice.middleware, authApipiSlice.middleware, logger];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authApipiSlice.reducerPath]: authApipiSlice.reducer,
  cart: cartReducer,
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
