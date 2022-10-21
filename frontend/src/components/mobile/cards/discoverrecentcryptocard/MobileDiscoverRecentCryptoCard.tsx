import { useState, useEffect, useRef } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import Chart from "react-apexcharts";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import LanguageIcon from "@mui/icons-material/Language";
import Telegram from "@mui/icons-material/Telegram";
import Twitter from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverRecentCryptoCard = ({ item }: any) => {
  // const prevCountRef = useRef();
  // const [data, updateData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const [percentageData, setPercentageData] = useState<any>();
  // const [prevData, setPrevData] = useState<any>();
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const val = Math.floor(Math.random() * (100 - 30 + 1)) + 5;
  //     console.log(val);
  //     prevCountRef.current = percentageData;
  //     setPrevData(prevCountRef.current);
  //     setPercentageData(val);
  //     let array = [...data, val];
  //     array.shift();
  //     updateData(array);
  //   }, 2000);
  //   return () => {
  //     window.clearInterval(interval);
  //   };
  // }, [data]);
  // const chartData: any = {
  //   series: [
  //     {
  //       name: "Coinxhigh",
  //       data: data,
  //     },
  //   ],

  //   options: {
  //     colors: [`${prevData < percentageData ? "#18F76E" : "#DF1532"}`],
  //     chart: {
  //       height: "auto",
  //       type: "area",

  //       toolbar: {
  //         show: false,
  //       },
  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //         animateGradually: {
  //           enabled: true,
  //           delay: 150,
  //         },
  //         dynamicAnimation: {
  //           enabled: true,
  //           speed: 350,
  //         },
  //       },
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         shade: "dark",
  //         gradientToColors: [
  //           `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
  //         ],
  //         shadeIntensity: 1,
  //         type: "horizontal",
  //         opacityFrom: 1,
  //         opacityTo: 1,
  //         stops: [
  //           0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55, 70, 75, 80, 85, 90, 95,
  //           100,
  //         ],
  //       },
  //     },

  //     grid: {
  //       show: false, // you can either change hear to disable all grids
  //       padding: {
  //         left: -5,
  //         bottom: -5,
  //       },
  //       xaxis: {
  //         lines: {
  //           show: false, //or just here to disable only x axis grids
  //         },
  //       },
  //       yaxis: {
  //         lines: {
  //           show: false, //or just here to disable only x axis grids
  //         },
  //       },
  //     },
  //     xaxis: {
  //       labels: {
  //         show: false,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //     },
  //     yaxis: {
  //       labels: {
  //         show: false,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       width: 2,
  //     },

  //     legend: {
  //       show: false,
  //     },
  //     // xaxis: {
  //     //   type: "datetime",
  //     //   categories: [
  //     //     "2018-09-19T00:00:00.000Z",
  //     //     "2018-09-19T01:30:00.000Z",
  //     //     "2018-09-19T02:30:00.000Z",
  //     //     "2018-09-19T03:30:00.000Z",
  //     //     "2018-09-19T04:30:00.000Z",
  //     //     "2018-09-19T05:30:00.000Z",
  //     //     "2018-09-19T06:30:00.000Z",
  //     //   ],
  //     // },
  //     // tooltip: {
  //     //   x: {
  //     //     format: "dd/MM/yy HH:mm",
  //     //   },
  //     // },
  //   },
  // };

  return (
    <Link
      to={`/coin/${item && item?.slug}`}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          flexGrow: 1,

          backgroundColor: "#050A28",
          color: "#FFFFF5",

          borderRadius: 2,
          minHeight: 230,
          maxHeight: 230,
        }}
        // px={2}
        mr={1}
      >
        <Box
          mr={2}
          // my={4}
        >
          <Stack
            direction={{ xs: "column" }}
            spacing={0.7}
            sx={{ alignItems: "center" }}
            pt={2}
          >
            <Avatar
              alt={item && item?.name}
              src={`${serverAPIUrl}public/uploads/coin_logo/${item?.logo}`}
              sx={{ width: 45, height: 45 }}
            />

            <Stack
              direction={{ xs: "column" }}
              spacing={0.0}
              sx={{ alignItems: "center" }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFF5",
                  fontWeight: "600",
                  fontSize: "0.65rem",
                }}
              >
                {item && item?.current_price !== null ? (
                  String(Math.trunc(parseFloat(item?.current_price))).length >
                  2 ? (
                    "$" +
                    Number(
                      parseFloat(item?.current_price).toFixed(2)
                    ).toLocaleString()
                  ) : item && Math.abs(item?.current_price) > 1 ? (
                    "$" +
                    parseFloat(item?.current_price).toFixed(4).toLocaleString()
                  ) : (
                    "$" +
                    parseFloat(item?.current_price).toFixed(9).toLocaleString()
                  )
                ) : (
                  <span style={{ color: "#7a7a7a" }}>--</span>
                )}
              </Typography>
              <Chip
                icon={
                  Math.sign(parseFloat(item?.pc_24h)) !== -1 ? (
                    <ArrowDropUp
                      sx={{ color: "#FFFFF5", padding: 0, margin: 0 }}
                    />
                  ) : (
                    <ArrowDropDown
                      sx={{ color: "#FFFFF5", padding: 0, margin: 0 }}
                    />
                  )
                }
                label={
                  item && item?.pc_24h !== null ? (
                    parseFloat(item?.pc_24h).toFixed(2).replace("-", "") + "%"
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )
                }
                size="medium"
                color="primary"
                sx={{
                  color: "#FFFFF5",
                  backgroundColor: `${
                    Math.sign(parseFloat(item?.pc_24h)) !== -1
                      ? "#18F76E"
                      : "#DF1532"
                  }`,
                  fontSize: 9,
                  fontWeight: 500,
                  padding: 0,
                  height: 20,
                  marginTop: 0.3,
                  "& .MuiChip-icon": {
                    marginRight: -0.3,
                    padding: 0,
                  },
                  "& .MuiChip-label": {
                    padding: 0,
                    paddingRight: 0.8,
                  },
                }}
              />
            </Stack>
          </Stack>
          <Stack py={0}>
            {/* <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="90px"
        /> */}
            {/* <Typography
          variant="body2"
          sx={{
            color: "#FFFFF5",
            fontWeight: "600",
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          {item && item?.current_price !== null ? (
            String(Math.trunc(parseFloat(item?.current_price))).length > 2 ? (
              "$" +
              Number(
                parseFloat(item?.current_price).toFixed(2)
              ).toLocaleString()
            ) : item && Math.abs(item?.current_price) > 1 ? (
              "$" + parseFloat(item?.current_price).toFixed(4).toLocaleString()
            ) : (
              "$" + parseFloat(item?.current_price).toFixed(9).toLocaleString()
            )
          ) : (
            <span style={{ color: "#7a7a7a" }}>--</span>
          )}
        </Typography> */}
          </Stack>

          <Stack
            direction={{ xs: "column" }}
            spacing={0.0}
            alignItems="center"
            mt={2}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#C6C9D2",
                fontWeight: 500,
                fontSize: ".9rem",
                textAlign: "center",
              }}
            >
              {item && item?.name?.length >= 20
                ? item && item?.name?.slice(0, 20) + "..."
                : item && item?.name}
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#C6C9D2", fontWeight: "400", fontSize: 10 }}
            >
              {item && item?.symbol}
            </Typography>
            {/* <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{ color: "#FFFFF5", fontWeight: "400" }}
            >
              4.9
            </Typography>
            <Rating
              name="size-small"
              defaultValue={5}
              size="small"
              readOnly
              sx={{ fontSize: ".9rem" }}
            />
          </Stack> */}
          </Stack>
          <Stack direction="row" justifyContent="center" pt={2} pb={2}>
            <IconButton aria-label="delete">
              <LanguageIcon sx={{ color: "#FFFFF5", fontSize: 19 }} />
            </IconButton>
            <IconButton aria-label="delete">
              <Telegram sx={{ color: "#FFFFF5", fontSize: 19 }} />
            </IconButton>
            <IconButton aria-label="delete">
              <Twitter sx={{ color: "#FFFFF5", fontSize: 19 }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default MobileDiscoverRecentCryptoCard;
