import { Box, Stack, Typography, Chip, Avatar, Link } from "@mui/material";
import React from "react";

const UpcomingEventsCard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(136deg, #000105 , #020E38 )",
        padding: 2.5,
        borderRadius: 5,
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="body2" sx={{ color: "#0DC2B5" }}>
          28 May 2022
        </Typography>
        <Chip
          label="Release"
          color="primary"
          sx={{ backgroundColor: "#43C211", fontSize: "0.6125rem" }}
          size="small"
        />
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }} pt={2}>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <Typography
            variant="body2"
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
          >
            SafeMoon
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          sx={{ color: "#10E496", fontWeight: 500 }}
        >
          Mainnet Release
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }} pt={2}>
        <Typography
          variant="caption"
          sx={{ color: "#9595B6", fontSize: "0.65rem" }}
        >
          Gradients are CSS elements of the image data type that show a
          transition between two or more colors.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          fontSize: ".65rem",
          fontWeight: 500,
        }}
        pt={2}
      >
        <Link href="#" underline="none" sx={{ color: "#454182" }}>
          View Source
        </Link>
        <Link href="#" underline="none" sx={{ color: "#454182" }}>
          View Proof
        </Link>
        <Link href="#" underline="none" sx={{ color: "#454182" }}>
          View Event
        </Link>
        <Link href="#" underline="none" sx={{ color: "#454182" }}>
          Twitter
        </Link>
      </Stack>
    </Box>
  );
};

export default UpcomingEventsCard;
