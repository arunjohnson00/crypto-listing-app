import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import { latestNewsRequest } from "../../../store/action";
import MobileNewsCardTop from "../cards/topnewscard/MobileNewsCardTop";
import MobileLatestNewsHeading from "../Typography/headings/latestnews/MobileLatestNewsHeading";

const MobileLatestNewsCardScroll = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news;
  });
  console.log(latestNews && latestNews);

  //const [feed, setFeed] = useState<any>();
  const { parse } = require("rss-to-json");
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  useEffect(() => {
    (async () => {
      var rss: any = await parse(
        "https://cors-anywhere.herokuapp.com/https://news.coinxhigh.com/feed/",
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
          },
        }
      );

      dispatch({ type: latestNewsRequest, payload: rss });
    })();
  }, [dispatch]);

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        borderTop: "none",
        borderBottom: "none",
        paddingTop: "23px",
        paddingBottom: "23px",
        backgroundColor: "transparent",
        alignItems: "center",
      }}
    >
      <Grid xs={4} sm={4} md={3} lg={2} xl={2}>
        <MobileLatestNewsHeading />
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
            {latestNews &&
              latestNews?.items?.map((rssFeed: any, index: number) => {
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
  );
};

export default MobileLatestNewsCardScroll;
