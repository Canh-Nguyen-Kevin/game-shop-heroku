import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { product } from "./cartSlice";

export interface productDetail {
  products: Array<product>;
  loading: boolean;
  currentProduct: product | null;
  search: string;
}
const initialState: productDetail = {
  products: [],
  loading: true,
  currentProduct: null,
  search: "",
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<any>) => {
      return (state.currentProduct = action.payload);
    },
    getAllProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    getSearch: (state, action: PayloadAction<any>) => {
      state.search = action.payload;
    },
    getLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
  },
});

export const { getAllProducts, getProduct, getSearch, getLoading } =
  ProductSlice.actions;
export const currentProduct = (state: RootState) =>
  state.product.currentProduct;
export const allProducts = (state: RootState) => state.product.products;
export const searchTerm = (state: RootState) => state.product.search;
export const loadingState = (state: RootState) => state.product.loading;
export default ProductSlice.reducer;
