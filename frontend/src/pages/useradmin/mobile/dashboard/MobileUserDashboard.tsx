import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import MobileMultiSlider from "../../../../components/useradmin/mobilemultislider/MobileMultiSlider";
import MobileOverViewCard from "../../../../components/useradmin/mobileoverviewcard/MobileOverViewCard";
import MobileAddAssetCard from "../../../../components/useradmin/mobileaddassetcard/MobileAddAssetCard";
import MobileBottomMenuCard from "../../../../components/useradmin/mobilebottommenucard/MobileBottomMenuCard";

import coinIcon from "../../../../assets/userdashboard/mobile/coin.png";
import nftIcon from "../../../../assets/userdashboard/mobile/nft.png";
import airdropsIcon from "../../../../assets/userdashboard/mobile/airdrops.png";
import eventIcon from "../../../../assets/userdashboard/mobile/events.png";

import mycoinIcon from "../../../../assets/userdashboard/mobile/my-coins.png";
import mynftIcon from "../../../../assets/userdashboard/mobile/my-nfts.png";
import myairdropsIcon from "../../../../assets/userdashboard/mobile/my-airdrops.png";
import myeventIcon from "../../../../assets/userdashboard/mobile/my-events.png";
import myratingsIcon from "../../../../assets/userdashboard/mobile/my-ratings.png";
import mywatchlistsIcon from "../../../../assets/userdashboard/mobile/my-watchlists.png";

import settingsIcon from "../../../../assets/userdashboard/mobile/settings.png";
import adsIcon from "../../../../assets/userdashboard/mobile/ads.png";
import logoutIcon from "../../../../assets/userdashboard/mobile/logout.png";
import menuIcon from "../../../../assets/userdashboard/mobile/menu.png";
import { useNavigate } from "react-router-dom";

const MobileUserDashboard = () => {
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });
  const authUser = JSON.parse(localStorage.getItem("authUser") as any);

  return (
    <Grid container rowSpacing={1} mb={5}>
      <Grid item xs={12}>
        <Box width="100%" sx={{ backgroundColor: "#01061A" }}>
          <MobileMultiSlider />
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
            spacing={2}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
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
                border="#1A76BF"
                state="Launched"
              />
              <MobileAddAssetCard
                icon={coinIcon}
                title="Presale coin"
                link="/user-dashboard/coin/add"
                color="#FFFFFF"
                background="#000000"
                border="#21B6D2"
                state="Presale"
              />

              <MobileAddAssetCard
                icon={nftIcon}
                title="NFT"
                link="/user-dashboard/nft/add"
                color="#FFFFFF"
                background="#000000"
                border="#07726C"
              />

              <MobileAddAssetCard
                icon={eventIcon}
                title="Events"
                link="/user-dashboard/events/add"
                color="#FFFFFF"
                background="#000000"
                border="#23EC9F"
              />
              <MobileAddAssetCard
                icon={airdropsIcon}
                title="Airdrop"
                link="/user-dashboard/airdrops/add"
                color="#FFFFFF"
                background="#000000"
                border="#10C24B"
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
            spacing={2}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: ".9rem" }}>
              Overview
            </Typography>
            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              width="100%"
            >
              <MobileOverViewCard
                icon={mycoinIcon}
                title="My Coin"
                link="/user-dashboard/coin/add"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
                state="Launched"
              />
              <MobileOverViewCard
                icon={mynftIcon}
                title="My NFT"
                link="/user-dashboard/coin/add"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
                state="Presale"
              />

              <MobileOverViewCard
                icon={myeventIcon}
                title="My Events"
                link="/user-dashboard/nft/add"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              width="100%"
            >
              <MobileOverViewCard
                icon={myairdropsIcon}
                title="My Airdrops"
                link="/user-dashboard/events/add"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
              />
              <MobileOverViewCard
                icon={myratingsIcon}
                title="My Ratings"
                link="/user-dashboard/airdrops/add"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
              />
              <MobileOverViewCard
                icon={mywatchlistsIcon}
                title="My Watchlists"
                link="/user-dashboard/airdrops/add"
                color="#FFFFFF"
                background="#000000"
                border="transparent"
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
              icon={settingsIcon}
              title="Offer Zone"
              link="/user-dashboard/offer-zone"
              color="#FFFFFF"
              background="#000000"
              border="transparent"
              state="Launched"
            />
            <MobileBottomMenuCard
              icon={adsIcon}
              title="My Ads"
              link="/user-dashboard/ads"
              color="#FFFFFF"
              background="#000000"
              border="transparent"
              state="Presale"
            />

            <MobileBottomMenuCard
              icon={menuIcon}
              title="Menu"
              link="#"
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
  );
};

export default MobileUserDashboard;
