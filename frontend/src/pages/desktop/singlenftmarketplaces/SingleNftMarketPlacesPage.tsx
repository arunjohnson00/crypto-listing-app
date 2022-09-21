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
import SponsoredBtn from "../../../components/desktop/button/sponsoredbutton/SponsoredBtn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NftCollectionCard from "../../../components/desktop/cards/nftcollection/NftCollectionCard";
import NftTab from "../../../components/desktop/nfttab/NftTab";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import SingleNFTMarketPlaceHeader from "../../../components/desktop/singlenftmarketplaeheader/SingleNFTMarketPlaceHeader";
import SingleNftMarketplaceTab from "../../../components/desktop/singlenftmarketplacetab/SingleNftMarketplaceTab";
import NFTMarketPlaceSimilarAppCard from "../../../components/desktop/cards/nftmarketplacesimilarappcard/NFTMarketPlaceSimilarAppCard";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const SingleNftMarketPlacesPage = () => {
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
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "5px",
              paddingBottom: "10px",

              alignItems: "center",
            }}
          >
            <BreadCrumbs
              // data={
              //   coinDetailFirstBlock &&
              //   coinDetailFirstBlock !== undefined &&
              //   coinDetailFirstBlock[0]
              // }
              home="Home"
              path="NFT MarketPlaces"
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <SingleNFTMarketPlaceHeader />
        </Grid>
        <Grid item xs={12}>
          <SingleNftMarketplaceTab />
        </Grid>
        <Grid item xs={12}>
          <NFTMarketPlaceSimilarAppCard />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleNftMarketPlacesPage;
