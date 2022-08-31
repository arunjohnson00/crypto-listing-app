import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Divider, Stack } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const TableButtonGroup = ({
  tableTabvalue,
  setTableTabValue,
  tableTabHandleChange,
}: any) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location?.pathname === "/coins/watch-list" && setTableTabValue("1");
    location?.pathname === "/coins" && setTableTabValue("2");
    location?.pathname === "/coins/biggest-gainers" && setTableTabValue("3");
    location?.pathname === "/coins/top-losers" && setTableTabValue("4");
    location?.pathname === "/coins/recently-added" && setTableTabValue("5");
    location?.pathname === "/coins/presales" && setTableTabValue("8");
    location?.pathname === "/coins/most-visited" && setTableTabValue("7");
  }, [location]);

  useEffect(() => {
    tableTabvalue === "1" && navigate("/coins/watch-list");
    tableTabvalue === "2" && navigate("/coins");
    tableTabvalue === "3" && navigate("/coins/biggest-gainers");
    tableTabvalue === "4" && navigate("/coins/top-losers");
    tableTabvalue === "5" && navigate("/coins/recently-added");
    tableTabvalue === "7" && navigate("/coins/most-visited");
    tableTabvalue === "8" && navigate("/coins/presales");
  }, [tableTabvalue]);

  return (
    <Box sx={{ width: "100%" }} pt={1}>
      <Tabs
        value={tableTabvalue}
        onChange={tableTabHandleChange}
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
            marginRight: "4px",
          },
        }}
      >
        <Tab value="1" label="Watchlist" icon={<StarOutlineRoundedIcon />} />
        <Divider
          variant="middle"
          flexItem
          orientation="vertical"
          sx={{ borderColor: "#5e758f87" }}
        />

        <Tab value="2" label="Coins" />

        <Tab value="3" label="Biggest Gainers" />
        <Tab value="4" label="Biggest Losers" />
        <Tab value="5" label="Recently Added" />

        {/* <Tab value="6" label="Trending Coins" /> */}
        <Tab value="7" label="Most Visited" />
        <Tab value="8" label="Presales" />
      </Tabs>
    </Box>
  );
};

export default TableButtonGroup;
