import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import { Link, useNavigate } from "react-router-dom";
import AppBarSearch from "../../../components/desktop/appbarsearch/AppBarSearch";
import ConnectWalletBtn from "../../../components/desktop/button/connectwalletbtn/ConnectWalletBtn";
import AddAsset from "../../../components/desktop/button/addasset/AddAsset";
import LoginHeaderBtn from "../../../components/desktop/button/loginheader/LoginHeaderBtn";
import { Stack, Box, Grid, CardMedia } from "@mui/material";
import AppBarNavBtn from "../../../components/desktop/button/navbutton/AppBarNavBtn";
import { logoutHandler } from "../../../utils/logoutHandler";
import { coinMenu, nftMenu, airdropsMenu, eventsMenu } from "./helper";
import logoWhite from "../../../assets/logo/logo.png";
import { trendingCoinListRequest } from "../../../store/action";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";

const AppHeader = ({ windowInnerWidth }: any) => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(trendingCoinListRequest("noData", successHandler, errorHandler));
  }, []);

  return (
    <Grid xs={12}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Box py={2} width="70%">
          <CardMedia
            component="img"
            height="90"
            image="https://iili.io/UtY5Kv.jpg"
            alt="green iguana"
            sx={{ objectFit: "unset" }}
          />
        </Box>
      </Stack>

      <Box sx={{ flexGrow: 1, backgroundColor: "transparent" }} mt={0}>
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
              <img src={logoWhite} alt="coinxhigh" width="200px" />
            </Link>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={1}
            >
              <AppBarSearch />
              {/* <ConnectWalletBtn /> */}
              <Link
                to="/add-asset"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <AddAsset />
              </Link>{" "}
              {!auth ? (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {" "}
                  <LoginHeaderBtn
                    title="Login"
                    icon={<ExitToAppIcon sx={{ color: "#23B184" }} />}
                  />{" "}
                </Link>
              ) : (
                // <Link
                //   to="/user-dashboard"
                //   style={{ textDecoration: "none", color: "inherit" }}
                // >
                <LoginHeaderBtn
                  title="My account"
                  //handler={logoutHandler}
                  icon={<PersonIcon sx={{ color: "#23B184" }} />}
                />
                // </Link>
              )}
            </Stack>
          </Stack>
          {windowInnerWidth >= 900 && (
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <AppBarNavBtn
                title="Coins"
                iconStatus={true}
                path="/coins"
                menu={coinMenu}
              />
              <AppBarNavBtn
                title="NFT"
                // iconStatus={true}
                path="/nft"
                // menu={nftMenu}
              />
              <AppBarNavBtn
                title="Airdrops"
                iconStatus={false}
                path="/airdrops"
                // menu={airdropsMenu}
              />
              {/* <AppBarNavBtn
                title="Events"
                path="/crypto-events"
                iconStatus={true}
                menu={eventsMenu}
              /> */}
              {/* <AppBarNavBtn title="Exchanges" iconStatus={true} /> */}
              {/* <AppBarNavBtn title="Promote" iconStatus={true} /> */}
              {/* <AppBarNavBtn
                title="Discover"
                iconStatus={true}
                path="/discover"
              /> */}
              {/* <AppBarNavBtn title="Chart" iconStatus={true} path="/chart" /> */}
              {/* <AppBarNavBtn
                title="Leader Board"
                iconStatus={true}
                path="/leader-board"
              /> */}
              <AppBarNavBtn title="News" iconStatus={true} path="/news" />
              <AppBarNavBtn
                title="F&G Index"
                iconStatus={false}
                path="/fear-greed-index"
              />
            </Stack>
          )}
        </AppBar>
      </Box>
    </Grid>
  );
};

export default AppHeader;
