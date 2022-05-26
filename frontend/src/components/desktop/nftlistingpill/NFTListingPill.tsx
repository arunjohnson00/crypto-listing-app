import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const NFTListingPill = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#282860",
        flexGrow: 1,
        borderRadius: 3,
        padding: 2.2,
        margin: 1.5,
      }}
    >
      <Stack direction="row" spacing={3}>
        <Avatar
          variant="square"
          alt="Remy Sharp"
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          sx={{ width: 70, height: 70 }}
        />

        <Stack direction="column" spacing={1}>
          <Typography
            variant="h6"
            sx={{ color: "#F4F4F5", fontWeight: 400, fontSize: 18 }}
          >
            Bored Yatch Club
          </Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "#F4F4F5", fontWeight: 400, fontSize: 18 }}
            >
              Price:
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#9E9FDA", fontWeight: 500 }}
            >
              0.07ETH
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NFTListingPill;
