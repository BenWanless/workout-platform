import { lazy } from "react";
import MinimalLayout from "../layout/MinimalLayout";
import Loadable from "../components/Loadable";

const AuthLogin = Loadable(lazy(() => import("../pages/Authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("../pages/Authentication/Register"))
);

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
