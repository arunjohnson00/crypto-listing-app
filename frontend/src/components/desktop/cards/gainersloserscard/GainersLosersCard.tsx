import { useState, useEffect } from "react";
import { Grid, Box, Stack, Avatar, Typography, Chip } from "@mui/material";
import Chart from "react-apexcharts";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import { Link } from "react-router-dom";
const GainersLosersCard = ({ item }: any) => {
  // const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
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
  //     colors: ["#03fb83"],
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
  //         gradientToColors: ["#4e3ce5"],
  //         shadeIntensity: 1,
  //         type: "horizontal",
  //         opacityFrom: 0.5,
  //         opacityTo: 1,
  //         stops: [0, 100, 100, 100],
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
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <Link
      to={`/coin/${item?.slug && item?.slug !== null ? item?.slug : "#"}`}
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          backgroundColor: "#01061C",
          border: "1px solid #0A1028",
          borderRadius: 5,
        }}
        px={2}
        py={5}
        m={0.7}
      >
        <Grid xs={12}>
          <Stack
            direction={{ xs: "column" }}
            spacing={0.5}
            sx={{ alignItems: "center" }}
          >
            <Avatar
              alt={item && item?.name}
              src={`${serverAPIUrl}public/uploads/coin_logo/${item?.logo}`}
              sx={{ width: 40, height: 40 }}
            />

            <Stack
              direction={{ xs: "column" }}
              spacing={0.3}
              alignItems="center"
            >
              <Typography
                variant="caption"
                sx={{ color: "#C6C9D2", fontWeight: "600" }}
              >
                {item && item?.name}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: "#B9AC78",
                  fontWeight: "400",
                  fontSize: "0.55rem",
                  lineHeight: 0.2,
                }}
              >
                {item && item?.symbol}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} py={1}>
          {/* <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height="auto"
          /> */}
          <Stack
            direction={{ xs: "column" }}
            spacing={0}
            alignItems="center"
            pt={2}
          >
            <Typography
              variant="h6"
              sx={{ color: "#FFFFF5", fontSize: ".75rem", textAlign: "center" }}
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
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
              spacing={-0.4}
            >
              {/* {item &&
            item?.pc_24h !== null &&
            Math.sign(parseFloat(item?.pc_24h)) === -1 ? (
              <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
            ) : (
              item?.pc_24h !== null && (
                <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
              )
            )}

            <Typography
              variant="body2"
              sx={{
                color:
                  Math.sign(parseFloat(item?.pc_24h)) === -1
                    ? "#ff0000"
                    : "#00ff00",
                fontWeight: 700,
                fontSize: ".7rem",
              }}
            >
              {item && item?.pc_24h !== null ? (
                parseFloat(item?.pc_24h).toFixed(2).replace("-", "") + "%"
              ) : (
                <span style={{ color: "#7a7a7a" }}>--</span>
              )}
            </Typography> */}

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
        </Grid>
        <Grid xs={12}>
          <Stack direction={{ xs: "row" }} sx={{ justifyContent: "flex-end" }}>
            {/* <Typography
            variant="body2"
            sx={{ color: "#00C080", fontWeight: "700" }}
          >
            14.28%
          </Typography> */}
          </Stack>
        </Grid>
      </Box>
    </Link>
  );
};

export default GainersLosersCard;
