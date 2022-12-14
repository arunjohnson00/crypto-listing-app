import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import DiscoverLatestCommonCard from "../cards/dicoverlatestcommoncard/DiscoverLatestCommonCard";
import { discoverLatestEventsRequest } from "../../../store/action";

const responsiveLatestEvents = {
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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DiscoverLatestEvents = () => {
  const dispatch: any = useDispatch();
  const latestEvents = useSelector((data: any) => {
    return data?.discoverReducer?.latest_events?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      discoverLatestEventsRequest("noData", successHandler, errorHandler)
    );
  }, [dispatch]);
  return (
    <Grid xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          borderRadius: 4,
          backgroundColor: "#020727",
          width: "-webkit-fill-available",
        }}
        mb={7}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={5}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={2}
            width="100%"
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
                Events
              </Typography>
            </Stack>

            <Box width={"auto"}>
              <Grid
                xs={12}
                sx={{
                  alignItems: "center",
                  // paddingTop: "0px",
                  paddingBottom: "13px",
                }}
              >
                {latestEvents && (
                  <Carousel
                    responsive={responsiveLatestEvents}
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
                    {latestEvents &&
                      latestEvents?.map((item: any, index: number) => (
                        <Box key={index}>
                          <DiscoverLatestCommonCard
                            item={item}
                            path="event_proof"
                            variant="events"
                            image={item?.coin_logo}
                            link={`/crypto-events/${item && item?.slug}`}
                            date={
                              item &&
                              moment(new Date(item?.event_date)).format("DD")
                            }
                            month={
                              item &&
                              moment(new Date(item?.event_date)).format("MMM")
                            }
                            title={item?.title}
                            subtitle={item?.coin}
                            index={index}
                          />
                        </Box>
                      ))}
                  </Carousel>
                )}
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default DiscoverLatestEvents;
