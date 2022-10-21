import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import SupportCard from "../../../components/desktop/cards/supportcard/SupportCard";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Helmet } from "react-helmet-async";
const SupportPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Support| CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Support | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Grid container>
        {" "}
        <Grid item xs={12}>
          <Box mt={5}>
            <Stack direction="column" spacing={6}>
              <Stack direction="column" spacing={1}>
                <Typography
                  sx={{ color: "#23B184", fontWeight: 500, fontSize: "1.4rem" }}
                >
                  For any Support
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontWeight: 400, fontSize: ".85rem" }}
                >
                  Want to promote your project? We offer promoted coin spots and
                  Banner Ad spots. Banner ads can also be displayed within the
                  blog posts if required. Please contact us if you wish to
                  present ads among articles.
                </Typography>
              </Stack>

              <Stack direction="row" spacing={3}>
                <SupportCard
                  title="E-mail"
                  icon={
                    <MailOutlineIcon sx={{ color: "#FFFFFF", fontSize: 66 }} />
                  }
                  caption="For general questions, or to update coin information, please email us at:"
                  buttonText="Mail us"
                  buttonLink="mailto: support@coinxhigh.com"
                />
                <SupportCard
                  title="Telegram"
                  icon={
                    <TelegramIcon sx={{ color: "#FFFFFF", fontSize: 66 }} />
                  }
                  caption="For general questions, or to update coin information, please telegram at:"
                  buttonText="Telegram"
                  buttonLink="https://t.me/coinXhigh"
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SupportPage;
