import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Divider, Stack, Typography, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { AppBar } from "./style";
import { logoutHandler } from "../../../utils/logoutHandler";
import SettingsBtn from "../../../components/button/settings/SettingsBtn";
import NotificationBtn from "../../../components/button/notification/NotificationBtn";
import ProfileBtn from "../../../components/button/profile/ProfileBtn";
import ProfileMenu from "../../../components/dropdowns/profile/ProfileMenu";
import NotificationMenu from "../../../components/dropdowns/notification/NotificationMenu";
import SettingsMenu from "../../../components/dropdowns/settings/SettingsMenu";

// import { listExchangeRequest } from "../../../store/action";
// import { listNetworkRequest } from "../../../store/action";
// import { listNftMarketPlaceRequest } from "../../../store/action";
// import { listUserRequest } from "../../../store/action";
// import { listCoinRequest } from "../../../store/action";

const TopBar = ({ handleDrawerOpen, handleDrawerClose, open }: any) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate: any = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorNotification, setAnchorNotification] = useState<any>(null);
  const openNotification = Boolean(anchorNotification);
  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNotification(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setAnchorNotification(null);
  };

  const [anchorSettings, setAnchorSettings] = useState<any>(null);
  const openSettings = Boolean(anchorSettings);
  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorSettings(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorSettings(null);
  };

  const loginControll = () => {
    logoutHandler(navigate, dispatch);
  };

  // useEffect(() => {
  //   const successHandler = (res: any) => {};
  //   const errorHandler = (err: any) => {};

  //   dispatch(
  //     listExchangeRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(listNetworkRequest("emptyformData", successHandler, errorHandler));
  //   dispatch(listUserRequest("emptyformData", successHandler, errorHandler));
  //   dispatch(
  //     listNftMarketPlaceRequest("emptyformData", successHandler, errorHandler)
  //   );
  //   dispatch(listCoinRequest("emptyformData", successHandler, errorHandler));
  // }, [dispatch]);
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "68px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        color: "rgba(0, 0, 0, 1)",
        boxShadow: "rgb(255 255 255 / 55%) 0px 12px 1px ",
      }}
      open={open}
    >
      <Toolbar>
        {!open ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerClose} sx={{ marginRight: "20px" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        )}

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            {" "}
            <SettingsBtn handleSettingsClick={handleSettingsClick} />
          </Link>
          {/* <SettingsMenu
            anchorSettings={anchorSettings}
            openSettings={openSettings}
            handleSettingsClose={handleSettingsClose}
          /> */}

          <NotificationBtn handleNotificationClick={handleNotificationClick} />
          <NotificationMenu
            anchorNotification={anchorNotification}
            openNotification={openNotification}
            handleNotificationClose={handleNotificationClose}
          />
          <Divider orientation="vertical" flexItem />
          <ProfileBtn
            handleClick={handleClick}
            handleClose={handleClose}
            open={openProfile}
            anchorEl={anchorEl}
          />
          <ProfileMenu
            handleClick={handleClick}
            handleClose={handleClose}
            open={openProfile}
            anchorEl={anchorEl}
            loginControll={loginControll}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
