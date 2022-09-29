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
import { defaultColor } from "../../../../common/common";
import "./style.css";
import { Fragment } from "react";
import AnimatedRating from "../../animatedrating/AnimatedRating";
const FeaturedCoinCards = ({ cardData, index }: any) => {
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
  // console.log(
  //   Math.sign(moment(new Date(cardData?.presale_date)).diff(new Date()))
  // );
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  return (
    <Box
      sx={{
        borderRadius: 4,
        border: "1px solid #091851",
        background: "linear-gradient(90deg, #01061c 20%, #020f3d)",
        maxHeight: 220,
        minHeight: 220,
        "&:hover": {
          background: "#020c36",
        },
      }}
      px={2}
      py={2}
      mr={1.4}
      mb={1.4}
    >
      <Grid item xs={12} pb={0.5}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {cardData && cardData?.logo === null ? (
              <Avatar
                sx={{
                  bgcolor: defaultColor[index],
                }}
              >
                <Typography sx={{ fontSize: ".6rem" }}>
                  {cardData && cardData?.name[0]}
                </Typography>
              </Avatar>
            ) : (
              <Avatar
                alt={cardData && cardData?.name}
                src={`${serverAPIUrl}public/uploads/coin_logo/${cardData?.logo}`}
                //src="https://mui.com/static/images/avatar/1.jpg"
                // sx={{ width: 50, height: 50 }}
              />
            )}
            <Stack direction="column" spacing={0}>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFFF", fontWeight: 600 }}
              >
                <Link
                  to={{
                    pathname: `/coin/${cardData?.slug}`,
                  }}
                  state={{ coin_id: cardData?.id }}
                  style={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    fontSize: ".8rem",
                  }}
                >
                  {cardData && cardData?.name?.slice(0, 12)}
                  {cardData?.name?.length > 12 && ".."}
                </Link>
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#545454",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                }}
              >
                {cardData &&
                  cardData?.symbol !== null &&
                  "$" + cardData?.symbol}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#1dffc0", fontWeight: 400, fontSize: ".85rem" }}
              >
                {cardData && cardData?.current_price !== null ? (
                  String(Math.trunc(parseFloat(cardData?.current_price)))
                    .length > 2 ? (
                    "$ " +
                    Number(
                      parseFloat(cardData?.current_price).toFixed(2)
                    ).toLocaleString()
                  ) : cardData && Math.abs(cardData?.current_price) > 1 ? (
                    "$ " +
                    parseFloat(cardData?.current_price)
                      .toFixed(4)
                      .toLocaleString()
                  ) : (
                    "$ " +
                    parseFloat(cardData?.current_price)
                      .toFixed(9)
                      .toLocaleString()
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
              // <Rating
              //   name="size-small"
              //   defaultValue={0}
              //   value={cardData && parseInt(cardData?.rating).toFixed(0)}
              //   size="small"
              //   readOnly
              //   sx={{ fontSize: "0.6rem" }}
              // />

              <AnimatedRating
                name="size-small"
                defaultValue={0}
                value={cardData && parseInt(cardData?.rating).toFixed(0)}
                size="small"
                readOnly={true}
                fontSize="0.6rem"
              />
            )}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} py={0}>
        <Divider sx={{ borderColor: "#031d36" }} />
        {
          <Fragment>
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              py={1}
            >
              {cardData &&
              parseInt(cardData?.is_presale) === 1 &&
              cardData?.presale_date !== null &&
              cardData?.presale_end_date !== null ? (
                <span>
                  {Math.sign(
                    moment(new Date(cardData?.presale_date)).diff(new Date())
                  ) === -1 &&
                  Math.sign(
                    moment(new Date(cardData?.presale_end_date)).diff(
                      new Date()
                    )
                  ) === 1 ? (
                    <span>
                      {
                        //  <BounceLoader size={12} color="#00FF00" />
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <span className="ripplefeaturedcoin"></span>
                          <Typography
                            variant="body2"
                            sx={{ color: "#6f737f", fontSize: "0.65rem" }}
                          >
                            Presale ends in{" "}
                          </Typography>
                        </Stack>
                      }
                    </span>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{ color: "#6f737f", fontSize: "0.65rem" }}
                    >
                      Presale starts in{" "}
                    </Typography>
                  )}
                </span>
              ) : (
                cardData &&
                cardData?.is_launched === 1 && (
                  <Link
                    to={{
                      pathname: `/coin/${cardData?.slug}`,
                    }}
                    state={{ coin_id: cardData?.id }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    <Typography
                      variant="body2"
                      sx={{ color: "#4f4f4f", fontSize: "0.7rem" }}
                    >
                      Listed{": "}
                      <span
                        style={{
                          color: "#667ddc",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          textTransform: "capitalize",
                        }}
                      >
                        {" "}
                        {/* {cardData && cardData?.name} */}
                        {cardData?.presale_end_date !== null ? (
                          moment(
                            new Date(cardData?.presale_end_date),
                            "YYYYMMDD"
                          ).format("DD MMM YYYY")
                        ) : (
                          <span style={{ color: "#7a7a7a" }}>--</span>
                        )}
                      </span>
                    </Typography>
                  </Link>
                )
              )}

              {cardData &&
              parseInt(cardData?.is_presale) === 1 &&
              Math.sign(
                moment(new Date(cardData?.presale_date)).diff(new Date())
              ) === -1 &&
              Math.sign(
                moment(new Date(cardData?.presale_end_date)).diff(new Date())
              ) === 1 ? (
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#FFFFFF",

                    fontSize: ".7rem",
                  }}
                >
                  {CountDownTimer(cardData?.presale_end_date)}
                </Typography>
              ) : (
                ""
              )}
            </Stack>
          </Fragment>
        }
        <Divider sx={{ borderColor: "#031d36" }} />
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
                  <a href={cardData && cardData?.communities[0]?.facebook_link}>
                    <Avatar
                      alt="Facebook"
                      src={FacebookImage}
                      sx={{ width: 12, height: 12, borderRadius: 0 }}
                    />
                  </a>
                )}
                {cardData?.communities[0]?.twitter_link !== null && (
                  <a href={cardData && cardData?.communities[0]?.twitter_link}>
                    <Avatar
                      alt="Twitter"
                      src={TwitterImage}
                      sx={{ width: 12, height: 12, borderRadius: 0 }}
                    />
                  </a>
                )}
                {cardData?.communities[0]?.telegram_link !== null && (
                  <a href={cardData && cardData?.communities[0]?.telegram_link}>
                    <Avatar
                      alt="Telegram"
                      src={TelegramImage}
                      sx={{ width: 12, height: 12, borderRadius: 0 }}
                    />
                  </a>
                )}
                {cardData?.communities[0]?.instagram_link !== null && (
                  <a
                    href={cardData && cardData?.communities[0]?.instagram_link}
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
                      Math.sign(parseFloat(cardData?.percent_change_1h)) === -1
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
                      Math.sign(parseFloat(cardData?.percent_change_24h)) === -1
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
                {cardData && cardData?.networks?.length === 0 ? (
                  <Typography sx={{ fontSize: ".6rem" }}>--</Typography>
                ) : (
                  <Stack direction="row" spacing={0.5}>
                    {cardData &&
                      cardData?.networks?.map((item: any, index: number) => (
                        <Avatar
                          key={index}
                          alt={item && item?.network}
                          src={`${serverAPIUrl}public/uploads/network_icons/${item?.network_icon}`}
                          sx={{ width: 15, height: 15, borderRadius: 0 }}
                        />
                      ))}
                  </Stack>
                )}
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
                {cardData && cardData?.vote?.toLocaleString()}
              </Typography>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default FeaturedCoinCards;
