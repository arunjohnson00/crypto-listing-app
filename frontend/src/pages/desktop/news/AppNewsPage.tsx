import { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
// import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import date from "date-and-time";

import CardNewsPage from "../../../components/desktop/cards/cardnews/CardNewsPage";

import NewsCardNewsPage from "../../../components/desktop/cards/newscardnewspage/NewsCardNewsPage";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { latestNewsRequest } from "../../../store/action";
import { wrap } from "module";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { Helmet } from "react-helmet";

const AppNewsPage = () => {
  const theme = useTheme();
  const now = new Date();
  const dispatch: any = useDispatch();

  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  // TimeAgo.addDefaultLocale(en);
  // const timeAgo = new TimeAgo("en");

  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news_feed?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(latestNewsRequest({ count: 51 }, successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <title>News | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="News | CoinXhigh.com" />
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
      <Grid container rowSpacing={4}>
        <Grid item xs={12} mt={{ xs: 0.5, sm: 0.5, md: 5 }}>
          <BreadCrumbs home="Home" path="News" />
        </Grid>
        {/* <Grid xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid> */}
        {/* <Grid
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
        </Grid> */}
        <Grid item xs={12}>
          <Stack direction="column" spacing={0} sx={{ alignItems: "left" }}>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFF5", fontWeight: 900, textAlign: "left" }}
            >
              LATEST NEWS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#c5c51c",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
            >
              {date.format(now, "DD MMM YYYY - dddd hh:mm A")}
            </Typography>
            {/* <Typography
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
              </Typography> */}
          </Stack>
        </Grid>
        {latestNews && (
          <Grid container pt={7}>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              px={{ xs: 0, sm: 0, md: 2 }}
            >
              <CardNewsPage
                rssFeed={latestNews && latestNews[0]}
                height={xsBreakPoint ? "auto" : 363}
                spacing={1}
                paddingY={7}
                descriptionLength={500}
                index={1}
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
              <Stack direction="column" spacing={3}>
                <CardNewsPage
                  rssFeed={latestNews && latestNews[1]}
                  height={xsBreakPoint ? "auto" : 181}
                  spacing={0.5}
                  paddingY={2}
                  descriptionLength={200}
                  index={2}
                />
                <CardNewsPage
                  rssFeed={latestNews && latestNews[2]}
                  height={xsBreakPoint ? "auto" : 181}
                  spacing={0.5}
                  paddingY={2}
                  descriptionLength={200}
                  index={3}
                />
              </Stack>
            </Grid>
          </Grid>
        )}
        <Box
          sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          my={8}
        >
          {latestNews &&
            latestNews?.slice(3).map((rssFeed: any, index: number) => {
              return (
                <NewsCardNewsPage
                  rssFeed={rssFeed}
                  index={index + 4}
                  key={index}
                />
              );
            })}
        </Box>
      </Grid>
    </Fragment>
  );
};

export default AppNewsPage;
