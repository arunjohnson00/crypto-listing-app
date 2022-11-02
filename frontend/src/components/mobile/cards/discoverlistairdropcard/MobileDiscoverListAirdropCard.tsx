import { Box, Stack, Typography, Chip, Avatar, Link } from "@mui/material";
import moment from "moment";
import Countdown from "react-countdown";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverListAirdropCard = ({ item, data }: any) => {
  return (
    <Link
      href={`airdrops/${data?.slug}`}
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
          margin: 0,
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          width="100%"
          justifyContent="space-between"
        >
          <Stack direction="row" sx={{ alignItems: "flex-start" }} spacing={1}>
            <Avatar
              alt="Remy Sharp"
              src={`${serverAPIUrl}public/uploads/coin_logo/${data?.coin_logo}`}
              sx={{ width: 35, height: 35, mt: 0.6 }}
            />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                variant="h6"
                sx={{ color: "#FFFFF5", fontWeight: 500, fontSize: ".9rem" }}
              >
                {data && data?.coin_name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontWeight: "300" }}
              >
                {data && data?.coin_symbol}
              </Typography>

              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={0.5}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#03aeb6",
                    fontWeight: "400",
                    fontSize: ".55rem",
                  }}
                >
                  Total Airdrops
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: "400",
                    fontSize: ".65rem",
                  }}
                >
                  {data && data?.total_amount}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={0.5}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#03aeb6",
                    fontWeight: "400",
                    fontSize: ".55rem",
                  }}
                >
                  Total Winners
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFF5",
                    fontWeight: "400",
                    fontSize: ".65rem",
                  }}
                >
                  {data && data?.no_of_winners}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-end" }}
            spacing={0.7}
          >
            {data &&
              moment(new Date(data?.start_date)).isAfter(new Date()) ===
                true && (
                <Chip
                  label="Upcoming"
                  color="primary"
                  sx={{
                    backgroundColor: "#1d91b6",
                    fontSize: "0.6125rem",
                    minWidth: 50,
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
                    minWidth: 50,
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
                    minWidth: 50,
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
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: "300",
                        fontSize: ".55rem",
                      }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#D1D10E",
                        fontWeight: "500",
                        fontSize: ".6rem",
                      }}
                    >
                      {data && (
                        <Countdown
                          date={new Date(data?.start_date)}
                          renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                            completed,
                          }) => {
                            return (
                              <span>
                                {days}D {hours}H {minutes}M {seconds}S
                              </span>
                            );
                          }}
                        />
                      )}
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
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: "300",
                        fontSize: ".55rem",
                      }}
                    >
                      Ends in
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#D1D10E",
                        fontWeight: "500",
                        fontSize: ".6rem",
                      }}
                    >
                      {data && (
                        <Countdown
                          date={moment(new Date(data?.start_date))
                            .add(data?.no_of_days, "days")
                            .format("YYYY-MM-DD")}
                          renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                            completed,
                          }) => {
                            return (
                              <span>
                                {days}D {hours}H {minutes}M {seconds}S
                              </span>
                            );
                          }}
                        />
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

              {data &&
                moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                  moment(data?.start_date).format("YYYY-MM-DD")
                ) === true &&
                moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                  moment(
                    new Date(
                      moment(new Date(data?.start_date))
                        .add(data?.no_of_days, "days")
                        .format("DD MMM YYYY")
                    )
                  ).format("YYYY-MM-DD")
                ) === true && (
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={0.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: "300",
                        fontSize: ".55rem",
                      }}
                    >
                      Ends in
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#D1D10E",
                        fontWeight: "500",
                        fontSize: ".6rem",
                      }}
                    >
                      {data && (
                        <Countdown
                          date={moment(new Date(data?.start_date))
                            .add(data?.no_of_days, "days")
                            .format("YYYY-MM-DD")}
                          renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                            completed,
                          }) => {
                            return (
                              <span>
                                {days}D {hours}H {minutes}M {seconds}S
                              </span>
                            );
                          }}
                        />
                      )}
                    </Typography>
                  </Stack>
                )}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default MobileDiscoverListAirdropCard;
