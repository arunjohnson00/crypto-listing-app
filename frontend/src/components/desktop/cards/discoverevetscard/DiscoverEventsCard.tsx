import { Box, Stack, Avatar, Typography } from "@mui/material";

const DiscoverEventsCard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#050A28",
        color: "#FFFFF5",
        margin: 1,
        borderRadius: 2,
      }}
    >
      <Stack
        direction={{ xs: "column" }}
        spacing={2.3}
        sx={{ alignItems: "center" }}
      >
        <Stack direction={{ xs: "column" }} spacing={0.0} alignItems="center">
          <Typography
            variant="caption"
            sx={{
              color: "#FFFFF5",
              fontWeight: 500,
              fontSize: "0.65rem",
            }}
          >
            Bitmart Listing
          </Typography>
        </Stack>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 50, height: 50 }}
        />
      </Stack>

      <Stack
        direction={{ xs: "column" }}
        spacing={0.0}
        alignItems="center"
        mt={1.2}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#FFFFF5", fontWeight: 500 }}
        >
          Safemoon
        </Typography>

        <Stack
          direction="column"
          spacing={1.8}
          sx={{ alignItems: "center" }}
          pt={2}
        >
          <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
            <Typography variant="h4" sx={{ color: "#23DB90", fontWeight: 600 }}>
              28
            </Typography>
            <Typography variant="h5" sx={{ color: "#FFFFF5", fontWeight: 400 }}>
              MAY
            </Typography>
          </Stack>
          <Typography
            variant="caption"
            sx={{ color: "#23C1D4", fontWeight: 600 }}
          >
            2022
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscoverEventsCard;
