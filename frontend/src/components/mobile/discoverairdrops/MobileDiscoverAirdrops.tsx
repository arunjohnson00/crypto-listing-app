import { Grid, Stack, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { airdropPageListingRequest } from "../../../store/action";
import MobileDiscoverListAirdropCard from "../cards/discoverlistairdropcard/MobileDiscoverListAirdropCard";

const MobileDiscoverAirdrops = () => {
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
    <Grid container rowSpacing={2}>
      {/* <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#FFFFF5" }}>
          AirDrops
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        {/* <Typography variant="h6" sx={{ fontWeight: 500, color: "#ABAEAF" }}>
          02 June 2022
        </Typography> */}

        <Stack direction="column" flexWrap="wrap" spacing={2} mt={1}>
          {airdropList &&
            airdropList?.response === true &&
            airdropList?.data?.data?.map((item: any, index: number) => (
              <MobileDiscoverListAirdropCard data={item} key={index} />
            ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MobileDiscoverAirdrops;
