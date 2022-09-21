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

const FearAndGreedIndexChart = ({ data }: any) => {
  const chartData: any = {
    series: [
      {
        name: "Fear and Greed Index",
        data: data,
      },
      // {
      //   data: data?.market_cap,
      // },
    ],

    options: {
      colors: ["#00ff00"],
      chart: {
        id: "area-datetime",
        type: "area",
        height: 230,
        zoom: {
          autoScaleYaxis: false,
        },
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true,
        borderColor: "#030923",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#7582A6"],
        width: 2,
        dashArray: 0,
      },
      yaxis: [
        {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: "#ababad",
          },
          labels: {
            style: {
              colors: "#ababad",
            },
          },
          reversed: false,
          opposite: true,
          // title: {
          //   text: "Series A",
          //   style: {
          //     color: "#FF1654",
          //   },
          // },
        },
      ],
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
        colors: "#6252E7",
        strokeColors: "#fff",
        strokeWidth: 0,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        showNullDataPoints: false,
        hover: {
          size: 3,
          sizeOffset: 0,
        },
      },
      xaxis: {
        type: "datetime",
        // min:
        //   data && new Date(data?.price[data?.price?.length - 1][0]).getTime(),
        //max: data && new Date(data?.price[0][0]).getTime(),
        tickAmount: 6,
        labels: {
          rotate: -90,
          rotateAlways: true,
          minHeight: 48,
          maxHeight: 50,

          formatter: function (value: any) {
            return moment(new Date(value)).format("MMM DD");
          },
          style: {
            colors: "#ababad",
          },
        },
        tickPlacement: "on",
      },
      tooltip: {
        enabled: true,
        x: {
          //format: "dd/MM/yy HH:mm",
          format: "dd MMM yyyy HH:mm",
        },
      },
      fill: {
        type: "gradient",

        colors: ["#1dffc0"],

        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.7,
          opacityTo: 0.0,
          stops: [0, 0],
        },
      },
    },
    selection: "seven_day",
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
      <Stack direction="row" alignItems="center" spacing={1} px={2}>
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
      </Stack>

      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={230}
      />
    </Box>
  );
};

export default FearAndGreedIndexChart;
