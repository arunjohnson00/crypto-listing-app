import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
  Skeleton,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useDispatch, useSelector } from "react-redux";

import FullWidthSlider from "../../../components/mobile/slider/fullwidthslider/FullWidthSlider";
import UpcomingAmaCard from "../../../components/mobile/cards/upcomingamacard/UpcomingAmaCard";
import MobileIconMenuCard from "../../../components/mobile/cards/iconmenucard/MobileIconMenuCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileFeaturedCoinCards from "../../../components/mobile/cards/featuredcoin/MobileFeaturedCoinCards";
import MobileTrendingCoins from "../../../components/mobile/cards/trendingcoins/MobileTrendingCoins";
import MobileVideoCard from "../../../components/mobile/cards/videocard/MobileVideoCard";
import MobileTableBtnGroup from "../../../components/mobile/buttongroup/tablebtngroup/MobileTableBtnGroup";
import MobileTableFilterBtn from "../../../components/mobile/buttongroup/tablefilterbtn/MobileTableFilterBtn";
import MobileHtmlTable from "../../../components/mobile/htmltable/MobileHtmlTable";
import MobileViewMoreBtn from "../../../components/mobile/button/viewmorebtn/MobileViewMoreBtn";
import MobileNftCollectionCard from "../../../components/mobile/cards/nftcollection/MobileNftCollectionCard";

import MobileMenuCards from "../../../components/mobile/cards/menucards/MobileMenuCards";
import MobileBannerMaps from "../../../components/mobile/banner/bannermap/MobileBannerMap";

import {
  featuredCoinListRequest,
  cryptoCurrenciesListRequest,
  cryptoCurrenciesTodaysBestRequest,
  cryptoCurrenciesNewRequest,
  cryptoCurrenciesPresaleRequest,
  menuCardRequest,
  videoListRequest,
  trendingCoinListRequest,
  latestNewsRequest,
} from "../../../store/action";
import { tableHeader } from "./helper";
import { Link } from "react-router-dom";
import MobileCryptoEventsCardSlider from "../../../components/mobile/cards/cryptoeventscardslider/MobileCryptoEventsCardSlider";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";
import MobileLatestNewsCardScroll from "../../../components/mobile/latestnews/MobileLatestNewsCardScroll";

