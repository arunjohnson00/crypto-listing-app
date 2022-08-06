import React from "react";
import { Grid, CardMedia, Typography, Box } from "@mui/material";
import ReactPlayer from "react-player";

const MobileVideoCard = ({ url }: any) => {
  return (
    <Box m={1}>
      {/* <CardMedia
        component="img"
        height="130"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <ReactPlayer url={url && url} width="100%" height={130} />
      <Typography
        variant="body2"
        sx={{ color: "#828282", paddingTop: 2, paddingBottom: 0 }}
      >
        Crypto Deep Drive
      </Typography>
      <Typography variant="subtitle2" sx={{ color: "white" }}>
        What is trust wallet? Tutorial
      </Typography>
    </Box>
  );
};

export default MobileVideoCard;
