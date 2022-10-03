import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MobileDiscoverLatestAirDrops from "../discoverlatestairdrops/MobileDiscoverLatestAirDrops";
import MobileDiscoverLatestAma from "../discoverlatestama/MobileDiscoverLatestAma";
import MobileDiscoverLatestCoinPresale from "../discoverlatestcoinpresale/MobileDiscoverLatestCoinPresale";
import MobileDiscoverLatestEvents from "../discoverlatestevents/MobileDiscoverLatestEvents";
import MobileDiscoverLatestGaindLosers from "../discoverlatestgainandlosers/MobileDiscoverLatestGaindLosers";
import MobileDiscoverLatestNews from "../discoverlatestnews/MobileDiscoverLatestNews";

const MobileDiscoverLatest = () => {
  return (
    <Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#FFFFF5" }}>
          Latest
        </Typography>
      </Grid>
      <Grid item xs={12} py={2.5}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
        >
          <MobileDiscoverLatestCoinPresale />

          <MobileDiscoverLatestNews />
          <MobileDiscoverLatestGaindLosers />
          <MobileDiscoverLatestAirDrops />
          <MobileDiscoverLatestEvents />
          <MobileDiscoverLatestAma />
          {/* <DiscoverLatestNft /> */}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverLatest;
