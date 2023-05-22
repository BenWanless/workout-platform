import { lazy } from "react";
import MinimalLayout from "../layout/MinimalLayout";

const AuthLogin = lazy(() => import("../pages/Login"));
const AuthRegister = lazy(() => import("../pages/Register"));

const AuthRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};
export default AuthRoutes;
