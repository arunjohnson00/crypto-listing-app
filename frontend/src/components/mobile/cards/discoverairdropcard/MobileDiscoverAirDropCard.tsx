import { Box, Stack, Avatar, Typography } from "@mui/material";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverAirDropCard = ({ item }: any) => {
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
            sx={{ color: "#C6C9D2", fontWeight: "400", fontSize: 10 }}
          >
            Starts in
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "#FFFFF5",
              fontWeight: 500,
              fontSize: "0.65rem",
            }}
          >
            1D:7H:38M:23S
          </Typography>
        </Stack>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
          sx={{ width: 75, height: 75 }}
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
          sx={{ color: "#E1F332", fontWeight: 500 }}
        >
          Etherium
        </Typography>

        <Stack
          direction="column"
          spacing={0}
          sx={{ alignItems: "center" }}
          pt={2}
        >
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 400 }}
          >
            Reward
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 400 }}
          >
            10,000,000,00
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={0}
          sx={{ alignItems: "center" }}
          pt={2}
        >
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 400 }}
          >
            Winners
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#FFFFF5", fontWeight: 400 }}
          >
            10,000,000
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileDiscoverAirDropCard;
