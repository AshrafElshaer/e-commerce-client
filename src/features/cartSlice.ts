import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
export type TCartItemState = {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

// Define the initial state using that type
const initialState: TCartItemState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<TCartItemState>) => {
      const existingItem = state.find((item) => item._id === payload._id);
      if (existingItem) {
        return state.map((item) =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity + payload.quantity }
            : item
        );
      }
      state.push(payload);
    },
    incrementQuantity: (state, { payload }: PayloadAction<string>) => {
      return state.map((item) =>
        item._id === payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decrementQuantity: (state, { payload }: PayloadAction<string>) => {
      const existingItem = state.find((item) => item._id === payload);
      if (existingItem?.quantity === 1) {
        return state.filter((item) => item._id !== payload);
      }
      return state.map((item) =>
        item._id === payload ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    removeCartItems: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeCartItems,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;
export const selectCartCount = createSelector(
  selectCart,
  (state) => state.length
);
export const selectCartTotal = createSelector(selectCart, (state) =>
  state.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

export default cartSlice.reducer;
