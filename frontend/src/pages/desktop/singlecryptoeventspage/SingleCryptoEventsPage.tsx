import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography } from "@mui/material";

import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import AirdropCard from "../../../components/desktop/cards/airdropcard/AirdropCard";
import EventViewCard from "../../../components/desktop/cards/eventviewcard/EventViewCard";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const SingleCryptoEventsPage = () => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>

        <Grid container pt={6} spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <EventViewCard viewcoin={true} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleCryptoEventsPage;
