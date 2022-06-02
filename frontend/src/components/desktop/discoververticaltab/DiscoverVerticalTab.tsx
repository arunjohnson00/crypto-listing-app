import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { relative } from "node:path/win32";
import DiscoverLatest from "../discoverlatest/DiscoverLatest";
import DiscoverNews from "../discovernews/DiscoverNews";
import DiscoverVideo from "../discovervideo/DiscoverVideo";
import DiscoverRecentlyAdded from "../discoverrecentlyadded/DiscoverRecentlyAdded";
import useMediaQuery from "@mui/material/useMediaQuery";
import DiscoverTrending from "../discovertrending/DiscoverTrending";
import DiscoverNFTs from "../discovernft/DiscoverNFTs";
import DiscoverNftMarketPlaces from "../discovernftmarketplaces/DiscoverNftMarketPlaces";
import DiscoverAirdrops from "../discoverairdrops/DiscoverAirdrops";
import DiscoverEvents from "../discoverevents/DiscoverEvents";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const DiscoverVerticalTab = () => {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(min-width:900px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#020419",
        display: "flex",
        color: "#FFFFF5",
        //paddingLeft: "62px",
      }}
      flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
    >
      <Tabs
        orientation={`${matches ? "vertical" : "horizontal"}`}
        variant={`${matches ? "fullWidth" : "scrollable"}`}
        scrollButtons
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          width: `${matches ? "250px" : "100%"}`,
          backgroundColor: "#020419",
          "& .MuiTabs-indicator": {
            //display: "none",
            backgroundColor: "#2EFB72",
            left: 0,
            width: 15,
            borderRadius: 10,
          },

          "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
            color: "#F8F7FA",
            textTransform: "capitalize",
            minHeight: 57,
          },
          "& .MuiButtonBase-root.MuiTab-root": {
            color: "#F8F7FA",
            textTransform: "capitalize",
            minHeight: 57,
            fontSize: 12,
            backgroundColor: "#020419",
            boxShadow: "5px 0px 0px #0D1B55 inset",
            marginLeft: 0.5,
          },
        }}
      >
        <Tab
          label="Latest"
          {...a11yProps(0)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="News"
          {...a11yProps(1)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Watch Videos"
          {...a11yProps(2)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Recently Added"
          {...a11yProps(3)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Trending"
          {...a11yProps(4)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="NFT's"
          {...a11yProps(5)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="NFT Marketplaces"
          {...a11yProps(6)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />

        <Tab
          label="Airdrops"
          {...a11yProps(7)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Events"
          {...a11yProps(8)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DiscoverLatest />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DiscoverNews />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DiscoverVideo />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DiscoverRecentlyAdded />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DiscoverTrending />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <DiscoverNFTs />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <DiscoverNftMarketPlaces />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <DiscoverAirdrops />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <DiscoverEvents />
      </TabPanel>
    </Box>
  );
};

export default DiscoverVerticalTab;
