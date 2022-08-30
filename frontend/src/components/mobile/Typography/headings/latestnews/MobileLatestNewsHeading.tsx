import { Typography, Box } from "@mui/material";
import React from "react";

const MobileLatestNewsHeading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#2415A2",
        padding: "10px",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: "1rem" }}>
        News
      </Typography>
    </Box>
  );
};

export default MobileLatestNewsHeading;
