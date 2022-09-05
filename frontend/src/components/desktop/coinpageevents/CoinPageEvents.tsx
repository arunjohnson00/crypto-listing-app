import { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";
import EventViewCard from "../cards/eventviewcard/EventViewCard";
import { coinEventBlockRequest } from "../../../store/action";

const CoinPageEvents = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const [resStatus, setResStatus] = useState<any>();
  const coinEvents = useSelector((data: any) => {
    return data?.coinReducer?.coin_events_block?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {
      setResStatus(res?.data?.response);
    };
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
    <Grid item xs={12} pt={2}>
      {resStatus === true ? (
        <Stack direction="column" spacing={8}>
          {" "}
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography sx={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
              Upcoming Events
            </Typography>

            {coinEvents &&
              coinEvents?.map((item: any, index: number) => (
                <Fragment>
                  {moment(new Date(item?.event_date)).isBefore(new Date()) ===
                    false && (
                    <EventViewCard viewcoin={false} key={index} data={item} />
                  )}
                </Fragment>
              ))}
          </Stack>
          <Stack direction="column" spacing={2} alignItems="flex-start">
            <Typography sx={{ color: "#FFFFFF", fontSize: "1.2rem" }}>
              Past Events
            </Typography>
            {coinEvents &&
              coinEvents?.map((item: any, index: number) => (
                <Fragment>
                  {moment(new Date(item?.event_date)).isBefore(new Date()) ===
                    true && (
                    <EventViewCard viewcoin={false} key={index} data={item} />
                  )}
                </Fragment>
              ))}
          </Stack>
        </Stack>
      ) : (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
            Currently there is no event for this coin
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              fontSize: ".85rem",
              borderRadius: 5,
            }}
          >
            Add Event
          </Button>
        </Stack>
      )}
    </Grid>
  );
};

export default CoinPageEvents;
