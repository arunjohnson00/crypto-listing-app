import { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Stack, Typography } from "@mui/material";
import moment from "moment";

import { coinEventBlockRequest } from "../../../store/action";

import MobileAirdropViewCardCoinPage from "../cards/airdropviewcardcoinpage/MobileAirdropViewCardCoinPage";
import { Link } from "react-router-dom";

const MobileCoinPageAirdrop = () => {
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
    <Grid item xs={12} pt={0}>
      {resStatus === true ? (
        <Stack
          direction="column"
          spacing={1}
          alignItems="flex-start"
          width="100%"
        >
          {coinEvents &&
            coinEvents?.map((item: any, index: number) => (
              <Stack
                direction="column"
                spacing={2}
                alignItems="flex-start"
                width="100%"
              >
                {moment(new Date()).isBetween(
                  new Date(item?.start_date),
                  new Date(item?.end_date)
                ) === true && (
                  <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
                    Current Airdrops
                  </Typography>
                )}
                {moment(new Date()).isBetween(
                  new Date(item?.start_date),
                  new Date(item?.end_date)
                ) === true && (
                  <MobileAirdropViewCardCoinPage
                    viewcoin={false}
                    key={index}
                    data={item}
                  />
                )}
              </Stack>
            ))}

          {coinEvents &&
            coinEvents?.map((item: any, index: number) => (
              <Stack
                direction="column"
                spacing={2}
                alignItems="flex-start"
                width="100%"
              >
                {moment(new Date(item?.event_date)).isAfter(new Date()) ===
                  true && (
                  <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
                    Upcoming Airdrops
                  </Typography>
                )}
                {moment(new Date(item?.event_date)).isAfter(new Date()) ===
                  true && (
                  <MobileAirdropViewCardCoinPage
                    viewcoin={false}
                    key={index}
                    data={item}
                  />
                )}
              </Stack>
            ))}

          {coinEvents &&
            coinEvents?.map((item: any, index: number) => (
              <Stack
                direction="column"
                spacing={2}
                alignItems="flex-start"
                width="100%"
              >
                {moment(new Date(item?.event_date)).isBefore(new Date()) ===
                  true && (
                  <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
                    Past Airdrops
                  </Typography>
                )}
                {moment(new Date(item?.event_date)).isBefore(new Date()) ===
                  true && (
                  <MobileAirdropViewCardCoinPage
                    viewcoin={false}
                    key={index}
                    data={item}
                  />
                )}
              </Stack>
            ))}
        </Stack>
      ) : (
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ color: "#FFFFFF", fontSize: ".85rem" }}>
            Currently there is no airdrops for this coin
          </Typography>
          <Link
            to={"/user-dashboard/airdrops/add"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: "capitalize",
                fontSize: ".65rem",
                borderRadius: 5,
              }}
            >
              Add Airdrop
            </Button>
          </Link>
        </Stack>
      )}
    </Grid>
  );
};

export default MobileCoinPageAirdrop;
