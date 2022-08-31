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
} from "../../../store/action";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const SingleCoinPage = () => {
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
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
      setRequestStatus(res?.data?.status);

      // Put the object into storage
    };

    const errorHandler = (err: any) => {};

    dispatch(
      coinOnloadVerificationRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      coinDetailFirstBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
    // dispatch(
    //   coinOverviewBlockRequest(
    //     location?.pathname?.split("/").pop(),
    //     successHandler,
    //     errorHandler
    //   )
    // );
    // dispatch(
    //   coinAboutBlockRequest(
    //     location?.pathname?.split("/").pop(),
    //     successHandler,
    //     errorHandler
    //   )
    // );

    // dispatch(
    //   coinRatingBlockRequest(
    //     location?.pathname?.split("/").pop(),
    //     successHandler,
    //     errorHandler
    //   )
    // );

    dispatch(
      coinSocialGraphRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );

    // dispatch(
    //   coinHistoricalDataBlockRequest(
    //     location?.pathname?.split("/").pop(),
    //     successHandler,
    //     errorHandler
    //   )
    // );

    // dispatch(
    //   coinTodaysPriceBlockRequest(
    //     location?.pathname?.split("/").pop(),
    //     successHandler,
    //     errorHandler
    //   )
    // );
  }, [requestStatus]);

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
            py={1}
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
            paddingTop: 2,
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
      </Grid>
    </Fragment>
  );
};

export default SingleCoinPage;
