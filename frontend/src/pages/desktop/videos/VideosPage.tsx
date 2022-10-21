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
  Link,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import moment from "moment";
import ReactPlayer from "react-player";
import useMediaQuery from "@mui/material/useMediaQuery";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { videoListRequest } from "../../../store/action";
import { Helmet } from "react-helmet-async";

const VideosPage = () => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  const videoList = useSelector((data: any) => {
    return data?.homeReducer?.video_list?.data?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(videoListRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <title> Videos | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Videos | CoinXhigh.com" />
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
      <Grid container>
        {/* <Grid item xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={1}>
          <BreadCrumbs
            // data={airdropSinglePageDetails && airdropSinglePageDetails?.data}
            home="Home"
            path="Videos"
          />
        </Grid>
        <Grid item xs={12} pt={3}>
          <Stack direction="column" spacing={0.1}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Videos
            </Typography>
            {/* <Typography variant="caption" sx={{ color: "#CDCED1" }}>
              A unique collection of master ....
            </Typography> */}
          </Stack>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {videoList &&
              videoList?.map((item: any, index: number) => (
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} mt={0}>
                  <Box
                    key={index}
                    sx={{
                      // flexGrow: 1,
                      padding: 0,
                      borderRadius: 0,
                      backgroundColor: "#020419",
                    }}
                    width="100%"
                  >
                    <Stack
                      direction={{ xs: "column", sm: "column", md: "column" }}
                      justifyContent="space-between"
                      alignItems={{
                        xs: "flex-end",
                        sm: "flex-end",
                        md: "flex-end",
                      }}
                      width="100%"
                    >
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "column" }}
                        spacing={2}
                        width="100%"
                      >
                        <div>
                          <ReactPlayer
                            url={item && item?.v_url}
                            width={"auto"}
                            height={250}
                          />
                        </div>
                        <Stack
                          direction={{
                            xs: "column",
                            sm: "column",
                            md: "column",
                          }}
                          spacing={0.6}
                          // sx={{ maxWidth: 380 }}
                          alignItems={{
                            xs: "flex-start",
                            sm: "flex-start",
                            md: "flex-start",
                          }}
                        >
                          <Link
                            href={item?.v_url}
                            target="_blank"
                            sx={{ textDecoration: "none" }}
                          >
                            {" "}
                            <Typography
                              variant="h6"
                              sx={{
                                color: "#FFFFF5",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                                wordBreak: "break-all",
                              }}
                              textAlign={{
                                xs: "left",
                                sm: "left",
                                md: "left",
                              }}
                            >
                              {item && item?.v_title}.
                            </Typography>
                          </Link>

                          <Typography
                            variant="caption"
                            sx={{ color: "#939393", wordBreak: "break-all" }}
                            textAlign={{ xs: "left", sm: "left", md: "left" }}
                          >
                            {item && item?.v_sub_title}.
                          </Typography>
                        </Stack>
                      </Stack>

                      <Typography
                        variant="h6"
                        sx={{
                          color: "#21C879",
                          fontWeight: 500,
                          fontSize: ".9rem",
                        }}
                      >
                        {moment(new Date(item?.created_at)).format(
                          "DD MMM YYYY"
                        )}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default VideosPage;
