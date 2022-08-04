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
import React from "react";
import ReactPlayer from "react-player";
import LinearProgress from "@mui/material/LinearProgress";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Iframe from "react-iframe";

const CoinPageOverview = () => {
  const [viewMore, setViewMore] = useState(true);

  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };

  return (
    <Grid container xs={12}>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
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
                $0.00589303
              </Typography>
            </Stack>
            <Stack direction="row" mt={0.9}>
              <Box sx={{ width: "100%", color: "#6252E7" }}>
                <LinearProgress
                  value={60}
                  variant="determinate"
                  sx={{
                    "&.MuiLinearProgress-barColorPrimary": { color: "#6252E7" },
                  }}
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
                sx={{ color: "#FFFFF5", fontSize: "0.55rem" }}
              >
                Low:$0
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
                  sx={{ color: "#FFFFF5", fontSize: "0.55rem" }}
                >
                  High: $0.00589303
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
                98,978,88
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
                4444,333
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
                $4444,333
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
                $0.00589303
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
                Dec 13 , 2021
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
                  24h %
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
                  7d %
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
              <Typography variant="caption" sx={{ color: "#C61F0A" }}>
                20%
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
                $77788
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
                $77788
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
                81OT DOGH
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
                81OT DOGH
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
        md={8}
        lg={8}
        xl={8}
        px={{ xs: 0, sm: 0, md: 4 }}
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
