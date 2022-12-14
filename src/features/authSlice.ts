import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { authApiSlice } from "./api/authApiSlice";
import { apiSlice } from "./api/apiSlice";

export type TUserState = {
  userInfo?: {
    _id: string;
    name?: string;
    email: string;
    orders: string[];
    phone?: string;
    address?: {
      street: string;
      zipcode: string;
      city: string;
      country: string;
    };
    role: string;
  } | null;
  token?: string | null;
};

const initialState: TUserState = {
  token: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TUserState>) => {
      const { userInfo, token } = action.payload;
      if (userInfo) state.userInfo = userInfo;
      if (token) state.token = token;
    },
    logoutAuth: (state) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export const authExtendedApi = authApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    updateUser: builder.mutation({
      query: ({ userId, ...rest }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: rest,
      }),
    }),
  }),
});

export const { setCredentials, logoutAuth } = authSlice.actions;
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useUpdateUserMutation,
} = authExtendedApi;
export const selectCurrentUser = (state: RootState) => state.auth.userInfo;
export const selectUserToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
