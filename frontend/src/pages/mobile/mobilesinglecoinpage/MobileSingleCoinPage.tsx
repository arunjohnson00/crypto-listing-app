import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { tableHeader } from "./helper";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import MobileTopAlertBox from "../../../components/mobile/alert/topalertbox/MobileTopAlertBox";
import MobileSingleCoinHeader from "../../../components/mobile/singlecoinheader/MobileSingleCoinHeader";
import MobileSingleCoinPageAccordion from "../../../components/mobile/singlecoinpageaccordion/MobileSingleCoinPageAccordion";
import MobileLatestNewsHeading from "../../../components/mobile/Typography/headings/latestnews/MobileLatestNewsHeading";

import MobileBreadCrumbs from "../../../components/mobile/breadcrumbs/MobileBreadCrumbs";
import {
  coinDetailFirstBlockRequest,
  coinOverviewBlockRequest,
  coinAboutBlockRequest,
  coinOnloadVerificationRequest,
  coinSocialGraphRequest,
  coinRatingBlockRequest,
  featuredCoinListRequest,
  coinVisitedCounterRequest,
  coinRecentlyAddedRequest,
} from "../../../store/action";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import DiscoverRecentCryptoCard from "../../../components/desktop/cards/discoverrecentcryptocard/DiscoverRecentCryptoCard";
import MobileHtmlTable from "../../../components/mobile/htmltable/MobileHtmlTable";
import MobileViewMoreBtn from "../../../components/mobile/button/viewmorebtn/MobileViewMoreBtn";
import { Link } from "react-router-dom";

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
    items: 2.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1,
  },
};
const baseUrl = process.env.REACT_APP_BASE_URL;
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileSingleCoinPage = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const [requestStatus, setRequestStatus] = useState<any>(false);
  const [vote, setVote] = useState<any>({
    initial: false,
    completed: false,
    captcha: false,
  });
  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });
  const latestCoin = useSelector((data: any) => {
    return data?.coinReducer?.recently_added?.data;
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
          coinOverviewBlockRequest(
            location?.pathname?.split("/").pop(),
            successHandler,
            errorHandler
          )
        );
        dispatch(
          coinAboutBlockRequest(
            location?.pathname?.split("/").pop(),
            successHandler,
            errorHandler
          )
        );

        dispatch(
          coinRatingBlockRequest(
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
          coinVisitedCounterRequest(
            location?.pathname?.split("/").pop(),
            successHandler,
            errorHandler
          )
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
    const errorHandler = (err: any) => {};

    dispatch(
      coinOnloadVerificationRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
    dispatch(coinRecentlyAddedRequest("noData", successHandler, errorHandler));
  }, [dispatch, location]);

  // useEffect(() => {
  //   const successHandler = (res: any) => {};
  //   const errorHandler = (err: any) => {};
  // }, [requestStatus]);

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
          <Helmet>
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
          (
          $${
            coinDetailFirstBlock &&
            coinDetailFirstBlock !== undefined &&
            coinDetailFirstBlock[0]?.symbol
          } ) has ${
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
            <meta property="og:locale" content="en" />
            <meta property="og:type" content="website" />

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
          <Grid container rowSpacing={1}>
            {/* {<Grid item xs={12} sx={{ marginTop: 1.5 }}>
            <MobileLatestNewsCardScrollTop />
          </Grid>} */}

            <Grid item xs={12} sx={{ paddingTop: 0 }}>
              <MobileCoinSlider />
            </Grid>

            {/* <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
            py={2}
          >
            <MobileTopAlertBox />
          </Stack>
        </Grid> */}

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              sx={{
                alignItems: "center",
              }}
              mt={2}
            >
              <MobileBreadCrumbs
                home="Home"
                path="Coin"
                data={
                  coinDetailFirstBlock &&
                  coinDetailFirstBlock !== undefined &&
                  coinDetailFirstBlock[0]
                }
              />
            </Grid>
            {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              alignItems: "center",
            }}
            py={1}
          >
            <CardMedia
              component="img"
              height="80"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid> */}

            <Grid
              item
              xs={12}
              sx={{
                alignItems: "center",
                paddingTop: 2,
              }}
            >
              <MobileSingleCoinHeader
                coinData={coinDetailFirstBlock && coinDetailFirstBlock[0]}
              />
            </Grid>

            {/* <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <MobileSingleCoinPageAccordion />
        </Grid> */}
          </Grid>
          <Grid xs={12} pt={0}>
            {" "}
            <Typography
              variant="h5"
              sx={{ fontSize: "1.1rem", color: "#FFD700" }}
            >
              Recently Added
            </Typography>
          </Grid>
          <Grid xs={12} pt={2} pb={5}>
            <div
              style={{
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
                  arrows={false}
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
        </>
      )}
      {featuredCoinList && featuredCoinList?.length > 0 && (
        <Box>
          <Grid item xs={12} mt={1.5} mb={1.5}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "1.1rem", color: "#FFD700" }}
              >
                Promoted Coins
              </Typography>
              <Link
                to="/promoted-coins"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MobileViewMoreBtn title="View more" />
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

export default MobileSingleCoinPage;
