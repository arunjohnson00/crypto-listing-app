import {
  Box,
  Stack,
  Typography,
  Chip,
  Avatar,
  Link,
  Divider,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MobileEventViewCard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "linear-gradient(to top, #000105 , #020E38 70% )",
        paddingX: 6,
        paddingTop: 3,
        paddingBottom: 6,
        borderRadius: 5,
        border: "1px solid #020E38",
      }}
    >
      <Stack
        direction="column"
        sx={{ justifyContent: "space-between" }}
        py={2}
        px={2}
        spacing={2}
      >
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          spacing={2}
        >
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={0}
          >
            <Typography variant="h6" sx={{ color: "#07A69B" }}>
              28 May 2022
            </Typography>
          </Stack>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-end" }}
            spacing={0.7}
          >
            <Chip
              label="Release"
              color="primary"
              sx={{
                backgroundColor: "#43C211",
                fontSize: "0.7125rem",
                paddingX: 2,
                fontWeight: 500,
              }}
              // size="medium"
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          spacing={2}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1.5}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 35, height: 35 }}
            />
            <Typography variant="h6" sx={{ color: "#FFFFF5" }}>
              SafeMoon
            </Typography>
          </Stack>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-end" }}
            spacing={0.7}
          >
            <Typography
              variant="h6"
              sx={{ color: "#0CC664", fontSize: "1rem" }}
            >
              Mainnet Release
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{ justifyContent: "flex-start" }}
        pt={0.5}
        spacing={10}
        px={2}
      >
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={1.5}
            pr={2}
          >
            <Typography
              variant="caption"
              sx={{ color: "#5E5873", fontSize: "0.78rem", fontWeight: 500 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio,
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-around",
          fontSize: ".65rem",
          fontWeight: 500,
        }}
        pt={3}
        pb={3}
      >
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#302A4F", fontWeight: 600, fontSize: ".8rem" }}
          >
            View Source
          </Link>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#302A4F", fontWeight: 600, fontSize: ".8rem" }}
          >
            View Proof
          </Link>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#302A4F", fontWeight: 600, fontSize: ".8rem" }}
          >
            View Event
          </Link>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#302A4F", fontWeight: 600, fontSize: ".8rem" }}
          >
            Twitter
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileEventViewCard;
