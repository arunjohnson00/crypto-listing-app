import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";

const chartData: any = {
  series: [
    {
      name: "Coinxhigh",
      data: [31, 40, 28, 51, 42, 109, 100],
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
      xaxis: {
        lines: {
          show: false, //or just here to disable only x axis grids
        },
      },
    },
    xaxis: {
      labels: {
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

const OnlineAnalysisCard = () => {
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
              type="area"
              height="auto"
            />
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};

export default OnlineAnalysisCard;
