import { useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  NativeSelect,
  Box,
  Avatar,
  Tooltip,
  Divider,
  CardMedia,
  Link,
} from "@mui/material";
import { useSelector } from "react-redux";
import moment from "moment";
import ReactPlayer from "react-player";
import LinearProgress from "@mui/material/LinearProgress";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Iframe from "react-iframe";

const CoinPageOverview = () => {
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });

  const [viewMore, setViewMore] = useState(true);

  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={3.5} lg={3.5} xl={3.5}>
        <Grid xs={12} mb={5}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height={300}
          />
        </Grid>
        <Grid xs={12} mb={5}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#FFFFF5",
              "&::after": {
                content: '""',
                display: "block",
                width: "20%",
                borderBottom: "2px solid #23E2A0",
              },
            }}
          >
            Information
          </Typography>

          <Stack direction="column" mt={1.2}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1.5}
            >
              <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                Price
              </Typography>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.current_price !== null &&
                coinDetailOverview[0]?.current_price !== ""
                  ? "$" + coinDetailOverview[0]?.current_price
                  : "NA"}
              </Typography>
            </Stack>
            <Stack direction="row" mt={0.9}>
              <Box
                sx={{
                  width: "100%",
                  color: "#6252e7",
                }}
              >
                <LinearProgress
                  value={60}
                  variant="determinate"
                  color="inherit"
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={0.3}
            >
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontSize: "0.65rem" }}
              >
                Low:{" "}
                {coinDetailOverview &&
                coinDetailOverview[0]?.price_low !== null &&
                coinDetailOverview[0]?.price_low !== ""
                  ? "$" + coinDetailOverview[0]?.price_low
                  : "NA"}
              </Typography>
              <Stack direction="row">
                <NativeSelect
                  id="select"
                  sx={{
                    color: "#B6B6B9",
                    backgroundColor: "#010519",
                    fontSize: "0.55rem",
                    borderBottom: 0,
                    paddingRight: "7px",
                    "&:before": {
                      borderBottom: 0,
                    },
                    "&:after": {
                      borderBottom: 0,
                    },
                    "&.MuiNativeSelect-select-MuiInputBase-input-MuiInput-input .MuiNativeSelect-icon":
                      {
                        color: "red",
                      },
                    icon: {
                      fill: "red",
                    },
                  }}
                >
                  <option value="10">24h</option>
                  <option value="20">7h</option>
                </NativeSelect>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontSize: "0.65rem" }}
                >
                  High:{" "}
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.price_high !== null &&
                  coinDetailOverview[0]?.price_high !== ""
                    ? "$" + coinDetailOverview[0]?.price_high
                    : "NA"}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={4}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Total Holders
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                API need
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  In Watchlist
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                API need
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Total Liqudity in pool
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.liquidity_pool_total !== null &&
                coinDetailOverview[0]?.liquidity_pool_total !== ""
                  ? coinDetailOverview[0]?.liquidity_pool_total
                  : "NA"}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  All Time High
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.all_time_high !== null &&
                coinDetailOverview[0]?.all_time_high !== ""
                  ? coinDetailOverview[0]?.all_time_high
                  : "NA"}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  All Time High Date
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.all_time_high_date !== null &&
                coinDetailOverview[0]?.all_time_high_date !== ""
                  ? moment(
                      new Date(coinDetailOverview[0]?.all_time_high_date)
                    ).format("MMM DD YY")
                  : "NA"}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  1h %
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "flex-end" }}
                spacing={0}
              >
                {coinDetailOverview &&
                coinDetailOverview[0]?.percent_change_1h !== null &&
                Math.sign(
                  parseInt(coinDetailOverview[0]?.percent_change_1h)
                ) === -1 ? (
                  <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                ) : (
                  coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_1h !== null && (
                    <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                  )
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      coinDetailOverview &&
                      Math.sign(
                        parseInt(coinDetailOverview[0]?.percent_change_1h)
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_1h !== null &&
                  coinDetailOverview[0]?.percent_change_1h !== "" ? (
                    parseFloat(coinDetailOverview[0]?.percent_change_1h)
                      .toFixed(2)
                      .replace("-", "") + "%"
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  24h %
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "flex-end" }}
                spacing={0}
              >
                {coinDetailOverview &&
                coinDetailOverview[0]?.percent_change_24h !== null &&
                Math.sign(
                  parseInt(coinDetailOverview[0]?.percent_change_24h)
                ) === -1 ? (
                  <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                ) : (
                  coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_24h !== null && (
                    <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                  )
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      coinDetailOverview &&
                      Math.sign(
                        parseInt(coinDetailOverview[0]?.percent_change_24h)
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_24h !== null &&
                  coinDetailOverview[0]?.percent_change_24h !== "" ? (
                    parseFloat(coinDetailOverview[0]?.percent_change_24h)
                      .toFixed(2)
                      .replace("-", "") + "%"
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  7d %
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "flex-end" }}
                spacing={0}
              >
                {coinDetailOverview &&
                coinDetailOverview[0]?.percent_change_7d !== null &&
                Math.sign(
                  parseInt(coinDetailOverview[0]?.percent_change_7d)
                ) === -1 ? (
                  <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                ) : (
                  coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_7d !== null && (
                    <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                  )
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      coinDetailOverview &&
                      Math.sign(
                        parseInt(coinDetailOverview[0]?.percent_change_7d)
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_7d !== null &&
                  coinDetailOverview[0]?.percent_change_7d !== "" ? (
                    parseFloat(coinDetailOverview[0]?.percent_change_7d)
                      .toFixed(2)
                      .replace("-", "") + "%"
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  30d %
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                22
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  60d %
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                22
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Volume 24h
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography
                variant="caption"
                sx={{ color: "#ff0000", fontWeight: 600 }}
              >
                {coinDetailOverview &&
                coinDetailOverview[0]?.volume_24h !== null &&
                coinDetailOverview[0]?.volume_24h !== ""
                  ? coinDetailOverview[0]?.volume_24h
                  : "NA"}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Market Cap
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.market_cap !== null &&
                coinDetailOverview[0]?.market_cap !== ""
                  ? coinDetailOverview[0]?.market_cap
                  : "NA"}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Fully Diluted Market Cap
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.fully_diluted_market_cap !== null &&
                coinDetailOverview[0]?.fully_diluted_market_cap !== ""
                  ? parseFloat(
                      coinDetailOverview[0]?.fully_diluted_market_cap
                    ).toFixed(3)
                  : "NA"}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Circulating Supply
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.circulating_supply !== null &&
                coinDetailOverview[0]?.circulating_supply !== ""
                  ? coinDetailOverview[0]?.circulating_supply
                  : "NA"}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              mt={1}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography variant="caption" sx={{ color: "#B6B6B9" }}>
                  Total Supply
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                {coinDetailOverview &&
                coinDetailOverview[0]?.total_supply !== null &&
                coinDetailOverview[0]?.total_supply !== ""
                  ? coinDetailOverview[0]?.total_supply
                  : "NA"}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Divider
          variant="fullWidth"
          flexItem
          orientation="horizontal"
          sx={{ borderColor: "#342D61", borderBottomWidth: 2 }}
        />
        <Grid xs={12} mt={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#FFFFF5",
              "&::after": {
                content: '""',
                display: "block",
                width: "20%",
                borderBottom: "2px solid #23E2A0",
              },
            }}
          >
            Liquidity Pool
          </Typography>

          <Stack direction="row" mt={3} spacing={3}>
            <Stack direction="column" spacing={1.6}>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                Number of Liquidity Pools
              </Typography>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                43
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation="vertical"
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />

            <Stack direction="column" spacing={1.6}>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                Total in Liquidity Pool
              </Typography>
              <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                $203456
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="column" mt={4} spacing={2}>
            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="body2" sx={{ color: "#1EC18D" }}>
                  Safemoonswap
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  SFM/BUSD LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 BUSD
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="body2" sx={{ color: "#1EC18D" }}>
                  Safemoonswap
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  SFM/BNB LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 BNB
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="body2" sx={{ color: "#1EC18D" }}>
                  Pc V2
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="body2" sx={{ color: "#FFFFF5" }}>
                  SFM/BNB LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 BNB
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                  Pc V2
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  SFM/BUSD LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 BUSD
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                  Pc V2
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  SFM/BUSDT LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 BUSDT
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                  Pc V2
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  SFM/Cake LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 Cake
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                  Pc V2
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  SFM/ETH LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 ETH
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="column" spacing={0.3}>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                  Pc V2
                </Typography>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                />
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  SFM/BTC LP Holding :
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.8}>
                <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                  20,3456,555 BTC
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#038CBF", fontWeight: 600 }}
                >
                  ($10,0000,08)
                </Typography>
              </Stack>
            </Stack>

            <SlideDown className={"my-dropdown-slidedown"} closed={viewMore}>
              <Stack direction="column" spacing={0.3}>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#1EC18D" }}>
                    Pc V2
                  </Typography>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{ borderColor: "#FFFFF5", borderRightWidth: 2 }}
                  />
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    SFM/BTC LP Holding :
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.8}>
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    20,3456,555 BTC
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "#038CBF", fontWeight: 600 }}
                  >
                    ($10,0000,08)
                  </Typography>
                </Stack>
              </Stack>
            </SlideDown>
            <Link sx={{ color: "#FFFFF5" }} onClick={viewmoreHandler}>
              {viewMore === true ? "View More" : "View Less"}
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={8.5}
        lg={8.5}
        xl={8.5}
        px={{ xs: 0, sm: 0, md: 0 }}
        pl={{ md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <CardMedia
          component="img"
          height="80"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />

        <Grid xs={12} pt={4}>
          <Iframe
            url="https://coinbrain.com/embed/0x55d398326f99059ff775485246999027b3197955?theme=dark&chart=1&trades=1"
            width="100%"
            height="1190"
            id="myId"
            className="myClassname"
            display="block"
            position="relative"
            frameBorder={0}
          />
        </Grid>
        <Grid xs={12} pt={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageOverview;
