import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";
import persistStore from "redux-persist/es/persistStore";
import { authApiSlice } from "../features/api/authApiSlice";

const middlewares = [apiSlice.middleware, authApiSlice.middleware];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
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
  devTools: false,
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
