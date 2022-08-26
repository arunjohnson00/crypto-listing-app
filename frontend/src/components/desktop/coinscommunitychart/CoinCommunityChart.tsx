import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
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
  ButtonGroup,
} from "@mui/material";
import { coinCommunityBlockRequest } from "../../../store/action";

const CoinCommunityChart = ({
  // dateTime,
  // setDateTime,
  // updateData,
  chartid,
  //data,
  variant,
  title,
  colorTheme,
  icon,
}: any) => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const [dateTime, setDateTime] = useState<any>("seven_day");
  const [data, setData] = useState<any>();
  const updateData = (timeline: any) => {
    setDateTime(timeline);
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      setData(res?.data?.data);
    };
    const errorHandler = (err: any) => {};

    dispatch(
      coinCommunityBlockRequest(
        {
          slug: location?.pathname?.split("/").pop(),
          name: chartid && chartid,
        },
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  useEffect(() => {
    switch (dateTime) {
      case "seven_day":
        ApexCharts.exec(
          chartid && chartid,
          "zoomX",
          new Date("28 Jan 2013").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "fifteen_day":
        ApexCharts.exec(
          chartid && chartid,
          "zoomX",
          new Date("27 Sep 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;
      case "thirty_day":
        ApexCharts.exec(
          chartid && chartid,
          "zoomX",
          new Date("27 Feb 2012").getTime(),
          new Date("27 Feb 2013").getTime()
        );
        break;

      default:
    }
  }, [dateTime, chartid]);
  const chartData: any = {
    series: [
      {
        data: data?.followers,
      },
    ],
    options: {
      chart: {
        id: chartid && chartid,
        type: "line",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#9199a514",
        strokeDashArray: 0,
        border: 0.5,
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
        colors: [colorTheme && colorTheme],
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
          shadeIntensity: 0,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 40],
        },
      },
    },
  };

  return (
    <Box sx={{ backgroundColor: "#11122b", borderRadius: 2 }} width="100%">
      {" "}
      <Stack direction="column" alignItems="flex-start" spacing={1} p={2}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              alt="Remy Sharp"
              src={icon && icon}
              sx={{ width: 30, height: 30 }}
            />
            <Stack direction="column" alignItems="flex-start" spacing={0}>
              <Typography
                sx={{
                  color: "#C6C9D2",
                  fontWeight: 600,
                  fontSize: ".9rem",
                  textTransform: "capitalize",
                }}
              >
                <span style={{ color: colorTheme && colorTheme }}>
                  {title && title}
                </span>{" "}
                Subscribers
              </Typography>
              <Typography
                sx={{
                  color: "#8B94A3",
                  fontWeight: 600,
                  fontSize: ".8rem",
                  textTransform: "lowercase",
                }}
              >
                /r/binanceexchange
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stack
              sx={{
                padding: 0.5,
                backgroundColor: "#252D4A",
                borderRadius: 2,
              }}
              direction="row"
            >
              <Button
                size="small"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor:
                    dateTime === "seven_day" ? "#384571" : "#252D4A",
                  borderRadius: 2,
                  boxShadow: "none",
                  color: "#FFFFFF",
                  minWidth: 45,
                }}
                onClick={() => updateData("seven_day")}
              >
                7d
              </Button>

              <Button
                size="small"
                sx={{
                  textTransform: "capitalize",
                  boxShadow: "none",
                  borderRadius: 2,
                  backgroundColor:
                    dateTime === "fifteen_day" ? "#384571" : "#252D4A",
                  color: "#FFFFFF",
                  minWidth: 45,
                }}
                onClick={() => updateData("fifteen_day")}
              >
                15d
              </Button>
              <Button
                size="small"
                sx={{
                  textTransform: "capitalize",
                  boxShadow: "none",
                  borderRadius: 2,
                  backgroundColor:
                    dateTime === "thirty_day" ? "#384571" : "#252D4A",
                  color: "#FFFFFF",
                  minWidth: 45,
                }}
                onClick={() => updateData("thirty_day")}
              >
                30d
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={0}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              sx={{
                color: "#C6C9D2",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "capitalize",
              }}
            >
              3,030
            </Typography>
            <Typography
              sx={{
                color: "#19FFB0",
                fontWeight: 700,
                fontSize: ".85rem",
                textTransform: "capitalize",
              }}
            >
              +154.5%
            </Typography>
          </Stack>
          <Typography
            sx={{
              color: "#8B94A3",
              fontWeight: 600,
              fontSize: ".8rem",
              textTransform: "Capitalize",
            }}
          >
            Total Members
          </Typography>
        </Stack>
      </Stack>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height="auto"
      />
    </Box>
  );
};

export default CoinCommunityChart;
