import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AdsDashboardPieChart from "../../charts/adsdashboardpiechart/AdsDashboardPieChart";
import AdsCreateButton from "../../form/button/adscreatebutton/AdsCreateButton";

const ActiveAdsCard = () => {
  return (
    <Box sx={{ backgroundColor: "#FFFFF5", padding: 3, borderRadius: 3 }}>
      <Stack direction="column" spacing={2.5}>
        <AdsDashboardPieChart />
        <Divider sx={{ borderBottomWidth: 2.3 }} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1}>
            <Typography variant="h6" sx={{ color: "#444444de" }}>
              Total Ads :
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              68
            </Typography>
          </Stack>
          <AdsCreateButton title="Create New Ad" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ActiveAdsCard;
