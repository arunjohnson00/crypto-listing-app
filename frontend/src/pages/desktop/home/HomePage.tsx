import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
  Skeleton,
  CircularProgress,
  Backdrop,
  LinearProgress,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import { Preloader, Oval, ThreeDots } from "react-preloader-icon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import VideoCard from "../../../components/desktop/cards/videocard/VideoCard";
import HighlightCards from "../../../components/desktop/cards/highlight/HighlightCards";
import FeaturedCoinCards from "../../../components/desktop/cards/featuredcoin/FeaturedCoinCards";
import TableBtnGroup from "../../../components/desktop/buttongroup/tablebtngroup/TableBtnGroup";
import TableFilterBtn from "../../../components/desktop/buttongroup/tablefilterbtn/TableFilterBtn";
import HtmlTable from "../../../components/desktop/htmltable/HtmlTable";
import ViewMoreBtn from "../../../components/desktop/button/viewmorebtn/ViewMoreBtn";
import NftCollectionCard from "../../../components/desktop/cards/nftcollection/NftCollectionCard";
import NewsCard from "../../../components/desktop/cards/newscard/NewsCard";
import AdsCardHome from "../../../components/desktop/cards/adscard/AdsCardHome";
import CardDeal from "../../../components/desktop/banner/carddeal/CardDeal";
import BannerCardsHome from "../../../components/desktop/banner/bannercardshome/BannerCardsHome";
import BannerMap from "../../../components/desktop/banner/bannermap/BannerMap";
import TrendingCoins from "../../../components/desktop/cards/trendingcoins/TrendingCoins";

import todaysPerformerIcon from "../../../assets/home/todays_performer_icon.png";
import recentlyAddedIcon from "../../../assets/home/recently_added_icon.png";
import biggestLosersIcon from "../../../assets/home/biggest_losers_icon.png";
import biggestGainersIcon from "../../../assets/home/biggest_gainers_icon.png";
import FeaturedCoinLineTopImage from "../../../assets/home/feature-coin-line-top.png";
import FeaturedCoinLineBottomImage from "../../../assets/home/feature-coin-line-bottom.png";
import FeaturedCoinLineLeftImage from "../../../assets/home/feature-coin-line-left.png";
import FeaturedCoinLineRightImage from "../../../assets/home/feature-coin-line-right.png";
import {
  recentlyAddedRequest,
  biggestGainersRequest,
  biggestLosersRequest,
  featuredCoinListRequest,
  cryptoCurrenciesListRequest,
  cryptoCurrenciesTodaysBestRequest,
  cryptoCurrenciesNewRequest,
  cryptoCurrenciesPresaleRequest,
  nftListingRequest,
  menuCardRequest,
  videoListRequest,
  trendingCoinListRequest,
  eventListRequest,
} from "../../../store/action";
import { tableHeader } from "./helper";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import LatestNewsCardScroll from "../../../components/desktop/latestnews/LatestNewsCardScroll";
import CryptoEventsCardSlider from "../../../components/desktop/cards/cryptoeventscardslider/CryptoEventsCardSlider";

import TelegramGraphImage from "../../../assets/singlepagecoin/graph/telegram.png";
import FearAndGreedcard from "../../../components/desktop/cards/fearandgreedcard/FearAndGreedcard";

