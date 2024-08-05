import { lazy } from "react";

export default [
  {
    path: `/`,
    name: "Home Page",
    component: lazy(() => import("../pages/guest/Home")),
    private: false,
    role: "guest",
    afterAuth: true
  },
  {
    path: `/login`,
    name: "Login Page",
    component: lazy(() => import("../pages/guest/Login")),
    private: false,
    role: "guest",
    afterAuth: false
  },
  {
    path: `/register`,
    name: "Register Page",
    component: lazy(() => import("../pages/guest/Register")),
    private: false,
    role: "guest",
    afterAuth: false

  },
  {
    path: `/forgot-password`,
    name: "Forgot Password Page",
    component: lazy(() => import("../pages/guest/ForgotPassword")),
    private: false,
    role: "guest",
    afterAuth: false

  },
  {
    path: `/reset-password`,
    name: "Reset Password Page",
    component: lazy(() => import("../pages/guest/ResetPassword")),
    private: false,
    role: "guest",
    afterAuth: false
  },
  {
    path: `/add-car`,
    name: "Add Car Page",
    component: lazy(() => import("../pages/customer/AddCar")),
    private: false,
    role: "customer",
    afterAuth: true
  },
];
