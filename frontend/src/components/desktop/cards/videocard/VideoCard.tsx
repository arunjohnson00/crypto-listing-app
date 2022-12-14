import React from "react";
import { Grid, CardMedia, Typography, Box } from "@mui/material";
import ReactPlayer from "react-player";

const VideoCard = ({ url, title, sub_title }: any) => {
  return (
    <Box mr={2}>
      {/* <CardMedia
        component="img"
        height="130"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <Box sx={{ borderRadius: 3, height: 130, overflow: "hidden" }}>
        <ReactPlayer url={url && url} width="100%" height={130} />
      </Box>
      <a
        href={url && url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {" "}
        <Typography
          variant="body2"
          sx={{
            color: "#FFFFFF",
            paddingTop: 2,
            paddingBottom: 0.2,
            // fontSize: ".8rem",
            fontWeight: 500,
          }}
        >
          {title && title.length >= 59
            ? title && title.slice(0, 59) + "..."
            : title && title}
          .
        </Typography>
      </a>
      {/* <Typography sx={{ color: "#FFFFFF", fontSize: ".8rem", fontWeight: 400 }}>
        {sub_title && sub_title.length >= 35
          ? sub_title && sub_title.slice(0, 35) + "..."
          : sub_title && sub_title}
      </Typography> */}
    </Box>
  );
};

export default VideoCard;
