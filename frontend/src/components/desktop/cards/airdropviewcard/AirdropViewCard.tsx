import {
  Box,
  Stack,
  Grid,
  Typography,
  Chip,
  Avatar,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import moment from "moment";
import parse from "html-react-parser";
import { CountDownTimer } from "./countdown/CountDownTimer";
import { useState } from "react";
import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const AirdropViewCard = ({ viewcoin, data }: any) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand(!expand);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        // background:
        //   viewcoin === true
        //     ? "linear-gradient(to top, #000105 , #020E38 70% )"
        //     : "transparent",
        background: "#030B2F",
        // width: "auto",
        borderRadius: 5,
        width: "100%",
        //border: "1px solid #020E38",
      }}
    >
      <Box sx={{ marginX: 6, marginTop: 3, marginBottom: 6 }}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="flex-start"
            width="100%"
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              spacing={4}
              width="100%"
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                width="100%"
              >
                <Avatar
                  alt="Remy Sharp"
                  src={`${serverAPIUrl}public/uploads/coin_logo/${data?.coin_logo}`}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.7rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {data && data?.title}
                </Typography>
              </Stack>
              <Stack
                direction="column"
                alignItems="flex-start"
                spacing={3}
                width="100%"
              >
                <Stack direction="row" alignItems="center" spacing={3.5}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CalendarMonthIcon
                      sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {" "}
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#4B4E5A",
                          fontWeight: 600,
                          fontSize: ".9rem",
                        }}
                      >
                        Start Date
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#caa800",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {data &&
                          moment(new Date(data?.event_date)).format(
                            "DD MMM YYYY"
                          )}
                      </Typography>
                    </Stack>
                  </Stack>
                  {/* <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{
                    borderColor: "#0b1640",
                    borderRightWidth: 1,
                    mb: 1,
                  }}
                /> */}
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CalendarMonthIcon
                      sx={{ color: "#FFFFFF", fontSize: "1.4rem" }}
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {" "}
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#4B4E5A",
                          fontWeight: 600,
                          fontSize: ".9rem",
                        }}
                      >
                        End Date
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#caa800",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {data &&
                          moment(new Date(data?.end_date)).format(
                            "DD MMM YYYY"
                          )}
                      </Typography>
                    </Stack>
                  </Stack>
                  {/* <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{
                    borderColor: "#0b1640",
                    borderRightWidth: 1,
                    mb: 1,
                  }}
                /> */}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              alignItems="flex-end"
              spacing={2}
              width="-webkit-fill-available"
            >
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Stack direction="column" alignItems="flex-end" spacing={1.5}>
                  {data &&
                    moment(new Date(data?.event_date)).isAfter(new Date()) ===
                      true && (
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
                      new Date(data?.event_date),
                      new Date(
                        moment(new Date(data?.event_date))
                          .add(500, "days")
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
                        moment(new Date(data?.event_date))
                          .add(500, "days")
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
                </Stack>
                {expand === false ? (
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={expandHandler}
                  >
                    <ExpandMoreRoundedIcon
                      fontSize="inherit"
                      sx={{ color: "#FFFFFF" }}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={expandHandler}
                  >
                    <ExpandLessRoundedIcon
                      fontSize="inherit"
                      sx={{ color: "#FFFFFF" }}
                    />
                  </IconButton>
                )}
              </Stack>

              {data &&
                moment(new Date(data?.event_date)).isAfter(new Date()) ===
                  true && (
                  <Stack
                    direction="column"
                    sx={{ alignItems: "flex-end" }}
                    spacing={0.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#4B4E5A",
                        fontWeight: 600,
                        fontSize: ".9rem",
                      }}
                    >
                      Starts in
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                      }}
                    >
                      {CountDownTimer(moment(new Date(data?.event_date)))}
                    </Typography>
                  </Stack>
                )}

              {data &&
                moment(new Date()).isBetween(
                  new Date(data?.event_date),
                  new Date(
                    moment(new Date(data?.event_date))
                      .add(500, "days")
                      .format("DD MMM YYYY")
                  )
                ) === true && (
                  <Stack
                    direction="column"
                    sx={{ alignItems: "flex-end" }}
                    spacing={0.5}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#4B4E5A",
                        fontWeight: 600,
                        fontSize: ".9rem",
                      }}
                    >
                      Ends in
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                      }}
                    >
                      {CountDownTimer(
                        moment(new Date(data?.event_date)).add(500, "days")
                      )}
                    </Typography>
                  </Stack>
                )}

              {data &&
                moment(new Date()).isAfter(
                  new Date(
                    moment(new Date(data?.event_date))
                      .add(500, "days")
                      .format("DD MMM YYYY")
                  )
                ) === true && (
                  <Stack
                    direction="column"
                    sx={{ alignItems: "flex-end" }}
                    spacing={0.5}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                      }}
                    >
                      Airdrop is expired
                    </Typography>
                  </Stack>
                )}
            </Stack>
          </Stack>
          {expand === true && (
            <Stack
              direction="row"
              alignItems="flex-start"
              spacing={5}
              width="100%"
              mt={5}
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <DiamondRoundedIcon
                    sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}
                  />
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {" "}
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#4B4E5A",
                        fontWeight: 600,
                        fontSize: ".9rem",
                      }}
                    >
                      Rewards:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#14d69c",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      100,00,00,00,00
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmojiEventsRoundedIcon
                    sx={{ color: "#FFFFFF", fontSize: "1.5rem" }}
                  />
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {" "}
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#4B4E5A",
                        fontWeight: 600,
                        fontSize: ".9rem",
                      }}
                    >
                      Winners:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#25B9C8",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      100,00,00,00,00
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justifyContent="center"
                  pt={4}
                >
                  <Link
                    to={{
                      pathname: `/airdrops/${data?.slug}`,
                    }}
                    state={{ coin_id: data?.id }}
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    <Button
                      variant="contained"
                      //size="small"
                      sx={{
                        borderRadius: 4,
                        textTransform: "capitalize",
                        minWidth: 150,
                        backgroundColor: "#0D2269",
                      }}
                      endIcon={
                        <OpenInNewRoundedIcon sx={{ color: "#FFFFFF" }} />
                      }
                    >
                      View Airdrop
                    </Button>
                  </Link>
                </Stack>
              </Stack>
              <Divider
                variant="middle"
                flexItem
                orientation={"vertical"}
                sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
              />
              <Stack direction="column" spacing={1}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#5671c9",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Airdrop Details
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                  }}
                >
                  {data && parse(data?.description)}
                </Typography>
              </Stack>
            </Stack>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default AirdropViewCard;
