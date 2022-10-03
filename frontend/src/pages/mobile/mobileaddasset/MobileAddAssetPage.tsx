import { Box, Stack, useMediaQuery } from "@mui/material";
import AddAssetCard from "../../../components/desktop/cards/addassetcard/AddAssetCard";
import "./style.css";

import coinIcon from "../../../assets/addasset/add-coin-icon.png";
import airdropIcon from "../../../assets/addasset/add-airdrop-icon.png";
import eventIcon from "../../../assets/addasset/add-event-icon.png";
import nftIcon from "../../../assets/addasset/add-nft-icon.png";
import presaleIcon from "../../../assets/addasset/add-coin-icon.png";
import MobileAddAssetCard from "../../../components/mobile/cards/addassetcard/MobileAddAssetCard";

const MobileAddAssetPage = ({ windowInnerWidth }: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
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
          link="/user-dashboard/events/add"
        />
      </Stack>
    </Box>
  );
};

export default MobileAddAssetPage;
