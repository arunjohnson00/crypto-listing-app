import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";
import DiscoverAirDropMultiSlider from "../discovermultislider/DiscoverAirDropMultiSlider";
import DiscoverCryptoCardMultiSlider from "../discovermultislider/DiscoverCryptoCardMultiSlider";
import DiscoverEventsMultiSlider from "../discovermultislider/DiscoverEventsMultiSlider";
import DiscoverNftMultiSlider from "../discovermultislider/DiscoverNftMultiSlider";
import {
  discoverLatestNFTRequest,
  discoverLatestAirdropRequest,
  discoverLatestCoinRequest,
  discoverLatestEventsRequest,
} from "../../../store/action";

const DiscoverRecentlyAdded = () => {
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
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          Recently Added
        </Typography>
      </Grid>
      <Grid item xs={12} py={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Crypto Currencies
          </Typography>
        </Grid>

        <DiscoverCryptoCardMultiSlider data={latestCoin} />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            AirDrops
          </Typography>
        </Grid>

        <DiscoverAirDropMultiSlider data={latestAirdrop} />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            Events
          </Typography>
        </Grid>

        <DiscoverEventsMultiSlider data={latestEvents} />

        <Grid item xs={12} sx={{ marginTop: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 400, color: "#29D392" }}>
            NFT's
          </Typography>
        </Grid>

        <DiscoverNftMultiSlider data={latestNFT} />
      </Grid>
    </Grid>
  );
};

export default DiscoverRecentlyAdded;
