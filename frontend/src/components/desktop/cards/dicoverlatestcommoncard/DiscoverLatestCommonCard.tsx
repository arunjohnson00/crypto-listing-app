import { Avatar, Box, Stack, Typography, Divider } from "@mui/material";
import React from "react";

const DiscoverLatestCommonCard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#081243",
        borderRadius: 15,
        padding: 3,
        margin: 1,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "column" }}
        spacing={2}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 35, height: 35 }}
        />
        <Stack
          direction={{ xs: "column", sm: "column", md: "column" }}
          spacing={0.8}
        >
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 400 }}
          >
            New Crypotocoin
            <br /> general
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 600, fontSize: 11 }}
          >
            Tokens Unlock
          </Typography>
        </Stack>
        <Stack
          direction={{ xs: "row", sm: "row", md: "row" }}
          alignItems="center"
          spacing={2}
          pt={4}
        >
          <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 400 }}>
            31
          </Typography>
          <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{ borderRightColor: "#FFFFF5", borderRightWidth: 2 }}
          />
          <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 500 }}>
            May
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscoverLatestCommonCard;
