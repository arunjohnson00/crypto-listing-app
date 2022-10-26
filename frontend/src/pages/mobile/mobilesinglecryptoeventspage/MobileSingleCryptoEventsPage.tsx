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

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import MobileTopAlertBox from "../../../components/mobile/alert/topalertbox/MobileTopAlertBox";
import MobileBreadCrumbs from "../../../components/mobile/breadcrumbs/MobileBreadCrumbs";
import MobileSingleCryptoEventHeader from "../../../components/mobile/singlecryptoeventsheader/MobileSingleCryptoEventHeader";
import CryptoEventsSinglePageCard from "../../../components/mobile/cards/cryptoeventssinglepagecard/CryptoEventsSinglePageCard";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  eventsRecentlyAddedRequest,
  eventsSinglePageRequest,
} from "../../../store/action";

const MobileSingleCryptoEventsPage = () => {
  const dispatch: any = useDispatch();
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const singlePageData = useSelector((data: any) => {
    return data?.eventsReducer?.events_single_page?.data;
  });

  const eventsRecentlyAdded = useSelector((data: any) => {
    return data?.eventsReducer?.events_recently_added?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {
      err?.error?.message?.response?.data?.response === false &&
        navigate("/crypto-events");
    };

    dispatch(
      eventsSinglePageRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );

    dispatch(
      eventsRecentlyAddedRequest("noData", successHandler, errorHandler)
    );
  }, [dispatch, location]);

  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        {/* <Grid xs={12} sx={{ paddingTop: 3 }}>
          <MobileLatestNewsCardScrollTop />
        </Grid> */}

        {/* <Grid xs={12} sx={{ paddingTop: 0 }} mt={3}>
          <MobileCoinSlider />
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
              alignItems: "center",
            }}
            py={2}
          >
            <MobileTopAlertBox />
          </Stack>
        </Grid> */}

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid xs={12} mt={3}>
            <MobileBreadCrumbs
              data={singlePageData && singlePageData?.data}
              home="Home"
              path="Crypto Events"
            />
          </Grid>
        </Grid>

        <Grid xs={12}>
          <MobileSingleCryptoEventHeader
            data={singlePageData && singlePageData?.data}
          />
        </Grid>

        <Grid xs={12} my={2}>
          {" "}
          <Divider
            variant="fullWidth"
            sx={{
              borderColor: "#16245E",
              borderBottomWidth: 1.3,
              width: "100%",
            }}
            flexItem
          />
        </Grid>

        <Grid xs={12}>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            width="100%"
          >
            {eventsRecentlyAdded &&
              eventsRecentlyAdded?.response === true &&
              eventsRecentlyAdded?.data?.data?.map(
                (item: any, index: number) => (
                  <CryptoEventsSinglePageCard data={item} />
                )
              )}
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleCryptoEventsPage;
