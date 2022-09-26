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
      width="100%"
    >
      <Box width={{ xs: "100%", sm: "100%", md: "60%" }}>
        <Box className="rounded-corners-gradient-borders-asset" width="100%">
          <Box
            sx={{
              //   border: "2px solid #5803AA",
              backgroundColor: "#000000",
              borderRadius: 4,
              // paddingX: 6,
              paddingY: 4,
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            width={{ xs: "100%", sm: "100%", md: "auto" }}
          >
            <Stack
              direction="column"
              alignItems="center"
              spacing={0}
              width="100%"
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
              >
                <AddAssetCard
                  icon={coinIcon}
                  title="Add Coin"
                  link="/user-dashboard/coin/add"
                  state="Launched"
                />
                <AddAssetCard
                  icon={presaleIcon}
                  title="Add Presale Coin"
                  link="/user-dashboard/coin/add"
                  state="Presale"
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
              >
                <AddAssetCard
                  icon={nftIcon}
                  title="Add NFT"
                  link="/user-dashboard/nft/add"
                />
                <AddAssetCard
                  icon={airdropIcon}
                  title="Add Airdrop"
                  link="/user-dashboard/airdrops/add"
                />
                <AddAssetCard
                  icon={eventIcon}
                  title="Add Event"
                  link="/user-dashboard/events/add"
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddAssetPage;
