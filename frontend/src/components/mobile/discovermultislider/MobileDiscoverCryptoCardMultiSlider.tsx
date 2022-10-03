import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

import MobileDiscoverRecentCryptoCard from "../cards/discoverrecentcryptocard/MobileDiscoverRecentCryptoCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
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
const MobileDiscoverCryptoCardMultiSlider = ({ data }: any) => {
  return (
    <div
      style={{
        paddingTop: "10px",
        width: "auto",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      {data && (
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
          {data &&
            data?.map((item: any, index: number) => (
              <div key={index}>
                <MobileDiscoverRecentCryptoCard item={item} />
              </div>
            ))}
        </Carousel>
      )}
    </div>
  );
};

export default MobileDiscoverCryptoCardMultiSlider;
