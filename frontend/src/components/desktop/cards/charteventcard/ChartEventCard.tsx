import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const ChartEventCard = () => {
  return (
    <Box sx={{ backgroundColor: "#051246", borderRadius: 4 }} p={2.5}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
            sx={{ borderRadius: 0, width: 60, height: 60 }}
          />
          <Stack direction="column" spacing={0.5} alignItems="flex-start">
            <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 500 }}>
              Bitsmart Listing
            </Typography>
            <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 500 }}>
              24 July 2022
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={0} alignItems="center">
          <Typography
            variant="caption"
            sx={{ color: "#B5B1B6", fontWeight: 500 }}
          >
            Event Starts in
          </Typography>
          <Typography variant="h6" sx={{ color: "#E1C44E", fontWeight: 500 }}>
            7D : 22H : 36M : 34S
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="column" spacing={0} alignItems="flex-end">
        <Typography variant="body2" sx={{ color: "#97979B", fontWeight: 500 }}>
          View Events {">>"}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ChartEventCard;
