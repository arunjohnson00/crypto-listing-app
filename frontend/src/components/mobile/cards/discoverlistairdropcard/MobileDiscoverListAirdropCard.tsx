import { Box, Stack, Typography, Chip, Avatar } from "@mui/material";
import moment from "moment";
import { CountDownTimer } from "./countdown/CountDownTimer";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverListAirdropCard = ({ item, data }: any) => {
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
            src={`${serverAPIUrl}public/uploads/coin_logo/${data?.coin_logo}`}
            sx={{ width: 35, height: 35 }}
          />
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={0}
          >
            <Typography
              variant="h6"
              sx={{ color: "#FFFFF5", fontWeight: 500, fontSize: "1rem" }}
            >
              {data && data?.coin_name}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: "300" }}
            >
              {data && data?.coin_symbol}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" sx={{ alignItems: "flex-end" }} spacing={0.7}>
          {data &&
            moment(new Date(data?.start_date)).isAfter(new Date()) === true && (
              <Chip
                label="Upcoming"
                color="primary"
                sx={{
                  backgroundColor: "#1d91b6",
                  fontSize: "0.6125rem",
                  minWidth: 70,
                }}
                size="small"
              />
            )}
          {data &&
            moment(new Date()).isBetween(
              new Date(data?.start_date),
              new Date(
                moment(new Date(data?.start_date))
                  .add(data?.no_of_days, "days")
                  .format("DD MMM YYYY")
              )
            ) === true && (
              <Chip
                label="Live"
                color="primary"
                sx={{
                  backgroundColor: "#299a07",
                  fontSize: "0.6125rem",
                  minWidth: 70,
                }}
                size="small"
              />
            )}

          {data &&
            moment(new Date()).isAfter(
              new Date(
                moment(new Date(data?.start_date))
                  .add(data?.no_of_days, "days")
                  .format("DD MMM YYYY")
              )
            ) === true && (
              <Chip
                label="Expired"
                color="primary"
                sx={{
                  backgroundColor: "#c70a0a",
                  fontSize: "0.6125rem",
                  minWidth: 70,
                }}
                size="small"
              />
            )}
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
            {data &&
              moment(new Date(data?.start_date)).isAfter(new Date()) ===
                true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
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
                    {CountDownTimer(moment(new Date(data?.start_date)))}
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(new Date()).isBetween(
                new Date(data?.start_date),
                new Date(
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")
                )
              ) === true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#FFFFF5", fontWeight: "300", fontSize: 9 }}
                  >
                    Ends in
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
                  >
                    {CountDownTimer(
                      moment(new Date(data?.start_date)).add(
                        data?.no_of_days,
                        "days"
                      )
                    )}
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(new Date()).isAfter(
                new Date(
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")
                )
              ) === true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
                  >
                    Airdrop is expired
                  </Typography>
                </Stack>
              )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileDiscoverListAirdropCard;
