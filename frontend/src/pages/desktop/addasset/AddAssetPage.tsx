import { Box, Stack, useMediaQuery } from "@mui/material";
import AddAssetCard from "../../../components/desktop/cards/addassetcard/AddAssetCard";
import "./style.css";

import coinIcon from "../../../assets/addasset/add-coin-icon.png";
import airdropIcon from "../../../assets/addasset/add-airdrop-icon.png";
import eventIcon from "../../../assets/addasset/add-event-icon.png";
import nftIcon from "../../../assets/addasset/add-nft-icon.png";
import presaleIcon from "../../../assets/addasset/add-coin-icon.png";

const AddAssetPage = ({ windowInnerWidth }: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      pt={matches === true ? 7 : 2}
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
              height: matches === true ? 400 : "auto",
              display: "flex",

              justifyContent: "center",
            }}
            width={{ xs: "99.2%", sm: "99.2%", md: "auto" }}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                justifyContent={matches === true ? "center" : "space-between"}
                sx={{ flexWrap: "wrap" }}
                width="100%"
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
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                justifyContent={matches === true ? "center" : "space-between"}
                width="100%"
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
                  link="/add-events"
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
