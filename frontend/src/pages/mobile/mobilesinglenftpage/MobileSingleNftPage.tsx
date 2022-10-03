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
import SingleNFTHeader from "../../../components/mobile/signlenftheader/SingleNFTHeader";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";

const MobileSingleNftPage = () => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sx={{}}>
          <MobileLatestNewsCardScrollTop />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <MobileCoinSlider />
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

        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mt={2}>
            <MobileBreadCrumbs home="Home" path="NFT" />
          </Grid>
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
            <CardMedia
              component="img"
              height="80"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <SingleNFTHeader />
        </Grid>

        <Grid item xs={12} mb={7} pt={2}>
          <Stack direction="column" spacing={0.4}>
            <Typography
              sx={{ color: "#00FFE0", fontSize: "1.2rem", fontWeight: 600 }}
            >
              About Bored Ape
            </Typography>
            <Typography
              sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 400 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting,
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleNftPage;
