import { Box, Typography } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
//import { Chart } from "react-google-charts";
import Chart from "react-apexcharts";
import { Grid } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { FormControl } from "@mui/material";

const LineChart = ({ lineChartData }: any) => {
  // const data = [
  //   ["Day", "CoinListing"],
  //   ["1", 1000],
  //   ["2", 1170],
  //   ["3", 660],
  //   ["4", 1030],
  // ];

  // const options = {
  //   // title: "Coin Listing Request / Day",
  //   legend: { position: "bottom" },
  //   tooltip: { trigger: "selection" },
  //   chartArea: { width: "85%" },
  // };
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
      colors: ["#008FFB"],
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
          gradientToColors: ["#008FFB"],
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
            show: true, //or just here to disable only x axis grids
          },
        },
        yaxis: {
          lines: {
            show: true, //or just here to disable only x axis grids
          },
        },
      },
      xaxis: {
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          show: true,
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "left",
              color: "#363062",
              paddingTop: "7px",
              paddingLeft: "4px",
            }}
          >
            Coin Listing Request / Day
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <NativeSelect
              variant="filled"
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
                style: {
                  border: 0,
                },
              }}
              sx={{ fontSize: "13px", color: "#9C9FA0" }}
            >
              <option value={7}>Last 7 days</option>
              <option value={15}>Last 15 days</option>
              <option value={20}>Last 20 days</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          {/* <Chart
            chartType="LineChart"
            width="auto"
            height="auto"
            data={data}
            options={options}
          /> */}
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height="auto"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LineChart;
