import { Fragment } from "react";
import Chart from "react-apexcharts";

const chartData: any = {
  series: [44, 55, 13, 33],

  options: {
    labels: [
      `Tether USDT${"45%"}`,
      "STEPN GMT",
      "SAFEMOON SFM",
      "DOGEDI DOGE",
      "BIANCE COIN BNB",
    ],
    colors: ["#EFB119", "#E56E25", "#F18A1F", "#3BA3D2", "#4EB966"],
    chart: {
      type: "donut",
    },

    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "",
              formatter: () => "CoinXHigh",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: "right",
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
const AdsDashboardPieChart = () => {
  return (
    <Fragment>
      <div id="chart"></div>
    </Fragment>
  );
};

export default AdsDashboardPieChart;
