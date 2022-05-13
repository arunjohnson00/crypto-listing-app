import { Box, Grid, Stack, Avatar, Typography } from "@mui/material";
import React from "react";

const MenuCards = ({ width, marginBottom }: any) => {
  return (
    <Grid item xs={width && width}>
      <Box
        sx={{ backgroundColor: "#12122C", borderRadius: 2 }}
        px={2}
        py={2}
        mb={marginBottom && marginBottom}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ marginBottom: 0, borderRadius: 2 }}
          />
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

export default MenuCards;
