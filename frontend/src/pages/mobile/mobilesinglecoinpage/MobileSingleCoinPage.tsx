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
} from "../../../store/action";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";

const MobileSingleCoinPage = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const [requestStatus, setRequestStatus] = useState<any>(false);

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });

  useEffect(() => {
    (location?.pathname === "/coin" || location?.pathname === "/coin/") &&
      navigate("/");
    const successHandler = (res: any) => {
      setRequestStatus(res?.data?.status);
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
  }, [requestStatus]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
    // dispatch(menuCardRequest("noData", successHandler, errorHandler));
    // dispatch(videoListRequest("noData", successHandler, errorHandler));
    // dispatch(trendingCoinListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

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
          <MobileLatestNewsCardScrollTop />
        </Grid>

        <Grid xs={12} sx={{ paddingTop: 0 }}>
          <MobileCoinSlider />
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
              alignItems: "center",
            }}
            py={2}
          >
            <MobileTopAlertBox />
          </Stack>
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
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
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
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
          <MobileSingleCoinHeader
            coinData={coinDetailFirstBlock && coinDetailFirstBlock[0]}
          />
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <MobileSingleCoinPageAccordion />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleCoinPage;
