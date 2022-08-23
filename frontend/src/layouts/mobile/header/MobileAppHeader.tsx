import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";

import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchDrawer from "../../../components/mobile/searchdrawer/SearchDrawer";
import { Link } from "react-router-dom";
import HeaderMenuDrawer from "../../../components/mobile/headermenudrawer/HeaderMenuDrawer";
import logoWhite from "../../../assets/logo/logo.png";
import { trendingCoinListRequest } from "../../../store/action";
const MobileAppHeader = () => {
  const dispatch: any = useDispatch();
  const [openDrawer, setOpenDrawer] = useState({
    top: false,
    left: false,
  });

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpenDrawer({ ...openDrawer, top: !openDrawer?.top });

    // const successHandler = (res: any) => {};
    // const errorHandler = (err: any) => {};

    // dispatch(trendingCoinListRequest("noData", successHandler, errorHandler));
  };

  const toggleMenuDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpenDrawer({ ...openDrawer, left: !openDrawer?.left });
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(trendingCoinListRequest("noData", successHandler, errorHandler));
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#01061A" }}>
      <Grid>
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <img src={logoWhite} alt="coinxhigh" width="90px" />
            </Box>{" "}
          </Link>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
            ml={2}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onClick={toggleDrawer}
              />
            </Search>

            <SearchDrawer
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              toggleDrawer={toggleDrawer}
            />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenuDrawer}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: "2.2rem", color: "#8f8cb0" }} />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}

            <HeaderMenuDrawer
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              toggleDrawer={toggleMenuDrawer}
            />
          </Box>
        </Toolbar>
      </Grid>
    </AppBar>
  );
};

export default MobileAppHeader;
