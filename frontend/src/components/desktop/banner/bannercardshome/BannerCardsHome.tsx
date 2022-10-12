import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import MenuCards from "../../cards/menucards/MenuCards";

const BannerCardsHome = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWindowInnerWidth(window.innerWidth);
  });

  const menuCards = useSelector((data: any) => {
    return data?.homeReducer?.menu_cards?.data?.data;
  });

  return (
    <Grid container xs={12} px={3} py={4}>
      <Grid container xs={12}>
        <Stack
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack direction="column" spacing={3}>
              <Stack
                direction="column"
                spacing={0}
                sx={{
                  alignItems: `${
                    windowInnerWidth && windowInnerWidth >= 600 && "flex-end"
                  }`,
                }}
              >
                <MenuCards
                  width={`${
                    windowInnerWidth && windowInnerWidth <= 600 ? "Auto" : 11
                  } `}
                  title={menuCards && menuCards[0]?.title}
                  icon={menuCards && menuCards[0]?.icon}
                  sub_title={menuCards && menuCards[0]?.sub_title}
                  url={menuCards && menuCards[0]?.url}
                />
              </Stack>
              <Stack
                direction="column"
                spacing={0}
                sx={{
                  alignItems: `${
                    windowInnerWidth && windowInnerWidth >= 600 && "flex-start"
                  }`,
                }}
              >
                <MenuCards
                  width={`${
                    windowInnerWidth && windowInnerWidth <= 600 ? "Auto" : 11
                  } `}
                  title={menuCards && menuCards[1]?.title}
                  icon={menuCards && menuCards[1]?.icon}
                  sub_title={menuCards && menuCards[1]?.sub_title}
                  url={menuCards && menuCards[1]?.url}
                />
              </Stack>
              <Stack
                direction="column"
                spacing={0}
                sx={{
                  alignItems: `${
                    windowInnerWidth && windowInnerWidth >= 600 && "flex-end"
                  }`,
                }}
              >
                <MenuCards
                  width={`${
                    windowInnerWidth && windowInnerWidth <= 600 ? "Auto" : 11
                  } `}
                  title={menuCards && menuCards[2]?.title}
                  icon={menuCards && menuCards[2]?.icon}
                  sub_title={menuCards && menuCards[2]?.sub_title}
                  url={menuCards && menuCards[2]?.url}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Stack direction="column" spacing={3} px={3} py={3}>
              <Typography
                variant="body2"
                sx={{ fontWeight: "700", color: "#59B9BC", letterSpacing: 3 }}
              >
                PRODUCT
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "600", color: "#FFFFF5" }}
              >
                Explore the crypto world.
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "500", color: "#93949C" }}
              >
                Discover Latest Crypto Events, NFT's, Airdrops etc.
                <br />
                Connect your brand and grow your audience with our community of
                crypto and blockchain enthusiasts around the world.
              </Typography>
            </Stack>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={1}
          sx={{
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          py={5}
        >
          <MenuCards
            width="auto"
            marginBottom={3}
            title={menuCards && menuCards[3]?.title}
            icon={menuCards && menuCards[3]?.icon}
            sub_title={menuCards && menuCards[3]?.sub_title}
            url={menuCards && menuCards[3]?.url}
          />
          <MenuCards
            width="auto"
            marginBottom={3}
            title={menuCards && menuCards[4]?.title}
            icon={menuCards && menuCards[4]?.icon}
            sub_title={menuCards && menuCards[4]?.sub_title}
            url={menuCards && menuCards[4]?.url}
          />
          <MenuCards
            width="auto"
            marginBottom={3}
            title={menuCards && menuCards[5]?.title}
            icon={menuCards && menuCards[5]?.icon}
            sub_title={menuCards && menuCards[5]?.sub_title}
            url={menuCards && menuCards[5]?.url}
          />
          <MenuCards
            width="auto"
            marginBottom={3}
            title={menuCards && menuCards[6]?.title}
            icon={menuCards && menuCards[6]?.icon}
            sub_title={menuCards && menuCards[6]?.sub_title}
            url={menuCards && menuCards[6]?.url}
          />
          <MenuCards
            width="auto"
            marginBottom={3}
            title={menuCards && menuCards[7]?.title}
            icon={menuCards && menuCards[7]?.icon}
            sub_title={menuCards && menuCards[7]?.sub_title}
            url={menuCards && menuCards[7]?.url}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BannerCardsHome;
