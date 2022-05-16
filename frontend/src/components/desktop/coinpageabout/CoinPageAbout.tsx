import {
  Grid,
  Stack,
  Typography,
  NativeSelect,
  Box,
  Avatar,
  Tooltip,
  Divider,
  CardMedia,
} from "@mui/material";

const CoinPageAbout = () => {
  return (
    <Grid container xs={12}>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
        <Grid xs={12} mb={5}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#FFFFF5",
              "&::after": {
                content: '""',
                display: "block",
                width: "20%",
                borderBottom: "2px solid #23E2A0",
              },
            }}
          >
            About Safemoon
          </Typography>

          <Stack direction="column" mt={2}>
            <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
              Safemoon is a cryptocurrency, which are digital currencies that
              exist solely online and hope to be used as a medium of exchange.
              Like more popular cryptocurrencies such as Bitcoin and Ethereum,
              Safemoon is powered by distributed ledger technology such as
              blockchain. Safemoon was created on the Binance Smart Chain
              blockchain and only has a market cap of about $1.3 billion (as of
              Sept. 2, 2021), compared to about $930 billion for Bitcoin.
              Safemoon was designed in a way to encourage long-term investment
              and discourage selling. It does this by charging sellers a 10
              percent fee, with half of the fee going to Safemoon’s existing
              holders and the other half to be used in a liquidity pool (in an
              effort to better maintain price stability).
              <br /> <br /> Blockchain security firm CertiK found during an
              audit of Safemoon that its owners acquire tokens created from the
              liquidity pool, giving them control over tokens created as part of
              the fee. CertiK flagged this as a major issue in its report and
              recommended Safemoon improve its security features. Safemoon’s
              developers also manually reduce the amount of Safemoon in
              circulation regularly in an effort to reduce supply and increase
              the price. The price did soar shortly after being introduced in
              March, reaching an all-time high of $0.000014 on April 20,
              according to CoinMarketCap. It has since fallen around 80 percent
              from its peak.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        px={{ xs: 0, sm: 0, md: 4 }}
        mt={{ xs: 2, sm: 2, md: 0 }}
      >
        <CardMedia
          component="img"
          height="80"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />

        <Grid xs={12} pt={4}>
          <CardMedia
            component="img"
            height="500"
            image="https://img.phemex.com/wp-content/uploads/2019/12/21041957/EMN5mGoU8AAcn-Y.jpeg"
            alt="green iguana"
          />
        </Grid>
        <Grid xs={12} pt={4}></Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageAbout;
