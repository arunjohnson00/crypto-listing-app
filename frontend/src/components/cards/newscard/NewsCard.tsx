import { Grid, Box, Typography, Stack } from "@mui/material";
import React from "react";

const NewsCard = () => {
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#020822",
          borderRadius: "6px",
          border: "1px solid #243464",
        }}
        px={2}
        py={2}
      >
        <Stack direction="column" spacing={2}>
          <Typography
            variant="body2"
            sx={{ color: "#02FC8E", fontWeight: "bold" }}
          >
            TA: Bitcoin Struggles Below $32K, Why Downtrend Could Resume
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: "300" }}
          >
            TA: Bitcoin Struggles Below $32K, Why Downtrend Could Resume
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#40444F", fontWeight: "550" }}
            >
              16 Minutes ago
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#40444F", fontWeight: "550" }}
            >
              By Coin Telegraph
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default NewsCard;
