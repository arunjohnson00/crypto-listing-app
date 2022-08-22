import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const CryptoEventsSinglePageCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#01061A",
        borderRadius: 5,
        border: "1px solid #16245F",
        width: "100%",
      }}
    >
      <Stack direction="column" spacing={0.5} p={2}>
        <Stack direction="column" spacing={0} alignItems="flex-start">
          <Typography
            sx={{ fontSize: "1.7rem", color: "#FFFFFF", fontWeight: 600 }}
          >
            Etherium Mainet Merge
          </Typography>
          <Typography
            sx={{ fontSize: "1.9rem", color: "#01d39a", fontWeight: 500 }}
          >
            19 Sept 2022
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: ".85rem",
            color: "#757D9E",
            fontWeight: 600,
            textAlign: "left",
          }}
        >
          Added: 15 January 2022
        </Typography>
      </Stack>
    </Box>
  );
};

export default CryptoEventsSinglePageCard;
