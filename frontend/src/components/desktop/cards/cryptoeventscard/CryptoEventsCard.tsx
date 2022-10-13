import {
  Box,
  Stack,
  Typography,
  Chip,
  Avatar,
  Link as EventsLink,
} from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";

const CryptoEventsCard = ({ data }: any) => {
  const serverAPIUrl = process.env.REACT_APP_API_URL;
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
          <Typography
            variant="body2"
            sx={{ color: "#FFFFF5", fontWeight: "bold" }}
          >
            {data && data?.title}
          </Typography>
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
          View Source
        </EventsLink>
        <EventsLink
          href={
            data && `${serverAPIUrl}public/uploads/event_proof/${data?.proof}`
          }
          underline="none"
          target="_blank"
          sx={{ color: "#454182" }}
        >
          View Proof
        </EventsLink>
        <Link
          to={{
            pathname: `/crypto-events/${data?.slug}`,
          }}
          state={{ coin_id: data?.id }}
          style={{ textDecoration: "none", color: "#454182" }}
        >
          View Event
        </Link>
        <EventsLink
          href={data && data?.twitter_account}
          underline="none"
          target="_blank"
          sx={{ color: "#454182" }}
        >
          Twitter
        </EventsLink>
      </Stack>
    </Box>
  );
};

export default CryptoEventsCard;
