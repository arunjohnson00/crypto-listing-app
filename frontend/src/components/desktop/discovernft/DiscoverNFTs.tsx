import { Box, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import DiscoverNFTCard from "../cards/discovernftcard/DiscoverNFTCard";
import { discoverLatestNFTRequest } from "../../../store/action";

const DiscoverNFTs = () => {
  const dispatch: any = useDispatch();
  const latestNft = useSelector((data: any) => {
    return data?.discoverReducer?.latest_nft?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(discoverLatestNFTRequest("noData", successHandler, errorHandler));
  }, [dispatch]);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          NFT's
        </Typography>
      </Grid>

      <Stack direction="row" flexWrap="wrap">
        {latestNft &&
          latestNft?.map((item: any, index: number) => (
            <Box key={index} sx={{ width: "25%" }}>
              <DiscoverNFTCard item={item} />
            </Box>
          ))}
      </Stack>
    </Grid>
  );
};

export default DiscoverNFTs;