const responsiveNFTCollections = {
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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsiveCryptoEvents = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsiveTrendingCoins = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveVideo = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveHighlights = {
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
    breakpoint: { max: 1200, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = ({ windowInnerWidth }: any) => {
  const dispatch: any = useDispatch();
  // TimeAgo.addDefaultLocale(en);
  // const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();
  const [tableData, setTableData] = useState<any>();

  const [preLoader, setPreLoader] = useState<any>(false);

  const [htmlTablePreLoader, setHTMLTablePreLoader] = useState<any>({
    html_table: true,
  });

  const featuredCoinSkelton = [1, 2, 3, 4, 5, 6, 7, 8];
  const recentlyAdded = useSelector((data: any) => {
    return data?.homeReducer?.recently_added?.data;
  });

  const biggestGainers = useSelector((data: any) => {
    return data?.homeReducer?.biggest_gainers?.data;
  });

  const biggestloosers = useSelector((data: any) => {
    return data?.homeReducer?.biggest_loosers?.data;
  });

  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });

  const videoList = useSelector((data: any) => {
    return data?.homeReducer?.video_list?.data?.data;
  });

  const trendingCoinList = useSelector((data: any) => {
    return data?.homeReducer?.trending_coin_list?.data;
  });

  const NFTList = useSelector((data: any) => {
    return data?.homeReducer?.nft_listings?.data;
  });

  const eventList = useSelector((data: any) => {
    return data?.homeReducer?.events_list?.data;
  });
  const tabIndex = useSelector((data: any) => {
    return data?.homeReducer?.crypto_currencies_tab;
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      setPreLoader(false);
    };
    const errorHandler = (err: any) => {};
    setPreLoader(true);
    dispatch(recentlyAddedRequest("noData", successHandler, errorHandler));
    dispatch(biggestGainersRequest("noData", successHandler, errorHandler));
    dispatch(biggestLosersRequest("noData", successHandler, errorHandler));
    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
    dispatch(nftListingRequest("noData", successHandler, errorHandler));
    dispatch(menuCardRequest("noData", successHandler, errorHandler));
    dispatch(videoListRequest("noData", successHandler, errorHandler));
    dispatch(trendingCoinListRequest("noData", successHandler, errorHandler));
    dispatch(eventListRequest("noData", successHandler, errorHandler));
  }, [dispatch, setPreLoader]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
      setPreLoader(false);
    };
    const errorHandler = (err: any) => {};
    setPreLoader(true);
    tabIndex === 0 &&
      dispatch(
        cryptoCurrenciesListRequest("noData", successHandler, errorHandler)
      );
    tabIndex === 2 &&
      dispatch(
        cryptoCurrenciesTodaysBestRequest(
          "noData",
          successHandler,
          errorHandler
        )
      );
    tabIndex === 4 &&
      dispatch(recentlyAddedRequest("noData", successHandler, errorHandler));
    tabIndex === 6 &&
      dispatch(
        cryptoCurrenciesPresaleRequest("noData", successHandler, errorHandler)
      );
  }, [dispatch, tabIndex, setHTMLTablePreLoader]);

  return (
    <Fragment>
      <Grid container rowSpacing={2}>
        <Backdrop
          sx={{ color: "#1dffc0", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={preLoader}
        >
          <CircularProgress color="inherit" />
          {/* <Preloader
            use={ThreeDots}
            size={32}
            strokeWidth={8}
            strokeColor="#F0AD4E"
            duration={800}
          /> */}
        </Backdrop>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>

        {/* <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
              <CardMedia
                component="img"
                height="95"
                image="https://iili.io/UtYAiJ.jpg"
                alt="green iguana"
                sx={{ objectFit: "unset", borderRadius: 3 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <CardMedia
                component="img"
                height="95"
                image="https://iili.io/UtYuVa.jpg"
                alt="green iguana"
                sx={{ objectFit: "unset", borderRadius: 3 }}
              />
            </Grid>
          </Stack>
        </Grid> */}

        <Grid item xs={12}>
          <Stack direction="row" spacing={3} alignItems="center" pt={0}>
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Videos
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} pt={0.7}>
            <Grid item xs={9.5}>
              {" "}
              {videoList && (
                <Carousel
                  responsive={responsiveVideo}
                  infinite={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  arrows={false}
                  draggable={true}
                  swipeable={true}
                  autoPlay={true}
                  minimumTouchDrag={10}
                  keyBoardControl={true}
                  shouldResetAutoplay={false}
                >
                  {videoList &&
                    videoList?.map((item: any, index: number) => (
                      <Box key={index}>
                        <VideoCard
                          url={item?.v_url}
                          title={item?.v_title}
                          sub_title={item?.v_sub_title}
                        />
                      </Box>
                    ))}
                </Carousel>
              )}
            </Grid>
            <Grid
              item
              xs={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FearAndGreedcard width={"85%"} size="small" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" spacing={3} alignItems="center">
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Highlights
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Carousel
            responsive={responsiveHighlights}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            autoPlay={false}
            draggable={false}
            swipeable={false}
            minimumTouchDrag={10}
            keyBoardControl={false}
            shouldResetAutoplay={false}
          >
            <Box>
              {
                <HighlightCards
                  title="Biggest Gainers"
                  cardData={biggestGainers}
                  icon={biggestGainersIcon}
                />
              }
            </Box>
            <Box>
              {
                <HighlightCards
                  title="Top Losers"
                  cardData={biggestloosers}
                  icon={biggestLosersIcon}
                />
              }
            </Box>

            <Box>
              {
                <HighlightCards
                  title="Recently Added"
                  cardData={recentlyAdded}
                  icon={recentlyAddedIcon}
                />
              }
            </Box>
            {/* <Box>
              {preLoader?.todays_performer === true ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#010822",
                    color: "#3D484F",
                    height: 180,
                  }}
                  px={2}
                  pb={3}
                  pt={2}
                  m={1}
                >
                  <CircularProgress color="inherit" />
                </Box>
              ) : (
                <HighlightCards
                  title="Todays Performer"
                  cardData=""
                  icon={todaysPerformerIcon}
                />
              )}
            </Box> */}
          </Carousel>
        </Grid>

        <Grid item xs={12}>
          <Grid container columnSpacing={2} alignItems="center" pt={4}>
            <Grid item xs={12} sm={12} md={12} lg={0.4} xl={0.4}>
              <Stack
                direction={windowInnerWidth >= 1200 ? "column" : "row-reverse"}
                sx={{
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                py={windowInnerWidth >= 1200 ? 0 : 1}
                spacing={2}
              >
                {windowInnerWidth >= 1200 ? (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineTopImage}
                    sx={{
                      borderRadius: 0,
                      width: 20,
                      height: 120,
                    }}
                  />
                ) : (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineRightImage}
                    sx={{
                      borderRadius: 0,
                      width: 120,
                      height: 20,
                    }}
                  />
                )}

                <Box sx={{ width: "auto" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FFFFFF",
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
                      lineHeight: 2,
                    }}
                  >
                    Featured Coins
                  </Typography>
                </Box>

                {windowInnerWidth >= 1200 ? (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineBottomImage}
                    sx={{
                      borderRadius: 0,
                      width: 20,
                      height: 110,
                    }}
                  />
                ) : (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineLeftImage}
                    sx={{
                      borderRadius: 0,
                      width: 110,
                      height: 20,
                    }}
                  />
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={11.6} xl={11.6}>
              {
                <Stack
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={0}
                  sx={{
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {featuredCoinList &&
                    featuredCoinList?.map((data: any, index: number) => (
                      <Grid xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                        <FeaturedCoinCards cardData={data} index={index} />
                      </Grid>
                    ))}
                </Stack>
              }
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",

              alignItems: "center",
            }}
            pb={3}
            pt={4}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Upcoming Events
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {eventList && (
            <Carousel
              responsive={responsiveCryptoEvents}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={false}
              autoPlay={true}
              draggable={true}
              swipeable={true}
              minimumTouchDrag={10}
              keyBoardControl={true}
              shouldResetAutoplay={false}
            >
              {eventList &&
                eventList?.map((item: any, index: number) => (
                  <Box key={index}>
                    <CryptoEventsCardSlider data={item} />
                  </Box>
                ))}
            </Carousel>
          )}
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              justifyContent: " flex-end",
            }}
          >
            <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
              <ViewMoreBtn title="More events" />
            </Link>
          </Stack>
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
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",

              alignItems: "center",
            }}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Trending Coins
              </Typography>
            </Grid>
            <Grid item xs={9.5}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px"  }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
            paddingBottom: "23px",
          }}
        >
          {trendingCoinList && (
            <Carousel
              responsive={responsiveTrendingCoins}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={false}
              autoPlay={false}
              draggable={true}
              swipeable={true}
              minimumTouchDrag={10}
              keyBoardControl={true}
              shouldResetAutoplay={false}
            >
              {trendingCoinList &&
                trendingCoinList?.map((item: any, index: number) => (
                  <Box key={index}>
                    <TrendingCoins data={item && item[0]} />
                  </Box>
                ))}
            </Carousel>
          )}
        </Grid> */}

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
            pb={3}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                CryptoCurrencies
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5} pb={2}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
              Subscribe to our newsletters and get business news delivered
              straight into your inbox ; Daily Newsletter. Your daily dose of
              business news, views and updates.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={7} lg={7} xl={7} pb={2}>
            <CardMedia
              component="img"
              height="95"
              image="https://iili.io/UtYAiJ.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={3}
            sx={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: " space-between",
            }}
          >
            <TableBtnGroup />
            <TableFilterBtn />
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
          >
            {
              <HtmlTable
                tableData={tableData && tableData}
                tableHeader={tableHeader}
                variant="crypto_currencies"
              />
            }
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              justifyContent: " flex-end",
            }}
          >
            <Link
              to="/coins"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ViewMoreBtn title="View more" />
            </Link>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
            pb={3}
            pt={4}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                NFT Collections
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5} pb={2}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
              Subscribe to our newsletters and get business news delivered
              straight into your inbox ; Daily Newsletter. Your daily dose of
              business news, views and updates.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={7} lg={7} xl={7} pb={2}>
            <CardMedia
              component="img"
              height="95"
              image="https://iili.io/UtYAiJ.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          {NFTList && NFTList?.data && (
            <Carousel
              responsive={responsiveNFTCollections}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={true}
              autoPlay={false}
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

        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              justifyContent: " flex-end",
            }}
          >
            <Link to="/nft" style={{ textDecoration: "none" }}>
              <ViewMoreBtn title="See collections" />
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
            pb={3}
            pt={4}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Coinxhigh Crypto News
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#041143", borderBottomWidth: "1px" }}
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5} pb={2}>
            <Typography sx={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
              Subscribe to our newsletters and get business news delivered
              straight into your inbox ; Daily Newsletter. Your daily dose of
              business news, views and updates.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={7} lg={7} xl={7} pb={2}>
            <CardMedia
              component="img"
              height="95"
              image="https://iili.io/UtYAiJ.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <LatestNewsCardScroll />
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "0px",
              paddingBottom: "23px",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#FFFFF5",
                "&:hover": {
                  color: "#1a52ca",
                },
              }}
            >
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                More News{" ˃"}
              </Link>
            </Typography>

            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src={TelegramGraphImage}
                sx={{ width: 18, height: 18 }}
              />

              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFF5",
                  "&:hover": {
                    color: "#1a52ca",
                  },
                }}
              >
                <a
                  href="https://telegram.me/coinXhigh"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  Subscribe to our Telegram{" "}
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "23px",
            paddingBottom: "23px",
          }}
        >
          <AdsCardHome />
        </Grid> */}

        <Grid item xs={12}>
          <CardDeal />
        </Grid>
        <Grid item xs={12}>
          <BannerCardsHome />
        </Grid>

        <Grid item xs={12}>
          <BannerMap />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
