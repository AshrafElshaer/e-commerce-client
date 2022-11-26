import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

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
  slug: string;
  name: string;
  image: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: [
    {
      id: string;
      item: string;
      quantity: number;
    }
  ];
  gallery: string[];
  count: number;
  sold: number;
};

const initialState: CategoriesState = {
  categories: null,
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    increment: (state) => {
      // state += 1;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { increment } = categoriesSlice.actions;

export const selectCategories = (state: RootState) => state.categories;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default categoriesSlice.reducer;
