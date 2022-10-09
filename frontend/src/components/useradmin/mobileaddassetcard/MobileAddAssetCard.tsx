import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MobileAddAssetCard = ({
  icon,
  title,
  link,
  color,
  background,
  border,
  state,
}: any) => {
  return (
    <Link
      to={link && link}
      style={{ textDecoration: "none" }}
      state={{ currentState: state && state }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ maxWidth: 50 }}
      >
        {" "}
        <Box
          sx={{
            border: `2px solid ${border && border}`,
            backgroundColor: background && background,
            padding: 0.5,
            borderRadius: 3,
            height: 40,
            width: 40,
            display: "flex",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            variant="square"
            alt={title}
            src={icon}
            sx={{ width: 30, height: 30 }}
          />
        </Box>
        <Typography
          sx={{
            color: color && color,
            fontSize: ".65rem",
            textAlign: "center",
            lineHeight: ".95rem",
          }}
        >
          {title && title}
        </Typography>
      </Stack>
    </Link>
  );
};

export default MobileAddAssetCard;
