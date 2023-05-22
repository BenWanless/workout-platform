import { lazy } from "react";
import MinimalLayout from "../layout/MinimalLayout";

const DashboardDefault = lazy(() => import("../pages/Dashboard"));

const MainRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
  ],
};
export default MainRoutes;
