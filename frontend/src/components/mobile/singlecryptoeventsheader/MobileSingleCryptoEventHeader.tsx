import {
  Avatar,
  Box,
  Stack,
  Typography,
  Link as EventsLink,
  DialogContent,
  IconButton,
  Dialog,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import moment from "moment";
import { CountDownTimer } from "./countdown/CountDownTimer";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileSingleCryptoEventHeader = ({ data }: any) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={
        {
          //background: "linear-gradient(to bottom, #07113F 0%, #01061A 100%)",
          // borderRadius: 6,
          //border: "1px solid #07113F",
        }
      }
      width="100%"
    >
      <Stack
        direction="column"
        spacing={2}
        alignItems="flex-start"
        //px={3}
        py={1}
      >
        <Stack
          direction="column"
          spacing={0}
          alignItems="flex-start"
          //px={3}
          py={2}
        >
          <Stack direction="column" spacing={1.5} alignItems="flex-start">
            <Avatar
              alt="Remy Sharp"
              src={`${serverAPIUrl}public/uploads/event_proof/${data?.logo}`}
              sx={{ width: 45, height: 45 }}
            />

            <Typography
              variant="caption"
              sx={{ color: "#0765a7", fontWeight: "bold" }}
            >
              <span
                style={{
                  fontSize: ".65rem",
                  color: "#686767",
                  fontWeight: 400,
                }}
              >
                Event Type:
              </span>{" "}
              {data && data?.category_name}
            </Typography>
          </Stack>

          <Stack direction="column" spacing={1} alignItems="flex-start">
            <Stack direction="column" spacing={0} alignItems="flex-start">
              <Link
                to={{
                  pathname: `/crypto-events/${data?.slug}`,
                }}
                state={{ coin_id: data?.id }}
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                <Typography
                  sx={{ fontSize: "1.4rem", color: "#FFFFFF", fontWeight: 600 }}
                >
                  {data && data?.title}
                </Typography>
              </Link>
              {data && data?.is_online === 1 ? (
                <Typography
                  variant="caption"
                  sx={{ color: "#09ae95", fontWeight: 500 }}
                >
                  Online Event
                </Typography>
              ) : (
                data &&
                data?.is_online === 2 && (
                  <Typography
                    variant="caption"
                    sx={{ color: "#a28b18", fontWeight: 500 }}
                  >
                    Offline Event
                  </Typography>
                )
              )}
              {data && data?.is_online === 2 && (
                <Typography
                  variant="caption"
                  sx={{ color: "#18a252", fontWeight: 500 }}
                >
                  {data && data?.venue}
                </Typography>
              )}
              <Typography
                sx={{ fontSize: "1.3rem", color: "#01d39a", fontWeight: 500 }}
              >
                {data &&
                  moment(new Date(data?.event_date)).format("DD MMM YYYY")}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontSize: ".85rem",
                color: "#757D9E",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Added{" "}
              {data && moment(new Date(data?.created_at)).format("DD MMM YYYY")}
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              alignItems="flex-start"
              py={1}
              width="100%"
            >
              <Box
                sx={{
                  backgroundColor: "#01061A",
                  borderRadius: 5,
                  border: "1px solid #16245F",
                  width: "100%",
                }}
              >
                <Stack direction="column" spacing={0.5} p={2}>
                  {data &&
                    moment(new Date(data?.event_date)).isAfter(new Date()) ===
                      true && (
                      <Stack
                        direction="column"
                        sx={{ alignItems: "center" }}
                        spacing={0.5}
                      >
                        <Typography
                          sx={{
                            fontSize: ".85rem",
                            color: "#585F7E",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          Starts In
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#D1D10E",
                            fontWeight: "500",
                            fontSize: ".9rem",
                          }}
                        >
                          {/* {CountDownTimer(moment(new Date(data?.event_date)))} */}
                        </Typography>
                      </Stack>
                    )}

                  {data &&
                    moment(new Date()).isBetween(
                      new Date(data?.event_date),
                      new Date(data?.end_date)
                    ) === true && (
                      <Stack
                        direction="column"
                        sx={{ alignItems: "center" }}
                        spacing={0.5}
                      >
                        <Typography
                          sx={{
                            fontSize: ".85rem",
                            color: "#585F7E",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          Ends In
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#D1D10E",
                            fontWeight: "500",
                            fontSize: ".9rem",
                          }}
                        >
                          {/* {CountDownTimer(moment(new Date(data?.end_date)))} */}
                        </Typography>
                      </Stack>
                    )}

                  {data &&
                    moment(new Date()).isAfter(new Date(data?.end_date)) ===
                      true && (
                      <Stack
                        direction="column"
                        sx={{ alignItems: "center" }}
                        spacing={0.5}
                      >
                        <Typography
                          sx={{
                            fontSize: ".85rem",
                            color: "#585F7E",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          Event expired
                        </Typography>
                      </Stack>
                    )}
                </Stack>
              </Box>
            </Stack>
            <Typography
              sx={{
                fontSize: ".8rem",
                color: "#FFFFFF",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              {data && data?.description}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="space-around"
          width="100%"
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <EventsLink
              href={data && data?.source_link}
              underline="none"
              target="_blank"
              sx={{ color: "#454182" }}
            >
              <Typography
                sx={{
                  fontSize: ".8rem",
                  color: "#00ACC3",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                View Source
              </Typography>
            </EventsLink>
            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 18 }} />
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Typography
              sx={{
                fontSize: ".8rem",
                color: "#00ACC3",
                fontWeight: 600,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
            >
              View Proof
            </Typography>

            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 18 }} />
          </Stack>
          {/* <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Link
              to={{
                pathname: `/crypto-events/${data?.slug}`,
              }}
              state={{ coin_id: data?.id }}
              style={{ textDecoration: "none", color: "#454182" }}
            >
              <Typography
                sx={{
                  fontSize: ".8rem",
                  color: "#00ACC3",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                View Event
              </Typography>
            </Link>
            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 18 }} />
          </Stack> */}
        </Stack>
      </Stack>
      <div>
        <Dialog
          open={open}
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent sx={{ background: "#000011", padding: 0 }}>
            <Box sx={{ position: "absolute", width: "100%" }}>
              <Box sx={{ position: "relative", top: 3, right: 3 }}>
                <Stack direction="row" justifyContent="flex-end" pb={1}>
                  <IconButton
                    onClick={handleClose}
                    aria-label="delete"
                    sx={{ backgroundColor: "#FFFFFF" }}
                  >
                    <HighlightOffSharpIcon sx={{ color: "#000011" }} />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
            <img
              src={
                data &&
                `${serverAPIUrl}public/uploads/event_proof/${data?.proof}`
              }
              alt={data && data?.title}
              style={{ width: "100%" }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </Box>
  );
};

export default MobileSingleCryptoEventHeader;
