import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, AppThunk } from "../../app/store";

const initialState = {
  userName: "",
  userEmail: "",
  newUser: [],
  userAddress: <any>[],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.email;
    },
    setUserLogOut: (state) => {
      state.userName = "";
      state.userEmail = "";
    },
    createUser: (state, action) => {
      state.newUser = action.payload;
    },
    setuserAddress: (state, action: PayloadAction<any>) => {
      state.userAddress.push(action.payload);
    },
  },
});

export const { setActiveUser, setUserLogOut, createUser, setuserAddress } =
  userSlice.actions;
export const selectUserName = (state: RootState) => state.user.userName;
export const selectUserEmail = (state: RootState) => state.user.userEmail;
export const newUserState = (state: RootState) => state.user.newUser;
export const addressState = (state: RootState) => state.user.userAddress;
export default userSlice.reducer;
