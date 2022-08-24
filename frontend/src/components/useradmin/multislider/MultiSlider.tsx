import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CardMedia } from "@mui/material";
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
const MultiSlider = () => {
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
        showDots={false}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
      >
        <Box sx={{ mx: 1.2 }}>
          <CardMedia
            component="img"
            height="80"
            image="https://iili.io/UtY5Kv.jpg"
            alt="green iguana"
            sx={{ objectFit: "unset" }}
          />
        </Box>
        <Box sx={{ mx: 1.2 }}>
          <CardMedia
            component="img"
            height="80"
            image="https://iili.io/UtY5Kv.jpg"
            alt="green iguana"
            sx={{ objectFit: "unset" }}
          />
        </Box>
        <Box sx={{ mx: 1.2 }}>
          <CardMedia
            component="img"
            height="80"
            image="https://iili.io/UtY5Kv.jpg"
            alt="green iguana"
            sx={{ objectFit: "unset" }}
          />
        </Box>
        <Box sx={{ mx: 1.2 }}>
          <CardMedia
            component="img"
            height="80"
            image="https://iili.io/UtY5Kv.jpg"
            alt="green iguana"
            sx={{ objectFit: "unset" }}
          />
        </Box>
      </Carousel>
    </div>
  );
};

export default MultiSlider;
