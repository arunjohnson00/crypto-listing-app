import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import AppBarSearch from "../../../components/desktop/appbarsearch/AppBarSearch";
import ConnectWalletBtn from "../../../components/desktop/button/connectwalletbtn/ConnectWalletBtn";
import AddAsset from "../../../components/desktop/button/addasset/AddAsset";
import LoginHeaderBtn from "../../../components/desktop/button/loginheader/LoginHeaderBtn";
import { Stack, Box, Grid } from "@mui/material";
import AppBarNavBtn from "../../../components/desktop/button/navbutton/AppBarNavBtn";

const AppHeader = ({ windowInnerWidth }: any) => {
  return (
    <Grid xs={12}>
      <Box sx={{ flexGrow: 1, backgroundColor: "transparent" }} mt={4}>
        <AppBar
          position="static"
          sx={{
            dispaly: "flex",
            backgroundColor: "transparent",
            paddingTop: "22px",
            paddingBottom: "0px",
            boxShadow: 0,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "40px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src="https://coinxhigh.com/public/assets/images/logo.png"
                alt="coinxhigh"
                width="200px"
              />
            </Link>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={1}
            >
              <AppBarSearch />
              <ConnectWalletBtn />
              <AddAsset />
              <LoginHeaderBtn />
            </Stack>
          </Stack>
          {windowInnerWidth >= 900 && (
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <AppBarNavBtn title="Coins" iconStatus={true} path="/coin" />
              <AppBarNavBtn title="NFT" iconStatus={true} path="/nft" />
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
          )}
        </AppBar>
      </Box>
    </Grid>
  );
};

export default AppHeader;
