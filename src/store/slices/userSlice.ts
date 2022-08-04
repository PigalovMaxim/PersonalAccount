import { createSlice } from "@reduxjs/toolkit";
import { IUserSlice } from "../../other/types";

const initialState: IUserSlice = {
  isLogin: false,
  login: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = counterSlice.actions;

export default counterSlice.reducer;
