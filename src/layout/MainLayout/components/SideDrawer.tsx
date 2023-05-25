import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { HomeFilled, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const pages = [
  {
    index: 0,
    title: "Home",
    href: "/home",
    icon: <HomeFilled />,
  },
  {
    index: 1,
    title: "Workouts",
    href: "/workouts",
    icon: <MailOutlined />,
  },
];

function SideDrawer() {
  const match = window.location.pathname;
  const navigate = useNavigate();

  const handleItemClick = (href: string) => {
    navigate(href);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {pages.map(({ title, index, href, icon }) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              selected={href === match ? true : false}
              onClick={() => handleItemClick(href)}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}

export default SideDrawer;
