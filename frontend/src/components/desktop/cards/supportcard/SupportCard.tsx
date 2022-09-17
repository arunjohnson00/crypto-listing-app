import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

const SupportCard = ({ title, icon, caption, buttonText, buttonLink }: any) => {
  return (
    <Box
      sx={{ background: "#181825", borderRadius: 3, padding: 3, maxWidth: 400 }}
    >
      <Stack direction="column" spacing={2} alignItems="center">
        {icon && icon}
        <Typography
          sx={{ color: "#08FC84", fontWeight: 500, fontSize: "1.4rem" }}
        >
          {title && title}
        </Typography>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 400,
            fontSize: ".85rem",
            textAlign: "center",
          }}
        >
          {caption && caption}
        </Typography>
        <Link
          target="_blank"
          href={buttonLink}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#08FC84",
              borderRadius: 2.5,
              textTransform: "capitalize",
              minWidth: 150,
              height: 40,
            }}
          >
            {buttonText && buttonText}
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default SupportCard;
