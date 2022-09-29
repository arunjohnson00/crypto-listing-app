import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import CountDown from "count-time-down";
import Participate from "../../button/participate/Participate";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import { CountDownTimer } from "./countdown/CountDownTimer";
const UpcomingCard = () => {
  //console.log(timer);
  return (
    <Box
      sx={{
        borderRadius: 4,
        backgroundColor: "#010822",
        border: "1px solid #0a1f49",
      }}
      px={2}
      py={2}
    >
      <Stack
        direction={{ xs: "row" }}
        sx={{ alignItems: "center", justifyContent: "space-around" }}
        spacing={1.5}
      >
        <EventAvailableOutlinedIcon sx={{ fontSize: 40, color: "#00B156" }} />
        <Stack direction={{ xs: "column" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#00B156", fontWeight: "bold" }}
          >
            Upcoming Event
          </Typography>
          <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 1000 }}>
            Shark Shake
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#6a9ed4", fontWeight: 500, fontSize: ".9rem" }}
          >
            {CountDownTimer(new Date("12/12/2022"))}
          </Typography>
        </Stack>
        <Participate />
      </Stack>
    </Box>
  );
};

export default UpcomingCard;
