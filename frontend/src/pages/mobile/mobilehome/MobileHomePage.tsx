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
  IconButton,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FullWidthSlider from "../../../components/mobile/slider/fullwidthslider/FullWidthSlider";
import UpcomingAmaCard from "../../../components/mobile/cards/upcomingcard/UpcomingCard";
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
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
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
  eventListRequest,
  nftListingRequest,
  recentlyAddedRequest,
  cryptoCurrenciesRecentlyAddedRequest,
} from "../../../store/action";
import { tableHeader } from "./helper";
import { Link } from "react-router-dom";
import MobileCryptoEventsCardSlider from "../../../components/mobile/cards/cryptoeventscardslider/MobileCryptoEventsCardSlider";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";
import MobileLatestNewsCardScroll from "../../../components/mobile/latestnews/MobileLatestNewsCardScroll";
import UpcomingCard from "../../../components/mobile/cards/upcomingcard/UpcomingCard";

const { parse } = require("rss-to-json");
const serverAPIUrl = process.env.REACT_APP_API_URL;
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
    items: 1,
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
  const dispatch: any = useDispatch();
  const [tableData, setTableData] = useState<any>();
  const [preLoader, setPreLoader] = useState<any>({
    featured_coin_list: true,
    menu_card: true,
    video_list: true,
  });
  const [vote, setVote] = useState<any>({
    initial: false,
    completed: false,
    captcha: false,
  });
  const [tableFilter, setTableFilter] = useState(false);
  const [htmlTablePreLoader, setHTMLTablePreLoader] = useState<any>({
    html_table: true,
  });

  const menuCards = useSelector((data: any) => {
    return data?.homeReducer?.menu_cards?.data?.data;
  });
  const videoList = useSelector((data: any) => {
    return data?.homeReducer?.video_list?.data?.data;
  });

  const featuredCoinList = useSelector((data: any) => {
    return data?.homeReducer?.featured_coin_list?.data;
  });
  const trendingCoinList = useSelector((data: any) => {
    return data?.homeReducer?.trending_coin_list?.data;
  });
  const NFTList = useSelector((data: any) => {
    return data?.homeReducer?.nft_listings?.data;
  });

  const eventList = useSelector((data: any) => {
    return data?.homeReducer?.events_list?.data;
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
        cryptoCurrenciesRecentlyAddedRequest(
          "noData",
          successHandler,
          errorHandler
        )
      );
    tabIndex === 6 &&
      dispatch(
        cryptoCurrenciesPresaleRequest("noData", successHandler, errorHandler)
      );
  }, [dispatch, tabIndex, setHTMLTablePreLoader, vote]);

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
    dispatch(nftListingRequest("noData", successHandler, errorHandler));
    dispatch(eventListRequest("noData", successHandler, errorHandler));
  }, [dispatch, setPreLoader]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    vote?.completed === true &&
      dispatch(featuredCoinListRequest("noData", successHandler, errorHandler));
  }, [vote]);

  const filterBtnHandler = () => {
    setTableFilter(!tableFilter);
  };

  return (
    <Grid container rowSpacing={2}>
      <Helmet>
        <title>
          Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your
          favourite Crypto projects. | CoinXhigh.com
        </title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta
          property="og:title"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
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
      <Grid item xs={12}>
        <MobileLatestNewsCardScrollTop />
      </Grid>

      <Grid item xs={12}>
        <MobileCoinSlider />
      </Grid>

      {/* <Grid
        item xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "23px",
          paddingBottom: "23px",
        }}
      >
        <FullWidthSlider />
      </Grid> */}

      {/* <Grid item xs={12}>
        <UpcomingCard />
      </Grid> */}

      <Grid item xs={12}>
        <MobileIconMenuCard />
      </Grid>

      {featuredCoinList && featuredCoinList?.length > 0 && (
        <Grid item xs={12} mt={1.5} mb={1.5}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: "1.1rem", color: "#FFD700" }}
            >
              Promoted Coins
            </Typography>
            <Link
              to="/promoted-coins"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MobileViewMoreBtn title="View more" />
            </Link>
          </Stack>
        </Grid>
      )}

      {/* <Grid item xs={12}>
        {featuredCoinList && (
          <Carousel
            // centerMode={true}
            responsive={responsiveFeatured}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            swipeable={true}
            partialVisible={true}
            autoPlay={true}
            draggable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
            autoPlaySpeed={3500}
          >
            {featuredCoinList &&
              featuredCoinList?.map((data: any, index: number) => (
                <Box key={index}>
                  <MobileFeaturedCoinCards cardData={data} />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid> */}

      {featuredCoinList && featuredCoinList?.length > 0 && (
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
            }}
          >
            <MobileHtmlTable
              tableData={featuredCoinList && featuredCoinList}
              tableHeader={tableHeader}
              variant="featured_coins"
              vote={vote}
              setVote={setVote}
            />
          </Stack>
        </Grid>
      )}

      <Grid item xs={12} mt={1.5} mb={1.5}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "1.1rem", color: "#FFD700" }}
          >
            Upcoming Events
          </Typography>
          <Link
            to="/crypto-events"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        {/* <Grid
          item xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
            paddingBottom: "23px",
          }}
        >
          {" "}
          <MobileCryptoEventsCardSlider variant="ads" />
        </Grid> */}

        {eventList && (
          <Carousel
            responsive={responsiveCryptoEvents}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            autoPlay={true}
            draggable={true}
            swipeable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            {eventList &&
              eventList?.map((item: any, index: number) => (
                <Box key={index}>
                  <MobileCryptoEventsCardSlider data={item} />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid>

      {/* <Grid
        item xs={12}
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
        item xs={12}
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

      <Grid item xs={12} mt={1.5} mb={1.5}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "1.1rem", color: "#FFD700" }}
          >
            Videos
          </Typography>
          <Link
            to="/videos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        {videoList && (
          <Carousel
            // centerMode={true}
            responsive={responsiveVideos}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            swipeable={true}
            partialVisible={true}
            autoPlay={true}
            draggable={true}
            minimumTouchDrag={10}
            autoPlaySpeed={4000}
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
      <Grid item xs={12} mt={1.5} mb={0}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "1.1rem", color: "#FFD700" }}
          >
            CryptoCurrencies
          </Typography>
          <Link
            to="/coins"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>

      <Grid container item xs={12} mt={1.5} mb={0}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={2}
          sx={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: " space-between",
          }}
        >
          <Stack
            direction={{ xs: "row", sm: "row", md: "row" }}
            spacing={1}
            sx={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: " space-between",
            }}
          >
            <MobileTableBtnGroup />
            {/* <IconButton aria-label="filter" onClick={filterBtnHandler}>
              <FilterAltOutlinedIcon sx={{ color: "#03E2B1" }} />
            </IconButton> */}
          </Stack>
          {/* {tableFilter === true && <MobileTableFilterBtn />} */}
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            alignItems: "center",
          }}
        >
          <MobileHtmlTable
            tableData={tableData && tableData}
            tableHeader={tableHeader}
            variant="crypto_currencies"
            vote={vote}
            setVote={setVote}
          />
        </Stack>
      </Grid>

      {/* <Grid item xs={12} mt={1.5} mb={0}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
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
      </Grid> */}
      <Grid item xs={12} mt={1.5} mb={1.5}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "1.1rem", color: "#FFD700" }}
          >
            NFT Collections
          </Typography>
          <Link to="/nft" style={{ textDecoration: "none" }}>
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>

      <Grid item xs={12} columnGap={2}>
        {NFTList && NFTList?.data && (
          <Carousel
            responsive={responsiveNFT}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={true}
            autoPlay={true}
            draggable={true}
            swipeable={true}
            minimumTouchDrag={10}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            {NFTList &&
              NFTList?.data?.map((item: any, index: number) => (
                <Box key={index} p={0.5}>
                  <MobileNftCollectionCard data={item && item} index={index} />
                </Box>
              ))}
          </Carousel>
        )}
      </Grid>

      {/* <Grid item xs={12} mt={1.5} mb={0}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <Link to="/nft" style={{ textDecoration: "none" }}>
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid> */}

      <Grid item xs={12} mt={1.5} mb={1.5}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "1.1rem", color: "#FFD700" }}
          >
            Happening Now
          </Typography>
          <Link to="/news" style={{ textDecoration: "none" }}>
            {" "}
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid>

      <Grid item xs={12} mb={0}>
        <MobileLatestNewsCardScroll />
      </Grid>
      {/* <Grid item xs={12} mb={0}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <Link to="/news" style={{ textDecoration: "none" }}>
            {" "}
            <MobileViewMoreBtn title="View more" />
          </Link>
        </Stack>
      </Grid> */}

      {/* <Grid
        item xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "23px",
        }}
      >
        <MobileAdsCardHome />
      </Grid> */}

      <Grid item xs={12} mt={1.5} mb={1.5}>
        <Stack
          direction="column"
          spacing={2}
          px={0}
          sx={{ alignItems: "center" }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", color: "#FFFFF5", textAlign: "center" }}
          >
            Explore the crypto world.
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "500", color: "#93949C", textAlign: "center" }}
          >
            Discover Latest Crypto Events, NFT's, Airdrops etc. Connect your
            brand and grow your audience with our community of crypto and
            blockchain enthusiasts around the world.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "500", color: "#20b8ea", textAlign: "center" }}
          >
            We understand what you needs
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} mt={0.5} mb={1.5}>
        {menuCards && (
          <Carousel
            // centerMode={true}
            responsive={responsiveMenuCard}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            swipeable={true}
            partialVisible={true}
            autoPlay={true}
            draggable={true}
            autoPlaySpeed={4000}
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

      <Grid item xs={12} mt={0.5} mb={1.5}>
        <Stack
          direction="column"
          spacing={3}
          px={0}
          py={3}
          sx={{ alignItems: "center" }}
        >
          {" "}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "400",
              color: "#FFFFF5",
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            <span style={{ color: "#09e2b1" }}> 2 Million </span> Registered
            Users <span style={{ color: "#09e2b1" }}> And Counting</span>
          </Typography>
          <MobileBannerMaps />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileHomePage;
