import { Grid, Stack, Typography } from "@mui/material";
import BannerBtn from "../../button/bannerbutton/BannerBtn";

const CardDeal = () => {
  return (
    <Grid item xs={12}>
      <Stack direction="column" spacing={3} px={3} py={3}>
        <Grid item xs={6}>
          <Stack direction="column" spacing={5} px={3} py={3}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "600", color: "#FFFFF5" }}
            >
              Find a better card deal
              <br /> in few easy setps
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "600", color: "#93949C" }}
            >
              Bitcoin attempted a recovery wave above $32,000 against the US
              Dollar. BTC is struggling and remains at a risk of more losses
              below $30,000. Bitcoin started a short-term recovery wave after it
              tested the $30,000 zone.
            </Typography>
            <BannerBtn title="Get Started" width="145" />
          </Stack>
        </Grid>
      </Stack>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default CardDeal;
