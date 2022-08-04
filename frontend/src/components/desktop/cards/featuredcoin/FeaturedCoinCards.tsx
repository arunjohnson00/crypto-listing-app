import {
  Grid,
  Stack,
  Box,
  Avatar,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import Rating from "@mui/material/Rating";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const FeaturedCoinCards = ({ cardData }: any) => {
  const getDifferenceInDays = (date1: any, date2: any) => {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  };

  const getDifferenceInAll: any = (start: any, end: any) => {
    const duration: any = moment.duration(moment(end).diff(moment(start)));

    //Get Days
    const days = Math.floor(duration.asDays()); // .asDays returns float but we are interested in full days only
    const daysFormatted = days ? `${days} Days ` : ""; // if no full days then do not display it at all

    //Get Hours
    const hours = duration.hours();
    const hoursFormatted = `${hours} Hour `;

    //Get Minutes
    const minutes = duration.minutes();
    const minutesFormatted = `${minutes}Minutes`;

    return duration?._data?.days <= 0
      ? "Presale Ended"
      : [daysFormatted, hoursFormatted, minutesFormatted].join("");
  };

  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <Grid item xs={12} sm={11} md={11} lg={11} xl={11} mb={3}>
      <Box
        sx={{
          borderRadius: "6px",
          border: "1px solid #243464",
          background: "linear-gradient(90deg, #01061c 20%, #0B1A51)",
        }}
        px={2}
        py={2}
      >
        <Grid item xs={12} pb={0.5}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Avatar
                alt={cardData && cardData?.name}
                src={`${serverAPIUrl}public/uploads/coins/${cardData?.logo}`}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  variant="caption"
                  sx={{ color: "white", fontWeight: "600" }}
                >
                  <Link
                    to={{
                      pathname: `/coin/${cardData?.name
                        ?.replace(/ /g, "")
                        .toLowerCase()}`,
                    }}
                    state={{ coin_id: cardData?.id }}
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    {cardData && cardData?.name?.slice(0, 12)}
                    {cardData?.name?.length > 12 && ".."}
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 500,
                    fontSize: "0.53rem",
                  }}
                >
                  {cardData && cardData?.symbol}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#1dffc0", fontWeight: "600" }}
                >
                  {cardData && cardData?.current_price !== null
                    ? "$" + parseFloat(cardData?.current_price).toFixed(4)
                    : "--"}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
              {cardData?.rating !== null && (
                <Typography
                  variant="h5"
                  sx={{ color: "#FFFFF5", fontWeight: "400" }}
                >
                  {cardData && cardData?.rating === null
                    ? 0.0
                    : parseInt(cardData?.rating).toFixed(1)}
                </Typography>
              )}
              {cardData?.rating !== null && (
                <Rating
                  name="size-small"
                  defaultValue={0}
                  value={cardData && parseInt(cardData?.rating).toFixed(0)}
                  size="small"
                  readOnly
                  sx={{ fontSize: "0.6rem" }}
                />
              )}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} py={0}>
          <Divider sx={{ borderColor: "#184b7d" }} />
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            py={1}
          >
            <Typography
              variant="body2"
              sx={{ color: "#6f737f", fontSize: "0.65rem" }}
            >
              Presale Starts in :
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color:
                  parseInt(cardData?.is_presale) === 1 ? "#FFFFFF" : "#ff0000",
                fontSize: ".7rem",
              }}
            >
              {
                //6 Days 7 Hours 19 Minutes
              }
              {getDifferenceInAll(new Date(), new Date(cardData?.presale_date))}
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: "#184b7d" }} />
        </Grid>

        <Grid item xs={12} py={0}>
          <Stack
            direction="row"
            // spacing={0.8}
            sx={{
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
            py={1}
          >
            {cardData && parseInt(cardData?.badges?.presale) === 1 && (
              <Chip
                label="Presale"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#DD0801",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.485rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}

            {cardData && parseInt(cardData?.badges?.audited) === 1 && (
              <Chip
                label="Audited"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#9638FF",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.485rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
            {cardData && parseInt(cardData?.badges?.kyc) === 1 && (
              <Chip
                label="KYC Verified"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#3C38FF",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.485rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
            {cardData && parseInt(cardData?.badges?.airdrop) === 1 && (
              <Chip
                label="Airdrop Hosted"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#299E02",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.485rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
            {cardData && parseInt(cardData?.badges?.ownership) === 1 && (
              <Chip
                label="Ownership Renounced"
                sx={{
                  borderRadius: "0px",
                  backgroundColor: "#DF6803",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.485rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
          </Stack>
        </Grid>

        <Grid item xs={12} py={0}>
          <Stack
            direction="column"
            spacing={-0.5}
            sx={{
              justifyContent: "flex-start",
            }}
            pt={0}
            pb={0}
          >
            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#5E6464",
                    fontWeight: 600,
                    fontSize: ".7rem",
                  }}
                >
                  Launch
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: 600, fontSize: ".7rem" }}
                >
                  {/* {moment(new Date(cardData?.presale_end_date)).from(
                    new Date()
                  )} */}
                  In{" "}
                  {cardData &&
                    Math.floor(
                      getDifferenceInDays(
                        new Date(),
                        new Date(cardData?.presale_end_date)
                      )
                    )}{" "}
                  Days
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: 600, fontSize: ".7rem" }}
                >
                  1h
                </Typography>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  spacing={0}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        Math.sign(parseInt(cardData?.percent_change_1h)) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 600,
                      fontSize: ".7rem",
                    }}
                  >
                    {cardData && cardData?.percent_change_1h !== null
                      ? parseFloat(cardData?.percent_change_1h).toFixed(2) + "%"
                      : "--"}
                  </Typography>
                  <Typography variant="caption">
                    {Math.sign(parseInt(cardData?.percent_change_1h)) === -1 ? (
                      <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                    ) : (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: 600, fontSize: ".7rem" }}
                >
                  24h
                </Typography>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  spacing={0}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        Math.sign(parseInt(cardData?.percent_change_24h)) === -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 600,
                      fontSize: ".7rem",
                    }}
                  >
                    {cardData && cardData?.percent_change_24h !== null
                      ? parseFloat(cardData?.percent_change_24h).toFixed(2) +
                        "%"
                      : "--"}
                  </Typography>
                  <Typography variant="caption">
                    {Math.sign(parseInt(cardData?.percent_change_24h)) ===
                    -1 ? (
                      <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                    ) : (
                      <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: 600, fontSize: ".7rem" }}
                >
                  Network
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: 600, fontSize: ".7rem" }}
                >
                  {cardData && cardData?.network?.slice(0, 18)}..
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} py={0}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: " space-between",
                }}
                pt={0.7}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#5E6464", fontWeight: 600, fontSize: ".7rem" }}
                >
                  Votes
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: 600, fontSize: ".7rem" }}
                >
                  {cardData && cardData?.vote}
                </Typography>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Box>
    </Grid>
  );
};

export default FeaturedCoinCards;
