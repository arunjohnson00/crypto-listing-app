import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import NotificationBar from "../../components/useradmin/notificationbar/NotificationBar";
import UserAdminSideBar from "../../components/useradmin/useradminsidebar/UserAdminSideBar";
import UserAdminMobileBottomNav from "../../components/useradmin/bottomnavigation/UserAdminMobileBottomNav";
import MobileBottomNav from "../../components/mobile/bottomnavigation/MobileBottomNav";
import MobileAppbarTop from "../../components/useradmin/appbartop/MobileAppbarTop";

const UserAdminView = ({ children }: any) => {
  const location: any = useLocation();
  const [collapse, setCollapse] = useState(false);
  const matches = useMediaQuery("(min-width:900px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Box
      sx={{
        backgroundColor: matches === true ? "#161234" : "#01061A",
        height: "auto",
        width: "100%",
      }}
      pb={10}
    >
      {matches === true ? <NotificationBar /> : <MobileAppbarTop />}

      <Stack direction="row">
        {matches === true && (
          <Box
            width={collapse === false ? "20%" : "5%"}
            sx={{ transition: "all .5s" }}
          >
            <UserAdminSideBar collapse={collapse} setCollapse={setCollapse} />
          </Box>
        )}
        <Box
          py={0}
          width={matches === true ? "80%" : "100%"}
          sx={{ transition: "all .5s" }}
        >
          <Box px={matches === true ? 4 : 1.5}>{children}</Box>
        </Box>

        {matches === false && (
          // <UserAdminMobileBottomNav />
          <MobileBottomNav />
        )}
      </Stack>
    </Box>
  );
};

export default UserAdminView;
