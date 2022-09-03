import { Box, Stack } from "@mui/material";
import AddAssetCard from "../../../components/desktop/cards/addassetcard/AddAssetCard";
import "./style.css";

import coinIcon from "../../../assets/addasset/add-coin-icon.png";
import airdropIcon from "../../../assets/addasset/add-airdrop-icon.png";
import eventIcon from "../../../assets/addasset/add-event-icon.png";
import nftIcon from "../../../assets/addasset/add-nft-icon.png";
import presaleIcon from "../../../assets/addasset/add-coin-icon.png";

const AddAssetPage = ({ windowInnerWidth }: any) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      pt={7}
    >
      <Box className="rounded-corners-gradient-borders-asset">
        <Box
          sx={{
            //   border: "2px solid #5803AA",
            backgroundColor: "#000000",
            borderRadius: 4,
            paddingX: 6,
            paddingY: 4,
          }}
        >
          <Stack direction="column" alignItems="center" spacing={0}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              <AddAssetCard icon={coinIcon} title="Add Coin" link="" />
              <AddAssetCard
                icon={presaleIcon}
                title="Add Presale Coin"
                link=""
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ flexWrap: "wrap" }}
            >
              <AddAssetCard icon={nftIcon} title="Add NFT" link="" />
              <AddAssetCard icon={airdropIcon} title="Add Airdrop" link="" />
              <AddAssetCard icon={eventIcon} title="Add Event" link="" />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AddAssetPage;
