import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import MobileLatestNewsHeading from "../../components/mobile/Typography/headings/latestnews/MobileLatestNewsHeading";
import MobileNewsCardTop from "../../components/mobile/cards/topnewscard/MobileNewsCardTop";
import FullWidthSlider from "../../components/mobile/slider/fullwidthslider/FullWidthSlider";
import UpcomingAmaCard from "../../components/mobile/cards/upcomingamacard/UpcomingAmaCard";
import MobileIconMenuCard from "../../components/mobile/cards/iconmenucard/MobileIconMenuCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileFeaturedCoinCards from "../../components/mobile/cards/featuredcoin/MobileFeaturedCoinCards";
import MobileTrendingCoins from "../../components/mobile/cards/trendingcoins/MobileTrendingCoins";
import MobileVideoCard from "../../components/mobile/cards/videocard/MobileVideoCard";
import MobileTableBtnGroup from "../../components/mobile/buttongroup/tablebtngroup/MobileTableBtnGroup";
import MobileTableFilterBtn from "../../components/mobile/buttongroup/tablefilterbtn/MobileTableFilterBtn";
import MobileHtmlTable from "../../components/mobile/htmltable/MobileHtmlTable";
import MobileViewMoreBtn from "../../components/mobile/button/viewmorebtn/MobileViewMoreBtn";
import MobileNftCollectionCard from "../../components/mobile/cards/nftcollection/MobileNftCollectionCard";
import MobileNewsCard from "../../components/mobile/cards/newscard/MobileNewsCard";
import MobileAdsCardHome from "../../components/mobile/cards/adscard/MobileAdsCardHome";
import MobileMenuCards from "../../components/mobile/cards/menucards/MobileMenuCards";
import MobileBannerMaps from "../../components/mobile/banner/bannermap/MobileBannerMap";

const { parse } = require("rss-to-json");

const MobileHomePage = () => {
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
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
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
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
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
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.5,
    },
  };
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();

  useEffect(() => {
    (async () => {
      var rss = await parse(
        "https://corsanywhere.herokuapp.com/https://news.coinxhigh.com/feed/"
      );

      setFeed(rss);
    })();
  }, []);
  return (
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
            <MobileLatestNewsHeading />
          </Grid>
          <Grid
            xs={8}
            sm={8}
            md={9}
            lg={10}
            xl={10}
            sx={{ overflowX: "hidden" }}
          >
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
                    <MobileNewsCardTop
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
        >
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
          <Box>
            <MobileFeaturedCoinCards />
          </Box>
        </Carousel>
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
        <Carousel
          // centerMode={true}
          responsive={responsiveTrending}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          swipeable={true}
          partialVisible={true}
          autoPlay={true}
          draggable={true}
        >
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
          <Box>
            <MobileTrendingCoins />
          </Box>
        </Carousel>
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
        >
          <Box>
            <MobileVideoCard />
          </Box>
          <Box>
            <MobileVideoCard />
          </Box>
          <Box>
            <MobileVideoCard />
          </Box>
          <Box>
            <MobileVideoCard />
          </Box>
          <Box>
            <MobileVideoCard />
          </Box>
          <Box>
            <MobileVideoCard />
          </Box>
          <Box>
            <MobileVideoCard />
          </Box>
        </Carousel>
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
          <MobileHtmlTable />
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
        <Carousel
          // centerMode={true}
          responsive={responsiveNFT}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          swipeable={true}
          partialVisible={true}
          autoPlay={true}
          draggable={true}
        >
          <Box>
            <MobileNftCollectionCard />
          </Box>
          <Box>
            <MobileNftCollectionCard />
          </Box>
          <Box>
            <MobileNftCollectionCard />
          </Box>
          <Box>
            <MobileNftCollectionCard />
          </Box>
          <Box>
            <MobileNftCollectionCard />
          </Box>
          <Box>
            <MobileNftCollectionCard />
          </Box>
        </Carousel>
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
        {feed?.items?.slice(0, 3).map((rssFeed: any, index: number) => {
          return (
            <MobileNewsCard rssFeed={rssFeed} timeAgo={timeAgo} index={index} />
          );
        })}
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
          <MobileViewMoreBtn title="View more" />
        </Stack>
      </Grid>

      <Grid
        xs={12}
        sx={{
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "23px",
        }}
      >
        <MobileAdsCardHome />
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
        <Carousel
          // centerMode={true}
          responsive={responsiveMenuCard}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          swipeable={true}
          partialVisible={true}
          autoPlay={true}
          draggable={true}
        >
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
          <Box>
            <MobileMenuCards width="auto" />
          </Box>
        </Carousel>
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
