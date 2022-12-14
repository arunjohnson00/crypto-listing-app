import { useState, useEffect } from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileTrendingCoins = ({ data }: any) => {
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

  const chartData: any = {
    series: [
      {
        name: data && data?.name,
        data: data && data?.votes?.reverse(),
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
          gradientToColors: ["#4e3ce5"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 0.5,
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

  const percentageDiff = (a: any, b: any) => {
    return ((a - b) / a) * 100;
  };
  return (
    <Box
      sx={{
        backgroundColor: "#01061C",
        border: "1px solid #0A1028",
        borderRadius: 5,
      }}
      px={2}
      py={2}
      m={0.5}
    >
      <Grid xs={12}>
        <Stack
          direction={{ xs: "row" }}
          spacing={0.5}
          sx={{ alignItems: "center" }}
        >
          <Avatar
            alt={data && data?.name}
            src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
            sx={{ width: 18, height: 18 }}
          />

          <Stack direction={{ xs: "column" }} spacing={0.3}>
            <Link
              to={{
                pathname: `/coin/${data?.slug}`,
              }}
              state={{ coin_id: data?.id }}
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#C6C9D2", fontWeight: "600" }}
              >
                {data && data?.name?.length > 10
                  ? data && data?.name?.slice(0, 10) + ".."
                  : data && data?.name}
              </Typography>
            </Link>

            <Typography
              variant="caption"
              sx={{
                color: "#B9AC78",
                fontWeight: "400",
                fontSize: "0.55rem",
                lineHeight: 0.2,
              }}
            >
              {data && data?.symbol}
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      <Grid xs={12}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="auto"
        />
      </Grid>
      <Grid xs={12}>
        <Stack direction={{ xs: "row" }} sx={{ justifyContent: "flex-end" }}>
          <Typography
            variant="body2"
            sx={{
              color:
                Math.sign(
                  percentageDiff(
                    parseInt(data && data?.votes?.reverse()[1]),
                    parseInt(data && data?.votes?.reverse()[0])
                  )
                ) === -1
                  ? "red"
                  : "#03FEB5",
              fontWeight: 700,

              lineHeight: 0.2,
              //fontSize: ".65rem",
            }}
          >
            {data &&
              data?.votes &&
              Math.sign(
                percentageDiff(
                  parseInt(data && data?.votes?.reverse()[1]),
                  parseInt(data && data?.votes?.reverse()[0])
                )
              ) !== -1 &&
              "+ "}
            {data &&
              data?.votes &&
              percentageDiff(
                parseInt(data && data?.votes?.reverse()[1]),
                parseInt(data && data?.votes?.reverse()[0])
              ).toFixed(2)}
            %
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
};

export default MobileTrendingCoins;
