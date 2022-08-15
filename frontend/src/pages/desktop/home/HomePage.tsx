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
} from "@mui/material";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
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
} from "../../../store/action";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import LatestNewsCardScroll from "../../../components/desktop/latestnews/LatestNewsCardScroll";

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
    items: 5.5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.5,
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
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();
  const [tableData, setTableData] = useState<any>();

  const [preLoader, setPreLoader] = useState<any>({
    recently_added: true,
    biggest_gainers: true,
    biggest_loosers: true,
    featured_coin_list: true,
    todays_performer: true,
  });

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

  // const videoList = useSelector((data: any) => {
  //   return data?.homeReducer?.video_list?.data?.data;
  // });

  const tabIndex = useSelector((data: any) => {
    return data?.homeReducer?.crypto_currencies_tab;
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      setPreLoader({
        ...preLoader,
        recently_added: false,
        biggest_gainers: false,
        biggest_loosers: false,
        featured_coin_list: false,
        todays_performer: false,
      });
    };
    const errorHandler = (err: any) => {};
    dispatch(recentlyAddedRequest("noData", successHandler, errorHandler));
    dispatch(biggestGainersRequest("noData", successHandler, errorHandler));
    dispatch(biggestLosersRequest("noData", successHandler, errorHandler));
    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
    dispatch(nftListingRequest("noData", successHandler, errorHandler));
    dispatch(menuCardRequest("noData", successHandler, errorHandler));
    dispatch(videoListRequest("noData", successHandler, errorHandler));
  }, [dispatch, setPreLoader]);

  useEffect(() => {
    setHTMLTablePreLoader({
      ...htmlTablePreLoader,

      html_table: true,
    });
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
      res?.data?.data !== undefined &&
        setHTMLTablePreLoader({
          ...htmlTablePreLoader,

          html_table: false,
        });
    };
    const errorHandler = (err: any) => {};

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
      dispatch(
        cryptoCurrenciesNewRequest("noData", successHandler, errorHandler)
      );
    tabIndex === 6 &&
      dispatch(
        cryptoCurrenciesPresaleRequest("noData", successHandler, errorHandler)
      );
  }, [dispatch, tabIndex, setHTMLTablePreLoader]);

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
            {/* <CoinSlider /> */}
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
            paddingBottom: "23px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
          >
            <Grid item xs={12} sm={6} md={8} lg={8} xl={8} mb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://iili.io/UtYAiJ.jpg"
                alt="green iguana"
                sx={{ objectFit: "unset" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} mb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://iili.io/UtYuVa.jpg"
                alt="green iguana"
                sx={{ objectFit: "unset" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "23px",
            paddingBottom: "23px",
          }}
        >
          {videoList && (
            <Carousel
              responsive={responsiveVideo}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={true}
              draggable={true}
              swipeable={true}
              autoPlay={false}
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
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",

              alignItems: "center",
            }}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Highlights
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "2px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
            paddingBottom: "23px",
          }}
        >
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
              {preLoader?.biggest_gainers === true ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#010822",
                    color: "#3D484F",
                  }}
                  m={1}
                >
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={186}
                    sx={{
                      px: 2,
                      pb: 2,
                      pt: 2,
                      bgcolor: "rgb(245 245 245 / 11%)",
                      borderRadius: "6px",
                    }}
                  />
                </Box>
              ) : (
                <HighlightCards
                  title="Biggest Gainers"
                  cardData={biggestGainers}
                  icon={biggestGainersIcon}
                />
              )}
            </Box>
            <Box>
              {preLoader?.biggest_loosers === true ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#010822",
                    color: "#3D484F",
                  }}
                  m={1}
                >
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={186}
                    sx={{
                      px: 2,
                      pb: 2,
                      pt: 2,
                      bgcolor: "rgb(245 245 245 / 11%)",
                      borderRadius: "6px",
                    }}
                  />
                </Box>
              ) : (
                <HighlightCards
                  title="Biggest Losers"
                  cardData={biggestloosers}
                  icon={biggestLosersIcon}
                />
              )}
            </Box>

            <Box>
              {preLoader?.recently_added === true ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#010822",
                    color: "#3D484F",
                  }}
                  m={1}
                >
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={186}
                    sx={{
                      px: 2,
                      pb: 2,
                      pt: 2,
                      bgcolor: "rgb(245 245 245 / 11%)",
                      borderRadius: "6px",
                    }}
                  />
                </Box>
              ) : (
                <HighlightCards
                  title="Recently Added"
                  cardData={recentlyAdded}
                  icon={recentlyAddedIcon}
                />
              )}
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

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
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
              lg={0.4}
              xl={0.4}
              sx={{
                alignItems: "center",
              }}
            >
              <Stack
                direction={windowInnerWidth >= 1200 ? "column" : "row-reverse"}
                sx={{
                  alignItems: "flex-end",
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
            <Grid xs={12} sm={12} md={12} lg={11.6} xl={11.6}>
              {preLoader?.featured_coin_list === true ? (
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
                  {featuredCoinSkelton &&
                    featuredCoinSkelton.map((data: any, index: number) => (
                      <Grid xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#010822",
                            color: "#3D484F",
                          }}
                          m={1}
                        >
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            width={"100%"}
                            height={280}
                            sx={{
                              px: 2,
                              pb: 2,
                              pt: 2,
                              bgcolor: "rgb(245 245 245 / 11%)",
                              borderRadius: "6px",
                              "::after": {
                                background:
                                  "linear-gradient(90deg, transparent, #6252e84f 56%, transparent)",
                              },
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                </Stack>
              ) : (
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
                        <FeaturedCoinCards cardData={data} />
                      </Grid>
                    ))}
                </Stack>
              )}
            </Grid>
          </Stack>
        </Grid>

        <Grid
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
                sx={{ borderColor: "#2D4297", borderBottomWidth: "2px" }}
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
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
            <Box>
              <TrendingCoins />
            </Box>
          </Carousel>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "0px",

              alignItems: "center",
            }}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                CryptoCurrencies
              </Typography>
            </Grid>
            <Grid item xs={9.2}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "2px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "13px",
            paddingBottom: "13px",
          }}
        >
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
          container
          xs={12}
          sx={{
            alignItems: "center",
            marginTop: "30px",
            paddingBottom: "23px",
          }}
        >
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
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",

              alignItems: "center",
            }}
          >
            {htmlTablePreLoader?.html_table === true ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#010822",
                  color: "#3D484F",
                  width: "100%",
                }}
                m={1}
              >
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={"100%"}
                  height={100}
                  sx={{
                    px: 2,
                    pb: 2,
                    pt: 2,
                    bgcolor: "rgb(245 245 245 / 11%)",
                    borderRadius: "6px",
                  }}
                />
              </Box>
            ) : (
              <HtmlTable tableData={tableData && tableData} />
            )}
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
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              marginTop: "0px",
              paddingBottom: "23px",

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
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",

              alignItems: "center",
            }}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                NFT Collections
              </Typography>
            </Grid>
            <Grid item xs={9.5}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "2px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "13px",
            paddingBottom: "13px",
          }}
        >
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
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "23px",
            paddingBottom: "23px",

            justifyContent: "space-between",
          }}
        >
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
            <Box>
              <NftCollectionCard />
            </Box>
            <Box>
              <NftCollectionCard />
            </Box>
          </Carousel>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              marginTop: "0px",
              paddingBottom: "23px",

              alignItems: "center",
              justifyContent: " flex-end",
            }}
          >
            <ViewMoreBtn title="See collections" />
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
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "0px",

              alignItems: "center",
            }}
          >
            <Grid item xs="auto">
              <Typography
                sx={{ color: "#FFFFFF", fontWeight: 500, fontSize: "1.7rem" }}
              >
                Coinxhigh crypto News
              </Typography>
            </Grid>
            <Grid item xs={8.5}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "2px" }}
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "13px",
            paddingBottom: "13px",
          }}
        >
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
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <LatestNewsCardScroll />
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
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
            <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
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
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 18, height: 18 }}
              />
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                Subscribe to our Telegram
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "23px",
            paddingBottom: "23px",
          }}
        >
          <AdsCardHome />
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "50px",
              paddingBottom: "23px",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CardDeal />
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "50px",
            paddingBottom: "23px",
            marginTop: 10,
          }}
        >
          <BannerCardsHome />
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "50px",
            paddingBottom: "23px",
          }}
        >
          <BannerMap />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
