import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import { latestNewsRequest } from "../../../store/action";
import NewsCard from "../cards/newscard/NewsCard";

const LatestNewsCardScroll = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news;
  });

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
  }, []);

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
            return <NewsCard rssFeed={rssFeed} timeAgo={timeAgo} key={index} />;
          })}
      </Marquee>
    </Stack>
  );
};

export default LatestNewsCardScroll;
