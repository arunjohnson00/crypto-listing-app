import {
  Box,
  Stack,
  Typography,
  Chip,
  Avatar,
  Grid,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import parse from "html-react-parser";
import Checkbox from "@mui/material/Checkbox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import moment from "moment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { CountDownTimer } from "./countdown/CountDownTimer";
import { Link } from "react-router-dom";
import { useState } from "react";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileEventViewCardCoinPage = ({ viewcoin, data }: any) => {
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
      <Box sx={{ marginX: 2, marginTop: 2, marginBottom: 2 }}>
        <Grid item xs={12}>
          <Stack
            direction="column"
            spacing={3}
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
                spacing={1}
                alignItems="center"
                width="100%"
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ flexGrow: 1 }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={`${serverAPIUrl}public/uploads/coin_logo/${data?.coin_logo}`}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    {data && data?.title}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={0.5}
                  alignItems="center"
                  sx={{ flexGrow: 0 }}
                >
                  {data && data?.is_online === 1 ? (
                    <Chip
                      label="Online Event"
                      color="primary"
                      size="small"
                      sx={{
                        backgroundColor: "#09ae95",
                        color: "#FFFFFF",
                        fontWeight: 500,
                        fontSize: ".55rem",
                      }}
                    />
                  ) : (
                    data &&
                    data?.is_online === 2 && (
                      <Chip
                        label="Offline Event"
                        color="primary"
                        size="small"
                        sx={{
                          backgroundColor: "#a28b18",
                          color: "#FFFFFF",
                          fontWeight: 500,
                          fontSize: ".55rem",
                        }}
                      />
                    )
                  )}
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
                      {data && parse(data?.description)}
                    </Typography>
                  </Stack>
                </Stack>
              )}
              <Stack
                direction="column"
                alignItems="flex-start"
                spacing={3}
                width="100%"
              >
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  rowGap={2}
                  columnGap={2}
                  sx={{ flexWrap: "wrap" }}
                >
                  <Stack direction="row" alignItems="flex-start" spacing={0.5}>
                    <CalendarMonthIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.3rem" }}
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
                  <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                    <CalendarMonthIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.3rem" }}
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

                  <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                    <HourglassTopIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.3rem" }}
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
                    <Stack
                      direction="row"
                      alignItems="flex-start"
                      spacing={1.5}
                    >
                      <LocationOnIcon
                        sx={{ color: "#0AF8D6", fontSize: "1.3rem" }}
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

                  <Stack direction="row" alignItems="flex-start" spacing={1.5}>
                    <WidgetsRoundedIcon
                      sx={{ color: "#0AF8D6", fontSize: "1.3rem" }}
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
                justifyContent="center"
                width="100%"
              >
                <Stack direction="column" alignItems="flex-end" spacing={1.5}>
                  <Link
                    to={{
                      pathname: `/crypto-events/${data?.slug}`,
                    }}
                    state={{ coin_id: data?.id }}
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: 4,
                        textTransform: "capitalize",
                        minWidth: 100,
                        backgroundColor: "#0D2269",
                        fontSize: ".65rem",
                      }}
                      endIcon={
                        <OpenInNewRoundedIcon
                          sx={{ color: "#FFFFFF", fontSize: ".5rem" }}
                        />
                      }
                    >
                      View Event
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};

export default MobileEventViewCardCoinPage;
