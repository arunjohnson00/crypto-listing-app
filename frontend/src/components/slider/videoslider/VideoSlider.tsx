import { Grid, CardMedia, Typography } from "@mui/material";
import React from "react";

const VideoSlider = () => {
  return (
    <Grid item xs={2.5}>
      <CardMedia
        component="img"
        height="180"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <Typography
        variant="body2"
        sx={{ color: "#828282", paddingTop: 2, paddingBottom: 0 }}
      >
        Crypto Deep Drive
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "white" }}>
        What is trust wallet? Tutorial
      </Typography>
    </Grid>
  );
};

export default VideoSlider;
