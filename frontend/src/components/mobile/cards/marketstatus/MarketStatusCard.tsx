import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MarketStatusCard = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(98deg,#38363F 10%, #151320)",
          borderRadius: 7,
        }}
        py={3}
        px={3}
      >
        <Stack direction="column" spacing={1} sx={{ alignItems: "flex-start" }}>
          <Typography
            variant="body2"
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
          >
            Market Status
          </Typography>
          <Stack direction="column" spacing={0}>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: "400" }}
            >
              In the past 24 hours
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#FFFFF5", fontWeight: "bold", lineHeight: 1 }}
            >
              Market is down <span style={{ color: "red" }}>5.85%</span>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MarketStatusCard;
