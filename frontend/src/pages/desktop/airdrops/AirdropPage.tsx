import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Typography } from "@mui/material";

import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";

import AirdropCard from "../../../components/desktop/cards/airdropcard/AirdropCard";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { useDispatch, useSelector } from "react-redux";
import { airdropPageListingRequest } from "../../../store/action";

const AirdropPage = () => {
  const dispatch: any = useDispatch();
  const airdropList = useSelector((data: any) => {
    return data?.airdropReducer?.airdrop_listings?.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(airdropPageListingRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  console.log(airdropList);

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          {/* <Stack
            direction="row"
            spacing={1}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "0px",
              paddingBottom: "0px",

              alignItems: "center",
            }}
          >
            <CoinSlider />
          </Stack> */}
        </Grid>
        <Grid item xs={12} pt={3}>
          <Stack direction="column" spacing={0.5}>
            <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
              Crypto Airdrops
            </Typography>
            <Typography variant="body2" sx={{ color: "#CDCED1" }}>
              Participate in our crypto airdrops
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container pt={6} spacing={3}>
            {airdropList &&
              airdropList?.response === true &&
              airdropList?.data?.data?.map((item: any, index: number) => (
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={index}>
                  <AirdropCard data={item && item} index={index} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AirdropPage;
