import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import DiscoverLatestAirDrops from "../discoverlatestairdrops/DiscoverLatestAirDrops";
import DiscoverLatestAma from "../discoverlatestama/DiscoverLatestAma";
import DiscoverLatestCoinPresale from "../discoverlatestcoinpresale/DiscoverLatestCoinPresale";
import DiscoverLatestEvents from "../discoverlatestevents/DiscoverLatestEvents";
import DiscoverLatestGaindLosers from "../discoverlatestgainandlosers/DiscoverLatestGaindLosers";
import DiscoverLatestNews from "../discoverlatestnews/DiscoverLatestNews";
import DiscoverLatestNft from "../discoverlatestnft/DiscoverLatestNft";

const DiscoverLatest = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Latest
        </Typography>
      </Grid>
      <Grid item xs={12} py={2.5}>
        <DiscoverLatestCoinPresale />

        <DiscoverLatestNews />
        <DiscoverLatestGaindLosers />
        <DiscoverLatestAirDrops />
        <DiscoverLatestEvents />
        <DiscoverLatestAma />
        {/* <DiscoverLatestNft /> */}
      </Grid>
    </Grid>
  );
};

export default DiscoverLatest;
