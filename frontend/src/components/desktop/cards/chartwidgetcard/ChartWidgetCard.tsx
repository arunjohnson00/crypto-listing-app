import { useState, useEffect, Fragment } from "react";
import { Box, Stack, Typography, Avatar, Divider, Button } from "@mui/material";
import Chart from "react-apexcharts";

const ChartWidgetCard = () => {
  const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const interval = setInterval(() => {
      const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
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
      colors: ["#03fb83"],
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
          gradientToColors: ["#2FC7A3"],
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
        width: 3,
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
      <Box sx={{ border: "2px solid #14151B" }} p={2}>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
              sx={{ borderRadius: 0, width: 50, height: 50 }}
            />
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={-0.5}
            >
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                Safemoon
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#3CF2CA", fontWeight: 400 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                $SFM
              </Typography>
            </Stack>
          </Stack>
          <Divider
            orientation="horizontal"
            sx={{ borderColor: "#121A3C", borderBottomWidth: 2 }}
            flexItem
          />
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={-0.5}
            >
              <Typography
                variant="caption"
                sx={{ color: "#3CF2CA", fontWeight: 600 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                Price
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                $0.00000007868
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={-0.5}
            >
              <Typography
                variant="caption"
                sx={{ color: "#3CF2CA", fontWeight: 600 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                Votes
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                12,456
              </Typography>
            </Stack>
          </Stack>
          <Divider
            orientation="horizontal"
            sx={{ borderColor: "#121A3C", borderBottomWidth: 2 }}
            flexItem
          />
          <Stack direction="row" spacing={0} alignItems="center" width="100%">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height="auto"
            />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
              sx={{ borderRadius: 0, width: 50, height: 50 }}
            />
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={-0.5}
            >
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                Safemoon{" "}
                <span style={{ color: "#9D9D9F", fontWeight: 400 }}>
                  Listed on
                </span>
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#9D9D9F", fontWeight: 400 }}
                textAlign={{ xs: "center", sm: "center", md: "left" }}
              >
                Coinxhigh.com
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box py={2}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: 3,
            textTransform: "capitalize",
            fontSize: ".70rem",
            backgroundColor: "#131D47",
            height: 40,
          }}
        >
          Copy Widget
        </Button>
      </Box>
    </Fragment>
  );
};

export default ChartWidgetCard;
