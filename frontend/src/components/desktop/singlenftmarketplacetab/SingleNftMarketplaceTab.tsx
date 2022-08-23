import { useState } from "react";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, Stack, useMediaQuery, Tab, Box } from "@mui/material";
import DropDownAds from "../dropdownads/DropDownAds";
import NFTMarketPlaceCommunity from "../nftmarketplacecommunity/NFTMarketPlaceCommunity";

const SingleNftMarketplaceTab = () => {
  const [value, setValue] = useState("1");
  const [tabValue, setTabValue] = useState("1");
  const matches = useMediaQuery("(max-width:900px)");
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
      {matches === true && (
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          spacing={0.5}
          sx={{
            alignItems: "center",
          }}
          justifyContent="center"
          width="100%"
          pb={3}
        >
          <DropDownAds data="Test One" title="Buy" color="#4AE424" />
          <DropDownAds data="Test Two" title="Exchange" color="#037BFD" />
          <DropDownAds data="Test Three" title="Gaming" color="#FF5111" />
          <DropDownAds data="Test Four" title="Earn Crypto" color="#E13DEE" />
        </Stack>
      )}
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
            {matches === false && (
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={0.5}
                sx={{
                  alignItems: "center",
                }}
                justifyContent="flex-end"
                width="100%"
              >
                <DropDownAds data="Test One" title="Buy" color="#4AE424" />
                <DropDownAds data="Test Two" title="Exchange" color="#037BFD" />
                <DropDownAds data="Test Three" title="Gaming" color="#FF5111" />
                <DropDownAds
                  data="Test Four"
                  title="Earn Crypto"
                  color="#E13DEE"
                />
              </Stack>
            )}
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
