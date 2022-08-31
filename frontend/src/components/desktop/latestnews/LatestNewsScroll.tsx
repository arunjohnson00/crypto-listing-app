import { useEffect, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import LatestNewsHeading from "../Typography/headings/latestnews/LatestNewsHeading";
import NewsCardTop from "../cards/topnewscard/NewsCardTop";

import { latestNewsRequest } from "../../../store/action";

const responsiveNewsSlider = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
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

    dispatch(latestNewsRequest({ count: 15 }, successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        borderTop: "1px solid #1a1545",
        borderBottom: "1px solid #1a1545",
        paddingTop: "15px",
        paddingBottom: "15px",
        backgroundColor: "#04091d",
        alignItems: "center",
      }}
    >
      <Grid xs={4} sm={4} md={3} lg={2} xl={2}>
        <LatestNewsHeading />
      </Grid>
      <Grid xs={8} sm={8} md={9} lg={10} xl={10}>
        <Stack direction="row" spacing={3}>
          {/* <Marquee
            style={{ background: "none" }}
            pauseOnHover={true}
            gradient={false}
            loop={0}
            delay={0}
            speed={70}
          >
            {latestNews &&
              latestNews?.map((rssFeed: any, index: number) => {
                return (
                  <NewsCardTop
                    rssFeed={rssFeed}
                    timeAgo={timeAgo}
                    key={index}
                  />
                );
              })}
          </Marquee> */}

          <Box sx={{ width: "100%" }}>
            {latestNews && (
              <Carousel
                responsive={responsiveNewsSlider}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows={false}
                autoPlay={true}
                draggable={true}
                swipeable={true}
                minimumTouchDrag={10}
                keyBoardControl={true}
                shouldResetAutoplay={false}
              >
                {latestNews &&
                  latestNews?.map((rssFeed: any, index: number) => {
                    return (
                      <Box key={index}>
                        <NewsCardTop
                          rssFeed={rssFeed}
                          timeAgo={timeAgo}
                          key={index}
                        />
                      </Box>
                    );
                  })}
              </Carousel>
            )}
          </Box>
        </Stack>
      </Grid>
    </Stack>
  );
};

export default LatestNewsScroll;
