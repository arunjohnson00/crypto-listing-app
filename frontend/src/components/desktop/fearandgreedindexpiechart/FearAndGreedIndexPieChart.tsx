import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Chart from "react-apexcharts";
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

const FearAndGreedIndexPieChart = ({ data }: any) => {
  const chartData: any = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 450,
        type: "pie",
      },
      stroke: {
        colors: [""],
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      fill: {
        colors: ["#009B4F", "#EF2928", "#ED840E", "#C9D509", "#21D101"],
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return Math.floor(val) + "%";
        },
      },
      legend: {
        show: false,
      },
    },
  };

  const [dateTime, setDateTime] = useState<any>("");

  const updateData = (timeline: any) => {
    setDateTime(timeline);

    // switch (timeline) {
    //   case "seven_day":
    //     ApexCharts.exec(
    //       "area-datetime",
    //       "zoomX",
    //       new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime()
    //     );
    //     break;
    //     // case "fifteen_day":
    //     //   ApexCharts.exec(
    //     //     "area-datetime",
    //     //     "zoomX",
    //     //     new Date().getTime(),
    //     //     new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000).getTime()
    //     //   );
    //     //   break;
    //     // case "thirty_day":
    //     //   ApexCharts.exec(
    //     //     "area-datetime",
    //     //     "zoomX",
    //     //     new Date().getTime(),
    //     //     new Date(new Date().getTime() - 20 * 24 * 60 * 60 * 1000).getTime()
    //     //   );
    //     break;

    //   default:
    // }
  };

  useEffect(() => {
    switch (dateTime) {
      case "seven_day":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",

          new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime()
        );
        break;
      case "fifteen_day":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",

          new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000).getTime()
        );
        break;
      case "thirty_day":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",

          new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).getTime()
        );
        break;

      default:
    }
  }, [dateTime]);

  return (
    <Box
      sx={{
        backgroundColor: "#00030C",
        borderRadius: 4,
        border: "1px solid #202131",
      }}
      py={2}
    >
      {/* <Stack direction="row" alignItems="center" spacing={1} px={2}>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: ".8rem",
            backgroundColor: dateTime === "seven_day" ? "#6252e7" : "#072170",
            borderRadius: 5,
          }}
          onClick={() => updateData("seven_day")}
        >
          7d
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: ".8rem",
            backgroundColor: dateTime === "fifteen_day" ? "#6252e7" : "#072170",
            borderRadius: 5,
          }}
          onClick={() => updateData("fifteen_day")}
        >
          15d
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: ".8rem",
            backgroundColor: dateTime === "thirty_day" ? "#6252e7" : "#072170",
            borderRadius: 5,
          }}
          onClick={() => updateData("thirty_day")}
        >
          30d
        </Button>
      </Stack> */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-around"
      >
        <Box sx={{ flexGrow: 0 }}>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="pie"
            width={450}
          />
        </Box>
        <Stack
          direction="column"
          alignItems="flex-start"
          spacing={3}
          sx={{ flexGrow: 0 }}
        >
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={0}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  backgroundColor: "#F12828",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 15,
                  width: 40,
                }}
                p={0.5}
              >
                23%
              </Box>

              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Extreme Fear
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Box
              sx={{
                color: "#FFFFFF",
                fontSize: "1.3rem",
                fontWeight: 600,
                backgroundColor: "#F12828",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 45,
                width: 45,
              }}
              p={0.5}
            >
              23
            </Box>

            <Stack direction="column" alignItems="flex-start" spacing={0}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                This month
              </Typography>

              <Typography
                sx={{ color: "#F12828", fontSize: "1rem", fontWeight: 600 }}
              >
                Extreme Fear
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FearAndGreedIndexPieChart;
