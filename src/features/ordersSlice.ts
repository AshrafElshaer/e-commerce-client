import { apiSlice } from "./api/apiSlice";
import { TCartItemState } from "./cartSlice";
import { TMeta } from "./categoriesSlice";
import {} from "@reduxjs/toolkit";

export type TOrder = {
  _id: string;
  customer: {
    _id: string;
    name: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
    };
  };
  items: TCartItemState[];
  status: string;
  total: number;
};
const apiWithTags = apiSlice.enhanceEndpoints({ addTagTypes: ["Orders"] });

export const ordersApiSlice = apiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<TOrder[], string>({
      query: (customerId) => ({
        url: "/orders",
        responseHandler: (response) => response.json(),
        transformResponse: (returnValue: TOrder[], meta: TMeta) => {
          if (!meta) return [];
          return returnValue.filter(
            (order) => order.customer._id !== customerId
          );
        },
      }),
    }),
    createNewOrder: builder.mutation<TOrder, TOrder>({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["Orders"],
    }),
    updateOrder: builder.mutation<TOrder, TOrder>({
      query: (order) => ({
        url: `/orders/${order._id}`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation<TOrder, string>({
      query: (_id) => ({
        url: `/orders/${_id}`,
        method: "DELETE",
        body: _id,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateNewOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = ordersApiSlice;
