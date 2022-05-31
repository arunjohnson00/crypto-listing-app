import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import DiscoverMultiSlider from "../discovermultislider/DiscoverMultiSlider";

const DiscoverRecentlyAdded = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Recently Added
        </Typography>
      </Grid>
      <Grid item xs={12} py={2.5}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#29D392" }}
          >
            Crypto Currencies
          </Typography>
        </Grid>

        <DiscoverMultiSlider />
      </Grid>
    </Grid>
  );
};

export default DiscoverRecentlyAdded;
