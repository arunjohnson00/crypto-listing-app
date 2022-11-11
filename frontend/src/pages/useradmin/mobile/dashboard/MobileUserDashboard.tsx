import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import MobileMultiSlider from "../../../../components/useradmin/mobilemultislider/MobileMultiSlider";
import MobileOverViewCard from "../../../../components/useradmin/mobileoverviewcard/MobileOverViewCard";
import MobileAddAssetCard from "../../../../components/useradmin/mobileaddassetcard/MobileAddAssetCard";
import MobileBottomMenuCard from "../../../../components/useradmin/mobilebottommenucard/MobileBottomMenuCard";

import coinIcon from "../../../../assets/userdashboard/mobile/coin.svg";
import nftIcon from "../../../../assets/userdashboard/mobile/nft.svg";
import airdropsIcon from "../../../../assets/userdashboard/mobile/airdrops.svg";
import eventIcon from "../../../../assets/userdashboard/mobile/events.svg";

import mycoinIcon from "../../../../assets/userdashboard/mobile/my-coins.svg";
import mynftIcon from "../../../../assets/userdashboard/mobile/my-nfts.svg";
import myairdropsIcon from "../../../../assets/userdashboard/mobile/my-airdrops.svg";
import myeventIcon from "../../../../assets/userdashboard/mobile/my-events.svg";
import myratingsIcon from "../../../../assets/userdashboard/mobile/my-ratings.svg";
import mywatchlistsIcon from "../../../../assets/userdashboard/mobile/my-watchlists.svg";

import settingsIcon from "../../../../assets/userdashboard/mobile/settings.png";
import myoffersIcon from "../../../../assets/userdashboard/mobile/my-offers.svg";

