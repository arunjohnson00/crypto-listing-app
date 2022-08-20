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
import MobileSingleCoinHeader from "../../../components/mobile/singlecoinheader/MobileSingleCoinHeader";
import MobileSingleCoinPageAccordion from "../../../components/mobile/singlecoinpageaccordion/MobileSingleCoinPageAccordion";
import MobileLatestNewsHeading from "../../../components/mobile/Typography/headings/latestnews/MobileLatestNewsHeading";
import MobileLatestNewsCardScroll from "../../../components/mobile/latestnews/MobileLatestNewsCardScroll";
import MobileBreadCrumbs from "../../../components/mobile/breadcrumbs/MobileBreadCrumbs";
import SingleNFTHeader from "../../../components/mobile/signlenftheader/SingleNFTHeader";

const MobileSingleNftPage = () => {
  const { parse } = require("rss-to-json");

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();

  useEffect(() => {
    (async () => {
      var rss = await parse("https://news.coinxhigh.com/feed/");

      setFeed(rss);
    })();
  }, []);

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
          <MobileLatestNewsCardScroll />
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
            <MobileBreadCrumbs home="Home" path="NFT" />
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
          <SingleNFTHeader />
        </Grid>

        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        ></Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleNftPage;
