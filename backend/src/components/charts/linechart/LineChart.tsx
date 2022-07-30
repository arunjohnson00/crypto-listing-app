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

  const [data, updateData] = useState<any>();
  const [axisData, updateAxisData] = useState<any>({ xAxis: "", yAxis: "" });

  useEffect(() => {
    lineChartData &&
      lineChartData?.thirty_days !== undefined &&
      lineChartData?.thirty_days?.length !== 0 &&
      updateData(Object.values(lineChartData?.thirty_days));
    lineChartData &&
      lineChartData?.thirty_days !== undefined &&
      lineChartData?.thirty_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(lineChartData?.thirty_days),
      });
  }, [lineChartData]);

  const linegraphFilterHandler = (e: any) => {
    parseInt(e.target.value) === 30 &&
      lineChartData &&
      lineChartData?.thirty_days !== undefined &&
      lineChartData?.thirty_days?.length !== 0 &&
      updateData(Object.values(lineChartData?.thirty_days));

    parseInt(e.target.value) === 30 &&
      lineChartData &&
      lineChartData?.thirty_days !== undefined &&
      lineChartData?.thirty_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(lineChartData?.thirty_days),
      });
    parseInt(e.target.value) === 15 &&
      lineChartData &&
      lineChartData?.fifteen_days !== undefined &&
      lineChartData?.fifteen_days?.length !== 0 &&
      updateData(Object.values(lineChartData?.fifteen_days));

    parseInt(e.target.value) === 15 &&
      lineChartData &&
      lineChartData?.fifteen_days !== undefined &&
      lineChartData?.fifteen_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(lineChartData?.fifteen_days),
      });

    parseInt(e.target.value) === 7 &&
      lineChartData &&
      lineChartData?.seven_days !== undefined &&
      lineChartData?.seven_days?.length !== 0 &&
      updateData(Object.values(lineChartData?.seven_days));

    parseInt(e.target.value) === 7 &&
      lineChartData &&
      lineChartData?.seven_days !== undefined &&
      lineChartData?.seven_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(lineChartData?.seven_days),
      });
  };

  const chartData: any = {
    series: [
      {
        name: "Request",
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
        show: true, // you can either change hear to disable all grids
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
            show: true, //or just here to disable only x axis grids
          },
        },
      },
      xaxis: {
        categories: axisData && axisData?.xAxis,
        labels: {
          show: true,
          style: {
            fontSize: ".6rem",
          },
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
          style: {
            fontSize: ".6rem",
          },
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
      <Grid container spacing={0.3} alignItems="center">
        <Grid item xs={8}>
          <Typography
            sx={{
              textAlign: "left",
              color: "#373163",
              fontSmooth: "always",
              paddingTop: "7px",
              paddingLeft: "4px",
              fontSize: ".9rem",
              fontWeight: 700,
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
                  padding: 2,
                },
              }}
              sx={{ fontSize: ".75rem", color: "#9C9FA0" }}
              onChange={(e: any) => linegraphFilterHandler(e)}
              disableUnderline
            >
              <option value={7}>Last 7 days</option>
              <option value={15}>Last 15 days</option>
              <option value={30}>Last 30 days</option>
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
            height={233}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LineChart;
