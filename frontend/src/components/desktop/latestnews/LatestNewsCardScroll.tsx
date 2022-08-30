import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import { latestNewsRequest } from "../../../store/action";
import NewsCard from "../cards/newscard/NewsCard";

const LatestNewsCardScroll = () => {
  const dispatch: any = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news_feed?.data;
  });

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(latestNewsRequest({ count: 50 }, successHandler, errorHandler));
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
      <Marquee
        style={{ background: "none" }}
        pauseOnHover={true}
        gradient={false}
        loop={0}
        delay={0}
        speed={70}
      >
        {latestNews &&
          latestNews?.map((rssFeed: any, index: number) => {
            return <NewsCard rssFeed={rssFeed} timeAgo={timeAgo} key={index} />;
          })}
      </Marquee>
    </Stack>
  );
};

export default LatestNewsCardScroll;
