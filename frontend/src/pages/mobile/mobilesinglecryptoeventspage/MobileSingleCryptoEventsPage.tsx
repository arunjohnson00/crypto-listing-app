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

const MobileSingleCryptoEventsPage = () => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container rowSpacing={3}>
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
            <MobileBreadCrumbs home="Home" path="Events" />
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
          sx={{
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <MobileSingleCryptoEventHeader />
        </Grid>

        <Grid
          container
          sx={{
            alignItems: "center",
            marginTop: 4,
          }}
        >
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

        <Grid
          container
          sx={{
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            width="100%"
          >
            <CryptoEventsSinglePageCard />
            <CryptoEventsSinglePageCard />
            <CryptoEventsSinglePageCard />
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleCryptoEventsPage;
