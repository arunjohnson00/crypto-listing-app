import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  CardMedia,
  Button,
  Typography,
  Divider,
  Box,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import date from "date-and-time";

import CardNewsPage from "../../../components/desktop/cards/cardnews/CardNewsPage";
import NewsCard from "../../../components/desktop/cards/newscard/NewsCard";
import NewsCardNewsPage from "../../../components/desktop/cards/newscardnewspage/NewsCardNewsPage";

const AppNewsPage = () => {
  const theme = useTheme();
  const now = new Date();

  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));
  const { parse } = require("rss-to-json");

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();
  //console.log(feed?.items[0]);
  useEffect(() => {
    (async () => {
      var rss = await parse(
        "https://cors-anywhere.herokuapp.com/https://news.coinxhigh.com/feed/"
      );

      setFeed(rss);
    })();
  }, []);
  return (
    <Fragment>
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
        }}
      >
        {" "}
        <Grid xs={12} sx={{ paddingTop: 3 }}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              borderTop: "1px solid #1a1545",
              borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "0px",
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
        <Grid container xs={12}>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            pt={6}
            px={{ xs: 0, sm: 0, md: 23 }}
          >
            <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
              <Typography
                variant="h3"
                sx={{ color: "#FFFFF5", fontWeight: 900, textAlign: "center" }}
              >
                COINXHIGH NEWS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFFF5",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                {date.format(now, "DD MMM YYYY - dddd hh:mm A")}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#00FF88",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  // fontSize: 18,
                  textAlign: "center",
                }}
                pt={1}
              >
                Coin high brings you news in 11 languages from more than 100
                biggest crypto media platforms. Subscribe to our Telegram
                channel for 24/7 access to latest information on
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#CACCCE",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  //fontSize: 18,
                  textAlign: "center",
                }}
              >
                Conhigh allows you to stay on top of all crypto-related news, in
                just one place. News Aggregater brings you news in languages
                from more than 100 biggest crypto medio proforubcribe to our
                Telegram channel for 24/7 access to latest information on crypto
                and blockchain
              </Typography>
            </Stack>
          </Grid>
          <Grid container xs={12} pt={8}>
            <Grid
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              px={{ xs: 0, sm: 0, md: 2 }}
            >
              <CardNewsPage
                rssFeed={feed?.items[0]}
                timeAgo={timeAgo}
                height={xsBreakPoint ? "auto" : 363}
                spacing={4}
                paddingY={7}
                descriptionLength={300}
              />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={7}
              lg={7}
              xl={7}
              px={{ xs: 0, sm: 0, md: 2 }}
            >
              <Stack direction="column" spacing={6}>
                <CardNewsPage
                  rssFeed={feed?.items[1]}
                  timeAgo={timeAgo}
                  height={xsBreakPoint ? "auto" : 181}
                  spacing={2}
                  paddingY={2}
                  descriptionLength={200}
                />
                <CardNewsPage
                  rssFeed={feed?.items[2]}
                  timeAgo={timeAgo}
                  height={xsBreakPoint ? "auto" : 181}
                  spacing={2}
                  paddingY={2}
                  descriptionLength={200}
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            pt={1}
            px={{ xs: 0, sm: 0, md: 0 }}
          >
            {feed?.items?.slice(3).map((rssFeed: any, index: number) => {
              return (
                <Grid
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  pt={5}
                  px={{ xs: 0, sm: 0, md: 0 }}
                  key={index}
                >
                  <NewsCardNewsPage rssFeed={rssFeed} timeAgo={timeAgo} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AppNewsPage;
