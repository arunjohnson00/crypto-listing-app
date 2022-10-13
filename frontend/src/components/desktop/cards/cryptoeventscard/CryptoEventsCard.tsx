import {
  Box,
  Stack,
  Typography,
  Chip,
  Avatar,
  Link as EventsLink,
  DialogContent,
  Dialog,
  IconButton,
} from "@mui/material";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";

const CryptoEventsCard = ({ data }: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(136deg, #000105 , #020E38 )",
        padding: 2.5,
        borderRadius: 5,
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="body2" sx={{ color: "#0DC2B5" }}>
          {data && moment(new Date(data?.event_date)).format("DD MMM YYYY")}
        </Typography>
        <Chip
          label={data && data?.category_name}
          color="primary"
          sx={{ backgroundColor: "#43C211", fontSize: "0.6125rem" }}
          size="small"
        />
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }} pt={2}>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Avatar
            variant="square"
            alt={data && data?.title}
            src={`${serverAPIUrl}public/uploads/event_proof/${data?.logo}`}
            sx={{ width: 24, height: 24 }}
          />
          <Link
            to={{
              pathname: `/crypto-events/${data?.slug}`,
            }}
            state={{ coin_id: data?.id }}
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            >
              {data && data?.title}
            </Typography>
          </Link>
        </Stack>

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
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "space-between" }} pt={2}>
        <Typography
          variant="caption"
          sx={{ color: "#9595B6", fontSize: "0.65rem" }}
        >
          {data && data?.description}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          fontSize: ".65rem",
          fontWeight: 500,
        }}
        pt={2}
      >
        <EventsLink
          href={data && data?.source_link}
          underline="none"
          target="_blank"
          sx={{ color: "#454182" }}
        >
          <Typography
            sx={{ color: "#454182", fontSize: ".65rem", fontWeight: 500 }}
          >
            {" "}
            View Source
          </Typography>
        </EventsLink>
        <Typography
          onClick={handleClickOpen}
          sx={{
            color: "#454182",
            fontSize: ".65rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          View Proof
        </Typography>
        <Link
          to={{
            pathname: `/crypto-events/${data?.slug}`,
          }}
          state={{ coin_id: data?.id }}
          style={{ textDecoration: "none", color: "#454182" }}
        >
          <Typography
            sx={{ color: "#454182", fontSize: ".65rem", fontWeight: 500 }}
          >
            {" "}
            View Event
          </Typography>
        </Link>
        <EventsLink
          href={data && data?.twitter_account}
          underline="none"
          target="_blank"
          sx={{ color: "#454182" }}
        >
          <Typography
            sx={{ color: "#454182", fontSize: ".65rem", fontWeight: 500 }}
          >
            {" "}
            Twitter
          </Typography>
        </EventsLink>
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

export default CryptoEventsCard;
