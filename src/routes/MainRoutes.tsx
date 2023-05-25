import { lazy } from "react";
import { MainLayout } from "../layout/MainLayout/MainLayout";
import Loadable from "../components/Loadable";
import { Workouts } from "../pages/Workouts/Workouts";

const DashboardDefault = Loadable(
  lazy(() => import("../pages/Dashboard/Dashboard"))
);

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/home",
      element: <DashboardDefault />,
    },
    {
      path: "/workouts",
      element: <Workouts />,
    },
  ],
};
export default MainRoutes;
