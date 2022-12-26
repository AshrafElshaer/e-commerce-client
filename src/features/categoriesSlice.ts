import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { apiSlice } from "./api/apiSlice";

export interface CategoriesState {
  categories: TCategory[] | null;
}

export type TCategory = {
  _id: string;
  category: string;
  categoryImage: string;
  products: TProduct[];
  __v: number;
};

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
  isNew: boolean;
  price: number;
  features: string;
  includes: {
    quantity: number;
    item: string;
    _id: string;
  }[];
  gallery: string[];
  count: number;
  sold: number;
};
export type TMeta = { requestId: string; timestamp: number };


export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<TCategory[], undefined>({
      query: () => ({
        url: "/categories",
        responseHandler: (response) => response.json(),
        transformResponse: (returnValue: TCategory[], meta: TMeta) => {
          if (!meta) return [];
          return returnValue.map((category) =>
            category.products.sort((a, b) => Number(b.isNew) - Number(a.isNew))
          );
        },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
