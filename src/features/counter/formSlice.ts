import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

const initialState = {
  showUpForm: false,
  loginForm: false,
  addressForm: false,
};
export const formSlice = createSlice({
  name: "showHideForm",
  initialState,
  reducers: {
    showForm: (state, action) => {
      state.showUpForm = action.payload;
    },

    showLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
    showAddressForm: (state, action) => {
      state.addressForm = action.payload;
    },
  },
});

export const { showForm, showLoginForm, showAddressForm } = formSlice.actions;
export const formState = (state: RootState) => state.form.showUpForm;
export const loginFormState = (state: RootState) => state.form.loginForm;
export const addressFormState = (state: RootState) => state.form.addressForm;

export default formSlice.reducer;
