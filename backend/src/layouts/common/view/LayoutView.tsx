import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import SideMenu from "../sidebar/SideMenu";
import TopBar from "../appbar/TopBar";
import { DrawerHeader } from "./style";

import { ProtectedRoutes } from "../../../routes/AppRoutes";

const LayoutView = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <SideMenu open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <ProtectedRoutes></ProtectedRoutes>
      </Box>
    </Box>
  );
};

export default LayoutView;
