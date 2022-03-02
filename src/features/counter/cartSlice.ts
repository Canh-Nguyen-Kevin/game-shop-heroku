import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface product {
  id: number;
  type: string;
  name: string;
  img: [string, string, string, string];
  description: string;
  detail: string;
  information: string;
  price: number;
  discount: number;
  duration: number | string;
  qty: number;
  check: boolean;
}

export interface state {
  products: Array<product>;
  currentProduct: product | null;
}

const initialState: state = {
  products: [],

  currentProduct: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<any>) => {
      let alreadyAdded = true;
      const inCartProduct = state.products.find(
        (product) =>
          `${product.id} + ${product.duration}` ===
          `${action.payload.id} + ${action.payload.duration}`
      );

      if (inCartProduct) {
        state.products.forEach((product: product) => {
          if (
            `${product.id} + ${product.duration}` ===
            `${action.payload.id} + ${action.payload.duration}`
          ) {
            product.qty += action.payload.qty;
            product.check
              ? (product.check = product.check)
              : (product.check = action.payload.check);
          }
        });
      } else {
        alreadyAdded = false;
      }

      if (!state.products.length || !alreadyAdded) {
        state.products.push({ ...action.payload });
      }
    },
    removeCartItem: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        (product: product) =>
          `${product.id} + ${product.duration}` !==
          `${action.payload.id} + ${action.payload.duration}`
      );
    },
    adjustQty: (state, action: PayloadAction<any>) => {
      state.products.map((product) => {
        if (
          `${product.id} + ${product.duration}` ===
          `${action.payload.id} + ${action.payload.duration}`
        )
          return (product.qty = action.payload.qty);
        return product;
      });
    },
    checkProduct: (state, action: PayloadAction<any>) => {
      state.products.map((product) => {
        if (
          `${product.id} + ${product.duration}` ===
          `${action.payload.id} + ${action.payload.duration}`
        )
          return (product.check = action.payload.check);
      });
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  adjustQty,
  checkProduct,
  resetCart,
} = CartSlice.actions;
export const currentCart = (state: RootState) => state.cart.products;

export default CartSlice.reducer;
