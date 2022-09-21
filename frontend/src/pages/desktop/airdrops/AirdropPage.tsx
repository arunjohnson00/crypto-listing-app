import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography } from "@mui/material";

import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import AirdropCard from "../../../components/desktop/cards/airdropcard/AirdropCard";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const AirdropPage = () => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          {/* <Stack
            direction="row"
            spacing={1}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "0px",
              paddingBottom: "0px",

              alignItems: "center",
            }}
          >
            <CoinSlider />
          </Stack> */}
        </Grid>
        <Grid item xs={12} pt={3}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Crypto Airdrops
            </Typography>
            <Typography variant="body2" sx={{ color: "#CDCED1" }}>
              Participate in our crypto airdrops
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container pt={6} spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <AirdropCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AirdropPage;
