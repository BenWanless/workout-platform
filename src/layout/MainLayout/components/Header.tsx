import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Avatar,
  ButtonBase,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../../assets/Images/strive-logo-horizontal.png";

import {
  BellOutlined,
  MoreOutlined,
  ProfileOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import useOperatingSystem from "../../../utils/OperatingSystrem";

const drawerWidth = 240;

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const searchBarRef = React.useRef<HTMLInputElement>(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const operatingSystem = useOperatingSystem();

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Cmd (Mac) or Ctrl (Windows) and K key are pressed simultaneously
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        searchBarRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <BellOutlined />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ProfileOutlined />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const SearchMarkup = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        ml: { xs: 0, md: 1 },
      }}
    >
      <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
        <OutlinedInput
          size="small"
          inputRef={searchBarRef}
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: 1 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder={operatingSystem === "Windows" ? "Ctrl + K" : "⌘K"}
        />
      </FormControl>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: `${drawerWidth}px`,
            }}
          >
            <img src={logo} alt="logo" />
          </Box>
          {SearchMarkup}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <BellOutlined />
              </Badge>
            </IconButton>
            <ButtonBase
              sx={{
                p: 0.25,
                borderRadius: 1,
                "&:hover": { bgcolor: "secondary.lighter" },
              }}
              aria-label="open profile"
              ref={anchorEl}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ p: 0.5 }}
              >
                <Avatar
                  alt="profile user"
                  // src={avatar1}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography variant="subtitle1">Ben Wanless</Typography>
              </Stack>
            </ButtonBase>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}

export default Header;
