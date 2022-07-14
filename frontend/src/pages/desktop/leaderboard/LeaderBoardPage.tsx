import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography, Box, CardMedia, Avatar } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import LeaderBoardCard from "../../../components/desktop/cards/leaderboardcard/LeaderBoardCard";
import LeaderBoardMostVotedCard from "../../../components/desktop/cards/leaderboardmostvotedcard/LeaderBoardMostVotedCard";
import LeaderBoardMostVotedCryptoCurrencyCard from "../../../components/desktop/cards/leaderboardmostvotedcryptocurrencycard/LeaderBoardMostVotedCryptoCurrencyCard";
import LeaderBoardHtmlTable from "../../../components/desktop/leaderboardhtmltable/LeaderBoardHtmlTable";

const LeaderBoardPage = ({ windowInnerWidth }: any) => {
  const responsiveLeaderBoard: any = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
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

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} py={2}>
          <Stack direction="row" spacing={1}>
            {" "}
            <Typography variant="h5" color="#FFFFFF" sx={{ fontWeight: 600 }}>
              Leader Board
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <Carousel
            // centerMode={true}
            responsive={responsiveLeaderBoard}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
            swipeable={true}
            partialVisible={true}
            autoPlay={true}
            draggable={true}
          >
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
            <Box>
              <LeaderBoardCard />
            </Box>
          </Carousel>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <Grid container>
            <Grid xs={7}>
              <LeaderBoardMostVotedCard />
            </Grid>
            <Grid xs={5}>
              <LeaderBoardMostVotedCryptoCurrencyCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
          py={2}
        >
          <LeaderBoardHtmlTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LeaderBoardPage;
