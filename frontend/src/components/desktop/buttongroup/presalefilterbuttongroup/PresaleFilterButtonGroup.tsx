import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Divider,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
const PresaleFilterButtonGroup = ({ value, setValue }: any) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: { xs: "center", sm: "center", md: "flex-end" },
      }}
      pt={1}
      px={1}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        // allowScrollButtonsMobile
        aria-label="secondary tabs example"
        sx={{
          alignItems: "center",
          backgroundColor: "#010C24",
          borderRadius: 8,
          px: 1,
          width: "auto",
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

            fontSize: ".67em",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginX: matches === true ? 0.5 : 0.3,
            paddingX: matches === true ? 0.5 : 1,
            alignSelf: "center",
          },
          "& .MuiButtonBase-root": {
            // backgroundColor: "red",
            borderRadius: 8,
            minWidth: matches === true ? "70px" : "55px",
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
        <Tab value={0} label="All" sx={{ backgroundColor: "#1e1696" }} />
        <Tab value={1} label="Active" sx={{ backgroundColor: "#039811" }} />
        <Tab value={2} label="Upcoming" sx={{ backgroundColor: "#C35C00" }} />
        <Tab value={3} label="Expired" sx={{ backgroundColor: "#98030E" }} />
      </Tabs>
    </Box>
  );
};

export default PresaleFilterButtonGroup;
