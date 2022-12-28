import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { authApipiSlice } from "./api/authApiSlice";

export type TUderState = {
  userInfo?: {
    _id: string;
    email: string;
    orders: string[];
    role: string;
  } | null;
  token?: string | null;
};

const initialState: TUderState = {
  userInfo: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TUderState>) => {
      const { userInfo, token } = action.payload;
      if (userInfo) state.userInfo = userInfo;
      if (token) state.token = token;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const authExtendedApi = authApipiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: (credentials) => ({
        url: "/logout",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
export const { setCredentials, logout } = authSlice.actions;
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authExtendedApi;
export const selectCurrentUser = (state: RootState) => state.auth.userInfo;
export const selectUserToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
