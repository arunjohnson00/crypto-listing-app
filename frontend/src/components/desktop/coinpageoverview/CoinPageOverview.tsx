import { useEffect, useState } from "react";
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
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import Chart from "react-apexcharts";
import moment from "moment";
import ReactPlayer from "react-player";
import LinearProgress from "@mui/material/LinearProgress";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Iframe from "react-iframe";

const chartData: any = {
  series: [
    {
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
        [1328655600000, 32.1],
        [1328742000000, 32.65],
        [1328828400000, 32.21],
        [1329087600000, 32.35],
        [1329174000000, 32.44],
        [1329260400000, 32.46],
        [1329346800000, 32.86],
        [1329433200000, 32.75],
        [1329778800000, 32.54],
        [1329865200000, 32.33],
        [1329951600000, 32.97],
        [1330038000000, 33.41],
        [1330297200000, 33.27],
        [1330383600000, 33.27],
        [1330470000000, 32.89],
        [1330556400000, 33.1],
        [1330642800000, 33.73],
        [1330902000000, 33.22],
        [1330988400000, 31.99],
        [1331074800000, 32.41],
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
        [1332457200000, 33.81],
        [1332712800000, 34.4],
        [1332799200000, 34.63],
        [1332885600000, 34.46],
        [1332972000000, 34.48],
        [1333058400000, 34.31],
        [1333317600000, 34.7],
        [1333404000000, 34.31],
        [1333490400000, 33.46],
        [1333576800000, 33.59],
        [1333922400000, 33.22],
        [1334008800000, 32.61],
        [1334095200000, 33.01],
        [1334181600000, 33.55],
        [1334268000000, 33.18],
        [1334527200000, 32.84],
        [1334613600000, 33.84],
        [1334700000000, 33.39],
        [1334786400000, 32.91],
        [1334872800000, 33.06],
        [1335132000000, 32.62],
        [1335218400000, 32.4],
        [1335304800000, 33.13],
        [1335391200000, 33.26],
        [1335477600000, 33.58],
        [1335736800000, 33.55],
        [1335823200000, 33.77],
        [1335909600000, 33.76],
        [1335996000000, 33.32],
        [1336082400000, 32.61],
        [1336341600000, 32.52],
        [1336428000000, 32.67],
        [1336514400000, 32.52],
        [1336600800000, 31.92],
        [1336687200000, 32.2],
        [1336946400000, 32.23],
        [1337032800000, 32.33],
        [1337119200000, 32.36],
        [1337205600000, 32.01],
        [1337292000000, 31.31],
        [1337551200000, 32.01],
        [1337637600000, 32.01],
        [1337724000000, 32.18],
        [1337810400000, 31.54],
        [1337896800000, 31.6],
        [1338242400000, 32.05],
        [1338328800000, 31.29],
        [1338415200000, 31.05],
        [1338501600000, 29.82],
        [1338760800000, 30.31],
        [1338847200000, 30.7],
        [1338933600000, 31.69],
        [1339020000000, 31.32],
        [1339106400000, 31.65],
        [1339365600000, 31.13],
        [1339452000000, 31.77],
        [1339538400000, 31.79],
        [1339624800000, 31.67],
        [1339711200000, 32.39],
        [1339970400000, 32.63],
        [1340056800000, 32.89],
        [1340143200000, 31.99],
        [1340229600000, 31.23],
        [1340316000000, 31.57],
        [1340575200000, 30.84],
        [1340661600000, 31.07],
        [1340748000000, 31.41],
        [1340834400000, 31.17],
        [1340920800000, 32.37],
        [1341180000000, 32.19],
        [1341266400000, 32.51],
        [1341439200000, 32.53],
        [1341525600000, 31.37],
        [1341784800000, 30.43],
        [1341871200000, 30.44],
        [1341957600000, 30.2],
        [1342044000000, 30.14],
        [1342130400000, 30.65],
        [1342389600000, 30.4],
        [1342476000000, 30.65],
        [1342562400000, 31.43],
        [1342648800000, 31.89],
        [1342735200000, 31.38],
        [1342994400000, 30.64],
        [1343080800000, 30.02],
        [1343167200000, 30.33],
        [1343253600000, 30.95],
        [1343340000000, 31.89],
        [1343599200000, 31.01],
        [1343685600000, 30.88],
        [1343772000000, 30.69],
        [1343858400000, 30.58],
        [1343944800000, 32.02],
        [1344204000000, 32.14],
        [1344290400000, 32.37],
        [1344376800000, 32.51],
        [1344463200000, 32.65],
        [1344549600000, 32.64],
        [1344808800000, 32.27],
        [1344895200000, 32.1],
        [1344981600000, 32.91],
        [1345068000000, 33.65],
        [1345154400000, 33.8],
        [1345413600000, 33.92],
        [1345500000000, 33.75],
        [1345586400000, 33.84],
        [1345672800000, 33.5],
        [1345759200000, 32.26],
        [1346018400000, 32.32],
        [1346104800000, 32.06],
        [1346191200000, 31.96],
        [1346277600000, 31.46],
        [1346364000000, 31.27],
        [1346709600000, 31.43],
        [1346796000000, 32.26],
        [1346882400000, 32.79],
        [1346968800000, 32.46],
        [1347228000000, 32.13],
        [1347314400000, 32.43],
        [1347400800000, 32.42],
        [1347487200000, 32.81],
        [1347573600000, 33.34],
        [1347832800000, 33.41],
        [1347919200000, 32.57],
        [1348005600000, 33.12],
        [1348092000000, 34.53],
        [1348178400000, 33.83],
        [1348437600000, 33.41],
        [1348524000000, 32.9],
        [1348610400000, 32.53],
        [1348696800000, 32.8],
        [1348783200000, 32.44],
        [1349042400000, 32.62],
        [1349128800000, 32.57],
        [1349215200000, 32.6],
        [1349301600000, 32.68],
        [1349388000000, 32.47],
        [1349647200000, 32.23],
        [1349733600000, 31.68],
        [1349820000000, 31.51],
        [1349906400000, 31.78],
        [1349992800000, 31.94],
        [1350252000000, 32.33],
        [1350338400000, 33.24],
        [1350424800000, 33.44],
        [1350511200000, 33.48],
        [1350597600000, 33.24],
        [1350856800000, 33.49],
        [1350943200000, 33.31],
        [1351029600000, 33.36],
        [1351116000000, 33.4],
        [1351202400000, 34.01],
        [1351638000000, 34.02],
        [1351724400000, 34.36],
        [1351810800000, 34.39],
        [1352070000000, 34.24],
        [1352156400000, 34.39],
        [1352242800000, 33.47],
        [1352329200000, 32.98],
        [1352415600000, 32.9],
        [1352674800000, 32.7],
        [1352761200000, 32.54],
        [1352847600000, 32.23],
        [1352934000000, 32.64],
        [1353020400000, 32.65],
        [1353279600000, 32.92],
        [1353366000000, 32.64],
        [1353452400000, 32.84],
        [1353625200000, 33.4],
        [1353884400000, 33.3],
        [1353970800000, 33.18],
        [1354057200000, 33.88],
        [1354143600000, 34.09],
        [1354230000000, 34.61],
        [1354489200000, 34.7],
        [1354575600000, 35.3],
        [1354662000000, 35.4],
        [1354748400000, 35.14],
        [1354834800000, 35.48],
        [1355094000000, 35.75],
        [1355180400000, 35.54],
        [1355266800000, 35.96],
        [1355353200000, 35.53],
        [1355439600000, 37.56],
        [1355698800000, 37.42],
        [1355785200000, 37.49],
        [1355871600000, 38.09],
        [1355958000000, 37.87],
        [1356044400000, 37.71],
        [1356303600000, 37.53],
        [1356476400000, 37.55],
        [1356562800000, 37.3],
        [1356649200000, 36.9],
        [1356908400000, 37.68],
        [1357081200000, 38.34],
        [1357167600000, 37.75],
        [1357254000000, 38.13],
        [1357513200000, 37.94],
        [1357599600000, 38.14],
        [1357686000000, 38.66],
        [1357772400000, 38.62],
        [1357858800000, 38.09],
        [1358118000000, 38.16],
        [1358204400000, 38.15],
        [1358290800000, 37.88],
        [1358377200000, 37.73],
        [1358463600000, 37.98],
        [1358809200000, 37.95],
        [1358895600000, 38.25],
        [1358982000000, 38.1],
        [1359068400000, 38.32],
        [1359327600000, 38.24],
        [1359414000000, 38.52],
        [1359500400000, 37.94],
        [1359586800000, 37.83],
        [1359673200000, 38.34],
        [1359932400000, 38.1],
        [1360018800000, 38.51],
        [1360105200000, 38.4],
        [1360191600000, 38.07],
        [1360278000000, 39.12],
        [1360537200000, 38.64],
        [1360623600000, 38.89],
        [1360710000000, 38.81],
        [1360796400000, 38.61],
        [1360882800000, 38.63],
        [1361228400000, 38.99],
        [1361314800000, 38.77],
        [1361401200000, 38.34],
        [1361487600000, 38.55],
        [1361746800000, 38.11],
        [1361833200000, 38.59],
        [1361919600000, 39.6],
      ],
    },
  ],
  options: {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: ["#f6ff02"],
      width: 1,
      dashArray: 0,
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
          label: {
            show: true,
            text: "Support",
            style: {
              color: "#fff",
              background: "#fff",
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date("14 Nov 2012").getTime(),
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: "Top Gross",
            style: {
              color: ["#fff"],
              background: "#00ff00",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      min: new Date("01 Mar 2012").getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient",

      colors: ["#e5ed00"],

      gradient: {
        shadeIntensity: 0.5,
        opacityFrom: 0.7,
        opacityTo: 0.0,
        stops: [0, 40],
      },
    },
  },
};

const CoinPageOverview = () => {
  const coinDetailOverview = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });

  const [viewMore, setViewMore] = useState(true);
  const [dateTime, setDateTime] = useState<any>("one_year");

  const updateData = (timeline: any) => {
    setDateTime(timeline);
  };

  useEffect(() => {
    switch (dateTime) {
      case "one_month":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("28 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "six_months":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Sep 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "one_year":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("27 Feb 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "ytd":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("01 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "all":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date("23 Jan 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      default:
    }
  }, [setDateTime, dateTime]);

  const viewmoreHandler = () => {
    setViewMore(!viewMore);
  };

  return (
    <Grid container>
      <Grid xs={12} sm={12} md={3.5} lg={3.5} xl={3.5}>
        {coinDetailOverview &&
          coinDetailOverview[0]?.video_url !== null &&
          coinDetailOverview[0]?.video_url !== "" &&
          coinDetailOverview[0]?.video_url !== undefined && (
            <Grid xs={12} mb={5}>
              <ReactPlayer
                url={coinDetailOverview && coinDetailOverview[0]?.video_url}
                width="100%"
                height={300}
              />
            </Grid>
          )}
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
                {/* <NativeSelect
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
                </NativeSelect> */}
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
                {coinDetailOverview &&
                coinDetailOverview[0]?.total_holders !== null &&
                coinDetailOverview[0]?.total_holders !== ""
                  ? coinDetailOverview[0]?.total_holders
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
              <Stack
                direction="row"
                sx={{ alignItems: "center", justifyContent: "flex-end" }}
                spacing={0}
              >
                {coinDetailOverview &&
                coinDetailOverview[0]?.percent_change_30d !== null &&
                Math.sign(
                  parseInt(coinDetailOverview[0]?.percent_change_30d)
                ) === -1 ? (
                  <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                ) : (
                  coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_30d !== null && (
                    <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                  )
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      coinDetailOverview &&
                      Math.sign(
                        parseInt(coinDetailOverview[0]?.percent_change_30d)
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_30d !== null &&
                  coinDetailOverview[0]?.percent_change_30d !== "" ? (
                    parseFloat(coinDetailOverview[0]?.percent_change_30d)
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
                  60d %
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
                coinDetailOverview[0]?.percent_change_60d !== null &&
                Math.sign(
                  parseInt(coinDetailOverview[0]?.percent_change_60d)
                ) === -1 ? (
                  <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                ) : (
                  coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_60d !== null && (
                    <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                  )
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      coinDetailOverview &&
                      Math.sign(
                        parseInt(coinDetailOverview[0]?.percent_change_60d)
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_60d !== null &&
                  coinDetailOverview[0]?.percent_change_60d !== "" ? (
                    parseFloat(coinDetailOverview[0]?.percent_change_60d)
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
                  90d %
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
                coinDetailOverview[0]?.percent_change_90d !== null &&
                Math.sign(
                  parseInt(coinDetailOverview[0]?.percent_change_90d)
                ) === -1 ? (
                  <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                ) : (
                  coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_90d !== null && (
                    <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                  )
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      coinDetailOverview &&
                      Math.sign(
                        parseInt(coinDetailOverview[0]?.percent_change_90d)
                      ) === -1
                        ? "#ff0000"
                        : "#00ff00",
                    fontWeight: 500,
                  }}
                >
                  {coinDetailOverview &&
                  coinDetailOverview[0]?.percent_change_90d !== null &&
                  coinDetailOverview[0]?.percent_change_90d !== "" ? (
                    parseFloat(coinDetailOverview[0]?.percent_change_90d)
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
                {coinDetailOverview &&
                coinDetailOverview[0]?.liquidity_pool_number !== null &&
                coinDetailOverview[0]?.liquidity_pool_number !== ""
                  ? coinDetailOverview[0]?.liquidity_pool_number
                  : "NA"}
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
                {coinDetailOverview &&
                coinDetailOverview[0]?.liquidity_pool_total !== null &&
                coinDetailOverview[0]?.liquidity_pool_total !== ""
                  ? "$" + coinDetailOverview[0]?.liquidity_pool_total
                  : "NA"}
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
          image="https://iili.io/UtY5Kv.jpg"
          alt="green iguana"
          sx={{ objectFit: "unset" }}
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
        <Grid xs={12} pt={4}>
          <Box sx={{ backgroundColor: "none" }} py={2}>
            <Stack direction="row" alignItems="center" spacing={1} p={2}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                  backgroundColor: dateTime === "one_month" ? "red" : "#1976d2",
                }}
                onClick={() => updateData("one_month")}
              >
                1M
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                  backgroundColor:
                    dateTime === "six_months" ? "red" : "#1976d2",
                }}
                onClick={() => updateData("six_months")}
              >
                6M
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                  backgroundColor: dateTime === "one_year" ? "red" : "#1976d2",
                }}
                onClick={() => updateData("one_year")}
              >
                1Y
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                  backgroundColor: dateTime === "ytd" ? "red" : "#1976d2",
                }}
                onClick={() => updateData("ytd")}
              >
                YTD
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  fontSize: ".8rem",
                  backgroundColor: dateTime === "all" ? "red" : "#1976d2",
                }}
                onClick={() => updateData("all")}
              >
                ALL
              </Button>
            </Stack>

            <Chart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height="auto"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageOverview;
