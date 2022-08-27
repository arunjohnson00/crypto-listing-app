import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { coinPriceGraphBlockRequest } from "../../../store/action";

const CoinPageChart = ({ data }: any) => {
  const chartData: any = {
    series: [
      {
        data: data?.price,
      },
      // {
      //   data: data?.market_cap,
      // },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: "auto",
        zoom: {
          autoScaleYaxis: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#f6ff02"],
        width: 2,
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
            x: data && new Date(data?.price[12][0]).getTime(),
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
        min:
          data && new Date(data?.price[data?.price?.length - 1][0]).getTime(),
        //max: data && new Date(data?.price[0][0]).getTime(),
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
    selection: "seven_day",
  };
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const [dateTime, setDateTime] = useState<any>("seven_day");

  const updateData = (timeline: any) => {
    setDateTime(timeline);
    console.log(timeline);
    switch (timeline) {
      case "seven_day":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000).getTime()
        );
        break;
      case "fifteen_day":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000).getTime()
        );
        break;
      case "thirty_day":
        ApexCharts.exec(
          "area-datetime",
          "zoomX",
          new Date().getTime(),
          new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000).getTime()
        );
        break;

      default:
    }
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinPriceGraphBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  // useEffect(() => {
  //   switch (dateTime) {
  //     case "seven_day":
  //       ApexCharts.exec(
  //         "area-datetime",
  //         "zoomX",
  //         new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime()
  //       );
  //       break;
  //     case "fifteen_day":
  //       ApexCharts.exec(
  //         "area-datetime",
  //         "zoomX",
  //         new Date().getTime(),
  //         new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000).getTime()
  //       );
  //       break;
  //     case "thirty_day":
  //       ApexCharts.exec(
  //         "area-datetime",
  //         "zoomX",
  //         new Date().getTime(),
  //         new Date().getTime()
  //       );
  //       break;

  //     default:
  //   }
  // }, [dateTime]);

  return (
    <Box sx={{ backgroundColor: "none" }} py={2}>
      <Stack direction="row" alignItems="center" spacing={1} p={2}>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: ".8rem",
            backgroundColor: dateTime === "seven_day" ? "red" : "#1976d2",
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
            backgroundColor: dateTime === "fifteen_day" ? "red" : "#1976d2",
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
            backgroundColor: dateTime === "thirty_day" ? "red" : "#1976d2",
          }}
          onClick={() => updateData("thirty_day")}
        >
          30d
        </Button>
      </Stack>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height="auto"
      />
    </Box>
  );
};

export default CoinPageChart;
