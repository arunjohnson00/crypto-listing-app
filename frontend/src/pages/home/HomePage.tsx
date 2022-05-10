import React, { Fragment } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
} from "@mui/material";
import AppHeader from "../../layouts/header/AppHeader";
import LatestNewsHeading from "../../components/Typography/headings/latestnews/LatestNewsHeading";
import NewsSlider from "../../components/slider/newsslider/NewsSlider";
import { borderTop } from "@mui/system";
import CoinSlider from "../../components/slider/coinslider/CoinSlider";
import VideoSlider from "../../components/slider/videoslider/VideoSlider";
import HighlightCards from "../../components/cards/highlight/HighlightCards";

const HomePage = () => {
  return (
    <Fragment>
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
          backgroundColor: "#01061A",
          paddingTop: "22px",
          paddingBottom: "22px",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
          backgroundColor: "#01061A",
        }}
      >
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              borderTop: "1px solid #1a1545",
              borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#04091d",
              paddingLeft: "40px",
              paddingRight: "40px",
              alignItems: "center",
            }}
          >
            <Grid item xs={2}>
              <LatestNewsHeading />
            </Grid>
            <Grid item xs={10}>
              <Stack direction="row" spacing={3}>
                <NewsSlider />
                <NewsSlider />
                <NewsSlider />
                <NewsSlider />
              </Stack>
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            paddingLeft: "40px",
            paddingRight: "40px",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              paddingLeft: "40px",
              paddingRight: "40px",
              alignItems: "center",
            }}
          >
            <Grid item xs={2}>
              <CoinSlider />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            paddingLeft: "40px",
            paddingRight: "40px",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              paddingLeft: "40px",
              paddingRight: "20px",
              alignItems: "center",
            }}
          >
            <Grid item xs={8}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={4}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            paddingLeft: "40px",
            paddingRight: "40px",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              paddingLeft: "40px",
              paddingRight: "20px",
              alignItems: "center",
            }}
          >
            <VideoSlider /> <VideoSlider /> <VideoSlider />
            <VideoSlider /> <VideoSlider />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            paddingLeft: "40px",
            paddingRight: "40px",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              paddingLeft: "40px",
              paddingRight: "20px",
              alignItems: "center",
            }}
          >
            <Grid item xs={1.5}>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Highlights
              </Typography>
            </Grid>
            <Grid item xs={10.5}>
              <Divider
                sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            backgroundColor: "#01061A",
            paddingLeft: "40px",
            paddingRight: "40px",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#01061A",
              paddingLeft: "40px",
              paddingRight: "20px",
              alignItems: "center",
            }}
          >
            <HighlightCards />
            <HighlightCards />
            <HighlightCards />
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
