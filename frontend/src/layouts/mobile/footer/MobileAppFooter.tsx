import {
  Box,
  Grid,
  Stack,
  Typography,
  Avatar,
  Divider,
  Link,
} from "@mui/material";
import React from "react";
import moment from "moment";
import logoWhite from "../../../assets/logo/logo.png";
import FacebookImage from "../../../assets/footer/facebook.png";
import InstagramImage from "../../../assets/footer/instagram.png";
import RedditImage from "../../../assets/footer/reddit.png";
import TelegramImage from "../../../assets/footer/telegram.png";
import TwitterImage from "../../../assets/footer/twitter.png";
import DiscordImage from "../../../assets/footer/discord.png";
const MobileAppFooter = () => {
  return (
    <Grid xs={12}>
      {/* <Box pt={0}>
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          py={4}
          px={2}
          sx={{ alignItems: "center", justifyContent: "space-around" }}
          spacing={3}
        >
          <Grid xs={6}>
            <Stack
              direction="column"
              spacing={1.5}
              sx={{ alignItems: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Useful Links
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                content
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                How it works
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Create
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Explore
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Terms and Service
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={6}>
            <Stack
              direction="column"
              spacing={1.5}
              sx={{ alignItems: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Community
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Help centers
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Partners
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Suggestions
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Blog
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                News letter
              </Typography>
            </Stack>
          </Grid>
        </Stack>
        <Grid item xs={12} pb={10}>
          <Stack direction="column" spacing={1.5} sx={{ alignItems: "center" }}>
            <img
              src="https://coinxhigh.com/public/assets/images/logo.png"
              alt="coinxhigh"
              width="200px"
            />
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Desclimer
              </Typography>
              <Divider
                variant="middle"
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#3D444D" }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "500",
                  //fontSize: "0.59rem",
                }}
              >
                Terms & Privacy
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Box> */}

      <Box py={8}>
        <Grid container columnSpacing={1} rowSpacing={4}>
          <Grid item xs={6}>
            <Stack
              direction="column"
              spacing={1.5}
              //  sx={{ alignItems: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Explore
              </Typography>
              <Link target="_blank" href="/" style={{ textDecoration: "none" }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Assests
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="/coins/recently-added"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Recently added coins
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/nft/recently-added"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Recently added NFT
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/events/upcoming-events"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Upcoming Events
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/airdrops"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Latest Airdrops
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/discover"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Discover
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="/chart"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Chart
                </Typography>
              </Link>
            </Stack>
            <Stack
              direction="column"
              spacing={1.5}
              //  sx={{ alignItems: "center" }}
              mt={4}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                My Account
              </Typography>
              <Link
                target="_blank"
                href="/register"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Register
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="/login"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Login
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/watchlist"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Watchlists
                </Typography>
              </Link>
            </Stack>
            <Stack
              direction="column"
              spacing={1.5}
              mt={4}
              // sx={{ alignItems: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                News
              </Typography>

              <Link
                target="_blank"
                href="https://news.coinxhigh.com/latest-cryptocurrency-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Latest News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/ethereum-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Ethereum News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/bitcoin-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Bitcoin News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/altcoin-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Altcoin News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/avalanche-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Avalanche News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/binance-coin-bnb-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Binance Coin- BNB News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/blockchain-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Blockchain News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/dogecoin-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Dogecoin News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/polkadot-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Polkadot News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/ripple-xrp-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Ripple - XRP News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/solana-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Solana News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/terra-luna-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Terra - Luna News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/tether-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Tether News
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://news.coinxhigh.com/tron-news/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Tron News
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction="column"
              spacing={1.5}
              //  sx={{ alignItems: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Help & Support
              </Typography>

              <Link
                target="_blank"
                href="https://telegram.me/cryptonews_announcement"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Telegram Channel
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/support"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Help Centre
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/promote"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Promote
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/terms-and-condition"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Terms & Conditions
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/disclaimer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Disclaimer
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/privacy-policy"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="https://news.coinxhigh.com/sitemap/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Sitemap
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="/donations"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Donations
                </Typography>
              </Link>
            </Stack>
            <Stack
              direction="column"
              spacing={1.5}
              //  sx={{ alignItems: "center" }}
              mt={4}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Add Assets
              </Typography>
              <Link
                target="_blank"
                href="/user-dashboard/coin/add"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Add coin
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="/user-dashboard/coin/add"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Add Presale Coin
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/user-dashboard/nft/add"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Add NFT
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/user-dashboard/airdrops/add"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Add Airdrop
                </Typography>
              </Link>

              <Link
                target="_blank"
                href="/user-dashboard/events/add"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Add Events
                </Typography>
              </Link>
            </Stack>
            <Stack
              direction="column"
              spacing={1.5}
              // sx={{ alignItems: "center" }}
              mt={4}
            >
              <Typography
                variant="body2"
                sx={{ color: "#D0CFD3", fontWeight: "600" }}
              >
                Community
              </Typography>

              <Link
                target="_blank"
                href="https://www.facebook.com/CoinXHigh"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Facebook
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com/CoinxHigh"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Twitter
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/coinxhigh/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Instagram
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/coinxhigh/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  LinkedIn
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://in.pinterest.com/coinxhigh/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Pinterest
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://telegram.me/coinXhigh"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Telegram Group
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://telegram.me/cryptonews_announcement"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Telegram Channel
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://medium.com/@coinxhigh"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Medium
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://coinxhigh.blogspot.com/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Blogger
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://vk.com/coinxhigh"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  VKontakte
                </Typography>
              </Link>
              <Link
                target="_blank"
                href="https://coinxhigh.tumblr.com/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#838385",
                    fontWeight: "400",
                    fontSize: "0.8rem",
                    "&:hover": {
                      color: "#1dffc0",
                    },
                  }}
                >
                  Tumblr
                </Typography>
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} mt={2}>
            <Stack
              direction="column"
              spacing={0.5}
              sx={{ alignItems: "center" }}
            >
              <img src={logoWhite} alt="coinxhigh" width="150px" />
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "400",
                  fontSize: "0.69rem",
                  textAlign: "center",
                }}
              >
                Worlds fast emerging Crypto
                <br /> Listing & News Platform.
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ alignItems: "center" }}
                pt={2}
              >
                <Link
                  target="_blank"
                  href="https://www.facebook.com/CoinXHigh"
                  style={{ textDecoration: "none" }}
                >
                  <Avatar
                    variant="square"
                    alt="Facebook"
                    src={FacebookImage}
                    sx={{ width: 20, height: 20 }}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://twitter.com/CoinxHigh"
                  style={{ textDecoration: "none" }}
                >
                  <Avatar
                    variant="square"
                    alt="Twitter"
                    src={TwitterImage}
                    sx={{ width: 20, height: 20 }}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://telegram.me/coinXhigh"
                  style={{ textDecoration: "none" }}
                >
                  <Avatar
                    variant="square"
                    alt="Telegram"
                    src={TelegramImage}
                    sx={{ width: 20, height: 20 }}
                  />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/coinxhigh/"
                  style={{ textDecoration: "none" }}
                >
                  <Avatar
                    variant="square"
                    alt="Instagram"
                    src={InstagramImage}
                    sx={{ width: 20, height: 20 }}
                  />
                </Link>
                {/* <Link
                  target="_blank"
                  href="https://www.instagram.com/coinxhigh/"
                  style={{ textDecoration: "none" }}
                >
                  <Avatar
                    variant="square"
                    alt="Instagram"
                    src={InstagramImage}
                    sx={{ width: 30, height: 30 }}
                  />
                </Link> */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          py={5}
          sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
          px={0}
          spacing={2}
        >
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            flexItem
            sx={{ borderColor: "#3D444D" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#838385",
              fontWeight: "400",
              fontSize: "0.8rem",
              "&:hover": {
                color: "#1dffc0",
              },
            }}
          >
            ?? {moment(new Date()).format("YYYY")} CoinXhigh. All rights reserved
          </Typography>{" "}
          {/* <Box>
            {" "}
            <Stack direction="row" spacing={1}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            </Stack>
          </Box> */}
        </Stack>
      </Box>
    </Grid>
  );
};

export default MobileAppFooter;
