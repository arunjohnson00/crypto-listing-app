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
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import moment from "moment";
import { CountDownTimer } from "./countdown/CountDownTimer";
import { useState } from "react";
import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const EventViewCard = ({ viewcoin, data }: any) => {
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
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <CalendarMonthIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.9rem" }}
                    />
                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Start Date
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
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
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <CalendarMonthIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.9rem" }}
                    />
                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        End Date
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
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

                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <HourglassTopIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.9rem" }}
                    />
                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Duration
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {data &&
                          moment(new Date(data?.end_date)).diff(
                            new Date(data?.event_date),
                            "days"
                          )}{" "}
                        Days
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
                  {data && data?.is_online === 2 && (
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <LocationOnIcon
                        sx={{ color: "#0AF8D6", fontSize: "1.9rem" }}
                      />
                      <Stack direction="column" alignItems="flex-start">
                        {" "}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#535662",
                            fontSize: "0.65rem",
                            fontWeight: 600,
                          }}
                        >
                          Venue
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#FFFFFF",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                          }}
                        >
                          {data && data?.venue !== null ? data?.venue : "NA"}
                        </Typography>
                      </Stack>
                    </Stack>
                  )}
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

                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <WidgetsRoundedIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.9rem" }}
                    />
                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Event Type
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {data && data?.events_category !== null
                          ? data?.events_category
                          : "NA"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="flex-start" spacing={4}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Stack direction="column" alignItems="flex-end" spacing={1.5}>
                  {data && data?.is_online === 1 ? (
                    <Chip
                      label="Online Event"
                      color="primary"
                      sx={{
                        backgroundColor: "#09ae95",
                        color: "#FFFFFF",
                        fontWeight: 500,
                      }}
                    />
                  ) : (
                    data &&
                    data?.is_online === 2 && (
                      <Chip
                        label="Offline Event"
                        color="primary"
                        sx={{
                          backgroundColor: "#a28b18",
                          color: "#FFFFFF",
                          fontWeight: 500,
                        }}
                      />
                    )
                  )}

                  <Link
                    to={{
                      pathname: `/crypto-events/${data?.slug}`,
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
                      View Event
                    </Button>
                  </Link>
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
            </Stack>
          </Stack>
          {expand === true && (
            <Stack
              direction="column"
              alignItems="flex-start"
              spacing={4}
              width="100%"
              mt={3}
            >
              <Stack direction="column" spacing={1}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FBFE00",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  About Event
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "0.85rem",
                    fontWeight: 400,
                  }}
                >
                  {data && data?.description}
                </Typography>
              </Stack>
            </Stack>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default EventViewCard;
