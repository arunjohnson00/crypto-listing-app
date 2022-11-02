import { Fragment, useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import parse from "html-react-parser";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";

import VideoCard from "../../../components/desktop/cards/videocard/VideoCard";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { eventsSinglePageRequest } from "../../../store/action";
import { useLocation, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const SingleCryptoEventsPage = () => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const dispatch: any = useDispatch();
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const singlePageData = useSelector((data: any) => {
    return data?.eventsReducer?.events_single_page?.data;
  });
  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {
      err?.error?.message?.response?.data?.response === false &&
        navigate("/crypto-events");
    };

    dispatch(
      eventsSinglePageRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        {/* <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={3}>
          <BreadCrumbs
            data={singlePageData && singlePageData?.data}
            home="Home"
            path="Crypto Events"
          />
        </Grid>
        {singlePageData && singlePageData?.response === true && (
          <Grid item xs={12}>
            <Stack direction="column" alignItems="flex-start" spacing={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src={`${serverAPIUrl}public/uploads/event_proof/${singlePageData?.data?.logo}`}
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
                  {singlePageData && singlePageData?.data?.coin_name} -{" "}
                  {singlePageData && singlePageData?.data?.title}
                </Typography>
                <Link
                  to={`/coin/${
                    singlePageData && singlePageData?.data?.coin_slug
                  }`}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0E0A2E",
                      borderRadius: 10,
                      px: 3,
                      height: 35,
                      fontSize: ".8rem",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#18133f",
                      },
                    }}
                  >
                    View Coin
                  </Button>
                </Link>
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
                      sx={{ color: "#FBFE00", fontSize: "1.9rem" }}
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
                        {singlePageData &&
                          moment(
                            new Date(singlePageData?.data?.event_date)
                          ).format("DD MMM YYYY")}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{
                      borderColor: "#0b1640",
                      borderRightWidth: 1,
                      mb: 1,
                    }}
                  />
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <CalendarMonthIcon
                      sx={{ color: "#FBFE00", fontSize: "1.9rem" }}
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
                        {singlePageData &&
                          moment(
                            new Date(singlePageData?.data?.end_date)
                          ).format("DD MMM YYYY")}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{
                      borderColor: "#0b1640",
                      borderRightWidth: 1,
                      mb: 1,
                    }}
                  />

                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <HourglassTopIcon
                      sx={{ color: "#FBFE00", fontSize: "1.9rem" }}
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
                        {singlePageData &&
                          moment(new Date(singlePageData?.data?.end_date)).diff(
                            new Date(singlePageData?.data?.event_date),
                            "days"
                          )}{" "}
                        Days
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{
                      borderColor: "#0b1640",
                      borderRightWidth: 1,
                      mb: 1,
                    }}
                  />
                  {singlePageData && singlePageData?.data?.is_online === 2 && (
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <LocationOnIcon
                        sx={{ color: "#FBFE00", fontSize: "1.9rem" }}
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
                          {singlePageData &&
                          singlePageData?.data?.venue !== null
                            ? singlePageData?.data?.venue
                            : "NA"}
                        </Typography>
                      </Stack>
                    </Stack>
                  )}
                  {singlePageData && singlePageData?.data?.is_online === 2 && (
                    <Divider
                      variant="middle"
                      flexItem
                      orientation="vertical"
                      sx={{
                        borderColor: "#0b1640",
                        borderRightWidth: 1,
                        mb: 1,
                      }}
                    />
                  )}

                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <WidgetsRoundedIcon
                      sx={{ color: "#FBFE00", fontSize: "1.9rem" }}
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
                        {singlePageData &&
                        singlePageData?.data?.category_name !== null
                          ? singlePageData?.data?.category_name
                          : "NA"}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{
                      borderColor: "#0b1640",
                      borderRightWidth: 1,
                      mb: 1,
                    }}
                  />

                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    {/* <WidgetsRoundedIcon
                      sx={{ color: "#FBFE00", fontSize: "1.9rem" }}
                    /> */}
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
                        Price
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {singlePageData &&
                        singlePageData?.data?.coin_price !== null
                          ? singlePageData?.data?.coin_price?.toLocaleString()
                          : "NA"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Divider
                  variant="middle"
                  flexItem
                  orientation="horizontal"
                  sx={{
                    borderColor: "#0b1640",
                    borderBottomWidth: 1,
                    mb: 1,
                  }}
                />
                <Stack direction="row" alignItems="center" spacing={3.5}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3.5}
                    minWidth={280}
                  >
                    {singlePageData &&
                      moment(
                        new Date(singlePageData?.data?.event_date)
                      ).isAfter(new Date()) === true && (
                        <Stack direction="column" spacing={1.5}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#535662",
                              fontSize: "0.65rem",
                              fontWeight: 600,
                            }}
                          >
                            Starts in
                          </Typography>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={3.5}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1.5}
                            >
                              {
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  {singlePageData && (
                                    <Countdown
                                      date={
                                        new Date(
                                          singlePageData?.data?.event_date
                                        )
                                      }
                                      renderer={({
                                        days,
                                        hours,
                                        minutes,
                                        seconds,
                                        completed,
                                      }) => {
                                        return (
                                          <span>
                                            {days} Days {hours} Hours {minutes}{" "}
                                            Minutes {seconds} Seconds
                                          </span>
                                        );
                                      }}
                                    />
                                  )}
                                </Typography>
                              }
                            </Stack>
                          </Stack>
                        </Stack>
                      )}

                    {singlePageData &&
                      moment(new Date()).isBetween(
                        new Date(singlePageData?.data?.event_date),
                        new Date(singlePageData?.data?.end_date)
                      ) === true && (
                        <Stack direction="column" spacing={1.5}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#535662",
                              fontSize: "0.65rem",
                              fontWeight: 600,
                            }}
                          >
                            Ends in
                          </Typography>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={3.5}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1.5}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#FFFFFF",
                                  fontSize: "0.9rem",
                                  fontWeight: 600,
                                }}
                              >
                                {singlePageData && (
                                  <Countdown
                                    date={
                                      new Date(singlePageData?.data?.end_date)
                                    }
                                    renderer={({
                                      days,
                                      hours,
                                      minutes,
                                      seconds,
                                      completed,
                                    }) => {
                                      return (
                                        <span>
                                          {days} Days {hours} Hours {minutes}{" "}
                                          Minutes {seconds} Seconds
                                        </span>
                                      );
                                    }}
                                  />
                                )}
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      )}

                    {singlePageData &&
                      moment(new Date()).isAfter(
                        new Date(singlePageData?.data?.end_date)
                      ) === true && (
                        <Stack direction="column" spacing={1.5}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#535662",
                              fontSize: "0.65rem",
                              fontWeight: 600,
                            }}
                          >
                            Status
                          </Typography>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={3.5}
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={1.5}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#FFFFFF",
                                  fontSize: "0.9rem",
                                  fontWeight: 600,
                                }}
                              >
                                Event Expired
                              </Typography>
                            </Stack>
                          </Stack>
                        </Stack>
                      )}
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{
                      borderColor: "#0b1640",
                      borderRightWidth: 1,
                      mb: 1,
                    }}
                  />
                  <Stack direction="column" spacing={1.5}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#535662",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                      }}
                    >
                      Website
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={3.5}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <a
                          href={
                            singlePageData && singlePageData?.data?.website_url
                          }
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              borderRadius: 2,
                              color: "#000000",
                              background:
                                "linear-gradient(to right, #00FF6F 0%, #01FF3B 100%)",
                            }}
                          >
                            Goto Official Website
                          </Button>
                        </a>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack direction="column" spacing={1.5}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#535662",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                      }}
                    >
                      Twitter
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={3.5}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <a
                          href={
                            singlePageData &&
                            singlePageData?.data?.twitter_account
                          }
                          style={{ textDecoration: "none" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              borderRadius: 2,
                              color: "#000000",
                              background:
                                "linear-gradient(to right, #03E6FF 0%, #0097FC 100%)",
                            }}
                          >
                            Official Twitter
                          </Button>
                        </a>
                      </Stack>
                    </Stack>
                  </Stack>
                  {singlePageData && singlePageData?.data?.is_online === 2 && (
                    <Stack direction="column" spacing={1.5}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Tickets
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={3.5}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1.5}
                        >
                          <a
                            href={
                              singlePageData &&
                              singlePageData?.data?.booking_url
                            }
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "capitalize",
                                borderRadius: 2,
                                color: "#000000",
                                background:
                                  "linear-gradient(to right, #FFB200 0%, #FD7F04 100%)",
                              }}
                            >
                              Buy Tickets
                            </Button>
                          </a>
                        </Stack>
                      </Stack>
                    </Stack>
                  )}
                </Stack>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="horizontal"
                  sx={{
                    borderColor: "#0b1640",
                    borderBottomWidth: 1,
                    mb: 1,
                  }}
                />
                <Stack direction="row" spacing={3} width="100%">
                  <Stack
                    direction="column"
                    spacing={1.5}
                    maxWidth={
                      singlePageData &&
                      singlePageData?.data?.has_many_videos?.length > 0
                        ? "50%"
                        : "100%"
                    }
                    minWidth="50%"
                    flexGrow={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#7F8287",
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
                      {singlePageData &&
                        parse(singlePageData?.data?.description)}
                    </Typography>
                  </Stack>
                  {singlePageData &&
                    singlePageData?.data?.has_many_videos?.length > 0 && (
                      <Divider
                        variant="middle"
                        flexItem
                        orientation="vertical"
                        sx={{
                          borderColor: "#0b1640",
                          borderRightWidth: 1,
                        }}
                      />
                    )}
                  {singlePageData &&
                    singlePageData?.data?.has_many_videos?.length > 0 && (
                      <Stack direction="column" spacing={1.5}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#7F8287",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                          }}
                        >
                          Videos
                        </Typography>

                        <Stack direction="column" spacing={1.5}>
                          <Stack
                            direction="row"
                            rowGap={2}
                            columnGap={2}
                            flexWrap="wrap"
                          >
                            {singlePageData &&
                              singlePageData?.data?.has_many_videos?.map(
                                (item: any, index: number) => (
                                  <ReactPlayer
                                    key={index}
                                    url={item?.youtube_link}
                                    width="auto"
                                    height={150}
                                  />
                                )
                              )}
                          </Stack>
                        </Stack>
                      </Stack>
                    )}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default SingleCryptoEventsPage;
