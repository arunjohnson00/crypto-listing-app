import { useEffect, useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Marquee from "react-fast-marquee";
// import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { latestNewsRequest } from "../../../store/action";
import MobileNewsCard from "../cards/newscard/MobileNewsCard";

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
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const MobileLatestNewsCardScroll = () => {
  const dispatch: any = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.commonReducer?.latest_news_feed?.data;
  });

  // TimeAgo.addDefaultLocale(en);
  // const timeAgo = new TimeAgo("en");
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
            autoPlaySpeed={4000}
            keyBoardControl={true}
            shouldResetAutoplay={false}
          >
            {latestNews &&
              latestNews?.map((item: any, index: number) => (
                <Box key={index}>
                  <MobileNewsCard rssFeed={item} />
                </Box>
              ))}
          </Carousel>
        )}
      </Box>
    </Stack>
  );
};

export default MobileLatestNewsCardScroll;
