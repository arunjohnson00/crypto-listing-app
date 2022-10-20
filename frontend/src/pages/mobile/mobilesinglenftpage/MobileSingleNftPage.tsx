import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Box,
  CardMedia,
  Typography,
  Divider,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import MobileTopAlertBox from "../../../components/mobile/alert/topalertbox/MobileTopAlertBox";

import MobileBreadCrumbs from "../../../components/mobile/breadcrumbs/MobileBreadCrumbs";
import SingleNFTHeader from "../../../components/mobile/signlenftheader/SingleNFTHeader";
import MobileCoinSlider from "../../../components/mobile/coinslider/MobileCoinSlider";
import MobileLatestNewsCardScrollTop from "../../../components/mobile/latestnews/MobileLatestNewsCardScrollTop";
import { nftSinglePageDetailsRequest } from "../../../store/action";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nftVoteRequest } from "../../../store/action/nftAction";

const MobileSingleNftPage = () => {
  const nftSinglePageDetails = useSelector((data: any) => {
    return data?.nftReducer?.nft_single_page_details?.data;
  });

  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  // const coinSocialGraph = useSelector((data: any) => {
  //   return data?.coinReducer?.coin_social_graph;
  // });
  const coinSocialGraph = [1, 44, 7, 3, 22, 100, 10];

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  useEffect(() => {
    const successHandler = (res: any) => {
      //setRequestStatus(res?.data?.status);
    };

    const errorHandler = (err: any) => {
      err?.error?.message?.response?.status === 500 && navigate("/nft");
    };

    dispatch(
      nftSinglePageDetailsRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Fragment>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {/* <Grid item xs={12} sx={{}}>
          <MobileLatestNewsCardScrollTop />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: 0 }}>
          <MobileCoinSlider />
        </Grid> */}

        {/* <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
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
          </Stack>
        </Grid> */}
        {/* <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
            }}
            py={2}
          >
            <MobileTopAlertBox />
          </Stack>
        </Grid> */}

        <Grid item xs={12} mt={{ xs: 0.5, sm: 0.5, md: 5 }}>
          <MobileBreadCrumbs
            home="Home"
            path="NFT"
            data={nftSinglePageDetails && nftSinglePageDetails?.data}
          />
        </Grid>
        {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            sx={{
              alignItems: "center",
            }}
            py={1}
          >
            <CardMedia
              component="img"
              height="80"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Grid>
       */}

        <Grid item xs={12}>
          {nftSinglePageDetails && nftSinglePageDetails?.response === true && (
            <SingleNFTHeader />
          )}
        </Grid>
        <Grid item xs={12} mb={7} pt={2}>
          {nftSinglePageDetails && nftSinglePageDetails?.response === true && (
            <Stack direction="column" spacing={0.4}>
              <Typography
                sx={{ color: "#00FFE0", fontSize: "1.1rem", fontWeight: 600 }}
              >
                About{" "}
                {nftSinglePageDetails && nftSinglePageDetails?.data?.title}
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: ".85rem", fontWeight: 400 }}
              >
                {nftSinglePageDetails &&
                  nftSinglePageDetails?.data?.description}
              </Typography>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleNftPage;
