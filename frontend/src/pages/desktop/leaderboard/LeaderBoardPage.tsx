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
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
        }}
      >
        <Grid xs={12} sx={{ paddingTop: 3 }}>
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
