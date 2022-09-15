import { Box, Stack, Typography, Chip, Avatar } from "@mui/material";
import moment from "moment";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const DiscoverListEventsCard = ({ item }: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to top, #000105 , #020E38 )",
        padding: 2.5,
        borderRadius: 7,
        border: "1px solid #2F3638",
        margin: 1,
      }}
    >
      <Stack direction="row" spacing={5}>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 35, height: 35 }}
          />
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={0}
          >
            <Typography variant="h6" sx={{ color: "#FFFFF5", fontWeight: 500 }}>
              {item && item?.coin}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: "300" }}
            >
              {item && item?.coin_symbol}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" sx={{ alignItems: "flex-end" }} spacing={0.7}>
          <Box
            sx={{
              backgroundColor: "#43C211",
              color: "#FFFFF5",
              fontSize: "0.6125rem",
              borderRadius: 4,
              height: 25,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            px={1}
          >
            {item && item?.title}
          </Box>

          <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: "300", fontSize: 9 }}
            >
              Starts in
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
            >
              {/* 1Day 24 Min 16 Sec    */}
              {item && moment(new Date(item?.event_date)).fromNow()}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DiscoverListEventsCard;
