import { Box, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import moment from "moment";
import GaugeChart from "react-gauge-chart";
import Timestamp from "react-timestamp";

const FearAndGreedcard = () => {
  const [fearGreedIndex, setFearGreedIndex] = useState<any>();
  useEffect(() => {
    const url = "https://api.alternative.me/fng";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        // console.log(json);
        setFearGreedIndex(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {fearGreedIndex && fearGreedIndex?.data[0] && (
        <Box
          sx={{
            border: "1px solid #202131",
            background: "#01061A",
            borderRadius: 5,
            minWidth: 350,
          }}
          p={2}
        >
          <Stack direction="row" spacing={0} justifyContent="space-between">
            <Stack direction="column" spacing={0}>
              <Typography
                variant="caption"
                sx={{ color: "#40424B", fontWeight: 600 }}
              >
                Now
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: " #F15F27", fontWeight: 500 }}
              >
                {fearGreedIndex &&
                  fearGreedIndex?.data[0]?.value_classification}
              </Typography>

              <Typography
                variant="h4"
                sx={{ color: " #F15F27", fontWeight: 700 }}
              >
                {fearGreedIndex && fearGreedIndex?.data[0]?.value}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0}>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                {fearGreedIndex && fearGreedIndex?.name}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={20}
              colors={["#ef2828", "#008e49"]}
              percent={
                fearGreedIndex && parseInt(fearGreedIndex?.data[0]?.value) / 100
              }
            />
            <Typography
              variant="caption"
              sx={{ color: "#40424B", fontWeight: 600 }}
            >
              Last Updated:{" "}
              <Timestamp
                date={fearGreedIndex && fearGreedIndex?.data[0]?.timestamp}
              />
              {}
            </Typography>
          </Stack>
        </Box>
      )}
    </Fragment>
  );
};

export default FearAndGreedcard;
