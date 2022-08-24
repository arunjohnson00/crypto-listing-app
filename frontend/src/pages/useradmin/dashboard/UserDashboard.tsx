import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import MultiSlider from "../../../components/useradmin/multislider/MultiSlider";
import UserAdminTabs from "../../../components/useradmin/useradmintabs/UserAdminTabs";

const UserDashboard = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box width="100%" my={6}>
          <MultiSlider />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#FFFFF5", fontSize: "1rem" }}
          >
            <span>Good Evening,</span>{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#FFFFF5", fontSize: "1.2rem" }}
          >
            {" "}
            Alexander Jacob
          </Typography>
        </Stack>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8} py={3}>
          <UserAdminTabs />
        </Grid>
        <Grid item xs={4} py={3}>
          <Box
            sx={{
              flexGrow: 1,
              height: "500px",

              background: "linear-gradient(145deg, #2569E6 50%, #25E695 100%)",
            }}
            mt={8}
          >
            <CardMedia
              component="img"
              height="500"
              image="https://iili.io/UtYAiJ.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
