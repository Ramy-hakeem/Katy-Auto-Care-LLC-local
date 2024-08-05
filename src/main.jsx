import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import App from "./App/App.jsx";
import { Provider } from "react-redux";
import store from "./App/store.js";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { baseAPI } from "./api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ApiProvider api={baseAPI}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </ThemeProvider>
  </React.StrictMode>
);
