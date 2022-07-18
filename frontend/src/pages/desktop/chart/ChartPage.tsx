import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  CardMedia,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import Iframe from "react-iframe";
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
import ChartEventCard from "../../../components/desktop/cards/charteventcard/ChartEventCard";
import ChartWidgetCard from "../../../components/desktop/cards/chartwidgetcard/ChartWidgetCard";

const ChartPage = ({ windowInnerWidth }: any) => {
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
            paddingTop: "0px",
            paddingBottom: "13px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} mb={1}>
              <CardMedia
                component="img"
                height="95"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} mb={1}>
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
            paddingTop: "0px",
            paddingBottom: "13px",
          }}
        >
          {" "}
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
            pt={3}
          >
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} mb={1}>
              <Stack direction="column" spacing={3}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    id="filled-basic"
                    variant="outlined"
                    placeholder="Enter Coinname/address"
                    sx={{
                      borderColor: "#0F1A4A",

                      "& .MuiOutlinedInput-root": {
                        height: 40,
                        borderRadius: 4,
                        color: "#4D4E54",
                        fontSize: ".80rem",
                        fontWeight: 600,
                        "& fieldset": {
                          borderColor: "#0F1A4A",
                          borderWidth: 2,
                          color: "#4D4E54",
                        },
                        "&:hover fieldset": {
                          borderColor: "#0F1A4A",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#0F1A4A",
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      width: 100,
                      borderRadius: 4.5,
                      textTransform: "capitalize",
                      fontSize: ".70rem",
                      backgroundColor: "#2415A2",
                    }}
                  >
                    Search
                  </Button>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
                    sx={{ borderRadius: 0, width: 50, height: 50 }}
                  />
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "column" }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#FFFFF5", fontWeight: 600 }}
                    >
                      Safemoon {"($SFM)"}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography
                        variant="h6"
                        sx={{ color: "#FFFFF5", fontWeight: 400 }}
                        textAlign={{ xs: "center", sm: "center", md: "left" }}
                      >
                        $0.0006789999
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          width: 100,
                          borderRadius: 4.5,
                          textTransform: "capitalize",
                          fontSize: ".60rem",
                          backgroundColor: "#05144D",
                        }}
                      >
                        More info{">>"}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} mb={1}>
              <ChartEventCard />
            </Grid>
          </Stack>
        </Grid>

        <Grid
          xs={12}
          sx={{
            alignItems: "center",
            paddingTop: "0px",
            paddingBottom: "13px",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 1, md: 2 }}
            pt={3}
          >
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9} mb={1}>
              <Iframe
                url="https://coinbrain.com/embed/0x55d398326f99059ff775485246999027b3197955?theme=dark&chart=1&trades=1"
                width="100%"
                height="1190"
                id="myId"
                className="myClassname"
                display="block"
                position="relative"
                frameBorder={0}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} mb={1}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ChartWidgetCard />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChartPage;
