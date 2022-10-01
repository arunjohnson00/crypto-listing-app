import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Divider, Stack } from "@mui/material";
import MobileCryptoEventCard from "../cards/cryptoeventcard/MobileCryptoEventCard";

const MobileCryptoEventsTab = () => {
  const [value, setValue] = useState("1");
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setTabValue(newValue);
  };
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
            <Tab label="New" value="1" />
            <Divider
              sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }}
              orientation="vertical"
              flexItem
              variant="middle"
            />
            <Tab label="Upcoming" value="2" />
            <Divider
              sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }}
              orientation="vertical"
              flexItem
              variant="middle"
            />
            <Tab label="Past" value="3" />
          </TabList>
          <Divider sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }} />
        </Box>
        <TabPanel value="1">
          <Stack direction="column" spacing={2}>
            <MobileCryptoEventCard />
          </Stack>
        </TabPanel>
        <TabPanel value="2">
          {" "}
          <MobileCryptoEventCard />
        </TabPanel>
        <TabPanel value="3">
          {" "}
          <MobileCryptoEventCard />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MobileCryptoEventsTab;
