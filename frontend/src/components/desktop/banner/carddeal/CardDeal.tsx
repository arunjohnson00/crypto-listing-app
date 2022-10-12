import { Grid, Link, Stack, Typography } from "@mui/material";
import BannerBtn from "../../button/bannerbutton/BannerBtn";
import BannerPespectiveWidget from "../../widget/bannerpespective/BannerPespectiveWidget";

const CardDeal = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Stack direction="column" spacing={5} px={3} py={3}>
          <Typography variant="h3" sx={{ fontWeight: "600", color: "#FFFFF5" }}>
            Get on board with CoinXHigh.com
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "600", color: "#93949C" }}
          >
            We are the world's top rated crypto listing platform that gives
            top-notch insights into the trending coins. We get you global crypto
            news, NFT’s, Crypto Events, Airdrops each and every second. List and
            promote your coins with us.
          </Typography>
          <Link href="#">
            <BannerBtn title="Get Started" width="145" />
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <BannerPespectiveWidget />
      </Grid>
    </Grid>
  );
};

export default CardDeal;
