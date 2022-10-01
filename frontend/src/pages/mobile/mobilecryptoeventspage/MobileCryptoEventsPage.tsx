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
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import MobileTopAlertBox from "../../../components/mobile/alert/topalertbox/MobileTopAlertBox";
import MobileBreadCrumbs from "../../../components/mobile/breadcrumbs/MobileBreadCrumbs";
import CryptoEventsTab from "../../../components/mobile/cryptoeventstab/MobileCryptoEventsTab";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";
import MobileCryptoEventsSearchCard from "../../../components/mobile/cards/cryptoeventssearchcard/MobileCryptoEventsSearchCard";
import MobileCryptoEventsTab from "../../../components/mobile/cryptoeventstab/MobileCryptoEventsTab";

const MobileCryptoEventsPage = () => {
  const [cryptoFilter, setCryptoFilter] = useState(false);
  const filterBtnHandler = () => {
    setCryptoFilter(!cryptoFilter);
  };

  return (
    <Fragment>
      <Grid container rowSpacing={1.5}>
        {/* <Grid item xs={12}>
          <MobileLatestNewsCardScrollTop />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <MobileCoinSlider />
        </Grid> */}
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

        <Grid item xs={12} mb={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
              Crypto Events
            </Typography>
            <IconButton aria-label="filter" onClick={filterBtnHandler}>
              <FilterAltOutlinedIcon sx={{ color: "#03E2B1" }} />
            </IconButton>
          </Stack>
        </Grid>

        {cryptoFilter === true && (
          <Grid item xs={12}>
            <MobileCryptoEventsSearchCard />
          </Grid>
        )}

        <Grid item xs={12}>
          <MobileCryptoEventsTab />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileCryptoEventsPage;
