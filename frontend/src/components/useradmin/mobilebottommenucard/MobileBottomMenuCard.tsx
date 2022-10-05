import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MobileBottomMenuCard = ({
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
        spacing={0}
      >
        {" "}
        <Box
          sx={{
            border: `3px solid ${border && border}`,
            backgroundColor: background && background,
            padding: 0.5,
            borderRadius: 4,

            display: "flex",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            variant="square"
            alt={title}
            src={icon}
            sx={{ width: 20, height: 20 }}
          />
        </Box>
        <Typography
          sx={{ color: color && color, fontSize: ".6rem", textAlign: "center" }}
        >
          {title && title}
        </Typography>
      </Stack>
    </Link>
  );
};

export default MobileBottomMenuCard;
