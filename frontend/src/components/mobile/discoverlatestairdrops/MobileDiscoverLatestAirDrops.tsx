import { Grid, Box, Stack, Divider, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

import MobileDiscoverLatestCommonCard from "../cards/dicoverlatestcommoncard/MobileDiscoverLatestCommonCard";

const MobileDiscoverLatestAirDrops = () => {
  return (
    <Grid xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          borderRadius: 4,
          backgroundColor: "#020727",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={5}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={2}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              alignItems="center"
              spacing={1}
            >
              <CampaignIcon sx={{ color: "#2DCEAF", fontSize: 20 }} />
              <Typography
                variant="h6"
                sx={{ color: "#2DCEAF", fontWeight: 500 }}
              >
                AirDrops
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={2}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                alignItems="center"
                pt={0}
                flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
              >
                <MobileDiscoverLatestCommonCard />
                <MobileDiscoverLatestCommonCard />
                <MobileDiscoverLatestCommonCard />
                <MobileDiscoverLatestCommonCard />
                <MobileDiscoverLatestCommonCard />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MobileDiscoverLatestAirDrops;
