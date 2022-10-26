import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Divider, Tab, Tabs } from "@mui/material";

import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
//import useMediaQuery from "@mui/material/useMediaQuery";
import Chip from "@mui/material/Chip";
import dateFormat, { masks } from "dateformat";
import Switch from "@mui/material/Switch";
import moment from "moment";
import CryptoEventsCard from "../../../components/desktop/cards/cryptoeventscard/CryptoEventsCard";
import UpcomingEventCalender from "../../../components/desktop/calender/eventcalender/UpcomingEventCalender";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { useDispatch, useSelector } from "react-redux";
import { defaultColor } from "../../../common/common";
import {
  eventsCategoriesRequest,
  eventsPastRequest,
  eventsRecentlyAddedRequest,
  eventsUpcomingRequest,
} from "../../../store/action";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { Helmet } from "react-helmet-async";

const CryptoEvents = () => {
  const dispatch: any = useDispatch();
  const [date, setDate] = useState<any>(new Date());
  const [value, setValue] = useState<any>(0);
  const [eventData, setEventData] = useState<any>();
  const [filterCat, setFilterCat] = useState<any>("all");
  const [toggleSwitch, setToggleSwitch] = useState<any>(true);
  const eventsCategory = useSelector((data: any) => {
    return data?.eventsReducer?.events_category?.data;
  });

  const eventsRecentlyAdded = useSelector((data: any) => {
    return data?.eventsReducer?.events_recently_added?.data;
  });

  const eventsUpcoming = useSelector((data: any) => {
    return data?.eventsReducer?.events_upcoming?.data;
  });

  const eventsPast = useSelector((data: any) => {
    return data?.eventsReducer?.events_past?.data;
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
    setFilterCat("");
    setDate(null);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggleSwitch(event.target.checked);
    const successHandler = (res: any) => {
      res && event.target.checked === false
        ? setEventData(
            res?.data?.data?.data?.filter(
              (item: any) => parseInt(item?.is_online) === 1
            )
          )
        : setEventData(
            res?.data?.data?.data?.filter(
              (item: any) => parseInt(item?.is_online) === 2
            )
          );
    };
    const errorHandler = (err: any) => {};

    value === 0 &&
      dispatch(
        eventsRecentlyAddedRequest("noData", successHandler, errorHandler)
      );
    value === 1 &&
      dispatch(eventsUpcomingRequest("noData", successHandler, errorHandler));
    value === 2 &&
      dispatch(eventsPastRequest("noData", successHandler, errorHandler));
  };

  const dateHandler = (newValue: any) => {
    setDate(newValue);

    const successHandler = (res: any) => {
      res && newValue
        ? setEventData(
            res?.data?.data?.data?.filter(
              (item: any) =>
                moment(new Date(newValue)).isSame(
                  moment(new Date(item?.event_date)),
                  "day"
                ) === true
            )
          )
        : setEventData(res?.data?.data?.data);
    };
    const errorHandler = (err: any) => {};

    value === 0 &&
      newValue &&
      dispatch(
        eventsRecentlyAddedRequest("noData", successHandler, errorHandler)
      );
    value === 1 &&
      newValue &&
      dispatch(eventsUpcomingRequest("noData", successHandler, errorHandler));
    value === 2 &&
      newValue &&
      dispatch(eventsPastRequest("noData", successHandler, errorHandler));
  };
  const categoryFilter = (cat: any) => {
    setDate(null);
    const successHandler = (res: any) => {
      res && cat !== "all"
        ? setEventData(
            res?.data?.data?.data?.filter(
              (item: any) => item?.category_slug === cat
            )
          )
        : setEventData(res?.data?.data?.data);
    };
    const errorHandler = (err: any) => {};

    value === 0 &&
      cat &&
      dispatch(
        eventsRecentlyAddedRequest("noData", successHandler, errorHandler)
      );
    value === 1 &&
      cat &&
      dispatch(eventsUpcomingRequest("noData", successHandler, errorHandler));
    value === 2 &&
      cat &&
      dispatch(eventsPastRequest("noData", successHandler, errorHandler));
    setEventData(eventData?.filter((item: any) => item?.category_slug === cat));
    setFilterCat(cat);
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      res && setEventData(res?.data?.data?.data);
    };
    const errorHandler = (err: any) => {};

    value === 0 &&
      dispatch(
        eventsRecentlyAddedRequest("noData", successHandler, errorHandler)
      );
    value === 1 &&
      dispatch(eventsUpcomingRequest("noData", successHandler, errorHandler));
    value === 2 &&
      dispatch(eventsPastRequest("noData", successHandler, errorHandler));
  }, [dispatch, setValue, value]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(eventsCategoriesRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

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
      <Grid container rowSpacing={3}>
        {/* <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={3}>
          <BreadCrumbs data={""} home="Home" path="Crypto Events" />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Crypto Events
            </Typography>
            <Typography variant="body2" sx={{ color: "#CDCED1" }}>
              Stay up to date with our crypto calendar. We list all the major
              events in the crypto and blockchain ecosystems to keep you in the
              loop.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            alignItems={"flex-start"}
            justifyContent="flex-start"
          >
            <Stack
              direction="row"
              //  direction={{ xs: "column", sm: "column", md: "row" }}
              flexWrap="wrap"
              sx={{ flexGrow: 0 }}
            >
              {" "}
              <Chip
                label={"All"}
                color="success"
                sx={{
                  backgroundColor:
                    filterCat === "all" ? "#444444" : defaultColor[0],
                  fontSize: "0.7125rem",
                  margin: 0.5,
                  opacity: filterCat === "all" ? 0.5 : 1,
                }}
                onClick={() => categoryFilter("all")}
              />
              {eventsCategory &&
                eventsCategory?.response === true &&
                eventsCategory?.data?.map((item: any, index: number) => (
                  <Chip
                    key={index}
                    label={item?.name}
                    color="success"
                    sx={{
                      backgroundColor:
                        filterCat === item?.slug
                          ? "#444444"
                          : defaultColor[index + 1],
                      fontSize: "0.7125rem",
                      margin: 0.5,
                      opacity: filterCat === item?.slug ? 0.5 : 1,
                    }}
                    onClick={() => categoryFilter(item?.slug)}
                  />
                ))}
            </Stack>
            <Stack
              direction="row"
              spacing={0}
              alignItems="center"
              justifyContent="flex-end"
              px={2}
              sx={{ flexGrow: 1, minWidth: 300 }}
            >
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                Online Event
              </Typography>
              <Switch
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#a28b18",
                  },
                  "& .MuiSwitch-switchBase": {
                    color: "#09ae95",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#454945",
                  },
                  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                    backgroundColor: "#454945",
                  },
                }}
                checked={toggleSwitch}
                onChange={handleSwitchChange}
                color="default"
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                Onsite Event
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <Grid item xs={12} py={2}>
                <Stack direction="row" justifyContent="flex-end">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                    sx={{
                      "& .MuiTabs-indicator": {
                        //display: "none",
                        backgroundColor: "#19ffb0",
                        height: 2,
                        // color: "#FFFFF5",
                      },

                      "& .MuiButtonBase-root.MuiTab-root": {
                        color: "#FFFFFF",
                        textTransform: "capitalize",
                        opacity: 1,
                      },
                      "& .MuiTab-root.Mui-selected": {
                        color: "#19ffb0",
                      },

                      "&.MuiTabs-root": {
                        color: "#fff",
                      },

                      "&.MuiTabs-root .MuiTabs-scrollButtons": {},
                      "&.MuiTabs-root  .Mui-disabled": {
                        display: "none",
                      },
                    }}
                  >
                    <Tab label="Recenlty Added" />
                    <Tab label="Upcoming" />
                    <Tab label="Past" />
                  </Tabs>
                </Stack>
              </Grid>
              <Grid item xs={12} pb={0}>
                {/* <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: "#FFFFF5" }}>
                    {dateFormat(date, "dd mmmm  yyyy")}
                   
                  </Typography>
                </Grid> */}

                <Grid container pt={1} spacing={3}>
                  {eventData &&
                    eventData?.map((item: any, index: number) => (
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        key={index}
                      >
                        <CryptoEventsCard data={item} />
                      </Grid>
                    ))}

                  {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Divider
                      variant="fullWidth"
                      sx={{ borderColor: "#0D1436", borderBottomWidth: 2.5 }}
                      flexItem
                    />
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4} mt={3}>
              <UpcomingEventCalender
                date={date}
                setDate={setDate}
                dateHandler={dateHandler}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CryptoEvents;
