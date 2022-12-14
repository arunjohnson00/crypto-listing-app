import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Box, CardMedia, Avatar } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedCoinCards from "../../../components/desktop/cards/featuredcoin/FeaturedCoinCards";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListingTable from "../../../components/desktop/listingtable/ListingTable";
import TableButtonGroup from "../../../components/desktop/listingtable/tablebuttongroup/TableButtonGroup";
import PresaleFilterButtonGroup from "../../../components/desktop/buttongroup/presalefilterbuttongroup/PresaleFilterButtonGroup";
import PresaleCards from "../../../components/desktop/cards/presalecard/PresaleCards";
import LeaderBoardCard from "../../../components/desktop/cards/leaderboardcard/LeaderBoardCard";
import LeaderBoardMostVotedCard from "../../../components/desktop/cards/leaderboardmostvotedcard/LeaderBoardMostVotedCard";
import LeaderBoardMostVotedCryptoCurrencyCard from "../../../components/desktop/cards/leaderboardmostvotedcryptocurrencycard/LeaderBoardMostVotedCryptoCurrencyCard";
import LeaderBoardHtmlTable from "../../../components/desktop/leaderboardhtmltable/LeaderBoardHtmlTable";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { Helmet } from "react-helmet-async";

const LeaderBoardPage = ({ windowInnerWidth }: any) => {
  const responsiveLeaderBoard: any = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Helmet>
        <title>Leader Board | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Leader Board   | CoinXhigh.com" />
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
      <Grid container>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} py={2}>
          <Stack direction="row" spacing={1}>
            {" "}
            <Typography variant="h5" color="#FFFFFF" sx={{ fontWeight: 600 }}>
              Leader Board
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <Carousel
            // centerMode={true}
            responsive={responsiveLeaderBoard}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            swipeable={true}
            partialVisible={true}
            autoPlay={true}
            draggable={true}
          >
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
          </Carousel>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <Grid container>
            <Grid xs={12} sm={12} md={12} lg={7} xl={7}>
              {" "}
              <LeaderBoardMostVotedCard windowInnerWidth={windowInnerWidth} />
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
              <LeaderBoardMostVotedCryptoCurrencyCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
          py={2}
        >
          <LeaderBoardHtmlTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LeaderBoardPage;
