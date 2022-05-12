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
import AppHeader from "../../layouts/header/AppHeader";
import LatestNewsHeading from "../../components/Typography/headings/latestnews/LatestNewsHeading";
import NewsCardTop from "../../components/cards/topnewscard/NewsCardTop";
import CoinSlider from "../../components/slider/coinslider/CoinSlider";
import VideoCard from "../../components/cards/videocard/VideoCard";
import HighlightCards from "../../components/cards/highlight/HighlightCards";
import FeaturedCoinCards from "../../components/cards/featuredcoin/FeaturedCoinCards";
import TableBtnGroup from "../../components/buttongroup/tablebtngroup/TableBtnGroup";
import TableFilterBtn from "../../components/buttongroup/tablefilterbtn/TableFilterBtn";
import HtmlTable from "../../components/tables/htmltable/HtmlTable";
import ViewMoreBtn from "../../components/button/viewmorebtn/ViewMoreBtn";
import NftCollectionCard from "../../components/cards/nftcollection/NftCollectionCard";
import NewsCard from "../../components/cards/newscard/NewsCard";
import AdsCardHome from "../../components/cards/adscard/AdsCardHome";

import CardDeal from "../../components/banner/carddeal/CardDeal";
import BannerCardsHome from "../../components/banner/bannercardshome/BannerCardsHome";
import BannerMap from "../../components/banner/bannermap/BannerMap";
import AppFooter from "../../layouts/footer/AppFooter";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const { parse } = require("rss-to-json");

const windowInnerWidth = window.innerWidth;

const responsive = {
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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();
  useEffect(() => {
    (async () => {
      var rss = await parse("https://news.coinxhigh.com/feed/");

      setFeed(rss);
    })();
  }, []);
  return (
    <Fragment>
      <Grid ml={5}>
        <Grid
          container
          spacing={5}
          sx={{
            dispaly: "flex",
            //
            paddingTop: "40px",
            paddingBottom: "22px",
          }}
        >
          <Grid xs={12}>
            <AppHeader />
          </Grid>
        </Grid>

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

          <Grid
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
                paddingTop: "0px",
                paddingBottom: "23px",

                alignItems: "center",
              }}
            >
              <Grid item xs={8}>
                <CardMedia
                  component="img"
                  height="95"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  height="95"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
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
            <Carousel
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={true}
            >
              <Box>
                <VideoCard />
              </Box>
              <Box>
                <VideoCard />
              </Box>
              <Box>
                <VideoCard />
              </Box>
              <Box>
                <VideoCard />
              </Box>
              <Box>
                <VideoCard />
              </Box>
              <Box>
                <VideoCard />
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
                paddingTop: "23px",
                paddingBottom: "23px",

                alignItems: "center",
              }}
            >
              <Grid item xs="auto">
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Highlights
                </Typography>
              </Grid>
              <Grid item xs={10.5}>
                <Divider
                  sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
                />
              </Grid>
            </Stack>
          </Grid>

          <Grid
            container
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "0px",
              paddingBottom: "23px",
            }}
          >
            <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
              <HighlightCards />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
              <HighlightCards />
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
              <HighlightCards />
            </Grid>
          </Grid>

          <Grid
            container
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "0px",
              paddingBottom: "23px",
            }}
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
                  variant="h3"
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
            <Grid
              container
              xs={12}
              sm={12}
              md={12}
              lg={11}
              xl={11}
              sx={{
                alignItems: "flex-start",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
              <Grid xs={12} sm={6} md={4} lg={3} xl={3}>
                <FeaturedCoinCards />
              </Grid>
            </Grid>
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
                paddingBottom: "0px",

                alignItems: "center",
              }}
            >
              <Grid item xs="auto">
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  CryptoCurrencies
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Divider
                  sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
                />
              </Grid>
            </Stack>
          </Grid>

          <Grid
            container
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "13px",
              paddingBottom: "13px",
            }}
          >
            <Grid item xs={12} sm={6} md={5} lg={5} xl={5} pb={2}>
              <Typography sx={{ color: "white" }}>
                Subscribe to our newsletters and get business news delivered
                straight into your inbox ; Daily Newsletter. Your daily dose of
                business news, views and updates.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={7} lg={7} xl={7} pb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
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
              <TableBtnGroup />
              <TableFilterBtn />
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
              <HtmlTable />
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
              <ViewMoreBtn title="View more" />
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
              <Grid item xs="auto">
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  NFT Collections
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Divider
                  sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
                />
              </Grid>
            </Stack>
          </Grid>

          <Grid
            container
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "13px",
              paddingBottom: "13px",
            }}
          >
            <Grid item xs={12} sm={6} md={5} lg={5} xl={5} pb={2}>
              <Typography sx={{ color: "white" }}>
                Subscribe to our newsletters and get business news delivered
                straight into your inbox ; Daily Newsletter. Your daily dose of
                business news, views and updates.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={7} lg={7} xl={7} pb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Grid>

          <Grid
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "23px",
              paddingBottom: "23px",

              justifyContent: "space-between",
            }}
          >
            <Carousel
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              arrows={true}
            >
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
              </Box>
              <Box>
                <NftCollectionCard />
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
              <ViewMoreBtn title="See collections" />
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
                paddingBottom: "0px",

                alignItems: "center",
              }}
            >
              <Grid item xs="auto">
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Coinxhigh crypto News
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Divider
                  sx={{ borderColor: "#2D4297", borderBottomWidth: "3px" }}
                />
              </Grid>
            </Stack>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "13px",
              paddingBottom: "13px",
            }}
          >
            <Grid item xs={12} sm={6} md={5} lg={5} xl={5} pb={2}>
              <Typography sx={{ color: "white" }}>
                Subscribe to our newsletters and get business news delivered
                straight into your inbox ; Daily Newsletter. Your daily dose of
                business news, views and updates.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={7} lg={7} xl={7} pb={2}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
          </Grid>

          <Grid
            xs={12}
            sx={{
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={0}
              sx={{
                //borderTop: "1px solid #1a1545",
                // borderBottom: "1px solid #1a1545",
                paddingTop: "23px",
                paddingBottom: "23px",

                alignItems: "center",
              }}
            >
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
                    <NewsCard rssFeed={rssFeed} timeAgo={timeAgo} key={index} />
                  );
                })}
              </Marquee>
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
                paddingTop: "0px",
                paddingBottom: "23px",

                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                More News ˃
              </Typography>

              <Stack direction="row" spacing={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 18, height: 18 }}
                />
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  Subscribe to our Telegram
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid
            container
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "23px",
              paddingBottom: "23px",
            }}
          >
            <AdsCardHome />
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
                paddingTop: "50px",
                paddingBottom: "23px",

                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CardDeal />
            </Stack>
          </Grid>
          <Grid
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "50px",
              paddingBottom: "23px",
              marginTop: 10,
            }}
          >
            <BannerCardsHome />
          </Grid>

          <Grid
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "50px",
              paddingBottom: "23px",
            }}
          >
            <BannerMap />
          </Grid>

          <Grid
            xs={12}
            sx={{
              alignItems: "center",
              paddingTop: "50px",
              paddingBottom: "23px",
            }}
          >
            <AppFooter />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
