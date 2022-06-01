import { Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DiscoverNFTCard from "../cards/discovernftcard/DiscoverNFTCard";

const DiscoverNFTs = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          NFT's
        </Typography>
      </Grid>

      <Stack direction="row" flexWrap="wrap">
        <ImageList sx={{ height: "auto" }} cols={3}>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
          <ImageListItem>
            <DiscoverNFTCard />
          </ImageListItem>
        </ImageList>
      </Stack>
    </Grid>
  );
};

export default DiscoverNFTs;
