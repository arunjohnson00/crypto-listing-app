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

import FacebookImage from "../../../assets/footer/facebook.png";
import InstagramImage from "../../../assets/footer/instagram.png";
import RedditImage from "../../../assets/footer/reddit.png";
import TelegramImage from "../../../assets/footer/telegram.png";
import TwitterImage from "../../../assets/footer/twitter.png";
import DiscordImage from "../../../assets/footer/discord.png";
//import GithubImage from "../../../assets/footer/github.png";

const AppFooter = () => {
  return (
    <Grid xs={12} mb={10}>
      <Box py={5}>
        <Grid container columnSpacing={2}>
          <Grid xs={2.2}>
            <Stack
              direction="column"
              spacing={0.5}
              sx={{ alignItems: "flex-start" }}
            >
              <img
                src="https://coinxhigh.com/public/assets/images/logo.png"
                alt="coinxhigh"
                width="150px"
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#838385",
                  fontWeight: "400",
                  fontSize: "0.69rem",
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
          <Grid item xs={2.2}>
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
                  }}
                >
                  Recetly added coins
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
                  }}
                >
                  Recetly added NFT
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
                  }}
                >
                  Watchlists
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={2.2}>
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
                  }}
                >
                  Add Events
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={2.2}>
            <Stack
              direction="column"
              spacing={1.5}
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
                  }}
                >
                  Tron News
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={2.2}>
            <Stack
              direction="column"
              spacing={1.5}
              // sx={{ alignItems: "center" }}
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
                  }}
                >
                  Tumblr
                </Typography>
              </Link>
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
            }}
          >
            © 2022 CoinXhigh. All rights reserved
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

export default AppFooter;
