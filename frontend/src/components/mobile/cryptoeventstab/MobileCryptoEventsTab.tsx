import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Divider, Stack } from "@mui/material";
import MobileCryptoEventCard from "../cards/cryptoeventcard/MobileCryptoEventCard";
import {
  eventsPastRequest,
  eventsRecentlyAddedRequest,
  eventsUpcomingRequest,
} from "../../../store/action";
import { useDispatch } from "react-redux";

const MobileCryptoEventsTab = ({
  value,
  handleChange,
  data,
  setEventData,
  eventData,
}: any) => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    const successHandler = (res: any) => {
      res && setEventData(res?.data?.data?.data);
    };
    const errorHandler = (err: any) => {};

    value === "0" &&
      dispatch(
        eventsRecentlyAddedRequest("noData", successHandler, errorHandler)
      );
    value === "1" &&
      dispatch(eventsUpcomingRequest("noData", successHandler, errorHandler));
    value === "2" &&
      dispatch(eventsPastRequest("noData", successHandler, errorHandler));
  }, [value]);

  console.log(value);
  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        "& .MuiTabPanel-root": {
          paddingLeft: 0,
          paddingRight: 0,
        },
        "& .MuiBox-root": {
          padding: "0px",
        },
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="fullWidth"
            scrollButtons={true}
            onChange={handleChange}
            centered
            aria-label="lab API tabs example"
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
                //backgroundColor: "#19ffb0",
                height: 4,
                // color: "#FFFFF5",
              },

              "& .MuiButtonBase-root.MuiTab-root": {
                color: "#FFFFFF",
                textTransform: "capitalize",
                opacity: 1,
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#19ffb0",
              },

              "&.MuiTabs-flexContainer": { justifyContent: "space-around" },

              "&.MuiTabs-root": {
                color: "#fff",
              },

              "&.MuiTabs-root .MuiTabs-scrollButtons": {},
              "&.MuiTabs-root  .Mui-disabled": {
                display: "none",
              },
            }}
          >
            <Tab label="New" value="0" />
            <Divider
              sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }}
              orientation="vertical"
              flexItem
              variant="middle"
            />
            <Tab label="Upcoming" value="1" />
            <Divider
              sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }}
              orientation="vertical"
              flexItem
              variant="middle"
            />
            <Tab label="Past" value="2" />
          </TabList>
          <Divider sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }} />
        </Box>
        <TabPanel value="0">
          <Stack direction="column" spacing={2}>
            {eventData &&
              eventData?.map((item: any, index: number) => (
                <MobileCryptoEventCard data={item} />
              ))}
          </Stack>
        </TabPanel>
        <TabPanel value="1">
          <Stack direction="column" spacing={2}>
            {eventData &&
              eventData?.map((item: any, index: number) => (
                <MobileCryptoEventCard data={item} />
              ))}
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          <Stack direction="column" spacing={2}>
            {eventData &&
              eventData?.map((item: any, index: number) => (
                <MobileCryptoEventCard data={item} />
              ))}
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MobileCryptoEventsTab;
