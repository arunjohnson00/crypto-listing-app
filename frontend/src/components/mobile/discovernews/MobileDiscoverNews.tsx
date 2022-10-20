import { Grid, Box, Stack, Divider, Typography, Link } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import Parser from "html-react-parser";
import { discoverLatestNewsListRequest } from "../../../store/action";

const MobileDiscoverNews = () => {
  const dispatch: any = useDispatch();
  const latestNews = useSelector((data: any) => {
    return data?.discoverReducer?.latest_news?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(discoverLatestNewsListRequest(50, successHandler, errorHandler));
  }, [dispatch]);
  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 500, color: "#FFFFF5" }}>
          Latest News
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={9.5} lg={9.5} xl={9.5}>
        <Grid xs={12}>
          <Box
            sx={{
              flexGrow: 1,
              padding: 2,
              borderRadius: 4,
              backgroundColor: "#020727",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={5}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                spacing={2}
              >
                <Stack
                  direction={{ xs: "column", sm: "column", md: "column" }}
                  spacing={2}
                >
                  {latestNews &&
                    latestNews?.map((item: any, index: number) => (
                      <Stack
                        key={index}
                        direction={{ xs: "row", sm: "row", md: "row" }}
                        alignItems="flex-start"
                        spacing={1}
                        justifyContent="space-between"
                      >
                        <Stack
                          direction={{ xs: "row", sm: "row", md: "row" }}
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#6e6e6ed1",
                              fontWeight: 300,
                              fontSize: 12,
                            }}
                          >
                            {item && index + 1}.
                          </Typography>

                          <Stack
                            direction={{ xs: "row", sm: "row", md: "row" }}
                            alignItems="flex-start"
                            spacing={0}
                          >
                            <Link
                              href={item && item?.link}
                              target="_blank"
                              sx={{ textDecoration: "none" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#FFFFF5",
                                  fontWeight: 300,
                                  fontSize: 12,
                                }}
                              >
                                {/* {item && item?.title?.length >= 55
                                ? Parser(item?.title.slice(0, 55)) + "..."
                                : Parser(item?.title)}. */}
                                {item?.title?.length > 150
                                  ? Parser(item?.title?.slice(0, 150)) + "..."
                                  : Parser(item?.title)}
                                .{" "}
                                <OpenInNewIcon
                                  sx={{ color: "#21C879", fontSize: 14 }}
                                />
                              </Typography>
                            </Link>
                            {/* <Link
                              href={item && item?.link}
                              target="_blank"
                              sx={{ textDecoration: "none" }}
                            >
                              <OpenInNewIcon
                                sx={{ color: "#21C879", fontSize: 14 }}
                              />
                            </Link> */}
                          </Stack>
                        </Stack>

                        <Typography
                          variant="caption"
                          sx={{
                            color: "#21C879",
                            fontWeight: 500,
                            fontSize: ".55rem",
                            minWidth: 80,
                            textAlign: "right",
                          }}
                        >
                          {item && moment(new Date(item?.date)).fromNow()}
                        </Typography>
                      </Stack>
                    ))}
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={2.5} lg={2.5} xl={2.5} py={2.5}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          alignItems="center"
          spacing={1}
        >
          <Typography variant="h6" sx={{ color: "#3FF28F", fontSize: "1rem" }}>
            Categories
          </Typography>

          <Divider
            variant="middle"
            orientation="horizontal"
            flexItem
            sx={{ borderBottomColor: "#131755", borderBottomWidth: 2 }}
          />

          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
            spacing={1}
            py={1}
          >
            {" "}
            <Link
              href="https://news.coinxhigh.com/latest-cryptocurrency-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Latest News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/bitcoin-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Bitcoin News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/ethereum-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Etherium News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/tether-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Tether News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/terra-luna-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Terra -Luna News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/solana-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Solana News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/dogecoin-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Doge coin News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/tron-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Tron News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/avalanche-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Avalanche News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/usd-coin-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                USD Coin News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/ripple-xrp-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Ripple News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/gaming-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Gaming News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/metaverse-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Metaverse News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/defi-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                De-Fi News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/altcoin-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Altcoins News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/blockchain-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Blockchain News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/binance-coin-bnb-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Binance coin News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/polkadot-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Polkadot News
              </Typography>
            </Link>
            <Link
              href="https://news.coinxhigh.com/nft-news/"
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {" "}
              <Typography
                variant="body2"
                sx={{ color: "#696969", fontWeight: 600 }}
              >
                Nft News
              </Typography>
            </Link>
          </Stack>

          <Divider
            variant="middle"
            orientation="horizontal"
            flexItem
            sx={{ borderBottomColor: "#131755", borderBottomWidth: 2 }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverNews;
