import { Box, Stack, Typography, Chip, Avatar, Link } from "@mui/material";
import moment from "moment";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverListEventsCard = ({ item }: any) => {
  return (
    <Link
      href={item?.slug}
      target="_blank"
      sx={{ textDecoration: "none", margin: 1 }}
    >
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(to top, #000105 , #020E38 )",
          padding: 2.5,
          borderRadius: 7,
          border: "1px solid #2F3638",
        }}
      >
        <Stack direction="row" spacing={5}>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Avatar
              alt={item && item?.coin}
              src={`${serverAPIUrl}public/uploads/event_proof/${item?.coin_logo}`}
              sx={{ width: 35, height: 35 }}
            />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                sx={{ color: "#FFFFF5", fontSize: ".9rem", fontWeight: 500 }}
              >
                {item && item?.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontWeight: "300" }}
              >
                {item && item?.coin_symbol}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-end" }}
            spacing={0.7}
          >
            <Link
              href={item?.source_link}
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              {" "}
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
                {item && item?.events_category}
              </Box>
            </Link>

            <Stack
              direction="row"
              sx={{ alignItems: "baseline" }}
              spacing={0.5}
            >
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
    </Link>
  );
};

export default MobileDiscoverListEventsCard;
