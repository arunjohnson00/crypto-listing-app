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
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const NftListingsPage = () => {
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
        <Grid xs={12} pt={6}>
          <Stack direction="column" spacing={0.1}>
            <Typography variant="h4" sx={{ color: "#53EAC3" }}>
              NFT Listings
            </Typography>
            <Typography variant="caption" sx={{ color: "#CDCED1" }}>
              A unique collection of master ....
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={12} pt={3}>
          <Stack direction="column" spacing={0.1}>
            <SponsoredBtn title="Sponsored NFT's" width={240} />
          </Stack>

          <Grid
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "26px",
              paddingBottom: "23px",
            }}
          >
            <Carousel
              // centerMode={true}
              responsive={responsiveNFT}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={true}
              swipeable={true}
              partialVisible={true}
              autoPlay={true}
              draggable={true}
            >
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
            </Carousel>
          </Grid>
        </Grid>

        <Grid xs={12} pt={3}>
          <CardMedia
            component="img"
            height="105"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Grid>
        <Grid xs={12} pt={3}>
          <NftTab />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NftListingsPage;
