import { Grid, Box, Stack, Divider, Typography } from "@mui/material";

import MobileDiscoverNftMultiSlider from "../discovermultislider/MobileDiscoverNftMultiSlider";
import MobileDiscoverEventsMultiSlider from "../discovermultislider/MobileDiscoverEventsMultiSlider";
import MobileDiscoverAirDropMultiSlider from "../discovermultislider/MobileDiscoverAirDropMultiSlider";
import MobileDiscoverCryptoCardMultiSlider from "../discovermultislider/MobileDiscoverCryptoCardMultiSlider";

const MobileDiscoverTrending = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Trending
        </Typography>
      </Grid>
      <Grid item xs={12} py={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Trending Cryptos
          </Typography>
        </Grid>

        <MobileDiscoverCryptoCardMultiSlider />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Trending AirDrops
          </Typography>
        </Grid>

        <MobileDiscoverAirDropMultiSlider />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Trending Events
          </Typography>
        </Grid>

        <MobileDiscoverEventsMultiSlider />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Trending NFT's
          </Typography>
        </Grid>

        <MobileDiscoverNftMultiSlider />
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverTrending;
