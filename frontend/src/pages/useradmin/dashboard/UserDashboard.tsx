import { Grid, Stack, Typography } from "@mui/material";
import MultiSlider from "../../../components/useradmin/multislider/MultiSlider";
import UserAdminTabs from "../../../components/useradmin/useradmintabs/UserAdminTabs";

const UserDashboard = () => {
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <MultiSlider />
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row">
          <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
            <span>Good Evening,</span>{" "}
            <span style={{ fontWeight: 600 }}>Alexander Jacob</span>
          </Typography>
          <Typography variant="caption" sx={{ color: "#57546C" }}></Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} py={3}>
        <UserAdminTabs />
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
