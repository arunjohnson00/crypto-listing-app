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
import MobileSingleCoinPageAccordion from "../singlecoinpageaccordion/MobileSingleCoinPageAccordion";
import MobileCoinPageHistoricalData from "../coinpagehistoricaldata/MobileCoinPageHistoricalData";
import MobileCoinPageTodaysPrice from "../coinpagetodaysprice/MobileCoinPageTodaysPrice";
import MobileCoinPageCommunity from "../coinpagecommunity/MobileCoinPageCommunity";
import MobileCoinPagePresale from "../coinpagepresale/MobileCoinPagePresale";
import MobileCoinPageWidget from "../coinpagewidget/MobileCoinPageWidget";
import MobileCoinPageNews from "../coinpagenews/MobileCoinPageNews";
import { useSelector } from "react-redux";

const MobileSinglePageTab = () => {
  const [value, setValue] = useState("1");
  const [tabValue, setTabValue] = useState("1");
  const coinDetailFirstBlock = useSelector((data: any) => {
    return data?.coinReducer?.coin_detail_first_block?.data;
  });
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
            scrollButtons={true}
            allowScrollButtonsMobile
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                //display: "none",
                backgroundColor: "#19ffb0",
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

              "&.MuiTabs-root": {
                color: "#fff",
              },

              "&.MuiTabs-root .MuiTabs-scrollButtons": {},
              "&.MuiTabs-root  .Mui-disabled": {
                display: "none",
              },
            }}
          >
            <Tab label="Overview" value="1" />
            <Tab label="About" value="2" />
            <Tab label="Ratings" value="3" />
            <Tab label="Historical Data" value="4" />
            <Tab label="Today's Price" value="5" />
            <Tab label="Community" value="6" />
            {/* <Tab label="Markets" value="4" /> */}
            <Tab label="FAQ" value="7" />
            {coinDetailFirstBlock &&
              coinDetailFirstBlock[0]?.is_event === 1 && (
                <Tab label="Events" value="8" />
              )}
            {coinDetailFirstBlock &&
              coinDetailFirstBlock[0]?.is_presale === 1 && (
                <Tab label="Presale" value="9" />
              )}
            {/* <Tab label="Widget" value="10" /> */}
            <Tab label="News" value="11" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MobileCoinPageOverview />
          <MobileSingleCoinPageAccordion variant="full" />
        </TabPanel>
        <TabPanel value="2">
          <MobileCoinPageAbout />
          <MobileSingleCoinPageAccordion />
        </TabPanel>
        <TabPanel value="3">
          <MobileCoinpageRatings />
        </TabPanel>

        <TabPanel value="4">
          <MobileCoinPageHistoricalData />
        </TabPanel>
        <TabPanel value="5">
          <MobileCoinPageTodaysPrice />
        </TabPanel>
        <TabPanel value="6">
          <MobileCoinPageCommunity />
        </TabPanel>

        {/* <TabPanel value="4">
          <MobileCoinPageMarket />
        </TabPanel> */}
        <TabPanel value="7">
          <MobileCoinPageFAQ />
        </TabPanel>

        <TabPanel value="8">
          <MobileCoinPageEvents />
        </TabPanel>

        <TabPanel value="9">
          <MobileCoinPagePresale />
        </TabPanel>

        <TabPanel value="10">
          <MobileCoinPageWidget />
        </TabPanel>
        <TabPanel value="11">
          <MobileCoinPageNews />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MobileSinglePageTab;
