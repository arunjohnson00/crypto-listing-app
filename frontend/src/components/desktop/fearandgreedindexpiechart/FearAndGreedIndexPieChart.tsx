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

const FearAndGreedIndexPieChart = ({ data, filterValue }: any) => {
  const extremeFear =
    data &&
    data.filter((item: any) => item?.value_classification === "Extreme Fear");
  const fear =
    data && data.filter((item: any) => item?.value_classification === "Fear");
  const neutral =
    data &&
    data.filter((item: any) => item?.value_classification === "Neutral");
  const greed =
    data && data.filter((item: any) => item?.value_classification === "Greed");
  const extremeGreed =
    data &&
    data.filter((item: any) => item?.value_classification === "Extreme Greed");

  const chartData: any = {
    series: [
      extremeGreed?.length,
      extremeFear?.length,
      fear?.length,
      neutral?.length,
      greed?.length,
    ],
    options: {
      chart: {
        width: 450,
        type: "pie",
      },
      stroke: {
        colors: [""],
      },
      labels: ["Extreme Greed", "Extreme Fear", "Fear", "Neutral", "Greed"],
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
        direction={{ xs: "column", sm: "column", md: "row" }}
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
          alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
          spacing={3}
          sx={{ flexGrow: 0 }}
        >
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={2}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  backgroundColor: "#008E49",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 15,
                  width: 50,
                }}
                p={0.5}
              >
                {data &&
                  extremeGreed &&
                  ((extremeGreed?.length / data?.length) * 100).toFixed(1)}{" "}
                %
              </Box>

              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Extreme Greed
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  backgroundColor: "#1DAF03",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 15,
                  width: 50,
                }}
                p={0.5}
              >
                {data &&
                  greed &&
                  ((greed?.length / data?.length) * 100).toFixed(1)}{" "}
                %
              </Box>

              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Greed
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  backgroundColor: "#A8CE08",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 15,
                  width: 50,
                }}
                p={0.5}
              >
                {data &&
                  neutral &&
                  ((neutral?.length / data?.length) * 100).toFixed(1)}{" "}
                %
              </Box>

              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Neutral
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                sx={{
                  color: "#FFFFFF",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  backgroundColor: "#EC840E",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 15,
                  width: 50,
                }}
                p={0.5}
              >
                {data &&
                  fear &&
                  ((fear?.length / data?.length) * 100).toFixed(1)}{" "}
                %
              </Box>

              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Fear
              </Typography>
            </Stack>
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
                  width: 50,
                }}
                p={0.5}
              >
                {data &&
                  extremeFear &&
                  ((extremeFear?.length / data?.length) * 100).toFixed(1)}{" "}
                %
              </Box>

              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 600 }}
              >
                Extreme Fear
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <Box
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
            </Box> */}

            <Stack direction="column" alignItems="center" spacing={1.5}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".9rem", fontWeight: 600 }}
              >
                In the last{" "}
                <span style={{ color: "#E3F195" }}>
                  {filterValue && filterValue}
                </span>{" "}
                Days, Market is
              </Typography>

              {extremeFear?.length > fear?.length &&
                extremeFear?.length > neutral?.length &&
                extremeFear?.length > greed?.length &&
                extremeFear?.length > extremeGreed?.length && (
                  <span
                    style={{
                      backgroundColor: "#EF2828",
                      borderRadius: 50,
                      height: 43,
                      minWidth: 140,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      padding: 2,
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                  >
                    Extreme Fear
                  </span>
                )}

              {fear?.length > extremeFear?.length &&
                fear?.length > neutral?.length &&
                fear?.length > greed?.length &&
                fear?.length > extremeGreed?.length && (
                  <span
                    style={{
                      backgroundColor: "#EC840E",
                      borderRadius: 50,
                      height: 43,
                      minWidth: 140,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      padding: 2,
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                  >
                    Fear
                  </span>
                )}

              {neutral?.length > extremeFear?.length &&
                neutral?.length > fear?.length &&
                neutral?.length > greed?.length &&
                neutral?.length > extremeGreed?.length && (
                  <span
                    style={{
                      backgroundColor: "#A8CE08",
                      borderRadius: 50,
                      height: 43,
                      minWidth: 140,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#000000",
                      padding: 2,
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                  >
                    Neutral
                  </span>
                )}

              {greed?.length > extremeFear?.length &&
                greed?.length > fear?.length &&
                greed?.length > neutral?.length &&
                greed?.length > extremeGreed?.length && (
                  <span
                    style={{
                      backgroundColor: "#1DAF03",
                      borderRadius: 50,
                      height: 43,
                      minWidth: 140,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      padding: 2,
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                  >
                    Greed
                  </span>
                )}

              {extremeGreed?.length > extremeFear?.length &&
                extremeGreed?.length > fear?.length &&
                extremeGreed?.length > greed?.length &&
                extremeGreed?.length > neutral?.length && (
                  <span
                    style={{
                      backgroundColor: "#008E49",
                      borderRadius: 50,
                      height: 43,
                      minWidth: 140,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      padding: 2,
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                  >
                    Extreme Greed
                  </span>
                )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FearAndGreedIndexPieChart;
