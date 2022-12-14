import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Divider, Stack, useMediaQuery } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

const TableButtonGroup = ({
  tableTabvalue,
  setTableTabValue,
  tableTabHandleChange,
  setTableData,
}: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    setTableData([]);
    location?.pathname === "/coins/watch-list" && setTableTabValue("1");
    location?.pathname === "/coins" && setTableTabValue("2");
    location?.pathname === "/coins/biggest-gainers" && setTableTabValue("3");
    location?.pathname === "/coins/top-losers" && setTableTabValue("4");
    location?.pathname === "/coins/recently-added" && setTableTabValue("5");
    location?.pathname === "/coins/presales" && setTableTabValue("8");
    location?.pathname === "/coins/most-voted" && setTableTabValue("7");
  }, [location]);

  useEffect(() => {
    setTableData([]);
    tableTabvalue === "1" && navigate("/coins/watch-list");
    tableTabvalue === "2" && navigate("/coins");
    tableTabvalue === "3" && navigate("/coins/biggest-gainers");
    tableTabvalue === "4" && navigate("/coins/top-losers");
    tableTabvalue === "5" && navigate("/coins/recently-added");
    tableTabvalue === "7" && navigate("/coins/most-voted");
    tableTabvalue === "8" && navigate("/coins/presales");
  }, [tableTabvalue]);

  return (
    <Box
      sx={{
        width: matches ? "auto" : "87%",
        display: "flex",
        alignItems: "center",
        height: 40,
      }}
      pt={0}
    >
      <Tabs
        value={tableTabvalue}
        onChange={tableTabHandleChange}
        variant="scrollable"
        scrollButtons
        aria-label="secondary tabs example"
        sx={{
          alignItems: "center",
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
            // marginBottom: "2px",
            marginRight: "4px",
            alignSelf: "center",
          },
          "&.MuiTabs-scroller": {
            display: "flex",
            alignItems: "center",
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
        <Tab value="4" label="Top Losers" />
        <Tab value="5" label="Recently Added" />

        {/* <Tab value="6" label="Trending Coins" /> */}
        <Tab value="7" label="Most Voted" />
        <Tab value="8" label="Presales" />
      </Tabs>
    </Box>
  );
};

export default TableButtonGroup;
