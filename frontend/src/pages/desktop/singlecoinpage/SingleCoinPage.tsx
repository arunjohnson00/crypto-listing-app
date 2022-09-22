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
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
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
} from "../../../store/action";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import DiscoverRecentCryptoCard from "../../../components/desktop/cards/discoverrecentcryptocard/DiscoverRecentCryptoCard";

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

const SingleCoinPage = () => {
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });
  const latestCoin = useSelector((data: any) => {
    return data?.coinReducer?.recently_added?.data;
  });
  const { parse } = require("rss-to-json");
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();

  const [requestStatus, setRequestStatus] = useState<any>(false);

  useEffect(() => {
    (location?.pathname === "/coin" || location?.pathname === "/coin/") &&
      navigate("/");
    const successHandler = (res: any) => {
      //setRequestStatus(res?.data?.status);
      console.log(res?.data?.status, "hi");
      if (res?.data?.status === true) {
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
      }
    };

    const errorHandler = (err: any) => {
      err?.error?.message?.response?.data?.status === false && navigate("/");
    };

    dispatch(
      coinOnloadVerificationRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Fragment>
      <Grid container px={0}>
        <Grid xs={12}>
          <LatestNewsScroll />
        </Grid>
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

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <Grid
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
          <Grid
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
          </Grid>
        </Grid>

        <Grid
          container
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
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 0,
          }}
        >
          <SinglePageTab />
        </Grid>

        <Grid xs={12} pt={2}>
          <Typography variant="h6" sx={{ color: "#FFFFF5" }} mb={1}>
            Recently Added
          </Typography>
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
      </Grid>
    </Fragment>
  );
};

export default SingleCoinPage;
