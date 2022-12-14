import { Fragment, useState, useEffect } from "react";
import { Divider, Grid, Stack, Typography, Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import dateFormat, { masks } from "dateformat";

import DiscoverVerticalTab from "../../../components/desktop/discoververticaltab/DiscoverVerticalTab";

import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import FearAndGreedcard from "../../../components/desktop/cards/fearandgreedcard/FearAndGreedcard";
import MobileDiscoverHorizontalTab from "../../../components/mobile/discoverhorizontaltab/MobileDiscoverHorizontalTab";
import { Helmet } from "react-helmet-async";

const MobileDiscoverPage = () => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Helmet>
        <title>Discover | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Discover | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Grid container rowSpacing={3}>
        {/* <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid> */}

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={0.5} mt={1}>
          <Stack direction="column" spacing={0.5}>
            {/* <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
              Monitor
            </Typography> */}
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={2}
              justifyContent="space-between"
            >
              {/* <Box height={{ xs: "auto", sm: "auto", md: 50 }}>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  spacing={2}
                  alignItems="center"
                >
                  <Stack direction="row" spacing={0.4}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: "bold" }}
                    >
                      BTC
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#27CFDF", fontWeight: 500 }}
                    >
                      $59,839.16
                    </Typography>
                  </Stack>

                  <Divider
                    variant="middle"
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderRightColor: "#1A1D23",
                      borderRightWidth: 2,
                    }}
                  />

                  <Stack direction="row" spacing={0.4}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: "bold" }}
                    >
                      BTC
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#27CFDF", fontWeight: 500 }}
                    >
                      $59,839.16
                    </Typography>
                  </Stack>

                  <Divider
                    variant="middle"
                    orientation="vertical"
                    flexItem
                    sx={{
                      borderRightColor: "#1A1D23",
                      borderRightWidth: 2,
                    }}
                  />
                </Stack>
              </Box> */}
              <Stack
                direction="column"
                spacing={0}
                alignItems={{
                  md: "flex-start",
                }}
              >
                <Stack
                  direction="column"
                  spacing={0.5}
                  pt={0}
                  alignItems="flex-start"
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#FFFFF5", fontWeight: "bold" }}
                  >
                    Discover
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#FFFFF5", fontWeight: 500 }}
                  >
                    What happening here?
                  </Typography>

                  <Stack direction="row" spacing={1.5}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 500 }}
                    >
                      {dateFormat(new Date(), "dd mmmm yyyy")}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#C3E978", fontWeight: 600 }}
                    >
                      {dateFormat(new Date(), "hh.MM TT")}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <MobileDiscoverHorizontalTab />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileDiscoverPage;
