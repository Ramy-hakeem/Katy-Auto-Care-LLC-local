import { createSlice } from "@reduxjs/toolkit";
import { getState, removeState } from "../../utils/utils";

const storedData = getState("katyAutoCareUserData");

const initialState = {
  userData: {
    // cookie
    access_token: storedData?.access_token ?? null,
    isAuthenticated: false,
    id: storedData?.id ?? null,
    role: storedData ? storedData.role : null,
    //not in the cookie
    name: "",
    address: "",
    phone_number_one: "",
    phone_number_two: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    profile_image: "",
  },
};

export const authSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addLoginData: (state, action) => {
      state.userData.access_token = action.payload?.access_token;
      state.userData.isAuthenticated = action.payload.isAuthenticated;
      state.userData.id = action.payload.id;
      state.userData.role = action.payload.role;
    },
    addUserData: (state, action) => {
      state.userData.name = action.payload.name;
      state.userData.address = action.payload.address;
      state.userData.phone_number_one = action.payload.phone_number_one;
      state.userData.phone_number_two = action.payload.phone_number_two;
      state.userData.state = action.payload.state;
      state.userData.city = action.payload.city;
      state.userData.zip = action.payload.zip;
      state.userData.email = action.payload.email;
      state.userData.profile_image = action.payload.profile_image;
      state.userData.isAuthenticated = action.payload.isAuthenticated;
    },
    logout: (state) => {
      removeState("katyAutoCareUserData")
      state.userData = {
        access_token: null,
        isAuthenticated: false,
        id: null,
        role: null,
        //not in the cookie
        name: "",
        address: "",
        phone_number_one: "",
        phone_number_two: "",
        state: "",
        city: "",
        zip: "",
        email: "",
        profile_image: "",
      };

    },
  },
});

export const { addLoginData, addUserData, logout } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
