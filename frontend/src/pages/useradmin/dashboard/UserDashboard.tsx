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
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#FFFFF5", fontSize: "1.1rem" }}
          >
            <span>Good Evening,</span>{" "}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#FFFFF5" }}>
            {" "}
            Alexander Jacob
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} py={3}>
        <UserAdminTabs />
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
