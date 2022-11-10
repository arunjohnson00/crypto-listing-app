import { Box, Typography } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
//import { Chart } from "react-google-charts";
import Chart from "react-apexcharts";
import { Grid } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterCountRequest } from "../../../store/action";

const UserBarChart = () => {
  const dispatch = useDispatch();
  const userCount = useSelector((userData: any) => {
    return userData?.usersReducer?.user_register_count?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      //console.log(res);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };

    dispatch(
      userRegisterCountRequest("emptyData", successHandler, errorHandler)
    );
  }, [dispatch]);

  const [data, updateData] = useState<any>();
  const [axisData, updateAxisData] = useState<any>({ xAxis: "", yAxis: "" });
  console.log(userCount);
  useEffect(() => {
    userCount &&
      userCount?.thirty_days !== undefined &&
      userCount?.thirty_days?.length !== 0 &&
      updateData(Object.values(userCount?.thirty_days));
    userCount &&
      userCount?.thirty_days !== undefined &&
      userCount?.thirty_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(userCount?.thirty_days),
      });
  }, [userCount]);

  const linegraphFilterHandler = (e: any) => {
    parseInt(e.target.value) === 365 &&
      userCount &&
      userCount?.three_sixty_five_days !== undefined &&
      userCount?.three_sixty_five_days?.length !== 0 &&
      updateData(Object.values(userCount?.three_sixty_five_days));

    parseInt(e.target.value) === 365 &&
      userCount &&
      userCount?.three_sixty_five_days !== undefined &&
      userCount?.three_sixty_five_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(userCount?.three_sixty_five_days),
      });
    parseInt(e.target.value) === 90 &&
      userCount &&
      userCount?.ninety_days !== undefined &&
      userCount?.ninety_days?.length !== 0 &&
      updateData(Object.values(userCount?.ninety_days));

    parseInt(e.target.value) === 90 &&
      userCount &&
      userCount?.ninety_days !== undefined &&
      userCount?.ninety_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(userCount?.ninety_days),
      });

    parseInt(e.target.value) === 30 &&
      userCount &&
      userCount?.thirty_days !== undefined &&
      userCount?.thirty_days?.length !== 0 &&
      updateData(Object.values(userCount?.thirty_days));

    parseInt(e.target.value) === 30 &&
      userCount &&
      userCount?.thirty_days !== undefined &&
      userCount?.thirty_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(userCount?.thirty_days),
      });
    parseInt(e.target.value) === 15 &&
      userCount &&
      userCount?.fifteen_days !== undefined &&
      userCount?.fifteen_days?.length !== 0 &&
      updateData(Object.values(userCount?.fifteen_days));

    parseInt(e.target.value) === 15 &&
      userCount &&
      userCount?.fifteen_days !== undefined &&
      userCount?.fifteen_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(userCount?.fifteen_days),
      });

    parseInt(e.target.value) === 7 &&
      userCount &&
      userCount?.seven_days !== undefined &&
      userCount?.seven_days?.length !== 0 &&
      updateData(Object.values(userCount?.seven_days));

    parseInt(e.target.value) === 7 &&
      userCount &&
      userCount?.seven_days !== undefined &&
      userCount?.seven_days?.length !== 0 &&
      updateAxisData({
        ...axisData,
        xAxis: Object.keys(userCount?.seven_days),
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
        type: "bar",

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
            User Register Counter
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
              <option value={90}>Last 90 days</option>
              <option value={365}>Last 365 days</option>
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
            type="bar"
            height={245}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default UserBarChart;
