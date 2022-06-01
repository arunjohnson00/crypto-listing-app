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

const DiscoverRecentCryptoCard = () => {
  const prevCountRef = useRef();
  const [data, updateData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [percentageData, setPercentageData] = useState<any>();
  const [prevData, setPrevData] = useState<any>();
  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 5;
      console.log(val);
      prevCountRef.current = percentageData;
      setPrevData(prevCountRef.current);
      setPercentageData(val);
      let array = [...data, val];
      array.shift();
      updateData(array);
    }, 2000);
    return () => {
      window.clearInterval(interval);
    };
  }, [data]);
  const chartData: any = {
    series: [
      {
        name: "Coinxhigh",
        data: data,
      },
    ],

    options: {
      colors: [`${prevData < percentageData ? "#18F76E" : "#DF1532"}`],
      chart: {
        height: "auto",
        type: "area",

        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: [
            `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
          ],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [
            0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55, 70, 75, 80, 85, 90, 95,
            100,
          ],
        },
      },

      grid: {
        show: false, // you can either change hear to disable all grids
        padding: {
          left: -5,
          bottom: -5,
        },
        xaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: false, //or just here to disable only x axis grids
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },

      legend: {
        show: false,
      },
      // xaxis: {
      //   type: "datetime",
      //   categories: [
      //     "2018-09-19T00:00:00.000Z",
      //     "2018-09-19T01:30:00.000Z",
      //     "2018-09-19T02:30:00.000Z",
      //     "2018-09-19T03:30:00.000Z",
      //     "2018-09-19T04:30:00.000Z",
      //     "2018-09-19T05:30:00.000Z",
      //     "2018-09-19T06:30:00.000Z",
      //   ],
      // },
      // tooltip: {
      //   x: {
      //     format: "dd/MM/yy HH:mm",
      //   },
      // },
    },
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#050A28",
        color: "#FFFFF5",
        margin: 1,
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ xs: "row" }}
        spacing={0.5}
        sx={{ alignItems: "flex-start" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 20, height: 20 }}
        />

        <Stack direction={{ xs: "column" }} spacing={0.0}>
          <Typography
            variant="caption"
            sx={{ color: "#C6C9D2", fontWeight: "400", fontSize: 10 }}
          >
            Etherium
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "#FFFFF5",
              fontWeight: "600",
              fontSize: "0.65rem",
            }}
          >
            $19,638.87
          </Typography>
          <Chip
            icon={
              prevData < percentageData ? (
                <ArrowDropUp sx={{ color: "#FFFFF5", padding: 0, margin: 0 }} />
              ) : (
                <ArrowDropDown
                  sx={{ color: "#FFFFF5", padding: 0, margin: 0 }}
                />
              )
            }
            label={` ${((percentageData / 999) * 100).toFixed(2)}%`}
            size="small"
            color="primary"
            sx={{
              color: "#FFFFF5",
              backgroundColor: `${
                prevData < percentageData ? "#18F76E" : "#DF1532"
              }`,
              fontSize: 8.5,
              fontWeight: 500,
              padding: 0,
              height: 14,
              marginTop: 0.3,
              "& .MuiChip-icon": {
                margin: 0,
                padding: 0,
              },
              "& .MuiChip-label": {
                padding: 0,
              },
            }}
          />
        </Stack>
      </Stack>
      <Stack>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="90px"
        />
      </Stack>

      <Stack direction={{ xs: "column" }} spacing={0.0} alignItems="center">
        <Typography
          variant="subtitle1"
          sx={{ color: "#C6C9D2", fontWeight: 500 }}
        >
          Etherium
        </Typography>

        <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
          <Typography variant="h5" sx={{ color: "#FFFFF5", fontWeight: "400" }}>
            4.9
          </Typography>
          <Rating
            name="size-small"
            defaultValue={5}
            size="small"
            readOnly
            sx={{ fontSize: ".9rem" }}
          />
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" pt={2}>
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
  );
};

export default DiscoverRecentCryptoCard;
