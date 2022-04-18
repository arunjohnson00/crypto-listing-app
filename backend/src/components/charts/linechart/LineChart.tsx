import { Typography } from "@mui/material";
import { Fragment } from "react";
import { Chart } from "react-google-charts";
import { Grid } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { FormControl } from "@mui/material";

const LineChart = () => {
  const data = [
    ["Day", "CoinListing"],
    ["1", 1000],
    ["2", 1170],
    ["3", 660],
    ["4", 1030],
  ];

  const options = {
    // title: "Coin Listing Request / Day",
    legend: { position: "bottom" },
    tooltip: { trigger: "selection" },
    chartArea: { width: "85%" },
  };

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "left",
              color: "#363062",
              paddingTop: "7px",
              paddingLeft: "4px",
            }}
          >
            Coin Listing Request / Day
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <FormControl fullWidth>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
              sx={{ fontSize: "13px", color: "#9C9FA0" }}
            >
              <option value={7}>Last 7 days</option>
              <option value={15}>Last 15 days</option>
              <option value={20}>Last 20 days</option>
            </NativeSelect>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Chart
            chartType="LineChart"
            width="auto"
            height="auto"
            data={data}
            options={options}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LineChart;
