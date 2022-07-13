import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MobileCoinPageOverview from "../coinpageoverview/MobileCoinPageOverview";
import MobileCoinPageAbout from "../coinpageabout/MobileCoinPageAbout";
import MobileCoinpageRatings from "../coinpageratings/MobileCoinpageRatings";
import MobileCoinPageMarket from "../coinpagemarket/MobileCoinPageMarket";
import MobileCoinPageFAQ from "../coinpagefaq/MobileCoinPageFAQ";
import MobileCoinPageEvents from "../coinpageevents/MobileCoinPageEvents";

const MobileSinglePageTab = () => {
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
            variant="scrollable"
            //scrollButtons={true}
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                //display: "none",
                backgroundColor: "#23E2A0",
                // color: "#FFFFF5",
              },

              "& .MuiButtonBase-root.MuiTab-root": {
                color: "#23E2A0",
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="Overview" value="1" />
            <Tab label="About" value="2" />
            <Tab label="Ratings" value="3" />
            <Tab label="Markets" value="4" />
            <Tab label="FAQ" value="5" />
            <Tab label="Events" value="6" />
            <Tab label="Presale Details" value="7" />
            <Tab label="KYC Details" value="8" />
            <Tab label="Audit Details" value="9" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MobileCoinPageOverview />
        </TabPanel>
        <TabPanel value="2">
          <MobileCoinPageAbout />
        </TabPanel>
        <TabPanel value="3">
          <MobileCoinpageRatings />
        </TabPanel>
        <TabPanel value="4">
          <MobileCoinPageMarket />
        </TabPanel>
        <TabPanel value="5">
          <MobileCoinPageFAQ />
        </TabPanel>
        <TabPanel value="6">
          <MobileCoinPageEvents />
        </TabPanel>
        <TabPanel value="7">Item One</TabPanel>
        <TabPanel value="8">Item Two</TabPanel>
        <TabPanel value="9">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MobileSinglePageTab;