const { parse } = require("rss-to-json");

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
const responsiveCryptoEvents = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const responsiveMenuCard: any = {
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
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};
const responsiveTrending: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const responsiveVideos: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const responsiveNFT: any = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MobileHomePage = () => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [tableData, setTableData] = useState<any>();
  const [preLoader, setPreLoader] = useState<any>({
    featured_coin_list: true,
    menu_card: true,
    video_list: true,
  });
  const [htmlTablePreLoader, setHTMLTablePreLoader] = useState<any>({
    html_table: true,
  });

  const menuCards = useSelector((data: any) => {
    return data?.homeReducer?.menu_cards?.data?.data;
  });
  const videoList = useSelector((data: any) => {
    return data?.homeReducer?.video_list?.data?.data;
  });
  const dispatch: any = useDispatch();
  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });
  const trendingCoinList = useSelector((data: any) => {
    return data?.homeReducer?.trending_coin_list?.data;
  });
  const NFTList = useSelector((data: any) => {
    return data?.homeReducer?.nft_listings?.data;
  });

  const tabIndex = useSelector((data: any) => {
    return data?.homeReducer?.crypto_currencies_tab;
  });

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
      dispatch(
        cryptoCurrenciesListRequest("noData", successHandler, errorHandler)
      );
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
  }, [dispatch, tabIndex, setHTMLTablePreLoader]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setPreLoader({
        ...preLoader,

        featured_coin_list: false,
        menu_card: false,
        video_list: false,
      });
    };
    const errorHandler = (err: any) => {};

    dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
    dispatch(menuCardRequest("noData", successHandler, errorHandler));
    dispatch(videoListRequest("noData", successHandler, errorHandler));
    dispatch(trendingCoinListRequest("noData", successHandler, errorHandler));
  }, [dispatch, setPreLoader]);

  return (
    <Grid
      container
      spacing={5}
      sx={{
        dispaly: "flex",
      }}
    >
      <Grid xs={12} sx={{ paddingTop: 3 }}>
        <MobileLatestNewsCardScrollTop />
      </Grid>

      <Grid xs={12} sx={{ paddingTop: 0 }}>
        <MobileCoinSlider />
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "23px",
          paddingBottom: "23px",
        }}
      >
        <FullWidthSlider />
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <UpcomingAmaCard />
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <MobileIconMenuCard />
      </Grid>

      <Grid
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
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        {preLoader?.featured_coin_list === true ? (
          <Carousel
            // centerMode={true}
            responsive={responsiveFeatured}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            partialVisible={true}
            autoPlay={false}
            draggable={true}
            swipeable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            <Box>
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
                  }}
                />
              </Box>
            </Box>
            <Box>
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
                  }}
                />
              </Box>
            </Box>
            <Box>
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
                  }}
                />
              </Box>
            </Box>
          </Carousel>
        ) : (
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

      <Grid
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
            Upcoming Events
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
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
            paddingBottom: "23px",
          }}
        >
          {" "}
          <MobileCryptoEventsCardSlider variant="ads" />
        </Grid>

        <Carousel
          responsive={responsiveCryptoEvents}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={false}
          autoPlay={false}
          draggable={true}
          swipeable={true}
          minimumTouchDrag={10}
          keyBoardControl={true}
          shouldResetAutoplay={false}
        >
          <Box>
            <MobileCryptoEventsCardSlider />
          </Box>
          <Box>
            <MobileCryptoEventsCardSlider />
          </Box>

          <Box>
            <MobileCryptoEventsCardSlider />
          </Box>

          <Box>
            <MobileCryptoEventsCardSlider />
          </Box>
        </Carousel>
      </Grid>

      {/* <Grid
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
            Trending Coin
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
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        {trendingCoinList && (
          <Carousel
            responsive={responsiveTrending}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            autoPlay={false}
            draggable={true}
            swipeable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            {trendingCoinList &&
              trendingCoinList?.map((item: any, index: number) => (
                <Box key={index}>
                  <MobileTrendingCoins data={item && item[0]} />
                </Box>
              ))}
          </Carousel>
        )}
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
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
            Videos
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
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        {videoList && (
          <Carousel
            // centerMode={true}
            responsive={responsiveVideos}
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
            {videoList &&
              videoList?.map((item: any, index: number) => (
                <Box key={index}>
                  <MobileVideoCard
                    url={item?.v_url}
                    title={item?.v_title}
                    sub_title={item?.v_sub_title}
                  />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid>

      <Grid
        container
        xs={12}
        sx={{
          alignItems: "center",
          marginTop: "30px",
          paddingBottom: "23px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={3}
          sx={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: " space-between",
          }}
        >
          <MobileTableBtnGroup />
          <MobileTableFilterBtn />
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
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

            alignItems: "center",
          }}
        >
          {htmlTablePreLoader?.html_table === true ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#010822",
                color: "#3D484F",
                width: "100%",
              }}
              m={1}
            >
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={"100%"}
                height={100}
                sx={{
                  px: 2,
                  pb: 2,
                  pt: 2,
                  bgcolor: "rgb(245 245 245 / 11%)",
                  borderRadius: "6px",
                }}
              />
            </Box>
          ) : (
            <MobileHtmlTable
              tableData={tableData && tableData}
              tableHeader={tableHeader}
              variant="crypto_currencies"
            />
          )}
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          sx={{
            //borderTop: "1px solid #1a1545",
            // borderBottom: "1px solid #1a1545",
            marginTop: "0px",
            paddingBottom: "23px",

            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <Link
            to="/coins"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>
      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "flex-start", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
            NFT Collections
          </Typography>
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        {NFTList && NFTList?.data && (
          <Carousel
            responsive={responsiveNFT}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            autoPlay={false}
            draggable={true}
            swipeable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            {NFTList &&
              NFTList?.data?.map((item: any, index: number) => (
                <Box key={index}>
                  <MobileNftCollectionCard data={item && item} index={index} />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          sx={{
            //borderTop: "1px solid #1a1545",
            // borderBottom: "1px solid #1a1545",
            marginTop: "0px",
            paddingBottom: "23px",

            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <MobileViewMoreBtn title="View more" />
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <Stack
          direction="row"
          sx={{ justifyContent: "flex-start", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
            Happening Now
          </Typography>
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
        }}
      >
        <MobileLatestNewsCardScroll />
      </Grid>
      <Grid
        xs={12}
        sx={{
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          sx={{
            //borderTop: "1px solid #1a1545",
            // borderBottom: "1px solid #1a1545",
            marginTop: "23px",
            paddingBottom: "23px",

            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <Link to="/news" style={{ textDecoration: "none" }}>
            {" "}
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>

      {/* <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "23px",
        }}
      >
        <MobileAdsCardHome />
      </Grid> */}

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          px={0}
          py={3}
          sx={{ alignItems: "center" }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "600", color: "#FFFFF5", textAlign: "center" }}
          >
            Find a better Card deal in few easy steps
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "500", color: "#93949C", textAlign: "center" }}
          >
            Bitcoin attempted a recovery wave above $32,000 against the US
            Dollar. BTC is struggling and remains at a risk of more losses below
            $30,000.
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "500", color: "#20b8ea" }}>
            We understand what you needs
          </Typography>
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        {menuCards && (
          <Carousel
            // centerMode={true}
            responsive={responsiveMenuCard}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            swipeable={true}
            partialVisible={true}
            autoPlay={false}
            draggable={true}
          >
            {menuCards &&
              menuCards?.map((item: any, index: any) => (
                <Box key={index}>
                  <MobileMenuCards
                    width="auto"
                    title={item?.title}
                    icon={item?.icon}
                    sub_title={item?.sub_title}
                    url={item?.url}
                  />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "23px",
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          px={0}
          py={3}
          sx={{ alignItems: "center" }}
        >
          {" "}
          <Typography
            variant="h4"
            sx={{ fontWeight: "300", color: "#FFFFF5", textAlign: "center" }}
          >
            <span style={{ color: "#09e2b1" }}> Our best users are</span> all
            over the world{" "}
            <span style={{ color: "#09e2b1" }}> with wide coverage</span>
          </Typography>
          <MobileBannerMaps />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileHomePage;
