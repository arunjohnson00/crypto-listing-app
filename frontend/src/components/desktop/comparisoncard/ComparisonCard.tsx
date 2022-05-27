import { useState, useEffect, useRef, Fragment } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import Chart from "react-apexcharts";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Tooltip from "@mui/material/Tooltip";

const ComparisonCard = ({ closeCompareHandle, index }: any) => {
  const [data, updateData] = useState<any>([1, 2, 3, 4, 5, 6]);
  const [percentageData, setPercentageData] = useState<any>();
  const [prevData, setPrevData] = useState<any>();
  const prevCountRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
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
          stops: [0, 100, 100, 100],
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
    <Fragment>
      <Stack direction="column" alignItems="center" spacing={2}>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#010619",
            border: "2px solid #0E1447",
            borderRadius: 3,
            padding: 2,
          }}
        >
          <Stack direction="column">
            <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 24, height: 24 }}
              />
              <Typography sx={{ color: "#FFFFF5" }} variant="body2">
                Safemoon
              </Typography>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                }}
              >
                {index > 0 && (
                  <Tooltip title="Close">
                    <IconButton
                      aria-label="delete"
                      sx={{
                        backgroundColor: "#1565c0",
                        width: 25,
                        height: 25,
                        "&:hover": { backgroundColor: "#0a2d56" },
                      }}
                      onClick={closeCompareHandle}
                    >
                      <CloseOutlinedIcon
                        sx={{ color: "#FFFFF5", fontSize: 12 }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            </Stack>
            <Stack direction="column">
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height="174px"
              />
              <Typography
                sx={{
                  color: `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
                  textAlign: "right",
                }}
                variant="body1"
              >
                {((percentageData / 999) * 100).toFixed(2)}%
              </Typography>
            </Stack>

            <Stack
              direction="column"
              sx={{ color: "#CBCCD7", height: "auto", alignItems: "center" }}
              spacing={1.3}
              py={2}
            >
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="h6" sx={{ color: "#04DC98" }}>
                Name
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">symbol:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">Contract Address:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography
                variant="caption"
                sx={{
                  color: `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
                }}
              >
                {percentageData} ETH
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">Total Supply:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">Max Supply:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">Market Cap:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">All time High:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">All time high date:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">Holders:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">Date added:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography variant="caption">LP Holding:</Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography
                variant="caption"
                sx={{
                  color: `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
                }}
              >
                {prevData < percentageData ? "Yes" : "No"}
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography
                variant="caption"
                sx={{
                  color: `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
                }}
              >
                {prevData < percentageData ? "Yes" : "No"}
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
              <Typography
                variant="caption"
                sx={{
                  color: `${prevData < percentageData ? "#18F76E" : "#DF1532"}`,
                }}
              >
                {prevData < percentageData ? "Yes" : "No"}
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ borderColor: "#f1f1f11c" }}
                flexItem
              />
            </Stack>
          </Stack>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0D1C53",
            textTransform: "capitalize",
            fontSize: "0.775rem",
          }}
        >
          See more
        </Button>
      </Stack>
    </Fragment>
  );
};

export default ComparisonCard;
