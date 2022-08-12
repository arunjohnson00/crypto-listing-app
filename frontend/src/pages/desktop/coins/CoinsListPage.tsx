import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Box, Avatar, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

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
import {
  featuredCoinListRequest,
  cryptoCurrenciesListRequest,
  cryptoCurrenciesTodaysBestRequest,
  cryptoCurrenciesNewRequest,
  cryptoCurrenciesPresaleRequest,
} from "../../../store/action";

import FeaturedCoinLineTopImage from "../../../assets/home/feature-coin-line-top.png";
import FeaturedCoinLineBottomImage from "../../../assets/home/feature-coin-line-bottom.png";
import FeaturedCoinLineLeftImage from "../../../assets/home/feature-coin-line-left.png";
import FeaturedCoinLineRightImage from "../../../assets/home/feature-coin-line-right.png";

const responsiveNFT: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.5,
  },
};

const CoinsListPage = ({ windowInnerWidth }: any) => {
  const theme = useTheme();
  const dispatch: any = useDispatch();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));
  const { parse } = require("rss-to-json");

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();
  const [tableData, setTableData] = useState<any>();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [preLoader, setPreLoader] = useState<any>({
    recently_added: true,
    biggest_gainers: true,
    biggest_loosers: true,
    featured_coin_list: true,
    todays_performer: true,
  });

  const [htmlTablePreLoader, setHTMLTablePreLoader] = useState<any>({
    html_table: true,
  });
  const featuredCoinSkelton = [1, 2, 3, 4, 5, 6, 7, 8];
  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });

  const tabIndex = useSelector((data: any) => {
    return data?.homeReducer?.crypto_currencies_tab;
  });

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      setPreLoader({
        ...preLoader,
        recently_added: false,
        biggest_gainers: false,
        biggest_loosers: false,
        featured_coin_list: false,
        todays_performer: false,
      });
    };
    const errorHandler = (err: any) => {};

    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
  }, [dispatch, setPreLoader]);

  useEffect(() => {
    setHTMLTablePreLoader({
      ...htmlTablePreLoader,

      html_table: true,
    });
    const successHandler = (res: any) => {
      setTableData(res?.data?.data);
      res?.data?.data !== undefined &&
        setHTMLTablePreLoader({
          ...htmlTablePreLoader,

          html_table: false,
        });
    };
    const errorHandler = (err: any) => {};

    tabIndex === 0 &&
      dispatch(cryptoCurrenciesListRequest(page, successHandler, errorHandler));
    tabIndex === 2 &&
      dispatch(
        cryptoCurrenciesTodaysBestRequest(
          "noData",
          successHandler,
          errorHandler
        )
      );
    tabIndex === 4 &&
      dispatch(
        cryptoCurrenciesNewRequest("noData", successHandler, errorHandler)
      );
    tabIndex === 6 &&
      dispatch(
        cryptoCurrenciesPresaleRequest("noData", successHandler, errorHandler)
      );
  }, [dispatch, tabIndex, setHTMLTablePreLoader, page]);

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
          <Stack
            direction="row"
            spacing={3}
            sx={{
              borderTop: "1px solid #1a1545",
              borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#04091d",
              alignItems: "center",
            }}
          >
            <Grid xs={4} sm={4} md={3} lg={2} xl={2}>
              <LatestNewsHeading />
            </Grid>
            <Grid xs={8} sm={8} md={9} lg={10} xl={10}>
              <Stack direction="row" spacing={3}>
                <Marquee
                  style={{ background: "none" }}
                  pauseOnHover={true}
                  gradient={false}
                  loop={0}
                  delay={0}
                  speed={70}
                >
                  {feed?.items?.map((rssFeed: any, index: number) => {
                    return (
                      <NewsCardTop
                        rssFeed={rssFeed}
                        timeAgo={timeAgo}
                        key={index}
                      />
                    );
                  })}
                </Marquee>
              </Stack>
            </Grid>
          </Stack>
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
              lg={0.4}
              xl={0.4}
              sx={{
                alignItems: "center",
              }}
            >
              <Stack
                direction={windowInnerWidth >= 1200 ? "column" : "row-reverse"}
                sx={{
                  alignItems: "flex-end",
                }}
                py={windowInnerWidth >= 1200 ? 0 : 1}
                spacing={2}
              >
                {windowInnerWidth >= 1200 ? (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineTopImage}
                    sx={{
                      borderRadius: 0,
                      width: 20,
                      height: 120,
                    }}
                  />
                ) : (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineRightImage}
                    sx={{
                      borderRadius: 0,
                      width: 120,
                      height: 20,
                    }}
                  />
                )}

                <Box sx={{ width: "auto" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#FFFFFF",
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
                </Box>

                {windowInnerWidth >= 1200 ? (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineBottomImage}
                    sx={{
                      borderRadius: 0,
                      width: 20,
                      height: 110,
                    }}
                  />
                ) : (
                  <Avatar
                    alt=""
                    src={FeaturedCoinLineLeftImage}
                    sx={{
                      borderRadius: 0,
                      width: 110,
                      height: 20,
                    }}
                  />
                )}
              </Stack>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={11.6} xl={11.6}>
              {preLoader?.featured_coin_list === true ? (
                <Stack
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={0}
                  sx={{
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {featuredCoinSkelton &&
                    featuredCoinSkelton.map((data: any, index: number) => (
                      <Grid xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#010822",
                            color: "#3D484F",
                          }}
                          m={1}
                        >
                          <Skeleton
                            animation="wave"
                            variant="rectangular"
                            width={"100%"}
                            height={280}
                            sx={{
                              px: 2,
                              pb: 2,
                              pt: 2,
                              bgcolor: "rgb(245 245 245 / 11%)",
                              borderRadius: "6px",
                              "::after": {
                                background:
                                  "linear-gradient(90deg, transparent, #6252e84f 56%, transparent)",
                              },
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                </Stack>
              ) : (
                <Stack
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={0}
                  sx={{
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {featuredCoinList &&
                    featuredCoinList?.map((data: any, index: number) => (
                      <Grid xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                        <FeaturedCoinCards cardData={data} />
                      </Grid>
                    ))}
                </Stack>
              )}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Grid xs={12} mt={7}>
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
              <ListingTable
                tableData={tableData && tableData}
                page={page}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CoinsListPage;
