import { Box, Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { airdropPageListingRequest } from "../../../store/action";
import DiscoverListAirdropCard from "../cards/discoverlistairdropcard/DiscoverListAirdropCard";

const DiscoverAirdrops = () => {
  const dispatch: any = useDispatch();
  const airdropList = useSelector((data: any) => {
    return data?.airdropReducer?.airdrop_listings?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(airdropPageListingRequest("noData", successHandler, errorHandler));
  }, [dispatch]);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          AirDrops
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4}>
        <Stack direction="row" flexWrap="wrap" rowGap={2} columnGap={2} mt={1}>
          {airdropList &&
            airdropList?.response === true &&
            airdropList?.data?.data?.map((item: any, index: number) => (
              <Box sx={{ width: "32%" }} key={index}>
                <DiscoverListAirdropCard data={item} />
              </Box>
            ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DiscoverAirdrops;
