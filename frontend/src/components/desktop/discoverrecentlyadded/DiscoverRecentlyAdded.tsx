import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import DiscoverAirDropMultiSlider from "../discovermultislider/DiscoverAirDropMultiSlider";
import DiscoverCryptoCardMultiSlider from "../discovermultislider/DiscoverCryptoCardMultiSlider";
import DiscoverEventsMultiSlider from "../discovermultislider/DiscoverEventsMultiSlider";
import DiscoverNftMultiSlider from "../discovermultislider/DiscoverNftMultiSlider";

const DiscoverRecentlyAdded = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Recently Added
        </Typography>
      </Grid>
      <Grid item xs={12} py={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Crypto Currencies
          </Typography>
        </Grid>

        <DiscoverCryptoCardMultiSlider />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            AirDrops
          </Typography>
        </Grid>

        <DiscoverAirDropMultiSlider />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Events
          </Typography>
        </Grid>

        <DiscoverEventsMultiSlider />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            NFT's
          </Typography>
        </Grid>

        <DiscoverNftMultiSlider />
      </Grid>
    </Grid>
  );
};

export default DiscoverRecentlyAdded;
