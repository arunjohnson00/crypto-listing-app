// import { Chart } from "react-google-charts";
import Chart from "react-apexcharts";
const PieChart = ({ piData }: any) => {
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
        horizontalAlign: "center",
        showForNullSeries: true,
        showForZeroSeries: true,
      },
      labels: [
        `Processing coins ${piData?.processing_coins}`,
        `Presale coins ${piData?.presale}`,
        `Blocked coins ${piData?.blocked_coins}`,
        `General coins ${piData?.general_coins}`,
      ],
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
    </div>
  );
};

export default PieChart;
