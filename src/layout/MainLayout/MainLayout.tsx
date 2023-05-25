import { Outlet } from "react-router";
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import { Box, Toolbar } from "@mui/material";

export function MainLayout() {
  console.log(open);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <SideDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
