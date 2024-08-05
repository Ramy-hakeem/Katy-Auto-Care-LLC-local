import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export default store;
