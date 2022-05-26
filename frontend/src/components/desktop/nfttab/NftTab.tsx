import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Stack } from "@mui/material";
import NFTListingPill from "../nftlistingpill/NFTListingPill";

const NftTab = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                //display: "none",
                backgroundColor: "#BABBF9",
                // color: "#FFFFF5",
              },

              "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
                color: "#BABBF9",
                textTransform: "capitalize",
                minHeight: 62,
              },
              "& .MuiButtonBase-root.MuiTab-root": {
                color: "#AFB0B7",
                textTransform: "capitalize",
                minHeight: 62,
                fontSize: 18,
              },
            }}
          >
            <Tab label="Most Popular" value="1" />
            <Tab label="Recently Added" value="2" />
            <Tab label="Upcoming Events" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0, paddingY: 4 }}>
          <Grid xs={12}>
            <Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
              <NFTListingPill />
            </Stack>
          </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default NftTab;
