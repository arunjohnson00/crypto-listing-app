import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
  IconButton,
} from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { tableHeader } from "./helper";
import "react-multi-carousel/lib/styles.css";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import SingleCoinHeader from "../../../components/desktop/singlecoinheader/SingleCoinHeader";
import SinglePageTab from "../../../components/desktop/singlepagetab/SinglePageTab";
import {
  coinDetailFirstBlockRequest,
  coinOverviewBlockRequest,
  coinAboutBlockRequest,
  coinOnloadVerificationRequest,
  coinSocialGraphRequest,
  coinRatingBlockRequest,
  coinHistoricalDataBlockRequest,
  coinTodaysPriceBlockRequest,
  coinVisitedCounterRequest,
  coinsRecentlyAddedRequest,
  coinRecentlyAddedRequest,
  featuredCoinListRequest,
} from "../../../store/action";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import DiscoverRecentCryptoCard from "../../../components/desktop/cards/discoverrecentcryptocard/DiscoverRecentCryptoCard";
import MobileHtmlTable from "../../../components/mobile/htmltable/MobileHtmlTable";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const baseUrl = process.env.REACT_APP_BASE_URL;
const serverAPIUrl = process.env.REACT_APP_API_URL;
const SingleCoinPage = () => {
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });
  const latestCoin = useSelector((data: any) => {
    return data?.coinReducer?.recently_added?.data;
  });
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const [feed, setFeed] = useState<any>();

  const [requestStatus, setRequestStatus] = useState<any>(false);
  const [vote, setVote] = useState<any>({
    initial: false,
    completed: false,
    captcha: false,
  });
  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });
  useEffect(() => {
    (location?.pathname === "/coin" || location?.pathname === "/coin/") &&
      navigate("/");
    const successHandler = (res: any) => {
      if (res?.data?.status === true) {
        res && setRequestStatus(res?.data?.status);
        dispatch(
          coinDetailFirstBlockRequest(
            location?.pathname?.split("/").pop(),
            successHandler,
            errorHandler
          )
        );
        dispatch(
          coinVisitedCounterRequest(
            location?.pathname?.split("/").pop(),
            successHandler,
            errorHandler
          )
        );
        dispatch(
          coinSocialGraphRequest(
            location?.pathname?.split("/").pop(),
            successHandler,
            errorHandler
          )
        );
        dispatch(
          coinRecentlyAddedRequest("noData", successHandler, errorHandler)
        );

        // setInterval(() => {
        //   dispatch(
        //     coinDetailFirstBlockRequest(
        //       location?.pathname?.split("/").pop(),
        //       successHandler,
        //       errorHandler
        //     )
        //   );
        // }, 20000);
      }
    };

    const errorHandler = (err: any) => {
      err?.error?.message?.response?.data?.status === false &&
        window.location.replace("/");
    };

    dispatch(
      coinOnloadVerificationRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch, location]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    vote?.completed === true &&
      dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
  }, [vote]);

  return (
    <Fragment>
      {requestStatus === true && (
        <>
          <Helmet prioritizeSeoTags>
            <title>
              {`${
                coinDetailFirstBlock &&
                coinDetailFirstBlock !== undefined &&
                coinDetailFirstBlock[0]?.name
              }
          ($${
            coinDetailFirstBlock &&
            coinDetailFirstBlock !== undefined &&
            coinDetailFirstBlock[0]?.symbol
          }) Votes Today, Price, Website, MarketCap & Info | CoinXHigh.Com.`}
            </title>
            <meta
              name="description"
              content={`${
                coinDetailFirstBlock &&
                coinDetailFirstBlock !== undefined &&
                coinDetailFirstBlock[0]?.name
              }
          ($${
            coinDetailFirstBlock &&
            coinDetailFirstBlock !== undefined &&
            coinDetailFirstBlock[0]?.symbol
          }) has ${
                coinDetailFirstBlock &&
                coinDetailFirstBlock !== undefined &&
                coinDetailFirstBlock[0]?.todays_vote
              } votes today! Coinxhigh lets you Upvote, Rate and Review your favourite cryptocurrencies & NFT's.`}
            />

            <meta name="robots" content="index, follow" />
            <meta property="og:site_name" content="coinxhigh.com" />
            <meta
              property="og:title"
              content={`${
                coinDetailFirstBlock &&
                coinDetailFirstBlock !== undefined &&
                coinDetailFirstBlock[0]?.name
              }
          ($${
            coinDetailFirstBlock &&
            coinDetailFirstBlock !== undefined &&
            coinDetailFirstBlock[0]?.symbol
          }) Votes Today, Price, Website, MarketCap & Info | CoinXHigh.Com.`}
            />

            <meta
              property="og:description"
              content={`${
                coinDetailFirstBlock &&
                coinDetailFirstBlock !== undefined &&
                coinDetailFirstBlock[0]?.name
              }
          ($${
            coinDetailFirstBlock &&
            coinDetailFirstBlock !== undefined &&
            coinDetailFirstBlock[0]?.symbol
          }) has ${
                coinDetailFirstBlock &&
                coinDetailFirstBlock !== undefined &&
                coinDetailFirstBlock[0]?.todays_vote
              } votes today! Coinxhigh lets you Upvote, Rate and Review your favourite cryptocurrencies & NFT's.`}
            />

            <meta
              property="og:image"
              content={`${serverAPIUrl}public/uploads/coin_logo/${
                coinDetailOverview && coinDetailOverview[0]?.logo
              }`}
            />
            <meta
              property="og:url"
              content={`${baseUrl}${location && location.pathname}`}
            />
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=utf-8"
            />
          </Helmet>
          <Grid container px={0} pt={5}>
            {/* <Grid xs={12}>
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

            <Grid item xs={12} pt={2}>
              <BreadCrumbs
                data={
                  coinDetailFirstBlock &&
                  coinDetailFirstBlock !== undefined &&
                  coinDetailFirstBlock[0]
                }
                home="Home"
                path="Coin"
              />
            </Grid>
            {/* <Grid
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              alignItems: "center",
            }}
            pt={1}
          >
            <CardMedia
              component="img"
              height="80"
              image="https://iili.io/UtY5Kv.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid> */}

            <Grid
              item
              xs={12}
              sx={{
                alignItems: "center",
                paddingTop: 0,
              }}
            >
              <SingleCoinHeader
                coinData={coinDetailFirstBlock && coinDetailFirstBlock[0]}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                alignItems: "center",
                paddingTop: 0,
              }}
            >
              <SinglePageTab
                data={coinDetailFirstBlock && coinDetailFirstBlock[0]}
              />
            </Grid>
            <Grid item xs={12} pt={5}>
              {" "}
              <Typography variant="h6" sx={{ color: "#FFFFF5" }} mb={1}>
                Recently Added
              </Typography>
            </Grid>
            <Grid item xs={12} pt={2}>
              <div
                style={{
                  paddingTop: "3px",
                  width: "100%",
                  boxSizing: "border-box",
                  margin: "0 auto",
                }}
              >
                {latestCoin && (
                  <Carousel
                    focusOnSelect={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    showDots={false}
                    arrows={true}
                    // customRightArrow={
                    //   <IconButton
                    //     aria-label="delete"
                    //     sx={{ position: "absolute", top: "50%", right: 0 }}
                    //   >
                    //     <ArrowForwardIosRoundedIcon sx={{ color: "#FFFFFF" }} />
                    //   </IconButton>
                    // }
                    removeArrowOnDeviceType={[
                      "tablet",
                      "mobile",
                      // "desktop",
                      // "superLargeDesktop",
                    ]}
                    //customLeftArrow={<CustomLeftArrow />}
                  >
                    {latestCoin &&
                      latestCoin?.map((item: any, index: number) => (
                        <div key={index}>
                          <DiscoverRecentCryptoCard item={item} />
                        </div>
                      ))}
                  </Carousel>
                )}
              </div>
            </Grid>
            <Grid item xs={12} pt={5}>
              {" "}
              <Typography variant="h6" sx={{ color: "#FFFFF5" }} mb={1}>
                Latest Crypto News
              </Typography>
            </Grid>
            <Grid item xs={12} pt={0}>
              <LatestNewsScroll live={false} />
            </Grid>
          </Grid>
        </>
      )}

      {featuredCoinList && featuredCoinList?.length > 0 && (
        <Box>
          <Grid item xs={12} pt={5}>
            {" "}
            <Typography variant="h6" sx={{ color: "#FFFFF5" }} mb={2}>
              Promoted Coins
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                alignItems: "center",
              }}
            >
              <MobileHtmlTable
                tableData={featuredCoinList && featuredCoinList}
                tableHeader={tableHeader}
                variant="featured_coins"
                vote={vote}
                setVote={setVote}
              />
            </Stack>
          </Grid>
        </Box>
      )}
    </Fragment>
  );
};

export default SingleCoinPage;
