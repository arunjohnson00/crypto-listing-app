import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Divider } from "@mui/material";

import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
//import useMediaQuery from "@mui/material/useMediaQuery";
import Chip from "@mui/material/Chip";
import dateFormat, { masks } from "dateformat";

import CryptoEventsCard from "../../../components/desktop/cards/cryptoeventscard/CryptoEventsCard";
import UpcomingEventCalender from "../../../components/desktop/calender/eventcalender/UpcomingEventCalender";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const CryptoEvents = () => {
  const [date, setDate] = useState<any>(new Date());

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12} pt={3}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Upcoming Events
            </Typography>
            <Typography variant="body2" sx={{ color: "#CDCED1" }}>
              Stay up-to-date with coinmarketcap crypto calender. We list all
              the major events in the crypto and blockchain ecosystems so that
              you can stay informed.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} pt={2}>
          <Stack
            direction="row"
            //  direction={{ xs: "column", sm: "column", md: "row" }}

            flexWrap="wrap"
          >
            <Chip
              label="All Events"
              color="success"
              sx={{
                backgroundColor: "#6252EA",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="Airdrops"
              color="success"
              sx={{
                backgroundColor: "#B252EA",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="AMA"
              color="success"
              sx={{
                backgroundColor: "#E753C3",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="Partnership"
              color="success"
              sx={{
                backgroundColor: "#EC516B",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="Community"
              color="success"
              sx={{
                backgroundColor: "#E97252",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="Branding"
              color="success"
              sx={{
                backgroundColor: "#C49629",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="Burning"
              color="success"
              sx={{
                backgroundColor: "#A3C111",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
            <Chip
              label="Release"
              color="success"
              sx={{
                backgroundColor: "#42C110",
                fontSize: "0.7125rem",
                margin: 0.5,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container pt={6} spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              <Grid item xs={12} pb={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: "#FFFFF5" }}>
                    {dateFormat(date, "dd mmmm  yyyy")}
                    {/* {`28 May 2022 ${date}`} */}
                  </Typography>
                </Grid>

                <Grid container pt={3} spacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Divider
                      variant="fullWidth"
                      sx={{ borderColor: "#0D1436", borderBottomWidth: 2.5 }}
                      flexItem
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} pb={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: "#FFFFF5" }}>
                    28 May 2022
                  </Typography>
                </Grid>

                <Grid container pt={3} spacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CryptoEventsCard />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Divider
                      variant="fullWidth"
                      sx={{ borderColor: "#0D1436", borderBottomWidth: 2.5 }}
                      flexItem
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
              <UpcomingEventCalender date={date} setDate={setDate} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CryptoEvents;
