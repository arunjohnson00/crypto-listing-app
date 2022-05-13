import { Grid, CardMedia, Typography } from "@mui/material";
import React from "react";

const MobileVideoCard = () => {
  return (
    <Grid xs={12} mx={2}>
      <CardMedia
        component="img"
        width="100%"
        //height="180"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />

      <Typography
        variant="subtitle2"
        sx={{ color: "white", paddingTop: 2, paddingBottom: 0 }}
      >
        What is trust wallet? Tutorial
      </Typography>
      <Typography variant="body2" sx={{ color: "#828282" }}>
        Crypto Deep Drive
      </Typography>
    </Grid>
  );
};

export default MobileVideoCard;
