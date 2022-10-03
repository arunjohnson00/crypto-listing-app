import { Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import MobileDiscoverNFTMarketPlaceCard from "../cards/discovernftmarketplacecard/MobileDiscoverNFTMarketPlaceCard";

const MobileDiscoverNftMarketPlaces = () => {
  return (
    <Grid container rowSpacing={3}>
      {/* <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          NFT MarketPlaces
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Stack direction="column" spacing={2}>
          <MobileDiscoverNFTMarketPlaceCard />
          <MobileDiscoverNFTMarketPlaceCard />
          <MobileDiscoverNFTMarketPlaceCard />
          <MobileDiscoverNFTMarketPlaceCard />
          <MobileDiscoverNFTMarketPlaceCard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverNftMarketPlaces;
