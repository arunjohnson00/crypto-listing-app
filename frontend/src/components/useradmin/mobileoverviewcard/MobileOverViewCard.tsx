import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MobileOverViewCard = ({
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
      style={{ textDecoration: "none", maxWidth: 80, minWidth: 80 }}
      state={{ currentState: state && state }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
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
            sx={{ width: 40, height: 40 }}
          />
        </Box>
        <Typography
          sx={{ color: color && color, fontSize: ".8rem", textAlign: "center" }}
        >
          {title && title}
        </Typography>
      </Stack>
    </Link>
  );
};

export default MobileOverViewCard;
