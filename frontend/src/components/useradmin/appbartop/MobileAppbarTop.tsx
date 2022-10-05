import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";

import userIcon from "../../../assets/userdashboard/mobile/user.png";
import notificationIcon from "../../../assets/userdashboard/mobile/notification.png";
import faqIcon from "../../../assets/userdashboard/mobile/faq.png";
import MobileDrawer from "./MobileDrawer";
import MobileMenu from "./MobileMenu";

const MobileAppbarTop = () => {
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const [notificationMenu, setNotificationMenu] = useState<null | HTMLElement>(
    null
  );

  const notificationOpenHandler = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationMenu(event.currentTarget);
  };
  const notificationCloseHandler = () => {
    setNotificationMenu(null);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerState({ ...drawerState, left: open });
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#00020E",
          height: 75,
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <Avatar alt="User" src={userIcon} sx={{ width: 30, height: 30 }} />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={notificationOpenHandler}
            >
              <Badge
                badgeContent={""}
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
                color="error"
                sx={
                  {
                    //   transform: "scale(.5) translate(50%, -50%)",
                  }
                }
              >
                <NotificationsIcon
                  sx={{ width: 27, height: 27, color: "#FFBF04" }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={notificationOpenHandler}
            >
              <Avatar alt="User" src={faqIcon} sx={{ width: 25, height: 25 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileDrawer
        state={drawerState}
        setState={setDrawerState}
        toggleDrawer={toggleDrawer}
      />
      <MobileMenu
        anchorEl={notificationMenu}
        setAnchorEl={setNotificationMenu}
        handleClick={notificationOpenHandler}
        handleClose={notificationCloseHandler}
      />
    </Box>
  );
};

export default MobileAppbarTop;
