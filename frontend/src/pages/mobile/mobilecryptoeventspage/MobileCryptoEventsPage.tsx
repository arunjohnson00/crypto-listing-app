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
import moment from "moment";
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
import { useDispatch, useSelector } from "react-redux";
import {
  eventsCategoriesRequest,
  eventsPastRequest,
  eventsRecentlyAddedRequest,
  eventsUpcomingRequest,
} from "../../../store/action";
import { Helmet } from "react-helmet-async";

const MobileCryptoEventsPage = () => {
  const [cryptoFilter, setCryptoFilter] = useState(false);
  const dispatch: any = useDispatch();

  const [value, setValue] = useState<any>("0");
  const [eventData, setEventData] = useState<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const filterBtnHandler = () => {
    setCryptoFilter(!cryptoFilter);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Crypto Events | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content=" Crypto Events | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
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
            {/* <IconButton aria-label="filter" onClick={filterBtnHandler}>
              <FilterAltOutlinedIcon sx={{ color: "#03E2B1" }} />
            </IconButton> */}
          </Stack>
        </Grid>

        {cryptoFilter === true && (
          <Grid item xs={12}>
            <MobileCryptoEventsSearchCard />
          </Grid>
        )}

        <Grid item xs={12}>
          <MobileCryptoEventsTab
            value={value}
            handleChange={handleChange}
            eventData={eventData}
            setEventData={setEventData}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileCryptoEventsPage;
