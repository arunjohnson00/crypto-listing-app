import { Grid, Stack, Typography } from "@mui/material";
import BannerBtn from "../../button/bannerbutton/BannerBtn";
import BannerPespectiveWidget from "../../widget/bannerpespective/BannerPespectiveWidget";

const CardDeal = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Stack direction="column" spacing={5} px={3} py={3}>
          <Typography variant="h3" sx={{ fontWeight: "600", color: "#FFFFF5" }}>
            Find a better card deal
            <br /> in few easy setps
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "600", color: "#93949C" }}
          >
            Bitcoin attempted a recovery wave above $32,000 against the US
            Dollar. BTC is struggling and remains at a risk of more losses below
            $30,000. Bitcoin started a short-term recovery wave after it tested
            the $30,000 zone.
          </Typography>
          <BannerBtn title="Get Started" width="145" />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <BannerPespectiveWidget />
      </Grid>
    </Grid>
  );
};

export default CardDeal;
