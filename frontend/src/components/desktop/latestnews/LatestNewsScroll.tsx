import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import LatestNewsHeading from "../Typography/headings/latestnews/LatestNewsHeading";
import NewsCardTop from "../cards/topnewscard/NewsCardTop";

import { latestNewsRequest } from "../../../store/action";

const LatestNewsScroll = () => {
  const dispatch: any = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news_feed?.data;
  });

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(latestNewsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
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
            {/* {latestNews &&
              latestNews?.map((rssFeed: any, index: number) => {
                return (
                  <NewsCardTop
                    rssFeed={rssFeed}
                    timeAgo={timeAgo}
                    key={index}
                  />
                );
              })} */}
          </Marquee>
        </Stack>
      </Grid>
    </Stack>
  );
};

export default LatestNewsScroll;
