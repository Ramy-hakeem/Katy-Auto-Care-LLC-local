import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getUserData: (state) => {
      state.userData = localStorage.getItem("katyAutoCareUserData");
    },
    logOutUser: (state) => {
      state.userData = "";
    },
  },
});

export const { getUserData, logOutUser } = loginSlice.actions;
const loginReducer = loginSlice.reducer;
export default loginReducer;
