import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Stack, Typography } from "@mui/material";

import EventViewCard from "../cards/eventviewcard/EventViewCard";
import { coinEventBlockRequest } from "../../../store/action";

const CoinPageEvents = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const coinEvents = useSelector((data: any) => {
    return data?.coinReducer?.coin_events_block?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinEventBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Grid item xs={11}>
      <Stack direction="row" spacing={5} mt={2}>
        <Stack direction="column" spacing={8}>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography sx={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
              Upcoming Events
            </Typography>
            <EventViewCard viewcoin={false} />
          </Stack>

          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography sx={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
              Past Events
            </Typography>
            <EventViewCard viewcoin={false} />
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CoinPageEvents;
