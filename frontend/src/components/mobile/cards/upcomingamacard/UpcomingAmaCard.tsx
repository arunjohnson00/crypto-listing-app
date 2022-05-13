import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CountDown from "count-time-down";
import Participate from "../../button/participate/Participate";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

const UpcomingAmaCard = () => {
  //console.log(timer);
  return (
    <Box
      sx={{
        borderRadius: 8,
        backgroundColor: "#010822",
        border: "1px solid #0a1f49",
      }}
      px={2}
      py={2}
    >
      <Stack
        direction={{ xs: "row" }}
        sx={{ alignItems: "center" }}
        spacing={4}
      >
        <EventAvailableOutlinedIcon sx={{ fontSize: 40, color: "#00B156" }} />
        <Stack direction={{ xs: "column" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#00B156", fontWeight: "bold" }}
          >
            Upcoming AMA
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 1000 }}>
            Shark Shake Sea
          </Typography>
          <Typography variant="h5" sx={{ color: "#6a9ed4", fontWeight: 500 }}>
            {`12h : 31m : 22s`}
          </Typography>
        </Stack>
        <Participate />
      </Stack>
    </Box>
  );
};

export default UpcomingAmaCard;
