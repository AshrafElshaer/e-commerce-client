import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TCategory } from "../categories/categoriesSlice";

const serverUrl = import.meta.env.VITE_SERVER_URL;
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: serverUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query<TCategory[], undefined>({
      query: () => ({
        url: "/categories",
        responseHandler: (response) => response.json(),
      }),
    }),

    // getPokemonByName: builder.query<Pokemon, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
});

export const { useGetCategoriesQuery } = apiSlice;
