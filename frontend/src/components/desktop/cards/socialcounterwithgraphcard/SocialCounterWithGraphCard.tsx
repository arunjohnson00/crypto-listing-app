import { useState, useEffect } from "react";
import { Grid, Box, Stack, Avatar, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const SocialCounterWithGraphCard = ({
  title,
  cardData,
  icon,
  endColor,
  startColor,
  url,
}: any) => {
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

  const percentageDiff = (a: any, b: any) => {
    return ((a - b) / a) * 100;
  };
  const chartData: any = {
    series: [
      {
        name: "Coinxhigh",
        data: cardData && cardData,
      },
    ],

    options: {
      colors: [startColor, endColor],
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
          gradientToColors: [startColor, endColor],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
          colorStops: [
            {
              offset: 0,
              color: startColor,
              opacity: 1,
            },
            {
              offset: 130,
              color: endColor,
              opacity: 1,
            },
          ],
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
    <Box
      sx={{
        // backgroundColor: "#01061C",
        //border: "1px solid #0A1028",
        backgroundColor: "transparent",
        //borderRadius: 5,
      }}
      // px={2}
      // py={2}
    >
      <Grid xs={12}>
        <Stack
          direction={{ xs: "row" }}
          spacing={0.7}
          sx={{ alignItems: "center" }}
        >
          <Avatar
            alt={title && title}
            src={icon && icon}
            sx={{ width: 20, height: 20 }}
          />

          <Stack direction={{ xs: "column" }} spacing={0.7}>
            <a
              href={url && url}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  color: "#C6C9D2",
                  fontWeight: 600,
                  fontSize: ".65rem",
                  textTransform: "capitalize",
                }}
              >
                {title && title}
              </Typography>
            </a>
            <Stack
              direction={{ xs: "row" }}
              alignItems="flex-end"
              spacing={0.7}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 600,

                  lineHeight: 0.2,
                  fontSize: ".85rem",
                }}
              >
                {cardData && cardData[0]}
              </Typography>
              <Typography
                sx={{
                  color:
                    Math.sign(
                      percentageDiff(
                        parseInt(cardData[1]),
                        parseInt(cardData[0])
                      )
                    ) === -1
                      ? "red"
                      : "#03FEB5",
                  fontWeight: 400,

                  lineHeight: 0.2,
                  fontSize: ".65rem",
                }}
              >
                {cardData &&
                  Math.sign(
                    percentageDiff(parseInt(cardData[1]), parseInt(cardData[0]))
                  ) !== -1 &&
                  "+"}
                {cardData &&
                  percentageDiff(
                    parseInt(cardData[1]),
                    parseInt(cardData[0])
                  ).toFixed(2)}
                %
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <Grid xs={12}>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={50}
          width={150}
        />
      </Grid>
      {/* <Grid xs={12}>
          <Stack direction={{ xs: "row" }} sx={{ justifyContent: "flex-end" }}>
            <Typography
              variant="body2"
              sx={{ color: "#00C080", fontWeight: "700" }}
            >
              14.28%
            </Typography>
          </Stack>
        </Grid> */}
    </Box>
  );
};

export default SocialCounterWithGraphCard;
