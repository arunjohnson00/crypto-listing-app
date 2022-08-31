import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Box, CardMedia } from "@mui/material";

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
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const PresaleListPage = ({ windowInnerWidth }: any) => {
  const responsiveNFT: any = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
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
        {/* <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "23px",
            paddingBottom: "23px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            spacing={2}
            alignItems={{ xs: "center" }}
          >
            <Grid
              xs={12}
              sm={12}
              md={12}
              lg={1}
              xl={1}
              sx={{
                alignItems: "center",
              }}
            >
              <Stack
                direction="column"
                sx={{ alignItems: "center" }}
                py={windowInnerWidth >= 1200 ? 0 : 3}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    writingMode: `${
                      windowInnerWidth &&
                      windowInnerWidth >= 1200 &&
                      "vertical-lr"
                    }`,
                    textOrientation: `${
                      windowInnerWidth && windowInnerWidth >= 1200 && "mixed"
                    }`,
                    transform: `${
                      windowInnerWidth &&
                      windowInnerWidth >= 1200 &&
                      "rotate(180deg)"
                    }`,
                  }}
                >
                  Featured Coins
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={11} xl={11}>
              <Grid container>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Grid> */}
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
              paddingTop: "0px",
              paddingBottom: "23px",
            }}
          >
            <Grid item xs={12} sm={6} md={8} lg={8} xl={8} mb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} mb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h5" color="#FFFFFF">
              Current Presales
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <PresaleFilterButtonGroup />
          </Grid>
        </Grid>

        <Grid container spacing={2} py={3}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PresaleCards />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PresaleCards />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PresaleCards />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PresaleCards />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PresaleCards />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <PresaleCards />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid xs={12} mt={7}>
        <Grid container spacing={5}>
          <Box
            sx={{
              backgroundColor: "#03091d",
              flexGrow: 1,
              overflowX: "hidden",
            }}
            padding={1.5}
          >
            <Grid xs={12} pt={2}>
              <TableButtonGroup />
            </Grid>
            <Grid xs={12}>
              <ListingTable />
            </Grid>
          </Box>
        </Grid>
      </Grid> */}
    </Fragment>
  );
};

export default PresaleListPage;
