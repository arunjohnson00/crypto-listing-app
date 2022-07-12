import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Divider, Stack, IconButton } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
const PresaleFilterButtonGroup = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      pt={1}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="secondary tabs example"
        sx={{
          alignItems: "center",
          backgroundColor: "#010C24",
          borderRadius: 8,
          width: "75%",
          "& .MuiTabs-indicator": {
            display: "none",
            backgroundColor: "#040A22",
            // color: "#FFFFF5",
          },

          "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
            color: "#B7C8DC",
            textTransform: "capitalize",
            backgroundColor: "#1976d2",
          },
          "& .MuiButtonBase-root.MuiTab-root": {
            color: "#B7C8DC",
            textTransform: "capitalize",
            minHeight: 30,
            maxHeight: 30,
            fontSize: ".72em",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginX: 0.5,
            alignSelf: "center",
          },
          "& .MuiButtonBase-root": {
            // backgroundColor: "red",
            borderRadius: 8,
          },
          "& .MuiButtonBase-root.MuiTab-root>.MuiTab-iconWrapper": {
            marginBottom: "2px",
            marginRight: "3px",
          },
        }}
      >
        <IconButton aria-label="delete" disabled color="primary">
          <TuneOutlinedIcon sx={{ color: "#FFFFFF" }} />
        </IconButton>
        {/* <Tab value="one" label="Watchlist" icon={<TuneOutlinedIcon />} /> */}
        {/* <Divider
          variant="middle"
          flexItem
          orientation="vertical"
          sx={{ borderColor: "#5e758f87" }}
        /> */}
        <Tab value="one" label="Active" sx={{ backgroundColor: "#039811" }} />
        <Tab value="two" label="Upcoming" sx={{ backgroundColor: "#C35C00" }} />
        <Tab
          value="three"
          label="Expired"
          sx={{ backgroundColor: "#98030E" }}
        />
      </Tabs>
    </Box>
  );
};

export default PresaleFilterButtonGroup;
