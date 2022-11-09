import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWindowHeight } from "@react-hook/window-size";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import NotificationBar from "../../components/useradmin/notificationbar/NotificationBar";
import UserAdminSideBar from "../../components/useradmin/useradminsidebar/UserAdminSideBar";
import UserAdminMobileBottomNav from "../../components/useradmin/bottomnavigation/UserAdminMobileBottomNav";
import MobileBottomNav from "../../components/mobile/bottomnavigation/MobileBottomNav";
import MobileAppbarTop from "../../components/useradmin/appbartop/MobileAppbarTop";

const UserAdminView = ({ children }: any) => {
  const location: any = useLocation();
  const [collapse, setCollapse] = useState(true);

  const onlyHeight = useWindowHeight();
  const matches = useMediaQuery("(min-width:900px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Box
      sx={{
        backgroundColor: matches === true ? "#01061A" : "#01061A",
        height: "auto",
        width: "100%",
      }}
      pb={10}
    >
      {matches === true ? (
        //  <NotificationBar />
        <div></div>
      ) : (
        <MobileAppbarTop />
      )}

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
          width={
            matches === true ? (collapse === false ? "80%" : "95%") : "100%"
          }
          sx={{ transition: "all .5s" }}
          height="100%"
        >
          <Box px={matches === true ? 4 : 1.5} height="auto">
            {children}
          </Box>
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
