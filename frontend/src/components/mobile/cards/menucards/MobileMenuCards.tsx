import { Box, Grid, Stack, Avatar, Typography } from "@mui/material";
import React from "react";

const MobileMenuCards = ({ width, marginBottom }: any) => {
  return (
    <Grid item xs={width && width} mx={2}>
      <Box
        sx={{ backgroundColor: "#12122C", borderRadius: 2 }}
        py={2}
        px={2}
        mb={marginBottom && marginBottom}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Stack
            direction="column"
            spacing={0}
            sx={{ alignItems: "flex-start" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#BDBAC5", fontWeight: "", textAlign: "center" }}
            >
              Best Trending Application
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#787786", fontWeight: "", textAlign: "center" }}
            >
              Trade and monitor accounts
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default MobileMenuCards;
