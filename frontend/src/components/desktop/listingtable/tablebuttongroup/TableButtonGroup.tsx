import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider, Stack } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const TableButtonGroup = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} pt={1}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="secondary tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
            backgroundColor: "#040A22",
            // color: "#FFFFF5",
          },

          "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
            color: "#B7C8DC",
            textTransform: "capitalize",
            backgroundColor: "#081544",
          },
          "& .MuiButtonBase-root.MuiTab-root": {
            color: "#B7C8DC",
            textTransform: "capitalize",
            minHeight: 30,
            maxHeight: 30,
            fontSize: ".82em",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginX: 0.5,
          },
          "& .MuiButtonBase-root": {
            // backgroundColor: "red",
            borderRadius: 4,
          },
          "& .MuiButtonBase-root.MuiTab-root>.MuiTab-iconWrapper": {
            marginBottom: "2px",
            marginRight: "3px",
          },
        }}
      >
        <Tab value="one" label="Watchlist" icon={<StarOutlineRoundedIcon />} />
        <Divider
          variant="middle"
          flexItem
          orientation="vertical"
          sx={{ borderColor: "#5e758f87" }}
        />
        <Tab value="two" label="Spotlight" />
        <Tab value="three" label="Gainers & Losers" />
        <Tab value="four" label="Trending" />
        <Tab value="five" label="Most Visited" />
      </Tabs>
    </Box>
  );
};

export default TableButtonGroup;
