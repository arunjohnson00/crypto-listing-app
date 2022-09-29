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
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import MobileTopAlertBox from "../../../components/mobile/alert/topalertbox/MobileTopAlertBox";

import MobileBreadCrumbs from "../../../components/mobile/breadcrumbs/MobileBreadCrumbs";

import CryptoEventsSearchCard from "../../../components/mobile/cards/cryptoeventssearchcard/CryptoEventsSearchCard";
import CryptoEventsTab from "../../../components/mobile/cryptoeventstab/CryptoEventsTab";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";

const MobileCryptoEventsPage = () => {
  TimeAgo.addDefaultLocale(en);

  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <MobileLatestNewsCardScrollTop />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <MobileCoinSlider />
        </Grid>
        {/* <Grid item xs={12}>
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

        <Grid container rowSpacing={3} mt={2}>
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
            py={1}
          >
            <MobileBreadCrumbs home="Home" path="Crypto Events" />
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
        </Grid>

        <Grid
          container
          item
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            Crypto Events
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sx={{
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <CryptoEventsSearchCard />
        </Grid>

        <Grid
          container
          item
          xs={12}
          sx={{
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <CryptoEventsTab />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileCryptoEventsPage;
