import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CoinPageOverview from "../coinpageoverview/CoinPageOverview";
import CoinPageAbout from "../coinpageabout/CoinPageAbout";
import CoinpageRatings from "../coinpageratings/CoinpageRatings";
import CoinPageMarket from "../coinpagemarket/CoinPageMarket";
import CoinPageFAQ from "../coinpagefaq/CoinPageFAQ";
import { Divider } from "@mui/material";
import CoinPageCommunity from "../coinpagecommunity/CoinPageCommunity";
import CoinPageHistoricalData from "../coinpagehistoricaldata/CoinPageHistoricalData";
import CoinPageTodaysPrice from "../coinpagetodaysprice/CoinPageTodaysPrice";
import CoinPageNews from "../coinpagenews/CoinPageNews";
import CoinPageWidget from "../coinpagewidget/CoinPageWidget";
import CoinPageEvents from "../coinpageevents/CoinPageEvents";
import CoinPagePresale from "../coinpagepresale/CoinPagePresale";
import CoinPageAirdrop from "../coinpageairdrop/CoinPageAirdrop";
import { useLocation } from "react-router-dom";

const SinglePageTab = ({ data }: any) => {
  const location = useLocation();
  const [value, setValue] = useState<any>();
  const [tabValue, setTabValue] = useState<any>();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setTabValue(newValue);
  };

  useEffect(() => {
    setValue("1");
    setTabValue("1");
  }, [location]);

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
            {/* <Tab label="Markets" value="4" /> */}
            <Tab label="Historical Data" value="5" />
            <Tab label="Today's Price" value="6" />
            <Tab label="Community" value="7" />
            <Tab label="FAQ" value="8" />
            {data && data?.is_event === 1 && <Tab label="Events" value="9" />}
            {data && data?.is_presale === 1 && (
              <Tab label="Presale" value="10" />
            )}
            <Tab label="Airdrops" value="11" />
            {/* <Tab label="KYC Details" value="15" /> */}
            {/* <Tab label="Widget" value="12" /> */}
            {/* <Tab label="Audit Details" value="13" /> */}
            <Tab label="News" value="14" />
          </TabList>
          <Divider sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }} />
        </Box>
        <TabPanel value="1">
          <CoinPageOverview />
        </TabPanel>
        <TabPanel value="2">
          <CoinPageAbout />
        </TabPanel>
        <TabPanel value="3">
          <CoinpageRatings />
        </TabPanel>
        {/* <TabPanel value="4">
          <CoinPageMarket />
        </TabPanel> */}
        <TabPanel value="5">
          <CoinPageHistoricalData />
        </TabPanel>
        <TabPanel value="6">
          <CoinPageTodaysPrice />
        </TabPanel>
        <TabPanel value="7">
          <CoinPageCommunity />
        </TabPanel>
        <TabPanel value="8">
          <CoinPageFAQ />
        </TabPanel>

        <TabPanel value="9">
          <CoinPageEvents />
        </TabPanel>
        <TabPanel value="10">
          <CoinPagePresale />
        </TabPanel>
        <TabPanel value="11">
          <CoinPageAirdrop />
        </TabPanel>
        <TabPanel value="12">
          {" "}
          <CoinPageWidget />
        </TabPanel>
        {/* <TabPanel value="13">sss</TabPanel> */}
        <TabPanel value="14">
          <CoinPageNews />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default SinglePageTab;
