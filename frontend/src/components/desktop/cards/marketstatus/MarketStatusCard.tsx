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
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      coinOverviewBlockRequest("bitcoin-btc", successHandler, errorHandler)
    );
  }, [dispatch]);

  console.log(cardData && cardData[0]?.percent_change_24h);
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
              Market is down{" "}
              <span
                style={{
                  color:
                    cardData &&
                    Math.sign(
                      parseFloat(cardData && cardData[0]?.percent_change_24h)
                    ) === -1
                      ? "#ff0000"
                      : "#00ff00",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                }}
              >
                {cardData &&
                cardData[0]?.percent_change_24h !== null &&
                cardData[0]?.percent_change_24h !== "" ? (
                  parseFloat(cardData[0]?.percent_change_24h)
                    .toFixed(2)
                    .replace("-", "") + "%"
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
