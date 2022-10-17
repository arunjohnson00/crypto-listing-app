import { CardMedia } from "@mui/material";
import voteAds from "../../../assets/ads/voteads.jpeg";
import React from "react";

const VotePopupAds = () => {
  return (
    <a href="#" target="_blank" rel="noreferrer">
      <CardMedia
        component="img"
        height="auto"
        image={voteAds && voteAds}
        alt="green iguana"
        sx={{ objectFit: "unset", borderRadius: 0 }}
      />
    </a>
  );
};

export default VotePopupAds;
