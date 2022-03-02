import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import formReducer from "../features/counter/formSlice";
import userReducer from "../features/counter/userSlice";
import productReducer from "../features/counter/productSlice";
import cartReducer from "../features/counter/cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
