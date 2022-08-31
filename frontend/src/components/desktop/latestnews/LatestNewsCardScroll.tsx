import { useEffect, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latestNewsRequest } from "../../../store/action";
import NewsCard from "../cards/newscard/NewsCard";

const responsiveNewsSlider = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

    dispatch(latestNewsRequest({ count: 30 }, successHandler, errorHandler));
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
      {/* <Marquee
        style={{ background: "none" }}
        pauseOnHover={true}
        gradient={false}
        loop={0}
        delay={0}
        speed={70}
      > */}
      {/* {latestNews &&
          latestNews?.map((rssFeed: any, index: number) => {
            return <NewsCard rssFeed={rssFeed} timeAgo={timeAgo} key={index} />;
          })} */}
      {/* </Marquee> */}
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
              latestNews?.map((item: any, index: number) => (
                <Box key={index}>
                  <NewsCard rssFeed={item} timeAgo={timeAgo} />
                </Box>
              ))}
          </Carousel>
        )}
      </Box>
    </Stack>
  );
};

export default LatestNewsCardScroll;
