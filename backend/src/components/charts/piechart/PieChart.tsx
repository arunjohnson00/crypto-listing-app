import { Chart } from "react-google-charts";

const PieChart = () => {
  var x = 22;
  const data = [
    ["Task", "Hours per Day"],
    [`Processing coins ${x}`, 11],
    ["Presale coins", 2],
    ["Promoted coins", 2],
    ["Blocked coins", 2],
    ["General coins", 7],
  ];

  const options = {
    chartArea: { left: 20, top: 20, width: "90%", height: "80%" },
    title: "Current Status of coins",
    titleTextStyle: {
      fontSize: 15,
      fontName: "'Poppins', sans-serif",
    },
    legend: {
      position: "left",
      alignment: "center",
      textStyle: {
        color: "#010101",
        fontSize: 12,
        fontName: "'Poppins', sans-serif",
        bold: false,
        italic: false,
      },
    },
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"auto"}
      height={"250px"}
    />
  );
};

export default PieChart;
