import React from "react";
import { Grid, CardMedia, Typography, Box } from "@mui/material";
import ReactPlayer from "react-player";

const MobileVideoCard = ({ url, title, sub_title }: any) => {
  return (
    <Box m={1}>
      {/* <CardMedia
      component="img"
      height="130"
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      alt="green iguana"
    /> */}
      <ReactPlayer url={url && url} width="100%" height={130} />
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
            color: "#828282",
            paddingTop: 2,
            paddingBottom: 0.2,
            // fontSize: ".8rem",
            fontWeight: 500,
          }}
        >
          {title && title.length >= 25
            ? title && title.slice(0, 25) + "..."
            : title && title}
        </Typography>
      </a>
      <Typography sx={{ color: "#FFFFFF", fontSize: ".8rem", fontWeight: 400 }}>
        {sub_title && sub_title.length >= 25
          ? sub_title && sub_title.slice(0, 25) + "..."
          : sub_title && sub_title}
      </Typography>
    </Box>
  );
};

export default MobileVideoCard;
