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
import { useSelector, useDispatch } from "react-redux";
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
import { nftPageListingRequest } from "../../../store/action";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";

const NftListingsPage = () => {
  const dispatch: any = useDispatch();
  const NFTList = useSelector((data: any) => {
    return data?.nftReducer?.nft_listings?.data;
  });

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
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(nftPageListingRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      <Grid container spacing={0}>
        {/* <Grid item xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={3}>
          <BreadCrumbs
            // data={airdropSinglePageDetails && airdropSinglePageDetails?.data}
            home="Home"
            path="Nft"
          />
        </Grid>
        <Grid item xs={12} pt={6}>
          <Stack direction="column" spacing={0.1}>
            <Typography variant="h4" sx={{ color: "#53EAC3" }}>
              NFT Listings
            </Typography>
            <Typography variant="caption" sx={{ color: "#CDCED1" }}>
              A unique collection of master ....
            </Typography>
          </Stack>
        </Grid>
        {/* <Grid item xs={12} pt={3}>
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
            {NFTList && NFTList?.data && (
              <Carousel
                responsive={responsiveNFT}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows={true}
                autoPlay={true}
                draggable={true}
                swipeable={true}
                minimumTouchDrag={10}
                keyBoardControl={true}
                shouldResetAutoplay={false}
              >
                {NFTList &&
                  NFTList?.data?.map((item: any, index: number) => (
                    <Box key={index}>
                      <NftCollectionCard data={item && item} index={index} />
                    </Box>
                  ))}
              </Carousel>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} pt={3}>
          <CardMedia
            component="img"
            height="105"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Grid> */}
        <Grid item xs={12} pt={3}>
          <NftTab />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NftListingsPage;
