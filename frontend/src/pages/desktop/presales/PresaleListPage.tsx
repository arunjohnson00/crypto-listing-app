import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  CardMedia,
  Pagination,
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

const PresaleListPage = ({ windowInnerWidth }: any) => {
  const dispatch: any = useDispatch();
  const PresaleList = useSelector((data: any) => {
    return data?.presaleReducer?.presale_listings?.data;
  });
  const [value, setValue] = useState<any>(0);

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

    dispatch(presalePageListingRequest(page, successHandler, errorHandler));
  }, [dispatch, page]);

  return (
    <Fragment>
      <Helmet>
        <title>Presale | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Presale  | CoinXhigh.com" />
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
      <Grid
        container
        spacing={0}
        sx={{
          dispaly: "flex",
        }}
      >
        {/* <Grid xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid> */}
        {/* <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "23px",
            paddingBottom: "23px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            spacing={2}
            alignItems={{ xs: "center" }}
          >
            <Grid
              xs={12}
              sm={12}
              md={12}
              lg={1}
              xl={1}
              sx={{
                alignItems: "center",
              }}
            >
              <Stack
                direction="column"
                sx={{ alignItems: "center" }}
                py={windowInnerWidth >= 1200 ? 0 : 3}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    writingMode: `${
                      windowInnerWidth &&
                      windowInnerWidth >= 1200 &&
                      "vertical-lr"
                    }`,
                    textOrientation: `${
                      windowInnerWidth && windowInnerWidth >= 1200 && "mixed"
                    }`,
                    transform: `${
                      windowInnerWidth &&
                      windowInnerWidth >= 1200 &&
                      "rotate(180deg)"
                    }`,
                  }}
                >
                  Featured Coins
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={11} xl={11}>
              <Grid container>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
                  <FeaturedCoinCards />
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Grid> */}
        {/* <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: "center",
              paddingTop: "0px",
              paddingBottom: "23px",
            }}
          >
            <Grid item xs={12} sm={6} md={8} lg={8} xl={8} mb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} mb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Grid>
        </Grid> */}
        <Grid container>
          <Grid item xs={12} mt={3}>
            <BreadCrumbs
              // data={airdropSinglePageDetails && airdropSinglePageDetails?.data}
              home="Home"
              path="Presales"
            />
          </Grid>
          <Grid item xs={12} pt={3}>
            <Stack direction="column" spacing={0.1}>
              <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                Presales
              </Typography>
              {/* <Typography variant="caption" sx={{ color: "#CDCED1" }}>
              A unique collection of master ....
            </Typography> */}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={2}>
            <Stack
              direction="row"
              spacing={0.1}
              justifyContent={{ xs: "center", sm: "center", md: "flex-end" }}
            >
              <PresaleFilterButtonGroup value={value} setValue={setValue} />
            </Stack>
          </Grid>
        </Grid>

        {value === 0 && (
          <Grid container spacing={2} py={3}>
            {PresaleList &&
              PresaleList?.data?.map((item: any, index: number) => (
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                  <PresaleCards data={item} />
                </Grid>
              ))}
          </Grid>
        )}

        {value === 1 && (
          <Grid container spacing={2} py={3}>
            {PresaleList &&
              PresaleList?.data
                ?.filter(
                  (val: any) =>
                    moment(new Date()).isBetween(
                      new Date(val?.presale_start_date),
                      new Date(val?.presale_end_date)
                    ) === true ||
                    (moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                      moment(val?.presale_start_date).format("YYYY-MM-DD")
                    ) === true &&
                      moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                        moment(val?.presale_end_date).format("YYYY-MM-DD")
                      ) === true)
                )
                .map((item: any, index: number) => (
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                    <PresaleCards data={item} />
                  </Grid>
                ))}
          </Grid>
        )}

        {value === 2 && (
          <Grid container spacing={2} py={3}>
            {PresaleList &&
              PresaleList?.data
                ?.filter(
                  (val: any) =>
                    moment(new Date(val?.presale_start_date)).isAfter(
                      new Date()
                    ) === true
                )
                .map((item: any, index: number) => (
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                    <PresaleCards data={item} />
                  </Grid>
                ))}
          </Grid>
        )}

        {value === 3 && (
          <Grid container spacing={2} py={3}>
            {PresaleList &&
              PresaleList?.data
                ?.filter(
                  (val: any) =>
                    moment(moment(new Date()).format("YYYY-MM-DD")).isAfter(
                      moment(val?.presale_end_date).format("YYYY-MM-DD")
                    ) === true
                )
                .map((item: any, index: number) => (
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={index}>
                    <PresaleCards data={item} />
                  </Grid>
                ))}
          </Grid>
        )}

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 5,
              border: "1.5px solid #080b2c",
              backgroundColor: "#01061b",
            }}
            py={1.3}
            px={1}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <Pagination
                count={parseInt(PresaleList?.total)}
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
      </Grid>
      {/* <Grid xs={12} mt={7}>
        <Grid container spacing={5}>
          <Box
            sx={{
              backgroundColor: "#03091d",
              flexGrow: 1,
              overflowX: "hidden",
            }}
            padding={1.5}
          >
            <Grid xs={12} pt={2}>
              <TableButtonGroup />
            </Grid>
            <Grid xs={12}>
              <ListingTable />
            </Grid>
          </Box>
        </Grid>
      </Grid> */}
    </Fragment>
  );
};

export default PresaleListPage;
