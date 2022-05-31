import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
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
const DiscoverMultiSlider = () => {
  return (
    <div
      style={{
        padding: "10px",
        width: "60vw",
        boxSizing: "border-box",
        margin: "0 auto",
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
      >
        <div>
          <Box
            sx={{
              flexGrow: 1,
              height: 121,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={1}
            my={6}
          ></Box>
        </div>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              height: 121,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={1}
            my={6}
          ></Box>
        </div>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              height: 121,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={1}
            my={6}
          ></Box>
        </div>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              height: 121,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={1}
            my={6}
          ></Box>
        </div>
      </Carousel>
    </div>
  );
};

export default DiscoverMultiSlider;
