import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";

import {
  discoverLatestNFTRequest,
  discoverLatestAirdropRequest,
  discoverLatestCoinRequest,
  discoverLatestEventsRequest,
} from "../../../store/action";
import MobileDiscoverCryptoCardMultiSlider from "../discovermultislider/MobileDiscoverCryptoCardMultiSlider";
import MobileDiscoverAirDropMultiSlider from "../discovermultislider/MobileDiscoverAirDropMultiSlider";
import MobileDiscoverEventsMultiSlider from "../discovermultislider/MobileDiscoverEventsMultiSlider";
import MobileDiscoverNftMultiSlider from "../discovermultislider/MobileDiscoverNftMultiSlider";

const MobileDiscoverRecentlyAdded = () => {
  const dispatch: any = useDispatch();
  const latestCoin = useSelector((data: any) => {
    return data?.discoverReducer?.latest_coin?.data;
  });

  const latestAirdrop = useSelector((data: any) => {
    return data?.discoverReducer?.latest_airdrop?.data;
  });

  const latestEvents = useSelector((data: any) => {
    return data?.discoverReducer?.latest_events?.data;
  });

  const latestNFT = useSelector((data: any) => {
    return data?.discoverReducer?.latest_nft?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(discoverLatestCoinRequest("noData", successHandler, errorHandler));
    dispatch(
      discoverLatestAirdropRequest("noData", successHandler, errorHandler)
    );
    dispatch(
      discoverLatestEventsRequest("noData", successHandler, errorHandler)
    );
    dispatch(discoverLatestNFTRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Grid container rowSpacing={3}>
      {/* <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Recently Added
        </Typography>
      </Grid> */}

      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "#29D392", fontSize: ".85rem" }}
        >
          Crypto Currencies
        </Typography>
        <MobileDiscoverCryptoCardMultiSlider data={latestCoin} />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "#29D392", fontSize: ".85rem" }}
        >
          AirDrops
        </Typography>
        <MobileDiscoverAirDropMultiSlider data={latestAirdrop} />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "#29D392", fontSize: ".85rem" }}
        >
          Events
        </Typography>
        <MobileDiscoverEventsMultiSlider data={latestEvents} />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "#29D392", fontSize: ".85rem" }}
        >
          NFT's
        </Typography>

        <MobileDiscoverNftMultiSlider data={latestNFT} />
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverRecentlyAdded;
