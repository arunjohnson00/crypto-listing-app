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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import SponsoredBtn from "../../../components/desktop/button/sponsoredbutton/SponsoredBtn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NftCollectionCard from "../../../components/desktop/cards/nftcollection/NftCollectionCard";
import NftTab from "../../../components/desktop/nfttab/NftTab";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import SingleNFTMarketPlaceHeader from "../../../components/desktop/singlenftmarketplaeheader/SingleNFTMarketPlaceHeader";
import SingleNftMarketplaceTab from "../../../components/desktop/singlenftmarketplacetab/SingleNftMarketplaceTab";
import NFTMarketPlaceSimilarAppCard from "../../../components/desktop/cards/nftmarketplacesimilarappcard/NFTMarketPlaceSimilarAppCard";

const SingleNftMarketPlacesPage = () => {
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

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));
  const { parse } = require("rss-to-json");

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
            spacing={1}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "5px",
              paddingBottom: "10px",

              alignItems: "center",
            }}
          >
            <BreadCrumbs
              // data={
              //   coinDetailFirstBlock &&
              //   coinDetailFirstBlock !== undefined &&
              //   coinDetailFirstBlock[0]
              // }
              home="Home"
              path="NFT MarketPlaces"
            />
          </Stack>
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <SingleNFTMarketPlaceHeader />
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <SingleNftMarketplaceTab />
        </Grid>
        <Grid
          container
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: 2,
          }}
        >
          <NFTMarketPlaceSimilarAppCard />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleNftMarketPlacesPage;
