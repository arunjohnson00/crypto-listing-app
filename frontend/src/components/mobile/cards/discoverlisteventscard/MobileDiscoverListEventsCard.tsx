import { Box, Stack, Typography, Chip, Avatar, Link } from "@mui/material";
import moment from "moment";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverListEventsCard = ({ item }: any) => {
  return (
    <Link
      href={`crypto-events/${item?.slug}`}
      target="_blank"
      sx={{
        textDecoration: "none",
        margin: 0,
        width: "100%",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(to top, #000105 , #020E38 )",
          padding: 2,
          borderRadius: 7,
          border: "1px solid #2F3638",
        }}
      >
        <Stack direction="row" spacing={5} justifyContent="space-between">
          <Stack direction="row" sx={{ alignItems: "flex-start" }} spacing={1}>
            <Avatar
              alt={item && item?.coin}
              src={`${serverAPIUrl}public/uploads/event_proof/${item?.coin_logo}`}
              sx={{ width: 35, height: 35, mt: 0.6 }}
            />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                sx={{ color: "#FFFFF5", fontSize: ".8rem", fontWeight: 500 }}
              >
                {item && item?.title}
              </Typography>
              {item && item?.is_online === 1 ? (
                <Typography
                  variant="caption"
                  sx={{ color: "#09ae95", fontWeight: 500, fontSize: ".65rem" }}
                >
                  Online Event
                </Typography>
              ) : (
                item &&
                item?.is_online === 2 && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#a28b18",
                      fontWeight: 500,
                      fontSize: ".65rem",
                    }}
                  >
                    Offline Event
                  </Typography>
                )
              )}
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
            sx={{ alignItems: "flex-end", minWidth: 88 }}
            spacing={1}
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
            <Stack
              direction="row"
              sx={{ alignItems: "baseline" }}
              spacing={0.5}
            >
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontWeight: "300", fontSize: ".55rem" }}
              >
                Starts in
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#D1D10E", fontWeight: "500", fontSize: ".6rem" }}
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
