import { Fragment, useState, useEffect } from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";

import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import dateFormat, { masks } from "dateformat";
import DiscoverVerticalTab from "../../../components/desktop/discoververticaltab/DiscoverVerticalTab";

const DiscoverPage = () => {
  const [date, setDate] = useState<any>(new Date());

  const { parse } = require("rss-to-json");
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();

  useEffect(() => {
    (async () => {
      var rss = await parse("https://news.coinxhigh.com/feed/");

      setFeed(rss);
    })();
  }, [parse]);
  return (
    <Fragment>
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
        }}
      >
        <Grid xs={12} sx={{ paddingTop: 3 }}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              borderTop: "1px solid #1a1545",
              borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#04091d",
              alignItems: "center",
            }}
          >
            <Grid xs={4} sm={4} md={3} lg={2} xl={2}>
              <LatestNewsHeading />
            </Grid>
            <Grid xs={8} sm={8} md={9} lg={10} xl={10}>
              <Stack direction="row" spacing={3}>
                <Marquee
                  style={{ background: "none" }}
                  pauseOnHover={true}
                  gradient={false}
                  loop={0}
                  delay={0}
                  speed={70}
                >
                  {feed?.items?.map((rssFeed: any, index: number) => {
                    return (
                      <NewsCardTop
                        rssFeed={rssFeed}
                        timeAgo={timeAgo}
                        key={index}
                      />
                    );
                  })}
                </Marquee>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
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
          </Stack>
        </Grid>

        <Grid container pt={1.5} spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={0.5}>
            <Stack direction="column" spacing={0.5}>
              <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                Monitor
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Stack direction="row" spacing={3} alignItems="center">
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
                    sx={{ borderRightColor: "#1A1D23", borderRightWidth: 2 }}
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
                    sx={{ borderRightColor: "#1A1D23", borderRightWidth: 2 }}
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
                    sx={{ borderRightColor: "#1A1D23", borderRightWidth: 2 }}
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
                    sx={{ borderRightColor: "#1A1D23", borderRightWidth: 2 }}
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
                </Stack>
                <Stack direction="column" spacing={0} alignItems="flex-end">
                  <Typography
                    variant="body2"
                    sx={{ color: "#FFFFF5", fontWeight: 500 }}
                  >
                    Market is{" "}
                    <span style={{ color: "#FF2B31" }}>Extreme Fear</span>
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFFFF5", fontWeight: 500 }}
                  >
                    <span style={{ color: "#FF2B31" }}>42</span>/100
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid container pt={1.5} spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} px={0.5}>
            <Stack direction="column" spacing={0.5}>
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
          </Grid>
        </Grid>
        <Grid container pt={8} spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <DiscoverVerticalTab />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DiscoverPage;
