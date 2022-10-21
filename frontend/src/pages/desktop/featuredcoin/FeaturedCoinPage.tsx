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
  Link,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import moment from "moment";
import ReactPlayer from "react-player";
import useMediaQuery from "@mui/material/useMediaQuery";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { featuredCoinListRequest } from "../../../store/action";
import FeaturedCoinCards from "../../../components/desktop/cards/featuredcoin/FeaturedCoinCards";
import MobileFeaturedCoinCards from "../../../components/mobile/cards/featuredcoin/MobileFeaturedCoinCards";
import { Helmet } from "react-helmet";

const FeaturedCoinPage = () => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <title>Featured Coin | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Featured Coin | CoinXhigh.com" />
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
        {/* <Grid item xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={1}>
          <BreadCrumbs
            // data={airdropSinglePageDetails && airdropSinglePageDetails?.data}
            home="Home"
            path="Featured Coin"
          />
        </Grid>
        <Grid item xs={12} pt={3}>
          <Stack direction="column" spacing={0.1}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Featured Coin
            </Typography>
            {/* <Typography variant="caption" sx={{ color: "#CDCED1" }}>
              A unique collection of master ....
            </Typography> */}
          </Stack>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {featuredCoinList &&
              featuredCoinList?.map((data: any, index: number) => (
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} mt={0}>
                  <Box key={index}>
                    {xsBreakPoint === true ? (
                      <FeaturedCoinCards cardData={data} />
                    ) : (
                      <MobileFeaturedCoinCards cardData={data} />
                    )}
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FeaturedCoinPage;
