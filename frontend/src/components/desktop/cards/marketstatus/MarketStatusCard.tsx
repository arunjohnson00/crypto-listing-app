import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { coinOverviewBlockRequest } from "../../../../store/action";

const MarketStatusCard = () => {
  const dispatch: any = useDispatch();
  const cardData = useSelector((data: any) => {
    return data?.coinReducer?.coin_overview_block?.data;
  });

  const fearGreedIndex = useSelector((data: any) => {
    return data?.commonReducer?.fear_greed_index;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    // dispatch(
    //   coinOverviewBlockRequest("bitcoin-btc", successHandler, errorHandler)
    // );
  }, [dispatch]);

  return (
    <Grid item xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(98deg,#38363F 10%, #151320)",
          borderRadius: 7,
        }}
        py={3}
        px={3}
      >
        <Stack direction="column" spacing={1} sx={{ alignItems: "flex-start" }}>
          <Typography
            variant="body2"
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
          >
            Market Status
          </Typography>
          <Stack direction="column" spacing={0}>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: "400" }}
            >
              In the past 24 hours
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFF5", fontWeight: "bold", lineHeight: 1 }}
            >
              Market is{" "}
              <span
                style={{
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
                }}
              >
                {fearGreedIndex &&
                  fearGreedIndex?.data[0]?.value_classification}
              </span>
              <span
                style={{
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

                  fontWeight: 700,
                  fontSize: "1.3rem",
                }}
              >
                {" "}
                {fearGreedIndex?.data[0] ? (
                  fearGreedIndex && fearGreedIndex?.data[0]?.value
                ) : (
                  <span style={{ color: "#7a7a7a" }}>--</span>
                )}
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MarketStatusCard;
