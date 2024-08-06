import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "../api/apiSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
