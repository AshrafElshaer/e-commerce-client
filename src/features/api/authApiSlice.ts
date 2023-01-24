import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logoutAuth } from "../authSlice";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  CreateApi,
} from "@reduxjs/toolkit/query";
import { RootState } from "../../app/store";
const serverUrl = "https://audiophile-api-mh1t.onrender.com";

const baseQuery = fetchBaseQuery({
  baseUrl: serverUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
  responseHandler: (response) => response.json(),
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    // try to get a new token
    const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
    if (refreshResult.data) {
      const userInfo = (api.getState() as RootState).auth.userInfo;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, userInfo }));
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutAuth());
    }
  }
  return result;
};

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
