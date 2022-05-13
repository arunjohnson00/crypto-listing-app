import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const FullWidthSlider = () => {
  return (
    <Box
      sx={{
        minHeight: 70,
        maxHeight: 180,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Carousel
        dynamicHeight={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
      >
        <div>
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="hi"
            height="auto"
          />
        </div>
        <div>
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="hi"
            height="auto"
          />
        </div>
        <div>
          <img
            src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="hi"
            height="auto"
          />
        </div>
      </Carousel>
    </Box>
  );
};

export default FullWidthSlider;
