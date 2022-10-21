import { Fragment, useState, useEffect } from "react";
import { Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import moment from "moment";

import AirdropCard from "../../../components/desktop/cards/airdropcard/AirdropCard";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { useDispatch, useSelector } from "react-redux";
import { airdropPageListingRequest } from "../../../store/action";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { Helmet } from "react-helmet-async";

const AirdropPage = () => {
  const dispatch: any = useDispatch();
  const airdropList = useSelector((data: any) => {
    return data?.airdropReducer?.airdrop_listings?.data;
  });
  const [value, setValue] = useState<any>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
  };

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(airdropPageListingRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Fragment>
      <Helmet>
        <title>Airdrops | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content=" Airdrops | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>

      <Grid container>
        {/* <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={3}>
          <BreadCrumbs data={""} home="Home" path="Airdrops" />
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
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={1}
            justifyContent="space-between"
          >
            <Stack direction="column" spacing={0.5}>
              <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                Crypto Airdrops
              </Typography>
              <Typography variant="body2" sx={{ color: "#CDCED1" }}>
                Participate in our crypto airdrops
              </Typography>
            </Stack>

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="disabled tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  //display: "none",
                  backgroundColor: "#19ffb0",
                  height: 2,
                  // color: "#FFFFF5",
                },

                "& .MuiButtonBase-root.MuiTab-root": {
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  opacity: 1,
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#19ffb0",
                },

                "&.MuiTabs-root": {
                  color: "#fff",
                },

                "&.MuiTabs-root .MuiTabs-scrollButtons": {},
                "&.MuiTabs-root  .Mui-disabled": {
                  display: "none",
                },
              }}
            >
              <Tab label="All" />
              <Tab label="Live" />
              <Tab label="Upcoming" />
              <Tab label="Expired" />
            </Tabs>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          {value === 0 && (
            <Grid container pt={6} spacing={3}>
              {airdropList &&
                airdropList?.response === true &&
                airdropList?.data?.data?.map((item: any, index: number) => (
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={index}>
                    <AirdropCard data={item && item} index={index} />
                  </Grid>
                ))}
            </Grid>
          )}

          {value === 1 && (
            <Grid container pt={6} spacing={3}>
              {airdropList &&
                airdropList?.response === true &&
                airdropList?.data?.data
                  ?.filter(
                    (val: any) =>
                      moment(new Date()).isBetween(
                        new Date(val?.start_date),
                        new Date(
                          moment(new Date(val?.start_date))
                            .add(val?.no_of_days, "days")
                            .format("DD MMM YYYY")
                        )
                      ) === true
                  )
                  .map((item: any, index: number) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      xl={4}
                      key={index}
                    >
                      <AirdropCard data={item && item} index={index} />
                    </Grid>
                  ))}
            </Grid>
          )}

          {value === 2 && (
            <Grid container pt={6} spacing={3}>
              {airdropList &&
                airdropList?.response === true &&
                airdropList?.data?.data
                  ?.filter(
                    (val: any) =>
                      moment(new Date(val?.start_date)).isAfter(new Date()) ===
                      true
                  )
                  .map((item: any, index: number) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      xl={4}
                      key={index}
                    >
                      <AirdropCard data={item && item} index={index} />
                    </Grid>
                  ))}
            </Grid>
          )}

          {value === 3 && (
            <Grid container pt={6} spacing={3}>
              {airdropList &&
                airdropList?.response === true &&
                airdropList?.data?.data
                  ?.filter(
                    (val: any) =>
                      moment(new Date()).isAfter(
                        new Date(
                          moment(new Date(val?.start_date))
                            .add(val?.no_of_days, "days")
                            .format("DD MMM YYYY")
                        )
                      ) === true
                  )
                  .map((item: any, index: number) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={4}
                      xl={4}
                      key={index}
                    >
                      <AirdropCard data={item && item} index={index} />
                    </Grid>
                  ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AirdropPage;
