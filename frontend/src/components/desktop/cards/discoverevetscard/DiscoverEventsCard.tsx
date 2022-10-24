import { Box, Stack, Avatar, Typography } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const DiscoverEventsCard = ({ item }: any) => {
  return (
    <Link
      to={`/crypto-events/${item?.slug}`}
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          backgroundColor: "#050A28",
          color: "#FFFFF5",
          margin: 1,
          borderRadius: 2,
          minHeight: 250,
          maxHeight: 250,
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
              {item && item?.title}
            </Typography>
          </Stack>
          <Avatar
            alt={item && item?.title}
            src={`${serverAPIUrl}public/uploads/event_proof/${item?.coin_logo}`}
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
            {item && item?.coin}
          </Typography>

          <Stack
            direction="column"
            spacing={1.8}
            sx={{ alignItems: "center" }}
            pt={2}
          >
            <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
              <Typography
                variant="h4"
                sx={{ color: "#23DB90", fontWeight: 600 }}
              >
                {item && moment(new Date(item?.event_date)).format("DD")}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#FFFFF5", fontWeight: 400 }}
              >
                {item && moment(new Date(item?.event_date)).format("MMM")}
              </Typography>
            </Stack>
            <Typography
              variant="caption"
              sx={{ color: "#23C1D4", fontWeight: 600 }}
            >
              {item && moment(new Date(item?.event_date)).format("YYYY")}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default DiscoverEventsCard;
