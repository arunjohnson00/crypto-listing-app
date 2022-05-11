import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import MenuCards from "../../cards/menucards/MenuCards";

const BannerCardsHome = () => {
  return (
    <Grid item xs={12} px={10} py={4}>
      <Grid item xs={12}>
        <Stack direction="row">
          <Grid item xs={6}>
            <Stack direction="column" spacing={3}>
              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "flex-end" }}
              >
                <MenuCards width={9} />
              </Stack>
              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "flex-start" }}
              >
                <MenuCards width={9} />
              </Stack>
              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "flex-end" }}
              >
                <MenuCards width={9} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="column" spacing={3} px={5} py={3}>
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
                We understand what you needs
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "500", color: "#93949C" }}
              >
                Bitcoin attempted a recovery wave above $32,000 against the US
                Dollar. BTC is struggling and remains at a risk of more losses
                below $30,000.
              </Typography>
            </Stack>
          </Grid>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          py={5}
        >
          <MenuCards width={3.8} marginBottom={3} />
          <MenuCards width={3.8} marginBottom={3} />
          <MenuCards width={3.8} marginBottom={3} />
          <MenuCards width={3.8} marginBottom={3} />
          <MenuCards width={3.8} marginBottom={3} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BannerCardsHome;
