import { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";

const OnlineAnalysisCard = () => {
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
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#4e3ce5"],
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
        animations: {
          enabled: true,
          easing: "linear",
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
    },
  };

  return (
    <Grid item xs={10}>
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(98deg,#38363F 10%, #151320)",
          borderRadius: 7,
        }}
        py={3}
        px={3}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#FFFFF5",
              fontWeight: "bold",
              textAlign: "left",
              fontSize: "0.875rem",
            }}
          >
            Online Analysis
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#FFFFF5",
              fontWeight: "500",

              fontSize: "0.555rem",
              textAlign: "left",
            }}
          >
            1 Month
          </Typography>
        </Stack>
        <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
          <Box>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height="auto"
            />
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export default OnlineAnalysisCard;
