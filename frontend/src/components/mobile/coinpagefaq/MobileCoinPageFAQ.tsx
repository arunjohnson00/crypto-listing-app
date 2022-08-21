import {
  Grid,
  Stack,
  Typography,
  Rating,
  Divider,
  CardMedia,
  Box,
  Avatar,
  Checkbox,
  LinearProgress,
  Link,
  Button,
} from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";

const MobileCoinPageFAQ = () => {
  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={0}>
          {/* <Grid xs={12} sm={12} md={4}>
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
              Safemoon FAQ's
            </Typography>
          </Grid> */}
          {/* <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid> */}
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid xs={12} mb={3}>
          <Stack
            direction="column"
            mt={{ xs: 0, sm: 0, md: 4 }}
            mx={{ xs: 0, sm: 0, md: 0 }}
          >
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is SafeMoon coin?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The SafeMoon Protocol is a community driven, fair launched DeFi
                Token. Three simple functions occur during each trade:
                Reflection, LP Acquisition, and Burn.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is the price of SafeMoon today?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                One SafeMoon coin can currently be purchased for approximately
                $0.000409755.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is the Total supply of SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The total supply of Safemoon is 1000000000000000.
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is the Marketcap of SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The marketcap of safemoon is 432271958309.17.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is the Rating of SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                Current rating of Safemoon is 4.9.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How many Reviews got SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There are 5412 Reviews received.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How do I buy SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The list of available exchanges where you can buy currency
                SafeMoon (OLD) can be found here.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What was the highest price for SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                SafeMoon hit an all time high of $0.003382723655 on Jan 05, 2022
                (212 days ago).
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is SafeMoon smart contract address?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                SafeMoon official smart contract address is
                0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is SafeMoon official website?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The official website of SafeMoon is safemoon.net.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What is the SafeMoon Market Cap today?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                SafeMoon Market Cap is $230,343,317 today.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                What's the last 24h SafeMoon trading volume?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                Trading volume of SafeMoon in the last 24h was $462,024, which
                is approximately 0.20% of its current market cap. That means
                SafeMoon has had relatively low trading activity in the past
                day.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How much money is in SafeMoon Liquidity Pool?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There is $10,075,761 in 60 SafeMoon liquidity pools. That's
                approximately 4.37% of SafeMoon current Market Cap.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How many people are holding SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There are 688,793 holders of SafeMoon, which includes 18 large
                holders (wallets with more than 634B SFM).
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How many followers does SafeMoon have on Twitter?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                1,374,239 people are following the SafeMoon Twitter account
                @safemoon.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How many members does the SafeMoon Telegram channel have?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                SafeMoon has 119,024 members on the @safemoonv2 Telegram
                channel.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How many members does the SafeMoon Discord server have?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There are 103,204 members on SafeMoon Discord Server.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                How many subscribers are there on SafeMoon Reddit?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                SafeMoon has 303,788 subscribers on /r/safemoon subreddit.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#02AD78", fontSize: "1rem", fontWeight: 600 }}
              >
                Where i can read the Latest News about SafeMoon?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                You can read the latest news about safemoon here.
                https://news.coinxhigh.com/?s=safemoon
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileCoinPageFAQ;
