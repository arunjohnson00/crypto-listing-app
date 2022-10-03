import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  CardMedia,
  Button,
  Typography,
  Divider,
  Box,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";

const SingleNftPage = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container rowSpacing={5}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
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
              <BreadCrumbs data="" home="Home" path="NFT" />
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
                image="https://iili.io/UtY5Kv.jpg"
                alt="green iguana"
                sx={{ objectFit: "unset" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container pt={3}>
            <Grid xs={12} sm={12} md={5} lg={5} xl={5} pt={3}>
              <Stack
                direction="column"
                spacing={3}
                sx={{ alignItems: "center" }}
              >
                <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                  <CardMedia
                    component="img"
                    height="320"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#6252E7",
                      borderRadius: 3,
                      height: 42,
                      color: "#FFFFF5",
                      paddingX: 4,
                      textTransform: "capitalize",
                    }}
                  >
                    2365 Votes
                  </Button>
                </Grid>
                <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#6252E7",
                      borderRadius: 3,
                      height: 42,
                      textTransform: "capitalize",
                    }}
                  >
                    Buy Bored Ape Yatch Club
                  </Button>
                </Grid>
              </Stack>
            </Grid>
            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              pl={{ sx: 0, sm: 0, md: 4 }}
              mt={{ xs: 7, sm: 7, md: 3 }}
            >
              <Stack
                direction="column"
                spacing={3}
                sx={{ alignItems: "flex-start" }}
              >
                <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                  2365 Votes
                </Typography>

                <Box sx={{ flexGrow: 1, width: "100%" }}>
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      sx={
                        {
                          //alignItems: "center",
                          // justifyContent: "space-between",
                        }
                      }
                    >
                      <Divider
                        variant="fullWidth"
                        flexItem
                        orientation="horizontal"
                        sx={{
                          borderColor: "#6252E7",
                          borderBottomWidth: 2,
                        }}
                      />
                      <Typography
                        variant="h4"
                        sx={{ color: "#FFFFF5", paddingTop: 1 }}
                      >
                        Bored Ape Yacht Club
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#FFFFF5",
                          fontSize: "1.2rem",
                          paddingBottom: 2,
                        }}
                      >
                        Price: 0.2365 ETH
                      </Typography>
                      <Divider
                        variant="fullWidth"
                        flexItem
                        orientation="horizontal"
                        sx={{
                          borderColor: "#6252E7",
                          borderBottomWidth: 2,
                        }}
                      />
                    </Stack>
                    <StyledRating
                      name="like"
                      defaultValue={1}
                      // getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                      precision={1}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      max={1}
                    />
                  </Stack>
                </Box>
                <Stack direction="row" spacing={1.3}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 26, height: 26 }}
                  />
                </Stack>
                <Stack direction="column" spacing={1.3}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#B5B5B6",
                      fontWeight: 400,
                    }}
                  >
                    About Bored Ape
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFF5",
                      fontWeight: 400,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFF5",
                      fontWeight: 400,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleNftPage;
