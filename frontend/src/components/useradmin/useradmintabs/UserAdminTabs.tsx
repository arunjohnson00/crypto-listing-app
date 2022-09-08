import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import UserAdminOverview from "../useradminoverview/UserAdminOverview";
import UserAdminCoinListing from "../useradmincoinlisting/UserAdminCoinListing";
import UserAdminNFTListing from "../useradminnftlisting/UserAdminNFTListing";
import UserAdminEventsListing from "../useradmineventslisting/UserAdminEventsListing";
import UserAdminAirdropsListing from "../useradminairdropslisting/UserAdminAirdropsListing";
import UserAdminReviewListing from "../useradminreviewlisting/UserAdminReviewListing";

const UserAdminTabs = () => {
  const [value, setValue] = useState("1");
  const matches = useMediaQuery("(max-width:900px)");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={
            {
              //  borderBottom: 2, borderColor: "divider"
            }
          }
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant={matches === true ? "scrollable" : "standard"}
            scrollButtons={true}
            sx={{
              "& .MuiTabs-indicator": {
                //display: "none",
                backgroundColor: "#08B34B",
                height: 5,
                borderRadius: 2,
                // color: "#FFFFF5",
              },

              "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
                color: "#23E2A0",
                textTransform: "capitalize",
                minHeight: 62,
              },
              "& .MuiButtonBase-root.MuiTab-root": {
                color: "#FFFFFF",
                textTransform: "capitalize",
                minHeight: 62,
                fontSize: ".95rem",
                minWidth: 77,
                px: 0,
                mr: 2,
              },
            }}
          >
            <Tab label="Overview" value="1" />
            <Tab label="Coins" value="2" />
            <Tab label="NFT's" value="3" />
            <Tab label="Events" value="4" />
            <Tab label="AirDrops" value="5" />
            <Tab label="Ratings" value="6" />
            <Tab label="Watchlist" value="7" />
            <Tab label="Promotion" value="8" />
          </TabList>
          <Divider
            flexItem
            orientation="horizontal"
            sx={{
              borderBottomColor: "#281E63",
              borderBottomWidth: 3,
              mt: -0.5,
            }}
          />
        </Box>
        <TabPanel value="1" sx={{ padding: 0, paddingY: 3 }}>
          <UserAdminOverview />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0, paddingY: 3 }}>
          <UserAdminCoinListing />
        </TabPanel>
        <TabPanel value="3" sx={{ padding: 0, paddingY: 3 }}>
          <UserAdminNFTListing />
        </TabPanel>
        <TabPanel value="4" sx={{ padding: 0, paddingY: 3 }}>
          <UserAdminEventsListing />
        </TabPanel>
        <TabPanel value="5" sx={{ padding: 0, paddingY: 3 }}>
          <UserAdminAirdropsListing />
        </TabPanel>
        <TabPanel value="6" sx={{ padding: 0, paddingY: 3 }}>
          <UserAdminReviewListing />
        </TabPanel>
        <TabPanel value="7" sx={{ padding: 0, paddingY: 3 }}>
          test
        </TabPanel>
        <TabPanel value="8" sx={{ padding: 0, paddingY: 3 }}>
          Item Two
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default UserAdminTabs;
