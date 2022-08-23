import { useState } from "react";
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
import { Divider, Stack } from "@mui/material";
import CoinPageCommunity from "../coinpagecommunity/CoinPageCommunity";
import CoinPageHistoricalData from "../coinpagehistoricaldata/CoinPageHistoricalData";
import CoinPageTodaysPrice from "../coinpagetodaysprice/CoinPageTodaysPrice";
import CoinPageDropDown from "../coinpagedropdown/CoinPageDropDown";
import NFTMarketPlaceCommunity from "../nftmarketplacecommunity/NFTMarketPlaceCommunity";

const SingleNftMarketplaceTab = () => {
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
          <Divider sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }} />
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
            <Tab label="Community" value="1" />
            <Tab label="Related NFT Marketplaces" value="2" />
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={0.5}
              sx={{
                alignItems: "center",
              }}
              justifyContent="flex-end"
              width="100%"
            >
              <CoinPageDropDown data="Test One" title="Buy" />
              <CoinPageDropDown data="Test Two" title="Exchange" />
              <CoinPageDropDown data="Test Three" title="Gaming" />
              <CoinPageDropDown data="Test Four" title="Earn Crypto" />
            </Stack>
          </TabList>
          <Divider sx={{ borderColor: "#2D2858", borderBottomWidth: "1px" }} />
        </Box>
        <TabPanel value="1">
          <NFTMarketPlaceCommunity />
        </TabPanel>
        <TabPanel value="2">gg</TabPanel>
      </TabContext>
    </Box>
  );
};

export default SingleNftMarketplaceTab;
