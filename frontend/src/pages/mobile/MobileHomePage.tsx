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

const { parse } = require("rss-to-json");
const MobileHomePage = () => {
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
    </Grid>
  );
};

export default MobileHomePage;
