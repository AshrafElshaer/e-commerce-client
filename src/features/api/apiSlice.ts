import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export type TMeta = { requestId: string; timestamp: number };

const serverUrl = import.meta.env.VITE_SERVER_URL;
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  endpoints: (builder) => ({}),
});


