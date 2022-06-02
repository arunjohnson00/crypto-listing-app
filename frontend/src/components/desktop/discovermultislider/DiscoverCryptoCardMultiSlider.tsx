import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import DiscoverRecentCryptoCard from "../cards/discoverrecentcryptocard/DiscoverRecentCryptoCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
    slidesToSlide: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return null;
};
const DiscoverCryptoCardMultiSlider = () => {
  return (
    <div
      style={{
        paddingTop: "10px",
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
        showDots={false}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          // "desktop",
          // "superLargeDesktop",
        ]}
        customLeftArrow={<CustomLeftArrow />}
      >
        <div>
          <DiscoverRecentCryptoCard />
        </div>
        <div>
          <DiscoverRecentCryptoCard />
        </div>
        <div>
          <DiscoverRecentCryptoCard />
        </div>
        <div>
          <DiscoverRecentCryptoCard />
        </div>
        <div>
          <DiscoverRecentCryptoCard />
        </div>
        <div>
          <DiscoverRecentCryptoCard />
        </div>
        <div>
          <DiscoverRecentCryptoCard />
        </div>
      </Carousel>
    </div>
  );
};

export default DiscoverCryptoCardMultiSlider;
