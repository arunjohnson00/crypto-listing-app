import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import GainersLosersCard from "../cards/gainersloserscard/GainersLosersCard";
import DiscoverLatestCommonCard from "../cards/dicoverlatestcommoncard/DiscoverLatestCommonCard";
import { useDispatch, useSelector } from "react-redux";
import { airdropPageListingRequest } from "../../../store/action";
import { useEffect } from "react";
import moment from "moment";

const DiscoverLatestAirDrops = () => {
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
    <Grid xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          padding: 4,
          borderRadius: 4,
          backgroundColor: "#020727",
        }}
        mb={7}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={5}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={2}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={1}
            >
              <CampaignIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
              <Typography
                variant="h6"
                sx={{ color: "#2DCEAF", fontWeight: 500 }}
              >
                AirDrops
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                pt={0}
                flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
              >
                {airdropList &&
                  airdropList?.response === true &&
                  airdropList?.data?.data?.map((item: any, index: number) => (
                    <DiscoverLatestCommonCard
                      data={item}
                      key={index}
                      item={item}
                      path="coin_logo"
                      variant="airdrop"
                      image={item && item?.coin_logo}
                      title={item && item?.coin_name}
                      subtitle={`${item && item?.coin_symbol}`}
                      link={`/airdrops/${item && item?.slug}`}
                      date={moment(new Date(item && item?.start_date)).format(
                        "DD"
                      )}
                      month={moment(new Date(item && item?.start_date)).format(
                        "MMM"
                      )}
                      index={index}
                    />
                  ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default DiscoverLatestAirDrops;
