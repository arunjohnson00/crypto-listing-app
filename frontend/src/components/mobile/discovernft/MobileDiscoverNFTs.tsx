import { Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { discoverLatestNFTRequest } from "../../../store/action";
import MobileDiscoverNFTCard from "../cards/discovernftcard/MobileDiscoverNFTCard";

const MobileDiscoverNFTs = () => {
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
    <Grid container rowSpacing={0}>
      {/* <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          NFT's
        </Typography>
      </Grid> */}

      <Stack direction="row" flexWrap="wrap">
        <ImageList sx={{ height: "auto" }} cols={4}>
          {latestNft &&
            latestNft?.map((item: any, index: number) => (
              <ImageListItem key={index}>
                <MobileDiscoverNFTCard item={item} />
              </ImageListItem>
            ))}
        </ImageList>
      </Stack>
    </Grid>
  );
};

export default MobileDiscoverNFTs;
