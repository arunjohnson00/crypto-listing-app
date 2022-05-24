import { Grid, Box, Stack } from "@mui/material";
import NotificationBar from "../../components/useradmin/notificationbar/NotificationBar";
import UserAdminSideBar from "../../components/useradmin/useradminsidebar/UserAdminSideBar";

const UserAdminView = ({ children }: any) => {
  return (
    <Grid xs={12} sx={{ backgroundColor: "#161234", height: "100vh" }}>
      <NotificationBar />
      <Stack direction="row">
        <UserAdminSideBar />
        <Grid xs={12}>
          <Box px={5} py={5}>
            {children}
          </Box>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default UserAdminView;
