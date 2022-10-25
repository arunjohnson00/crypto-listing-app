import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { relative } from "node:path/win32";
import DiscoverLatest from "../../desktop/discoverlatest/DiscoverLatest";
import DiscoverNews from "../../desktop/discovernews/DiscoverNews";
import DiscoverVideo from "../../desktop/discovervideo/DiscoverVideo";
import DiscoverRecentlyAdded from "../../desktop/discoverrecentlyadded/DiscoverRecentlyAdded";
import useMediaQuery from "@mui/material/useMediaQuery";
import DiscoverTrending from "../../desktop/discovertrending/DiscoverTrending";
import DiscoverNFTs from "../../desktop/discovernft/DiscoverNFTs";
import DiscoverNftMarketPlaces from "../../desktop/discovernftmarketplaces/DiscoverNftMarketPlaces";
import DiscoverAirdrops from "../../desktop/discoverairdrops/DiscoverAirdrops";
import DiscoverEvents from "../../desktop/discoverevents/DiscoverEvents";
import { makeStyles } from "@mui/styles";
import MobileDiscoverLatest from "../discoverlatest/MobileDiscoverLatest";
import MobileDiscoverNews from "../discovernews/MobileDiscoverNews";
import MobileDiscoverEvents from "../discoverevents/MobileDiscoverEvents";
import MobileDiscoverAirdrops from "../discoverairdrops/MobileDiscoverAirdrops";
import MobileDiscoverNFTs from "../discovernft/MobileDiscoverNFTs";
import MobileDiscoverTrending from "../discovertrending/MobileDiscoverTrending";
import MobileDiscoverVideo from "../discovervideo/MobileDiscoverVideo";
import MobileDiscoverRecentlyAdded from "../discoverrecentlyadded/MobileDiscoverRecentlyAdded";
import MobileDiscoverNftMarketPlaces from "../discovernftmarketplaces/MobileDiscoverNftMarketPlaces";

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
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const MobileDiscoverHorizontalTab = () => {
  const [value, setValue] = React.useState(0);
  const [scrollBtn, setScrollBtn] = React.useState(false);
  const matches = useMediaQuery("(min-width:900px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // newValue > 2 ? setScrollBtn(true) : setScrollBtn(false);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        backgroundColor: "#020419",
        display: "flex",
        color: "#FFFFF5",
      }}
      flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
    >
      <Tabs
        orientation={"horizontal"}
        // variant={"fullWidth"}
        variant="scrollable"
        //orientation="vertical"
        scrollButtons={true}
        allowScrollButtonsMobile={false}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
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
            minWidth: 120,
            paddingX: 0,
            marginX: 0,
            backgroundColor: "#000431",
          },
          "& .MuiButtonBase-root.MuiTab-root": {
            color: "#F8F7FA",
            textTransform: "capitalize",
            minHeight: 57,
            minWidth: 120,
            fontSize: 12,
            backgroundColor: "#020521",
            paddingX: 0,
            marginX: 0,

            //boxShadow: "5px 0px 0px #0D1B55 inset",
            // marginLeft: 0.5,
          },

          "&.Mui-disabled": {
            width: 0,
            display: "none",
          },
        }}
      >
        <Tab
          label="Latest"
          {...a11yProps(0)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="News"
          {...a11yProps(1)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Watch Videos"
          {...a11yProps(2)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Recently Added"
          {...a11yProps(3)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        {/* <Tab
          label="Trending"
          {...a11yProps(4)}
          sx={{
            paddingLeft: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        /> */}
        <Tab
          label="NFT's"
          {...a11yProps(4)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        {/* <Tab
          label="NFT Marketplaces"
          {...a11yProps(5)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        /> */}

        <Tab
          label="Airdrops"
          {...a11yProps(5)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
        <Tab
          label="Events"
          {...a11yProps(6)}
          sx={{
            paddingX: 4,
            "&.MuiButtonBase-root.MuiTab-root": {
              alignItems: `${matches ? "flex-start" : "center"}`,
            },
          }}
        />
      </Tabs>
      <Box p={0}>
        <TabPanel value={value} index={0}>
          <MobileDiscoverLatest />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MobileDiscoverNews />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MobileDiscoverVideo />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <MobileDiscoverRecentlyAdded />
        </TabPanel>
        {/* <TabPanel value={value} index={4}>
          <MobileDiscoverTrending />
        </TabPanel> */}
        <TabPanel value={value} index={4}>
          <MobileDiscoverNFTs />
        </TabPanel>
        {/* <TabPanel value={value} index={5}>
          <MobileDiscoverNftMarketPlaces />
        </TabPanel> */}
        <TabPanel value={value} index={5}>
          <MobileDiscoverAirdrops />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <MobileDiscoverEvents />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default MobileDiscoverHorizontalTab;
