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
  Pagination,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import moment from "moment";
import ReactPlayer from "react-player";
import useMediaQuery from "@mui/material/useMediaQuery";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { videoListPageRequest, videoListRequest } from "../../../store/action";
import { Helmet } from "react-helmet-async";

const VideosPage = () => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("md"));

  const videoList = useSelector((data: any) => {
    return data?.videoReducer?.video_list;
  });

  const [page, setPage] = useState<any>(1);

  const pageHandleChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(videoListPageRequest(page, successHandler, errorHandler));
  }, [dispatch, page]);

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

        {videoList?.response === true && (
          <Grid item xs={12} mt={3}>
            <Grid container rowSpacing={2} columnSpacing={2}>
              {videoList &&
                videoList?.data?.data?.map((item: any, index: number) => (
                  <Grid item xs={6} sm={6} md={3} lg={3} xl={3} mt={0}>
                    <Box
                      key={index}
                      sx={{
                        // flexGrow: 1,
                        padding: 0,
                        borderRadius: 3,
                        backgroundColor: "#020419",
                        border: "1px solid #243464",
                        overflow: "hidden",
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
                          direction={{
                            xs: "column",
                            sm: "column",
                            md: "column",
                          }}
                          spacing={0}
                          width="100%"
                          height={xsBreakPoint === true ? 395 : 250}
                        >
                          <div>
                            <ReactPlayer
                              url={item && item?.v_url}
                              width={"auto"}
                              height={xsBreakPoint === true ? 250 : 150}
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
                            p={2}
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
                                  fontSize:
                                    xsBreakPoint === true ? "1.1rem" : ".9rem",
                                  wordBreak: "break-all",
                                }}
                                textAlign={{
                                  xs: "left",
                                  sm: "left",
                                  md: "left",
                                }}
                              >
                                {xsBreakPoint === true
                                  ? item && item?.v_title?.length > 80
                                    ? item?.v_title?.slice(0, 80) + "..."
                                    : item?.v_title
                                  : item?.v_title?.length > 35
                                  ? item?.v_title?.slice(0, 33) + "..."
                                  : item?.v_title}
                                .
                              </Typography>
                            </Link>

                            <Typography
                              variant="caption"
                              sx={{ color: "#939393", wordBreak: "break-all" }}
                              textAlign={{ xs: "left", sm: "left", md: "left" }}
                            >
                              {xsBreakPoint === true
                                ? item && item?.v_sub_title?.length > 100
                                  ? item?.v_sub_title?.slice(0, 100) + "..."
                                  : item?.v_sub_title
                                : item?.v_sub_title?.length > 35
                                ? item?.v_sub_title?.slice(0, 35) + "..."
                                : item?.v_sub_title}
                              .
                            </Typography>
                          </Stack>
                        </Stack>
                        <Stack
                          direction={{ xs: "row", sm: "row", md: "row" }}
                          spacing={2}
                          p={2}
                        >
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
                      </Stack>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        )}

        <Box
          sx={{
            width: "100%",
            borderRadius: 5,
            border: "1.5px solid #080b2c",
            backgroundColor: "#01061b",
          }}
          py={1.3}
          px={1}
          mt={4}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Pagination
              count={Math.ceil(
                parseInt(videoList?.data?.total) /
                  parseInt(videoList?.data?.per_page)
              )}
              page={page}
              onChange={pageHandleChange}
              color="primary"
              // variant="outlined"
              sx={{
                ul: {
                  "& .MuiPaginationItem-root": {
                    "&.Mui-selected": {
                      background: "#020E36",
                      color: "#FFFFFF",
                      // borderRadius: '50%',
                    },
                    background: "transparent",
                    color: "#FFFFFF",
                  },
                },
              }}
            />
          </Stack>
        </Box>
        {/* <Divider
                      variant="fullWidth"
                      sx={{ borderColor: "#0D1436", borderBottomWidth: 2.5 }}
                      flexItem
                    /> */}
      </Grid>
    </Fragment>
  );
};

export default VideosPage;
