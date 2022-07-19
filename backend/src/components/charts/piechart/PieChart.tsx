// import { Chart } from "react-google-charts";
import { Box, Typography } from "@mui/material";
import { relative } from "path";
import Chart from "react-apexcharts";
const PieChart = ({ piData, title }: any) => {
  //console.log(piData);

  // const data = [
  //   ["Task", "Hours per Day"],
  //   [`Processing coins  ${piData?.processing_coins}`, piData?.processing_coins],
  //   [`Presale coins ${piData?.presale}`, piData?.presale],

  //   [`Blocked coins ${piData?.blocked_coins}`, piData?.blocked_coins],
  //   [`General coins${piData?.general_coins}`, piData?.general_coins],
  // ];

  // const options = {
  //   chartArea: { left: 20, top: 20, width: "90%", height: "80%" },
  //   title: "Current Status of coins",
  //   titleTextStyle: {
  //     fontSize: 15,
  //     fontName: "'Poppins', sans-serif",
  //   },
  //   legend: {
  //     position: "left",
  //     alignment: "center",
  //     textStyle: {
  //       color: "#010101",
  //       fontSize: 12,
  //       fontName: "'Poppins', sans-serif",
  //       bold: false,
  //       italic: false,
  //     },
  //   },
  // };

  const chartData: any = {
    series: [
      piData?.processing_coins,
      piData?.presale,
      piData?.blocked_coins,
      piData?.general_coins,
    ],
    options: {
      colors: ["#775DD0", "#FF4560", "#FEB019", "#00E292"],
      chart: {
        width: 400,
        type: "pie",
      },
      theme: {
        monochrome: {
          enabled: false,
        },
      },
      legend: {
        position: "left",
        horizontalAlign: "left",
        showForSingleSeries: true,
        showForNullSeries: true,
        showForZeroSeries: true,
        offsetX: -22,
        offsetY: 30,
        fontWeight: 550,

        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
      },

      labels: [
        `Processing coins ${piData?.processing_coins}`,
        `Presale coins ${piData?.presale}`,
        `Blocked coins ${piData?.blocked_coins}`,
        `General coins ${piData?.general_coins}`,
      ],
      title: {
        text: `Total Coins: ${piData?.total_coins}`,
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 200,

        floating: true,
        style: {
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "inherit",
          color: "#263238",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    // <Chart
    //   chartType="PieChart"
    //   data={data}
    //   options={options}
    //   width={"auto"}
    //   height={"250px"}
    // />
    <div id="chart">
      <Chart
        options={chartData?.options}
        series={chartData?.series}
        type="pie"
        width={400}
      />
      {/* <Typography
        variant="subtitle1"
        sx={{
          paddingTop: "9px",
          paddingRight: "4px",
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        Total Coins :{" "}
        <span style={{ color: "black", fontWeight: "bold" }}>
          {piData?.total_coins}
        </span>
      </Typography>{" "} */}
    </div>
  );
};

export default PieChart;
