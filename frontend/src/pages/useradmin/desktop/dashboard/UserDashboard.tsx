import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import MultiSlider from "../../../../components/useradmin/multislider/MultiSlider";
import UserAdminTabs from "../../../../components/useradmin/useradmintabs/UserAdminTabs";

const UserDashboard = () => {
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });
  const authUser = JSON.parse(localStorage.getItem("authUser") as any);
  return (
    <Grid container rowSpacing={2}>
      <Helmet>
        <title>Dashboard | CoinXhigh.com</title>
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
      {/* <Box width="100%" my={6}>
        <MultiSlider />
      </Box> */}

      <Grid item xs={12} mt={8}>
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
      <Grid container spacing={2} mt={0}>
        <Grid item xs={12} py={3}>
          <UserAdminTabs />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDashboard;
