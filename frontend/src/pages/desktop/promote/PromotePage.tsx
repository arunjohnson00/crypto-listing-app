import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";

import FeaturedCoinCards from "../../../components/desktop/cards/featuredcoin/FeaturedCoinCards";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListingTable from "../../../components/desktop/listingtable/ListingTable";
import TableButtonGroup from "../../../components/desktop/listingtable/tablebuttongroup/TableButtonGroup";
import PresaleFilterButtonGroup from "../../../components/desktop/buttongroup/presalefilterbuttongroup/PresaleFilterButtonGroup";
import PresaleCards from "../../../components/desktop/cards/presalecard/PresaleCards";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { Helmet } from "react-helmet-async";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { useDispatch, useSelector } from "react-redux";
import { presalePageListingRequest } from "../../../store/action";
import moment from "moment";
import VideoCard from "../../../components/desktop/cards/videocard/VideoCard";
import ReactPlayer from "react-player";
import CampaignIcon from "@mui/icons-material/Campaign";
import PromoteCard from "../../../components/desktop/cards/promotecard/PromoteCard";
import PromoteQuestionCard from "../../../components/desktop/cards/promotequestioncard/PromoteQuestionCard";

const PromotePage = ({ windowInnerWidth }: any) => {
  const dispatch: any = useDispatch();
  const PresaleList = useSelector((data: any) => {
    return data?.presaleReducer?.presale_listings?.data;
  });
  const [value, setValue] = useState<any>(0);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(presalePageListingRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  console.log(PresaleList);

  return (
    <Fragment>
      <Helmet>
        <title>Promote | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Promote  | CoinXhigh.com" />
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

      <Grid container mt={8} mb={15}>
        {/* <Grid item xs={12} mt={3}>
          <BreadCrumbs
            // data={airdropSinglePageDetails && airdropSinglePageDetails?.data}
            home="Home"
            path="Promote"
          />
        </Grid> */}
        {/* <Grid item xs={12} pt={3}>
          <Stack direction="column" spacing={0.1}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Promote
            </Typography>
         
          </Stack>
        </Grid> */}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Stack
                direction="column"
                spacing={4}
                px={5}
                py={2}
                height="100%"
                justifyContent="center"
                alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
              >
                <Stack
                  direction="column"
                  spacing={-0.5}
                  alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#6C7079",
                      //fontSize: "0.65rem",
                      fontWeight: 600,
                    }}
                  >
                    Advertise on
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#FFFFFF",

                      fontWeight: 600,
                    }}
                  >
                    CoinXhigh
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                    textAlign: { xs: "center", sm: "center", md: "left" },
                  }}
                >
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={2}
                  justifyContent="flex-start"
                >
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#3351B2",
                      borderRadius: 3,
                      px: 4,
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#5734B4",
                      borderRadius: 3,
                      px: 4,
                    }}
                  >
                    Media Kit
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box mr={2} px={5} py={2}>
                {/* <CardMedia
        component="img"
        height="130"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
                <Box sx={{ borderRadius: 3, height: 350, overflow: "hidden" }}>
                  <ReactPlayer
                    url={"https://www.youtube.com/watch?v=zrrUUULv-Nw"}
                    width="100%"
                    height={350}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            mt={8}
            sx={{
              background:
                "linear-gradient(to bottom, #070F34 0%, #01061A 100%)",
              borderRadius: 6,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box mr={2} px={5} py={5}>
                  <Box
                    sx={{ borderRadius: 0, height: 350, overflow: "hidden" }}
                  >
                    <CardMedia
                      component="img"
                      height="350"
                      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Stack
                  direction="column"
                  spacing={4}
                  px={5}
                  height="100%"
                  justifyContent="center"
                >
                  <Stack direction="column" spacing={0}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#FFFFFF",

                        fontWeight: 600,
                        textAlign: { xs: "center", sm: "center", md: "right" },
                      }}
                    >
                      Why CoinXhigh ?
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      textAlign: { xs: "center", sm: "center", md: "right" },
                    }}
                  >
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            mt={4}
            sx={{
              background:
                "linear-gradient(to bottom, #070F34 0%, #01061A 100%)",
              borderRadius: 6,
            }}
            py={10}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={2}
                    alignItems="center"
                    width={{ xs: "100%", sm: "100%", md: "50%" }}
                  >
                    <Divider
                      sx={{
                        borderBottomColor: "#131D4A",
                        borderBottomWidth: 2,
                        flexGrow: 1,
                      }}
                      flexItem
                      variant="middle"
                      orientation="horizontal"
                    />{" "}
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                      }}
                    >
                      Type of Ads we offer
                    </Typography>{" "}
                    <Divider
                      sx={{
                        borderBottomColor: "#131D4A",
                        borderBottomWidth: 2,
                        flexGrow: 1,
                      }}
                      flexItem
                      variant="middle"
                      orientation="horizontal"
                    />
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  mt={4}
                >
                  <PromoteCard
                    title="Banner Ads"
                    icon={<CampaignIcon sx={{ color: "#179db5" }} />}
                  />
                  <PromoteCard
                    title="Search Ads"
                    icon={<CampaignIcon sx={{ color: "#179db5" }} />}
                  />
                  <PromoteCard
                    title="Featured Coins"
                    icon={<CampaignIcon sx={{ color: "#179db5" }} />}
                  />
                  <PromoteCard
                    title="Popup Ads"
                    icon={<CampaignIcon sx={{ color: "#179db5" }} />}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box
            mt={4}
            sx={{
              background:
                "linear-gradient(to bottom, #070F34 0%, #01061A 100%)",
              borderRadius: 6,
            }}
            py={10}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={2}
                    alignItems="center"
                    width={{ xs: "100%", sm: "100%", md: "50%" }}
                  >
                    <Divider
                      sx={{
                        borderBottomColor: "#131D4A",
                        borderBottomWidth: 2,
                        flexGrow: 1,
                      }}
                      flexItem
                      variant="middle"
                      orientation="horizontal"
                    />{" "}
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "1.3rem",
                        fontWeight: 500,
                      }}
                    >
                      Frequently Added Questions
                    </Typography>{" "}
                    <Divider
                      sx={{
                        borderBottomColor: "#131D4A",
                        borderBottomWidth: 2,
                        flexGrow: 1,
                      }}
                      flexItem
                      variant="middle"
                      orientation="horizontal"
                    />
                  </Stack>
                </Stack>
                <Stack
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  mt={4}
                  mx={2}
                >
                  <PromoteQuestionCard
                    question="Question 1"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."
                  />
                  <PromoteQuestionCard
                    question="Question 2"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."
                  />
                  <PromoteQuestionCard
                    question="Question 3"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed malesuada lobortis pretium."
                  />
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PromotePage;
