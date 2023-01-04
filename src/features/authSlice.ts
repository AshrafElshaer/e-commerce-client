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
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaHJhZkBlbHNoYWVyLmNvbSIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjcyNzg5MzQ4LCJleHAiOjE2NzI3OTAyNDh9.I-Cn2Zm_4HzPRyXSAJISmDwvFeVYFCqUvsy_Fzi1or0",
  userInfo: {
    _id: "63b088ae8775b0f4671c030b",
    // address: {
    //   street: "2580 collin mckinney pkwy",
    //   city: "mckinney",
    //   zipcode: "75070",
    //   country: "usa",
    // },
    email: "ashraf@elshaer.com",
    name: "ashraf moustafa elshaer",
    orders: [],
    phone: "2144408050",

    role: "User",
  },
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
    logout: (state) => {
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
      query: (credentials) => ({
        url: "/auth/logout",
        method: "POST",
        body: credentials,
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

export const { setCredentials, logout } = authSlice.actions;
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useUpdateUserMutation,
} = authExtendedApi;
export const selectCurrentUser = (state: RootState) => state.auth.userInfo;
export const selectUserToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
