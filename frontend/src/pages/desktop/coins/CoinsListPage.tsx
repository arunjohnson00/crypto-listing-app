import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Box, Avatar, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

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
  coinsRecentlyAddedRequest,
  coinsBiggestGainersRequest,
  coinsBiggestLosersRequest,
  coinsFeaturedCoinListRequest,
  coinsCryptoCurrenciesListRequest,
  coinsCryptoCurrenciesNewRequest,
  coinsCryptoCurrenciesPresaleRequest,
  coinsCryptoCurrenciesTodaysBestRequest,
  coinsCryptoCurrenciesTabRequest,
  coinsCryptoCurrenciesMostVotedRequest,
} from "../../../store/action";

import FeaturedCoinLineTopImage from "../../../assets/home/feature-coin-line-top.png";
import FeaturedCoinLineBottomImage from "../../../assets/home/feature-coin-line-bottom.png";
import FeaturedCoinLineLeftImage from "../../../assets/home/feature-coin-line-left.png";
import FeaturedCoinLineRightImage from "../../../assets/home/feature-coin-line-right.png";
import Carousel from "react-multi-carousel";
import MobileFeaturedCoinCards from "../../../components/mobile/cards/featuredcoin/MobileFeaturedCoinCards";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";

const responsiveFeatured: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
    slidesToSlide: 1,
  },
};

const CoinsListPage = ({ windowInnerWidth }: any) => {
  const location: any = useLocation();
  const theme = useTheme();
  const dispatch: any = useDispatch();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [tableTabvalue, setTableTabValue] = useState<any>("");
  const [tableData, setTableData] = useState<any>([]);
  const [page, setPage] = useState({ pagination: 1, scroll: true });
  const [rowsPerPage, setRowsPerPage] = useState(20);
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
    return data?.coinsReducer?.featured_coin_list?.data;
  });

  const tabIndex = useSelector((data: any) => {
    return data?.coinsReducer?.crypto_currencies_tab;
  });

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage({ ...page, pagination: newPage, scroll: true });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 20));
    setPage({ ...page, pagination: 1 });
  };

  const tableTabHandleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setTableTabValue(newValue);
    setTableData([]);
    setPage({ ...page, pagination: 1 });
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

    dispatch(
      coinsFeaturedCoinListRequest("noData", successHandler, errorHandler)
    );
  }, [dispatch, setPreLoader]);

  useEffect(() => {
    setHTMLTablePreLoader({
      ...htmlTablePreLoader,

      html_table: true,
    });

    const successHandler = (res: any) => {
      page?.scroll === true
        ? setTableData([...tableData, ...res?.data?.data])
        : setTableData([...res?.data?.data]);
      // tableTabvalue
      // ? setTableData(res?.data?.data)
      res?.data?.data !== undefined &&
        setHTMLTablePreLoader({
          ...htmlTablePreLoader,

          html_table: false,
        });
    };
    const errorHandler = (err: any) => {};

    location?.pathname === "/coins" &&
      dispatch(
        coinsCryptoCurrenciesListRequest(
          page.pagination,
          successHandler,
          errorHandler
        )
      );
    location?.pathname === "/coins/recently-added" &&
      dispatch(
        coinsRecentlyAddedRequest(page.pagination, successHandler, errorHandler)
      );
    location?.pathname === "/coins/biggest-gainers" &&
      dispatch(
        coinsBiggestGainersRequest(
          page.pagination,
          successHandler,
          errorHandler
        )
      );
    location?.pathname === "/coins/top-losers" &&
      dispatch(
        coinsBiggestLosersRequest(page.pagination, successHandler, errorHandler)
      );
    location?.pathname === "/coins/most-voted" &&
      dispatch(
        coinsCryptoCurrenciesMostVotedRequest(
          page.pagination,
          successHandler,
          errorHandler
        )
      );

    location?.pathname === "/coins/watch-list" &&
      dispatch(
        coinsBiggestLosersRequest(page.pagination, successHandler, errorHandler)
      );

    location?.pathname === "/coins/presales" &&
      dispatch(
        coinsCryptoCurrenciesPresaleRequest(
          page.pagination,
          successHandler,
          errorHandler
        )
      );
  }, [location, page]);

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          {windowInnerWidth >= 900 ? (
            <LatestNewsScroll />
          ) : (
            <MobileLatestNewsCardScrollTop />
          )}
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
        {windowInnerWidth <= 900 ? (
          <Fragment>
            <Grid
              item
              xs={12}
              sx={{
                alignItems: "center",
                paddingTop: "23px",
                paddingBottom: "23px",
              }}
            >
              <Stack
                direction="row"
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                  Featured Coin
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#424798", fontWeight: "bold" }}
                >
                  View
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                alignItems: "center",
                paddingTop: "0px",
                paddingBottom: "23px",
              }}
            >
              {featuredCoinList && (
                <Carousel
                  // centerMode={true}
                  responsive={responsiveFeatured}
                  infinite={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  arrows={true}
                  swipeable={true}
                  partialVisible={true}
                  autoPlay={false}
                  draggable={true}
                  minimumTouchDrag={10}
                  keyBoardControl={true}
                  shouldResetAutoplay={false}
                >
                  {featuredCoinList &&
                    featuredCoinList?.map((data: any, index: number) => (
                      <Box key={index}>
                        <MobileFeaturedCoinCards cardData={data} />
                      </Box>
                    ))}
                </Carousel>
              )}
            </Grid>
          </Fragment>
        ) : (
          <Grid
            item
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "23px",
              paddingBottom: "23px",
            }}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
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
                  direction={
                    windowInnerWidth >= 1200 ? "column" : "row-reverse"
                  }
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
                          windowInnerWidth &&
                          windowInnerWidth >= 1200 &&
                          "mixed"
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
                {
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
                      justifyContent: "flex-start",
                    }}
                  >
                    {featuredCoinList &&
                      featuredCoinList?.map((data: any, index: number) => (
                        <Grid xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                          <FeaturedCoinCards cardData={data} />
                        </Grid>
                      ))}
                  </Stack>
                }
              </Grid>
            </Stack>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} mt={3}>
        <Grid container spacing={0}>
          <Box
            sx={{
              backgroundColor: "#03091d",
              flexGrow: 1,
              overflowX: "hidden",
            }}
            padding={1.5}
          >
            <Grid xs={12} pt={2}>
              <TableButtonGroup
                tableTabvalue={tableTabvalue}
                setTableTabValue={setTableTabValue}
                tableTabHandleChange={tableTabHandleChange}
              />
            </Grid>
            <Grid xs={12}>
              {location?.pathname === "/coins/watch-list" ? (
                <Box p={5.5}>
                  <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
                    Sorry!. you are not adding any coin to the watchlist yet.
                  </Typography>
                </Box>
              ) : (
                <ListingTable
                  tableData={tableData && tableData}
                  page={page}
                  handleChangePage={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  setPage={setPage}
                />
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CoinsListPage;
