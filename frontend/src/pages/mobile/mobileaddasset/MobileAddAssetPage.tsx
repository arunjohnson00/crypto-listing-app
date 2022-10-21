import { Box, Stack, useMediaQuery } from "@mui/material";
import AddAssetCard from "../../../components/desktop/cards/addassetcard/AddAssetCard";
import "./style.css";

import coinIcon from "../../../assets/addasset/add-coin-icon.png";
import airdropIcon from "../../../assets/addasset/add-airdrop-icon.png";
import eventIcon from "../../../assets/addasset/add-event-icon.png";
import nftIcon from "../../../assets/addasset/add-nft-icon.png";
import presaleIcon from "../../../assets/addasset/add-coin-icon.png";
import MobileAddAssetCard from "../../../components/mobile/cards/addassetcard/MobileAddAssetCard";
import { Helmet } from "react-helmet";

const MobileAddAssetPage = ({ windowInnerWidth }: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Helmet>
        <title>Add Asset | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content=" Add Asset | CoinXhigh.com" />
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
      <Box
        sx={{
          //   border: "2px solid #5803AA",
          backgroundColor: "#010822",
          borderRadius: 4,
          width: "auto",
        }}
        py={1}
        my={2}
      >
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          alignItems="center"
          justifyContent={"center"}
          sx={{ flexWrap: "wrap" }}
        >
          <MobileAddAssetCard
            icon={coinIcon}
            title="Add Coin"
            link="/user-dashboard/coin/add"
            state="Launched"
          />
          <MobileAddAssetCard
            icon={presaleIcon}
            title="Add Presale Coin"
            link="/user-dashboard/coin/add"
            state="Presale"
          />

          <MobileAddAssetCard
            icon={nftIcon}
            title="Add NFT"
            link="/user-dashboard/nft/add"
          />
          <MobileAddAssetCard
            icon={airdropIcon}
            title="Add Airdrop"
            link="/user-dashboard/airdrops/add"
          />
          <MobileAddAssetCard
            icon={eventIcon}
            title="Add Event"
            link="/add-events"
          />
        </Stack>
      </Box>
    </>
  );
};

export default MobileAddAssetPage;
