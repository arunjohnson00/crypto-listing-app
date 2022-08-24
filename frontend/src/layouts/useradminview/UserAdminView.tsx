import { useState } from "react";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import NotificationBar from "../../components/useradmin/notificationbar/NotificationBar";
import UserAdminSideBar from "../../components/useradmin/useradminsidebar/UserAdminSideBar";
import UserAdminMobileBottomNav from "../../components/useradmin/bottomnavigation/UserAdminMobileBottomNav";

const UserAdminView = ({ children }: any) => {
  const [collapse, setCollapse] = useState(false);
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        backgroundColor: "#161234",
        height: "-webkit-fill-available",
        width: "100%",
      }}
    >
      <NotificationBar />
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
          width={matches === true || collapse === false ? "80%" : "100%"}
          sx={{ transition: "all .5s" }}
        >
          <Box pl={3} pr={2}>
            {children}
          </Box>
        </Box>

        {matches === false && <UserAdminMobileBottomNav />}
      </Stack>
    </Box>
  );
};

export default UserAdminView;
