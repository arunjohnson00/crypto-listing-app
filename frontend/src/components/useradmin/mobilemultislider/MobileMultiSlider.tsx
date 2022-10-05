import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CardMedia, Chip, Stack } from "@mui/material";
const responsive = {
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
const MobileMultiSlider = () => {
  const CustomDot = ({ onClick, ...rest }: any) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: 10,
          mx: 0.4,
          backgroundColor: active ? "#000000" : "#686D74",
          border: active ? "1px solid #2B86A8" : "1px solid transparent",
          position: "relative",
        }}
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      ></Box>
    );
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Carousel
        focusOnSelect={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        showDots={true}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        customDot={<CustomDot />}
        // renderButtonGroupOutside={true}
        // renderDotsOutside={true}
      >
        <Box
          sx={{
            border: "1px solid #171D3B",
            backgroundColor: "#000000",
            padding: 0.5,
            borderRadius: 4,
            height: 90,
          }}
          px={2}
          mb={4}
        ></Box>
        <Box
          sx={{
            border: "1px solid #171D3B",
            backgroundColor: "#000000",
            padding: 0.5,
            borderRadius: 4,
            height: 90,
          }}
          px={2}
        ></Box>
        <Box
          sx={{
            border: "1px solid #171D3B",
            backgroundColor: "#000000",
            padding: 0.5,
            borderRadius: 4,
            height: 90,
          }}
          px={2}
        ></Box>
      </Carousel>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <Chip
          label="Ad"
          sx={{
            background: "#FFFFFF",
            color: "#000000",

            height: 15,
            fontSize: ".60rem",
            position: "relative",
            top: -42,
            right: 20,
            fontWeight: 600,
          }}
          size="small"
        />
      </Stack>
    </div>
  );
};

export default MobileMultiSlider;
