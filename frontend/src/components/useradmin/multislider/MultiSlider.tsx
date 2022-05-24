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
const MultiSlider = () => {
  return (
    <div style={{ width: "1000px", padding: "10px" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        showDots={true}
      >
        <div>
          <Box
            sx={{
              width: 319,
              height: 77,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={3}
            my={6}
          ></Box>
        </div>
        <div>
          <Box
            sx={{
              width: 319,
              height: 77,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={3}
            my={6}
          ></Box>
        </div>
        <div>
          <Box
            sx={{
              width: 319,
              height: 77,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={3}
            my={6}
          ></Box>
        </div>
        <div>
          <Box
            sx={{
              width: 319,
              height: 77,
              backgroundColor: "#000000",
              borderRadius: 3,
            }}
            mx={3}
            my={6}
          ></Box>
        </div>
      </Carousel>
    </div>
  );
};

export default MultiSlider;
