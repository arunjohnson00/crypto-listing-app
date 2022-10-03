import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
import Parser from "html-react-parser";
import {
  discoverBiggestGainersRequest,
  discoverBiggestLosersRequest,
} from "../../../store/action";
import MobileGainersLosersCard from "../cards/gainersloserscard/MobileGainersLosersCard";

const responsiveGainersLosers = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
  },
};

const MobileDiscoverLatestGaindLosers = () => {
  const dispatch: any = useDispatch();
  const biggestGainers = useSelector((data: any) => {
    return data?.discoverReducer?.biggest_gainers?.data;
  });

  const biggestLosers = useSelector((data: any) => {
    return data?.discoverReducer?.biggest_losers?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      discoverBiggestGainersRequest("noData", successHandler, errorHandler)
    );
    dispatch(
      discoverBiggestLosersRequest("noData", successHandler, errorHandler)
    );
  }, [dispatch]);

  return (
    <Grid xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          borderRadius: 4,
          backgroundColor: "#020727",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={5}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={2}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={1}
            >
              <CampaignIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
              <Typography
                variant="h6"
                sx={{ color: "#2DCEAF", fontWeight: 500 }}
              >
                Gainers & Losers
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
              width="100%"
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#888C8F", fontWeight: 500 }}
              >
                Gainers
              </Typography>

              <Box>
                <Grid
                  xs={12}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  {biggestGainers && (
                    <Carousel
                      responsive={responsiveGainersLosers}
                      infinite={true}
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      arrows={true}
                      draggable={true}
                      swipeable={true}
                      autoPlay={false}
                      minimumTouchDrag={10}
                      keyBoardControl={true}
                      shouldResetAutoplay={false}
                    >
                      {biggestGainers &&
                        biggestGainers?.map((item: any, index: number) => (
                          <Box key={index}>
                            <MobileGainersLosersCard item={item} />
                          </Box>
                        ))}
                    </Carousel>
                  )}
                </Grid>
              </Box>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#888C8F", fontWeight: 500 }}
              >
                Losers
              </Typography>

              <Box>
                <Grid
                  xs={12}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  {biggestLosers && (
                    <Carousel
                      responsive={responsiveGainersLosers}
                      infinite={true}
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      arrows={true}
                      draggable={true}
                      swipeable={true}
                      autoPlay={false}
                      minimumTouchDrag={10}
                      keyBoardControl={true}
                      shouldResetAutoplay={false}
                    >
                      {biggestLosers &&
                        biggestLosers?.map((item: any, index: number) => (
                          <Box key={index}>
                            <MobileGainersLosersCard item={item} />
                          </Box>
                        ))}
                    </Carousel>
                  )}
                </Grid>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MobileDiscoverLatestGaindLosers;
