import { Grid, Box, Stack } from "@mui/material";
import NotificationBar from "../../components/useradmin/notificationbar/NotificationBar";
import UserAdminSideBar from "../../components/useradmin/useradminsidebar/UserAdminSideBar";

const UserAdminView = ({ children }: any) => {
  return (
    <Box sx={{ backgroundColor: "#161234", height: "auto", width: "100%" }}>
      <NotificationBar />
      <Stack direction="row">
        <UserAdminSideBar />

        <Box
          px={3}
          py={0}
          sx={{
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Stack>
    </Box>
  );
};

export default UserAdminView;
