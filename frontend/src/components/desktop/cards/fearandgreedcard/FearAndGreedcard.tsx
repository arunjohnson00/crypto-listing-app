import { Box, Stack, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import moment from "moment";
import GaugeChart from "react-gauge-chart";
import Timestamp from "react-timestamp";
import { useDispatch, useSelector } from "react-redux";
import { fearGreedIndexRequest } from "../../../../store/action";

const FearAndGreedcard = ({ width, size, height }: any) => {
  const fearGreedIndex = useSelector((data: any) => {
    return data?.commonReducer?.fear_greed_index;
  });
  const dispatch: any = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(fearGreedIndexRequest("noData", successHandler, errorHandler));
  }, [dispatch]);
  console.log(fearGreedIndex);
  return (
    <Fragment>
      {fearGreedIndex && fearGreedIndex?.data[0] && (
        <Box
          sx={{
            border: "1px solid #202131",
            background: "#01061A",
            borderRadius: 5,
            minWidth: width && width,
            width: width && width,
            height: height && height,
            "&:hover": {
              backgroundColor: "#020c36",
            },
          }}
          p={2}
        >
          <Stack direction="row" spacing={0} justifyContent="space-between">
            <Stack
              direction="column"
              spacing={
                size && size === "large" ? 0 : size && size === "small" && -0.6
              }
            >
              <Typography
                variant="caption"
                sx={{ color: "#40424B", fontWeight: 600 }}
              >
                Now
              </Typography>
              <Typography
                variant={
                  size && size === "large"
                    ? "h5"
                    : size && size === "small" && "body1"
                }
                sx={{
                  color:
                    fearGreedIndex &&
                    fearGreedIndex?.data[0]?.value_classification ===
                      "Extreme Fear"
                      ? "#EF2828"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification === "Fear"
                      ? "#EC840E"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification ===
                          "Neutral"
                      ? "#A8CE08"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification ===
                          "Greed"
                      ? "#1DAF03"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification ===
                          "Extreme Greed" &&
                        "#008E49",
                  fontWeight: 500,
                }}
              >
                {fearGreedIndex &&
                  fearGreedIndex?.data[0]?.value_classification}
              </Typography>

              <Typography
                variant={
                  size && size === "large"
                    ? "h3"
                    : size && size === "small" && "h4"
                }
                sx={{
                  color:
                    fearGreedIndex &&
                    fearGreedIndex?.data[0]?.value_classification <=
                      "Extreme Fear"
                      ? "#EF2828"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification <= "Fear"
                      ? "#EC840E"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification <=
                          "Neutral"
                      ? "#A8CE08"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification <= "Greed"
                      ? "#1DAF03"
                      : fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification <=
                          "Extreme Greed" &&
                        "#008E49",
                  fontWeight: 700,
                }}
              >
                {fearGreedIndex && fearGreedIndex?.data[0]?.value}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0}>
              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 400,
                  fontSize:
                    size && size === "large"
                      ? ".75rem"
                      : size && size === "small" && ".65rem",
                }}
              >
                {fearGreedIndex && fearGreedIndex?.name}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={
              size && size === "large" ? 2 : size && size === "small" && 0
            }
            alignItems="center"
          >
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={20}
              colors={["#ef2828", "#008e49"]}
              style={{
                width:
                  size && size === "large"
                    ? "auto"
                    : size && size === "small" && 200,
              }}
              percent={
                fearGreedIndex && parseInt(fearGreedIndex?.data[0]?.value) / 100
              }
              formatTextValue={(value: any) => value}
            />
            <Typography
              variant="caption"
              sx={{
                color: "#40424B",
                fontWeight: 600,
                fontSize:
                  size && size === "large"
                    ? ".75rem"
                    : size && size === "small" && ".65rem",
              }}
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
