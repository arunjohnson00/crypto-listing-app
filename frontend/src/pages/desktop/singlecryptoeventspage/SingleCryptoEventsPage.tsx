import { Fragment, useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import { CountDownTimer } from "./countdown/CountDownTimer";
import VideoCard from "../../../components/desktop/cards/videocard/VideoCard";
import ReactPlayer from "react-player";
const SingleCryptoEventsPage = () => {
  return (
    <Fragment>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <BreadCrumbs data="" home="Home" path="Crypto Events" />
        </Grid>
        <Grid item xs={12}>
          <Stack direction="column" alignItems="flex-start" spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                Block Chain Economy istambul submit
              </Typography>
            </Stack>
            <Stack direction="column" alignItems="flex-start" spacing={3}>
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
                      27 Dec 2022
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
                      27 Dec 2022
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
                      7 Days
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
                      Istambul, Turkey
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
                      Technology Events
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
                  <Stack direction="row" alignItems="center" spacing={3.5}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        {CountDownTimer(new Date("12/12/2022"))}
                      </Typography>
                    </Stack>
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
                    Tickets
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={3.5}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
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
                    </Stack>
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
              <Stack direction="row" spacing={3}>
                <Stack direction="column" spacing={1.5} maxWidth="50%">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum. Perspiciatis minima nesciunt
                    dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit
                    doloribus tenetur fugiat, temporibus enim commodi iusto
                    libero magni deleniti quod quam consequuntur! Commodi minima
                    excepturi repudiandae velit hic maxime doloremque. Quaerat
                    provident commodi consectetur veniam similique ad earum
                    omnis ipsum saepe, voluptas, hic voluptates pariatur est
                    explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                    mollitia maiores labore suscipit quas? Nulla, placeat.
                    Voluptatem quaerat non architecto ab laudantium modi minima
                    sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus
                    quis earum veniam quasi aliquam eligendi, placeat qui
                    corporis!
                  </Typography>
                </Stack>
                <Divider
                  variant="middle"
                  flexItem
                  orientation="vertical"
                  sx={{
                    borderColor: "#0b1640",
                    borderRightWidth: 1,
                  }}
                />
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
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=rYQgy8QDEBI"
                        width="auto"
                        height={150}
                      />
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=rYQgy8QDEBI"
                        width="auto"
                        height={150}
                      />

                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=rYQgy8QDEBI"
                        width="auto"
                        height={150}
                      />
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=rYQgy8QDEBI"
                        width="auto"
                        height={150}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleCryptoEventsPage;
