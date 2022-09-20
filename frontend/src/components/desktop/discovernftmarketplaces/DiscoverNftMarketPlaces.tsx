import { Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DiscoverNFTCard from "../cards/discovernftcard/DiscoverNFTCard";
import DiscoverNFTMarketPlaceCard from "../cards/discovernftmarketplacecard/DiscoverNFTMarketPlaceCard";

const DiscoverNftMarketPlaces = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          NFT MarketPlaces
        </Typography>
      </Grid>

      <Stack direction="row" flexWrap="wrap">
        <ImageList sx={{ height: "auto" }} cols={5}>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTMarketPlaceCard />
          </ImageListItem>
        </ImageList>
      </Stack>
    </Grid>
  );
};

export default DiscoverNftMarketPlaces;
