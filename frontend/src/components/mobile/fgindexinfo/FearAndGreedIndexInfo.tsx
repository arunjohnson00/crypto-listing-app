import { Grid, Box, Divider, Stack, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { fearGreedIndexRequest } from "../../../store/action";

const FearAndGreedIndexInfo = () => {
  const dispatch: any = useDispatch();
  const fearGreedIndex = useSelector((data: any) => {
    return data?.commonReducer?.fear_greed_index;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(fearGreedIndexRequest("noData", successHandler, errorHandler));
  }, [dispatch]);
  return (
    <Fragment>
      {fearGreedIndex && fearGreedIndex?.data[0] && (
        <Box width="100%">
          <Divider
            sx={{
              "&::before": { borderTop: ".8px solid #242c43" },
              "&::after": { borderTop: ".8px solid #242c43" },
            }}
          >
            <Stack direction="row" spacing={0.8} alignItems="center">
              <Typography sx={{ color: "#FFFFFF", fontSize: ".75rem" }}>
                In the past 24 hours market is
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Stack direction="row" spacing={0.3} alignItems="center">
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: ".4rem",
                      color:
                        fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification ===
                          "Extreme Fear"
                          ? "#EF2828"
                          : fearGreedIndex &&
                            fearGreedIndex?.data[0]?.value_classification ===
                              "Fear"
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
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: ".75rem",
                      color:
                        fearGreedIndex &&
                        fearGreedIndex?.data[0]?.value_classification ===
                          "Extreme Fear"
                          ? "#EF2828"
                          : fearGreedIndex &&
                            fearGreedIndex?.data[0]?.value_classification ===
                              "Fear"
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
                    }}
                  >
                    {fearGreedIndex &&
                      fearGreedIndex?.data[0]?.value_classification}
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    color: "#FFFFFF",
                    fontSize: ".7rem",
                    fontWeight: 600,
                    backgroundColor:
                      fearGreedIndex &&
                      fearGreedIndex?.data[0]?.value_classification ===
                        "Extreme Fear"
                        ? "#EF2828"
                        : fearGreedIndex &&
                          fearGreedIndex?.data[0]?.value_classification ===
                            "Fear"
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
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 13.5,
                    width: 13.5,
                  }}
                  p={0.5}
                >
                  {fearGreedIndex?.data[0]?.value}
                </Box>
              </Stack>
            </Stack>
          </Divider>
        </Box>
      )}
    </Fragment>
  );
};

export default FearAndGreedIndexInfo;
