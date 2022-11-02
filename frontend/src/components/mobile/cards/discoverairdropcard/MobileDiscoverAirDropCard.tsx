import { Box, Stack, Avatar, Typography, Link, Chip } from "@mui/material";
import moment from "moment";
import Countdown from "react-countdown";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDiscoverAirDropCard = ({ item }: any) => {
  return (
    <Link
      href={`airdrops/${item?.slug}`}
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
          <Stack direction="column" sx={{ alignItems: "center" }} spacing={0.7}>
            {item &&
              moment(new Date()).isAfter(
                new Date(
                  moment(new Date(item?.start_date))
                    .add(item?.no_of_days, "days")
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
              {item &&
                moment(new Date(item?.start_date)).isAfter(new Date()) ===
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
                      {item && (
                        <Countdown
                          date={new Date(item?.start_date)}
                          renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                            completed,
                          }) => {
                            return (
                              <span>
                                {days} Day {hours} Hrs {minutes} Min {seconds}{" "}
                                Sec
                              </span>
                            );
                          }}
                        />
                      )}
                    </Typography>
                  </Stack>
                )}

              {item &&
                moment(new Date()).isBetween(
                  new Date(item?.start_date),
                  new Date(
                    moment(new Date(item?.start_date))
                      .add(item?.no_of_days, "days")
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
                      {item && (
                        <Countdown
                          date={moment(new Date(item?.start_date))
                            .add(item?.no_of_days, "days")
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
                                {days} Day {hours} Hrs {minutes} Min {seconds}{" "}
                                Sec
                              </span>
                            );
                          }}
                        />
                      )}
                    </Typography>
                  </Stack>
                )}

              {item &&
                moment(new Date()).isAfter(
                  new Date(
                    moment(new Date(item?.start_date))
                      .add(item?.no_of_days, "days")
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

              {item &&
                moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                  moment(item?.start_date).format("YYYY-MM-DD")
                ) === true &&
                moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                  moment(
                    new Date(
                      moment(new Date(item?.start_date))
                        .add(item?.no_of_days, "days")
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
                      {item && (
                        <Countdown
                          date={moment(new Date(item?.start_date))
                            .add(item?.no_of_days, "days")
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
                                {days} Day {hours} Hrs {minutes} Min {seconds}{" "}
                                Sec
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
          <Avatar
            alt={item && item?.coin_name}
            src={`${serverAPIUrl}public/uploads/coin_logo/${item?.coin_logo}`}
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
            {item && item?.coin_name}
          </Typography>
          {item &&
            moment(new Date(item?.start_date)).isAfter(new Date()) === true && (
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
          {item &&
            moment(new Date()).isBetween(
              new Date(item?.start_date),
              new Date(
                moment(new Date(item?.start_date))
                  .add(item?.no_of_days, "days")
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
              {item && item?.total_amount?.toLocaleString()}
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
              {item && item?.no_of_winners?.toLocaleString()}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default MobileDiscoverAirDropCard;
