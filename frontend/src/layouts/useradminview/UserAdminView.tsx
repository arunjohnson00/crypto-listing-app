import { useState } from "react";
import { Grid, Box, Stack, useMediaQuery } from "@mui/material";
import NotificationBar from "../../components/useradmin/notificationbar/NotificationBar";
import UserAdminSideBar from "../../components/useradmin/useradminsidebar/UserAdminSideBar";

const UserAdminView = ({ children }: any) => {
  const [collapse, setCollapse] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box sx={{ backgroundColor: "#161234", height: "auto", width: "100%" }}>
      <NotificationBar />
      <Stack direction="row">
        {matches === true && (
          <Box
            width={collapse === false ? "20%" : matches === true ? "5%" : "5%"}
            sx={{ transition: "all .5s" }}
          >
            <UserAdminSideBar collapse={collapse} setCollapse={setCollapse} />
          </Box>
        )}
        <Box
          px={3}
          py={0}
          width={collapse === false ? "80%" : matches === true ? "92%" : "95%"}
          sx={{ transition: "all .5s" }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default UserAdminView;
