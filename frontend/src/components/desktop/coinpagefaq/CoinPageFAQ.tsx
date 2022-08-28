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
import { coinFAQBlockRequest } from "../../../store/action";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CoinPageFAQ = () => {
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const coinFAQ = useSelector((data: any) => {
    return data?.coinReducer?.coin_faq_block?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(
      coinFAQBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        <Stack direction={{ xs: "column", sm: "column", md: "row" }} mt={2}>
          <Grid xs={12} sm={12} md={4}>
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
              {coinFAQ && coinFAQ[0]?.name} FAQ's
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={8} mt={{ xs: 2, sm: 2, md: 0 }}>
            <CardMedia
              component="img"
              height="70"
              image="https://iili.io/UtY5Kv.jpg"
              alt="green iguana"
              sx={{ objectFit: "unset" }}
            />
          </Grid>
        </Stack>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid xs={12} mb={5}>
          <Stack
            direction="column"
            mt={{ xs: 0, sm: 0, md: 4 }}
            mx={{ xs: 0, sm: 0, md: 0 }}
          >
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is {coinFAQ && coinFAQ[0]?.name} coin?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {coinFAQ && coinFAQ[0]?.description}
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is the price of {coinFAQ && coinFAQ[0]?.name} today?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                One {coinFAQ && coinFAQ[0]?.name} coin can currently be
                purchased for approximately{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.price !== null ? (
                    coinFAQ &&
                    String(Math.trunc(parseFloat(coinFAQ[0]?.price))).length >
                      2 ? (
                      coinFAQ &&
                      "$" +
                        Number(
                          parseFloat(coinFAQ[0]?.price).toFixed(2)
                        ).toLocaleString()
                    ) : coinFAQ && Math.abs(coinFAQ[0]?.price) > 1 ? (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.price)
                          .toFixed(4)
                          .toLocaleString()
                    ) : (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.price)
                          .toFixed(13)
                          .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>
                .
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is the Total supply of {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The total supply of Safemoon is{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.total_supply !== null ? (
                    coinFAQ &&
                    String(Math.trunc(parseFloat(coinFAQ[0]?.total_supply)))
                      .length > 2 ? (
                      coinFAQ &&
                      "$" +
                        Number(
                          parseFloat(coinFAQ[0]?.total_supply).toFixed(2)
                        ).toLocaleString()
                    ) : coinFAQ && Math.abs(coinFAQ[0]?.total_supply) > 1 ? (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.total_supply)
                          .toFixed(4)
                          .toLocaleString()
                    ) : (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.total_supply)
                          .toFixed(13)
                          .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>
                .
              </Typography>
            </Stack>
            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is the Marketcap of {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The marketcap of safemoon is{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.market_cap !== null ? (
                    coinFAQ &&
                    String(Math.trunc(parseFloat(coinFAQ[0]?.market_cap)))
                      .length > 2 ? (
                      coinFAQ &&
                      "$" +
                        Number(
                          parseFloat(coinFAQ[0]?.market_cap).toFixed(2)
                        ).toLocaleString()
                    ) : coinFAQ && Math.abs(coinFAQ[0]?.market_cap) > 1 ? (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.market_cap)
                          .toFixed(4)
                          .toLocaleString()
                    ) : (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.market_cap)
                          .toFixed(13)
                          .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>
                .
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is the Rating of {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                Current rating of Safemoon is{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.rating !== null ? (
                    coinFAQ && parseFloat(coinFAQ[0]?.rating).toFixed(1)
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>
                .
              </Typography>
            </Stack>

            {coinFAQ &&
              coinFAQ[0]?.review_count !== null &&
              coinFAQ[0]?.review_count !== "" &&
              coinFAQ[0]?.review_count !== 0 && (
                <Stack direction="column" spacing={0.8} mt={3}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#19FFB0", fontWeight: 600 }}
                  >
                    How many Reviews got {coinFAQ && coinFAQ[0]?.name}?
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 400,
                      fontSize: ".85rem",
                    }}
                  >
                    There are{" "}
                    <span style={{ color: "#037bfd" }}>
                      {coinFAQ && coinFAQ[0]?.review_count !== null ? (
                        coinFAQ &&
                        parseFloat(coinFAQ[0]?.review_count).toFixed(0)
                      ) : (
                        <span style={{ color: "#7a7a7a" }}>--</span>
                      )}
                    </span>{" "}
                    Reviews received.
                  </Typography>
                </Stack>
              )}

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How do I buy {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The list of available exchanges where you can buy currency{" "}
                {coinFAQ && coinFAQ[0]?.name} (OLD) can be found here.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What was the highest price for {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {coinFAQ && coinFAQ[0]?.name} hit an all time high of
                $0.003382723655 on Jan 05, 2022 (212 days ago).
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is {coinFAQ && coinFAQ[0]?.name} smart contract address?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {coinFAQ && coinFAQ[0]?.name} official smart contract address is{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ &&
                  coinFAQ[0]?.contract_address?.contract_address !== null ? (
                    coinFAQ && coinFAQ[0]?.contract_address?.contract_address
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>{" "}
                .
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is {coinFAQ && coinFAQ[0]?.name} official website?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                The official website of {coinFAQ && coinFAQ[0]?.name} is
                safemoon.net.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What is the {coinFAQ && coinFAQ[0]?.name} Market Cap today?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {coinFAQ && coinFAQ[0]?.name} Market Cap is{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.market_cap !== null ? (
                    coinFAQ &&
                    String(Math.trunc(parseFloat(coinFAQ[0]?.market_cap)))
                      .length > 2 ? (
                      coinFAQ &&
                      "$" +
                        Number(
                          parseFloat(coinFAQ[0]?.market_cap).toFixed(2)
                        ).toLocaleString()
                    ) : coinFAQ && Math.abs(coinFAQ[0]?.market_cap) > 1 ? (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.market_cap)
                          .toFixed(4)
                          .toLocaleString()
                    ) : (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.market_cap)
                          .toFixed(13)
                          .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>{" "}
                today.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                What's the last 24h {coinFAQ && coinFAQ[0]?.name} trading
                volume?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                Trading volume of {coinFAQ && coinFAQ[0]?.name} in the last 24h
                was{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.volume_24h !== null ? (
                    coinFAQ &&
                    String(Math.trunc(parseFloat(coinFAQ[0]?.volume_24h)))
                      .length > 2 ? (
                      coinFAQ &&
                      "$" +
                        Number(
                          parseFloat(coinFAQ[0]?.volume_24h).toFixed(2)
                        ).toLocaleString()
                    ) : coinFAQ && Math.abs(coinFAQ[0]?.volume_24h) > 1 ? (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.volume_24h)
                          .toFixed(4)
                          .toLocaleString()
                    ) : (
                      coinFAQ &&
                      "$" +
                        parseFloat(coinFAQ[0]?.volume_24h)
                          .toFixed(13)
                          .toLocaleString()
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>
                , which is approximately 0.20% of its current market cap. That
                means {coinFAQ && coinFAQ[0]?.name} has had relatively low
                trading activity in the past day.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How much money is in {coinFAQ && coinFAQ[0]?.name} Liquidity
                Pool?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There is $10,075,761 in 60 {coinFAQ && coinFAQ[0]?.name}{" "}
                liquidity pools. That's approximately 4.37% of{" "}
                {coinFAQ && coinFAQ[0]?.name} current Market Cap.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How many people are holding {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There are 688,793 holders of {coinFAQ && coinFAQ[0]?.name},
                which includes 18 large holders (wallets with more than 634B
                SFM).
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How many followers does {coinFAQ && coinFAQ[0]?.name} have on
                Twitter?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.twitter?.follower_count !== null ? (
                    coinFAQ && coinFAQ[0]?.twitter?.follower_count
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>{" "}
                people are following the {coinFAQ && coinFAQ[0]?.name} Twitter
                account @safemoon.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How many members does the {coinFAQ && coinFAQ[0]?.name} Telegram
                channel have?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {coinFAQ && coinFAQ[0]?.name} has{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.telegram?.follower_count !== null ? (
                    coinFAQ && coinFAQ[0]?.telegram?.follower_count
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>{" "}
                members on the @safemoonv2 Telegram channel.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How many members does the {coinFAQ && coinFAQ[0]?.name} Discord
                server have?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                There are{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.discord?.follower_count !== null ? (
                    coinFAQ && coinFAQ[0]?.discord?.follower_count
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>{" "}
                members on {coinFAQ && coinFAQ[0]?.name} Discord Server.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                How many subscribers are there on {coinFAQ && coinFAQ[0]?.name}{" "}
                Reddit?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                {coinFAQ && coinFAQ[0]?.name} has{" "}
                <span style={{ color: "#037bfd" }}>
                  {coinFAQ && coinFAQ[0]?.reddit?.follower_count !== null ? (
                    coinFAQ && coinFAQ[0]?.reddit?.follower_count
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
                </span>{" "}
                subscribers on /r/safemoon subreddit.
              </Typography>
            </Stack>

            <Stack direction="column" spacing={0.8} mt={3}>
              <Typography
                variant="h6"
                sx={{ color: "#19FFB0", fontWeight: 600 }}
              >
                Where i can read the Latest News about{" "}
                {coinFAQ && coinFAQ[0]?.name}?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
              >
                You can read the latest news about safemoon{" "}
                <a
                  href={`https://news.coinxhigh.com/?s=${
                    coinFAQ && coinFAQ[0]?.name?.toLowerCase()
                  }`}
                  rel="noreferrer"
                  target="_blank"
                >
                  here.
                </a>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoinPageFAQ;
