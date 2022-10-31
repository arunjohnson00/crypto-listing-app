import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "react-apexcharts";
import { coinPriceGraphBlockRequest } from "../../../../store/action";
import { useLocation } from "react-router-dom";

const OnlineAnalysisCard = () => {
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

  const dispatch: any = useDispatch();

  const location: any = useLocation();
  const graphData = useSelector((data: any) => {
    return data?.coinReducer?.coin_price_graph_block?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    // dispatch(
    //   coinPriceGraphBlockRequest("bitcoin-btc", successHandler, errorHandler)
    // );
  }, [dispatch, location]);

  const chartData: any = {
    series: [
      {
        // data: graphData && graphData?.price,
        data: [1, 2, 3, 4, 6],
      },
      // {
      //   data: data?.market_cap,
      // },
    ],
    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: "auto",
        zoom: {
          autoScaleYaxis: true,
        },
      },
      grid: {
        show: true,
        borderColor: "#38363F",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#f6ff02"],
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
            //  x: data && new Date(data?.price[12][0]).getTime(),
            borderColor: "#999",
            yAxisIndex: 0,

            label: {
              show: false,
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
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },

        // min:
        //   graphData &&
        //   new Date(graphData?.price[graphData?.price?.length - 1][0]).getTime(),
        //max: data && new Date(data?.price[0][0]).getTime(),
        tickAmount: 6,
      },

      yaxis: {
        // type: "datetime",
        show: false,
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
      tooltip: {
        x: {
          format: "dd MMM yyyy",
        },
      },
      fill: {
        type: "gradient",

        colors: ["#e5ed00"],

        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.7,
          opacityTo: 0.0,
          stops: [0, 40],
        },
      },
    },
    selection: "seven_day",
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
