import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ScanCreditCard = () => {
  return (
    <Grid item xs={9}>
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(98deg,#38363F 10%, #151320)",
          borderRadius: 7,
        }}
        py={3}
        px={3}
      >
        <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ marginBottom: 0, borderRadius: 2, width: 28, height: 28 }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#FFFFF5", fontWeight: "bold", textAlign: "center" }}
          >
            Scan Credit Cards
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: "500", textAlign: "center" }}
          >
            Scan your credit card in 4 minutes
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );
};

export default ScanCreditCard;
