import { Chart } from "react-google-charts";

const PieChart = ({ piData }: any) => {
  //console.log(piData);

  const processCoinCount = piData
    ?.map((listCoin: any) => listCoin)
    .filter((item: any) => parseInt(item.status) === 2);

  const presaleCoinCount = piData
    ?.map((listCoin: any) => listCoin)
    .filter((item: any) => parseInt(item.is_presale) === 1);

  const blockedCoinCount = piData
    ?.map((listCoin: any) => listCoin)
    .filter((item: any) => parseInt(item.status) === 3);

  const data = [
    ["Task", "Hours per Day"],
    [`Processing coins  ${processCoinCount?.length}`, processCoinCount?.length],
    [`Presale coins ${presaleCoinCount?.length}`, presaleCoinCount?.length],
    ["Promoted coins", 1],
    [`Blocked coins ${blockedCoinCount?.length}`, blockedCoinCount?.length],
    ["General coins", 1],
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
