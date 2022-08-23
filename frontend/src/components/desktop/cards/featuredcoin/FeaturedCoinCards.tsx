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

import { BounceLoader } from "react-spinners";
import FacebookImage from "../../../../assets/featuredcard/facebook.png";
import InstagramImage from "../../../../assets/featuredcard/instagram.png";
import RedditImage from "../../../../assets/featuredcard/reddit.png";
import TelegramImage from "../../../../assets/featuredcard/telegram.png";
import TwitterImage from "../../../../assets/featuredcard/twitter.png";

import { CountDownTimer } from "./countdown/CountDownTimer";

const FeaturedCoinCards = ({ cardData }: any) => {
  // const getDifferenceInDays = (date1: any, date2: any) => {
  //   const diffInMs = Math.abs(date2 - date1);
  //   return diffInMs / (1000 * 60 * 60 * 24);
  // };

  // const getDifferenceInAll: any = (start: any, end: any) => {
  //   const duration: any = moment.duration(moment(end).diff(moment(start)));

  //   //Get Days
  //   const days = Math.floor(duration.asDays()); // .asDays returns float but we are interested in full days only
  //   const daysFormatted = days ? `${days}D ` : ""; // if no full days then do not display it at all

  //   //Get Hours
  //   const hours = duration.hours();
  //   const hoursFormatted = `${hours}H `;

  //   //Get Minutes
  //   const minutes = duration.minutes();
  //   const minutesFormatted = `${minutes}M`;
  //   //Get Seconds
  //   const seconds = duration.seconds();
  //   const secondsFormatted = `${seconds}S`;
  //   //duration?._data?.days <= 0
  //   return [
  //     daysFormatted,
  //     hoursFormatted,
  //     minutesFormatted,
  //     secondsFormatted,
  //   ].join(" ");
  // };

  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb={3} ml={2}>
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
                src={`${serverAPIUrl}public/uploads/coin_logo/${cardData?.logo}`}
              />
              <Stack direction="column" spacing={0}>
                <Typography
                  variant="caption"
                  sx={{ color: "white", fontWeight: "600" }}
                >
                  <Link
                    to={{
                      pathname: `/coin/${cardData?.slug}`,
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
                  {cardData && cardData?.current_price !== null ? (
                    cardData && Math.abs(cardData?.current_price) > 1 ? (
                      "$" + parseFloat(cardData?.current_price).toFixed(4)
                    ) : (
                      "$" + parseFloat(cardData?.current_price).toFixed(10)
                    )
                  ) : (
                    <span style={{ color: "#7a7a7a" }}>--</span>
                  )}
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
            {cardData && parseInt(cardData?.is_presale) === 1 ? (
              <Stack direction="row" spacing={0.5} alignItems="center">
                {cardData &&
                  Math.sign(
                    moment(new Date(cardData?.presale_date)).diff(new Date())
                  ) === -1 && <BounceLoader size={12} color="#00FF00" />}

                <Typography
                  variant="body2"
                  sx={{ color: "#6f737f", fontSize: "0.65rem" }}
                >
                  Presale{" "}
                  {cardData &&
                  Math.sign(
                    moment(new Date(cardData?.presale_date)).diff(new Date())
                  ) === -1
                    ? "Ends"
                    : "Starts"}{" "}
                  in{" "}
                </Typography>
              </Stack>
            ) : (
              <Link
                to={{
                  pathname: `/coin/${cardData?.name
                    ?.replace(/ /g, "")
                    .toLowerCase()}/${cardData?.id}`,
                }}
                state={{ coin_id: cardData?.id }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View price chart of {cardData && cardData?.name}
              </Link>
            )}
            <Typography
              variant="subtitle1"
              sx={{
                color:
                  cardData && parseInt(cardData?.is_presale) === 1
                    ? "#FFFFFF"
                    : "#ff0000",
                fontSize: ".7rem",
              }}
            >
              {
                //6 Days 7 Hours 19 Minutes
                CountDownTimer(cardData?.presale_end_date)
              }
              {/* {getDifferenceInAll(
                new Date(),
                new Date(cardData?.presale_end_date)
              )} */}
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
                  borderRadius: "10px",
                  backgroundColor: "#DD0801",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.570rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}

            {cardData && parseInt(cardData?.badges?.audited) === 1 && (
              <Chip
                label="Audited"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#9638FF",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.570rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
            {cardData && parseInt(cardData?.badges?.kyc) === 1 && (
              <Chip
                label="KYC Verified"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#3C38FF",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.570rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
            {cardData && parseInt(cardData?.badges?.airdrop) === 1 && (
              <Chip
                label="Airdrop Hosted"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#299E02",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.570rem",
                  marginBottom: "7px",
                  marginRight: "4px",
                }}
              />
            )}
            {cardData && parseInt(cardData?.badges?.ownership) === 1 && (
              <Chip
                label="Ownership Renounced"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#DF6803",
                  color: "#FFFFFF",
                  height: 18,
                  fontSize: "0.570rem",
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
            spacing={0}
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
                height={20}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#5E6464",
                    fontWeight: 600,
                    fontSize: ".7rem",
                  }}
                >
                  Community
                </Typography>
                {/* <Typography
                  variant="caption"
                  sx={{ color: "#FFFFF5", fontWeight: 600, fontSize: ".7rem" }}
                >
             
                  In{" "}
                  {cardData &&
                    Math.floor(
                      getDifferenceInDays(
                        new Date(),
                        new Date(cardData?.presale_end_date)
                      )
                    )}{" "}
                  Days
                </Typography> */}

                <Stack direction="row" spacing={0.5}>
                  {cardData?.communities[0]?.facebook_link !== null && (
                    <a
                      href={cardData && cardData?.communities[0]?.facebook_link}
                    >
                      <Avatar
                        alt="Facebook"
                        src={FacebookImage}
                        sx={{ width: 12, height: 12, borderRadius: 0 }}
                      />
                    </a>
                  )}
                  {cardData?.communities[0]?.twitter_link !== null && (
                    <a
                      href={cardData && cardData?.communities[0]?.twitter_link}
                    >
                      <Avatar
                        alt="Twitter"
                        src={TwitterImage}
                        sx={{ width: 12, height: 12, borderRadius: 0 }}
                      />
                    </a>
                  )}
                  {cardData?.communities[0]?.telegram_link !== null && (
                    <a
                      href={cardData && cardData?.communities[0]?.telegram_link}
                    >
                      <Avatar
                        alt="Telegram"
                        src={TelegramImage}
                        sx={{ width: 12, height: 12, borderRadius: 0 }}
                      />
                    </a>
                  )}
                  {cardData?.communities[0]?.instagram_link !== null && (
                    <a
                      href={
                        cardData && cardData?.communities[0]?.instagram_link
                      }
                    >
                      <Avatar
                        alt="Instagram"
                        src={InstagramImage}
                        sx={{ width: 12, height: 12, borderRadius: 0 }}
                      />
                    </a>
                  )}
                  {cardData?.communities[0]?.reddit_link !== null && (
                    <a href={cardData && cardData?.communities[0]?.reddit_link}>
                      <Avatar
                        alt="Reddit"
                        src={RedditImage}
                        sx={{ width: 12, height: 12, borderRadius: 0 }}
                      />
                    </a>
                  )}
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
                height={20}
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
                  {Math.sign(parseFloat(cardData?.percent_change_1h)) === -1
                    ? cardData &&
                      cardData?.percent_change_1h !== null && (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      )
                    : cardData &&
                      cardData?.percent_change_1h !== null && (
                        <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                      )}

                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        Math.sign(parseFloat(cardData?.percent_change_1h)) ===
                        -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 600,
                      fontSize: ".7rem",
                    }}
                  >
                    {cardData && cardData?.percent_change_1h !== null ? (
                      parseFloat(cardData?.percent_change_1h)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
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
                height={20}
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
                  {Math.sign(parseFloat(cardData?.percent_change_24h)) === -1
                    ? cardData &&
                      cardData?.percent_change_24h !== null && (
                        <ArrowDropDownIcon sx={{ color: "#ff0000" }} />
                      )
                    : cardData &&
                      cardData?.percent_change_24h !== null && (
                        <ArrowDropUpIcon sx={{ color: "#00ff00" }} />
                      )}

                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        Math.sign(parseFloat(cardData?.percent_change_24h)) ===
                        -1
                          ? "#ff0000"
                          : "#00ff00",
                      fontWeight: 600,
                      fontSize: ".7rem",
                    }}
                  >
                    {cardData && cardData?.percent_change_24h !== null ? (
                      parseFloat(cardData?.percent_change_24h)
                        .toFixed(2)
                        .replace("-", "") + "%"
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
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
                height={20}
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
                height={20}
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
