import * as React from "react";
import AppBar from "@mui/material/AppBar";

import AppBarSearch from "../../components/form/appbarsearch/AppBarSearch";
import ConnectWalletBtn from "../../components/button/connectwalletbtn/ConnectWalletBtn";
import AddAsset from "../../components/button/addasset/AddAsset";
import LoginHeaderBtn from "../../components/button/loginheader/LoginHeaderBtn";
import { Stack, Box, Grid } from "@mui/material";
import AppBarNavBtn from "../../components/button/navbutton/AppBarNavBtn";

const AppHeader = () => {
  return (
    <Grid spacing={3}>
      <Box sx={{ width: "100%", backgroundColor: "#01061A" }}>
        <AppBar
          position="static"
          sx={{
            dispaly: "flex",
            backgroundColor: "#01061A",
            paddingTop: "22px",
            paddingBottom: "0px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom: "40px",
            }}
          >
            <Grid xs={12}>
              <img
                src="https://coinxhigh.com/public/assets/images/logo.png"
                alt="coinxhigh"
                width="200px"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AppBarSearch />
              <ConnectWalletBtn />
              <AddAsset />
              <LoginHeaderBtn />
            </Grid>
          </Stack>
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <AppBarNavBtn title="Coins" iconStatus={true} />
            <AppBarNavBtn title="NFT" iconStatus={true} />
            <AppBarNavBtn title="Airdrops" iconStatus={true} />
            <AppBarNavBtn title="AMA" iconStatus={true} />
            <AppBarNavBtn title="KYC" iconStatus={true} />
            <AppBarNavBtn title="Audit" iconStatus={true} />
            <AppBarNavBtn title="Presales" />
            <AppBarNavBtn title="News" />
            <AppBarNavBtn title="Upcoming Events" />
            <AppBarNavBtn title="Leader Board" />
            <AppBarNavBtn title="Chart" />
            <AppBarNavBtn title="Promote" iconStatus={true} />
          </Stack>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default AppHeader;
