import { Box, Stack, useMediaQuery } from "@mui/material";

import onlineEventImage from "../../../../assets/userdashboard/online-event.png";
import offlineEventImage from "../../../../assets/userdashboard/offline-event.png";
import UserAdminAddEventCard from "../../../../components/useradmin/addeventcard/UserAdminAddEventCard";
import { Helmet } from "react-helmet-async";

const UserAdminAddEventsPage = ({ windowInnerWidth }: any) => {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box height="100vh">
      {" "}
      <Helmet>
        <title>Add Events | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Discover | CoinXhigh.com" />
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
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "center" },
          alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
        }}
        pt={matches === true ? 7 : 2}
        width="100%"
        height={{ xs: "100vh", sm: "100vh", md: "auto" }}
      >
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          spacing={{ xs: 1, sm: 1, md: 3 }}
          justifyContent={{ xs: "center", sm: "center", md: "center" }}
          alignItems={{ xs: "flex-start", sm: "flex-start", md: "center" }}
          pt={{ xs: 2, sm: 2, md: 15 }}
          pb={15}
        >
          <UserAdminAddEventCard
            title="Online Event"
            image={onlineEventImage}
            link="/user-dashboard/events/online-events/add"
          />
          <UserAdminAddEventCard
            title="Onsite Event"
            image={offlineEventImage}
            link="/user-dashboard/events/onsite-events/add"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default UserAdminAddEventsPage;