import fgIndexIcon from "../../../../assets/userdashboard/mobile/fg-index.svg";
import adsIcon from "../../../../assets/userdashboard/mobile/ads.png";
import logoutIcon from "../../../../assets/userdashboard/mobile/logout.png";
import menuIcon from "../../../../assets/userdashboard/mobile/menu.png";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MobileUserDashboard = () => {
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });
  const authUser = JSON.parse(localStorage.getItem("authUser") as any);

  return (
    <Box height="auto">
      <Grid container rowSpacing={1} mb={5}>
        <Helmet>
          <title> Dashboard | CoinXhigh.com</title>
          <meta
            name="description"
            content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:site_name"
            content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
          />
          <meta property="og:title" content="Dashboard | CoinXhigh.com" />
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
        <Grid item xs={12}>
          {/* <Box width="100%" sx={{ backgroundColor: "#01061A" }}>
          <MobileMultiSlider />
        </Box> */}
        </Grid>
        <Grid item xs={12} mt={1}>
          <Box
            sx={{
              border: "1px solid #151717",
              backgroundColor: "#000000",
              padding: 0.5,
              borderRadius: 4,
              height: "auto",
            }}
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              px={2}
              py={2}
              spacing={2}
            >
              <Typography sx={{ color: "#FFFFFF", fontSize: ".75rem" }}>
                Add assets
              </Typography>
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                spacing={1}
                flexWrap="wrap"
                width="100%"
              >
                <MobileAddAssetCard
                  icon={coinIcon}
                  title="Coin"
                  link="/user-dashboard/coin/add"
                  color="#FFFFFF"
                  background="#000000"
                  border="#0090ff"
                  state="Launched"
                />
                <MobileAddAssetCard
                  icon={coinIcon}
                  title="Presale coin"
                  link="/user-dashboard/coin/add"
                  color="#FFFFFF"
                  background="#000000"
                  border="#00d8ff"
                  state="Presale"
                />

                <MobileAddAssetCard
                  icon={nftIcon}
                  title="NFT"
                  link="/user-dashboard/nft/add"
                  color="#FFFFFF"
                  background="#000000"
                  border="#00ffde"
                />

                <MobileAddAssetCard
                  icon={eventIcon}
                  title="Events"
                  link="/user-dashboard/add-events"
                  color="#FFFFFF"
                  background="#000000"
                  border="#00ff9c"
                />
                <MobileAddAssetCard
                  icon={airdropsIcon}
                  title="Airdrop"
                  link="/user-dashboard/airdrops/add"
                  color="#FFFFFF"
                  background="#000000"
                  border="#00ff4e"
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              border: "1px solid #151717",
              backgroundColor: "#000000",
              padding: 0.5,
              borderRadius: 4,
              height: "auto",
            }}
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              px={2}
              py={2}
              spacing={1}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                width="100%"
                pb={1}
              >
                <Typography sx={{ color: "#FFFFFF", fontSize: ".75rem" }}>
                  Overview
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <MobileOverViewCard
                    icon={mycoinIcon}
                    title="My Coin"
                    link="/user-dashboard/coin"
                    color="#FFFFFF"
                    background="#000000"
                    border="transparent"
                    state="Launched"
                  />
                </Stack>
                <Divider
                  flexItem
                  sx={{
                    borderRightColor: "#464A51",
                    position: "relative",
                    top: 58,
                    height: 100,
                  }}
                  orientation="vertical"
                  variant="fullWidth"
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <MobileOverViewCard
                    icon={mynftIcon}
                    title="My NFT"
                    link="/user-dashboard/nft"
                    color="#FFFFFF"
                    background="#000000"
                    border="transparent"
                    state="Presale"
                  />
                </Stack>
                <Divider
                  flexItem
                  sx={{
                    borderRightColor: "#464A51",
                    position: "relative",
                    top: 58,
                    height: 100,
                  }}
                  orientation="vertical"
                  variant="fullWidth"
                />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <MobileOverViewCard
                    icon={myeventIcon}
                    title="My Events"
                    link="/user-dashboard/events"
                    color="#FFFFFF"
                    background="#000000"
                    border="transparent"
                  />
                </Stack>
              </Stack>
              <Divider
                flexItem
                sx={{ borderBottomColor: "#464A51" }}
                orientation="horizontal"
                variant="middle"
              />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <MobileOverViewCard
                    icon={myairdropsIcon}
                    title="My Airdrops"
                    link="/user-dashboard/airdrops"
                    color="#FFFFFF"
                    background="#000000"
                    border="transparent"
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <MobileOverViewCard
                    icon={myratingsIcon}
                    title="My Ratings"
                    link="/user-dashboard/review"
                    color="#FFFFFF"
                    background="#000000"
                    border="transparent"
                  />
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{ flexGrow: 1 }}
                >
                  <MobileOverViewCard
                    icon={mywatchlistsIcon}
                    title="My Watchlists"
                    link="/user-dashboard/watchlist"
                    color="#FFFFFF"
                    background="#000000"
                    border="transparent"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              border: "1px solid #151717",
              backgroundColor: "#000000",
              padding: 1,
              borderRadius: 10,
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                gridColumnGap: 10,
                gridRowGap: 10,
              }}
            >
              <MobileBottomMenuCard
                icon={myoffersIcon}
                title="Offer Zone"
                //link="/user-dashboard/offer-zone"
                link="/user-dashboard/coming-soon"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
                state="Launched"
              />
              <MobileBottomMenuCard
                icon={adsIcon}
                title="My Ads"
                // link="/user-dashboard/ads"
                link="/user-dashboard/coming-soon"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
                state="Presale"
              />

              <MobileBottomMenuCard
                icon={fgIndexIcon}
                title="F&G Index"
                link="/fear-greed-index"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
              />
              <MobileBottomMenuCard
                icon={logoutIcon}
                title="Logout"
                variant="logout"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
              />
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#FFFFF5", fontSize: "1rem" }}
          >
            <span>
              {"Good " +
                ((new Date().getHours() < 12 && "Morning") ||
                  (new Date().getHours() < 18 && "Afternoon") ||
                  "Evening")}
              ,
            </span>{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#FFFFF5", fontSize: "1.2rem" }}
          >
            {" "}
            {userData && userData !== undefined
              ? userData?.user?.name
              : authUser && authUser?.name}
          </Typography>
        </Stack>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} py={3}>
          <UserAdminTabs />
        </Grid>
      </Grid> */}
      </Grid>
    </Box>
  );
};

export default MobileUserDashboard;
