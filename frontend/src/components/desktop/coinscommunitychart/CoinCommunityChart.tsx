import { Fragment, useEffect, useState } from "react";
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
  const [dateTime, setDateTime] = useState<any>("all_day");
  const [data, setData] = useState<any>();
  const updateData = (timeline: any) => {
    setDateTime(timeline);
  };
  const percentageDiff = (a: any, b: any) => {
    return ((a - b) / a) * 100;
  };
  useEffect(() => {
    const successHandler = (res: any) => {
      setData(res?.data);
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

  //console.log(data && data[0]?.[0]);

  useEffect(() => {
    if (data && data?.response === true && data?.data?.followers?.length > 0) {
      switch (dateTime) {
        case "seven_day":
          ApexCharts.exec(
            chartid && chartid,
            "zoomX",

            new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime()
          );
          break;
        case "fifteen_day":
          ApexCharts.exec(
            chartid && chartid,
            "zoomX",

            new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000).getTime()
          );
          break;
        case "thirty_day":
          ApexCharts.exec(
            chartid && chartid,
            "zoomX",

            new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).getTime()
          );
          break;
        case "all_day":
          ApexCharts.exec(
            "area-datetime",
            "zoomX",

            new Date(
              data &&
                data?.response === true &&
                data?.data?.followers?.length > 0 &&
                data?.data?.followers[data?.data?.followers.length - 1][0]
            ).getTime()
          );
          break;

        default:
      }
    }
  }, [dateTime]);
  const chartData: any = {
    series: [
      {
        data:
          data &&
          data?.response === true &&
          data?.data?.followers?.length > 0 &&
          data?.data?.followers,
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
            // x: new Date(data && data?.data?.followers[0]?.[0]).getTime(),
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
        format: "dd/MM",

        min:
          data &&
          data?.response === true &&
          data?.data?.followers?.length > 0 &&
          new Date(
            data?.data?.followers[data?.data?.followers.length - 1][0]
          ).getTime(),
        max:
          data &&
          data?.response === true &&
          data?.data?.followers?.length > 0 &&
          new Date(data?.data?.followers[0][0]).getTime(),
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
  const getLastItem = (thePath: any) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  return (
    <Fragment>
      {data && data?.response === true && data?.data?.followers?.length > 0 && (
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box
            sx={{ backgroundColor: "#11122b", borderRadius: 2 }}
            width="100%"
          >
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
                    <Link
                      href={data && data?.data?.social_url}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          color: "#8B94A3",
                          fontWeight: 600,
                          fontSize: ".8rem",
                          textTransform: "lowercase",
                        }}
                      >
                        {data && "@" + getLastItem(data?.data?.social_url)}
                      </Typography>
                    </Link>
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
                    <Button
                      size="small"
                      sx={{
                        textTransform: "capitalize",
                        boxShadow: "none",
                        borderRadius: 2,
                        backgroundColor:
                          dateTime === "all_day" ? "#384571" : "#252D4A",
                        color: "#FFFFFF",
                        minWidth: 45,
                      }}
                      onClick={() => updateData("all_day")}
                    >
                      All
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
                    {data &&
                    data?.data?.followers?.length > 1 &&
                    parseInt(data?.data?.followers[0][1]) !== 0
                      ? parseInt(data?.data?.followers[0][1])?.toLocaleString()
                      : 0}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#19FFB0",
                      fontWeight: 700,
                      fontSize: ".85rem",
                      textTransform: "capitalize",
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          data &&
                          data?.data?.followers?.length > 1 &&
                          Math.sign(
                            percentageDiff(
                              parseInt(data && data?.data?.followers[0][1]),
                              parseInt(data && data?.data?.followers[7][1])
                            )
                          ) === -1
                            ? "red"
                            : "#19FFB0",

                        fontWeight: 700,
                        fontSize: ".85rem",
                        textTransform: "capitalize",
                      }}
                    >
                      {data &&
                        data?.data?.followers?.length > 1 &&
                        Math.sign(
                          percentageDiff(
                            parseInt(data && data?.data?.followers[0][1]),
                            parseInt(data && data?.data?.followers[7][1])
                          )
                        ) !== -1 &&
                        "+"}
                      {data &&
                        data?.data?.followers?.length > 1 &&
                        percentageDiff(
                          parseInt(data && data?.data?.followers[0][1]),
                          parseInt(data && data?.data?.followers[7][1])
                        ).toFixed(10) + "%"}
                    </Typography>
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
            {data && (
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height="auto"
              />
            )}
          </Box>
        </Grid>
      )}
    </Fragment>
  );
};

export default CoinCommunityChart;
