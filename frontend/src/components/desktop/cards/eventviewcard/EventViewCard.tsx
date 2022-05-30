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

const EventViewCard = () => {
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
      <Stack direction="row" sx={{ justifyContent: "space-between" }} py={2}>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 70, height: 70 }}
          />
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={0}
          >
            <Typography variant="h4" sx={{ color: "#FFFFF5" }}>
              SafeMoon
            </Typography>
            <Stack
              direction="row"
              sx={{ alignItems: "flex-end" }}
              spacing={0.5}
            >
              <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                $0.00000000007678
              </Typography>

              <Stack direction="row" sx={{ alignItems: "center" }} spacing={0}>
                <ArrowDropUpIcon
                  sx={{
                    color: "#09F90E",
                    fontSize: "2.5rem",
                    marginRight: "-8px",
                    marginBottom: "-8px",
                    padding: 0,
                    paddingTop: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5", marginBlockEnd: "-5px" }}
                >
                  0.07%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" sx={{ alignItems: "flex-end" }} spacing={0.7}>
          <Chip
            label="Listing"
            color="primary"
            sx={{
              backgroundColor: "#262FA6",
              fontSize: "0.9125rem",
              paddingX: 2,
            }}
            // size="medium"
          />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        sx={{ justifyContent: "flex-start" }}
        pt={2}
        spacing={10}
      >
        <Box
          sx={{
            flexGrow: 0,
            backgroundColor: "#030E46",
            paddingX: 6,
            paddingY: 3,
            borderRadius: 7,
            border: "1px solid #020E38",
          }}
          mt={2}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <Stack
              direction="column"
              sx={{ alignItems: "center" }}
              spacing={1.3}
            >
              <Typography
                variant="h5"
                sx={{ color: "#FEFEFE", fontWeight: 500 }}
              >
                24 JUNE 2022
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{
                  borderColor: "#35424F",
                  borderBottomWidth: 1.7,
                  width: "300px",
                }}
                flexItem
              />
              <Stack
                direction="column"
                sx={{ alignItems: "center" }}
                spacing={0}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#B7BEC6", fontWeight: 500 }}
                >
                  Event starts in
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#ECE055", fontWeight: 500 }}
                >
                  7D : 12H: 33M : 45S
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={1.5}
            pr={2}
          >
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
              <Typography
                variant="h4"
                sx={{ color: "#03FEBF", fontWeight: 500 }}
              >
                Bitsmart Lising
              </Typography>
              <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
                <Checkbox
                  icon={
                    <ThumbUpOffAltIcon
                      sx={{ color: "#FFFFF5", fontSize: 35 }}
                    />
                  }
                  checkedIcon={
                    <ThumbUpIcon sx={{ color: "#cb9c1d", fontSize: 35 }} />
                  }
                />
                <Typography variant="h4" sx={{ color: "#FFFFF5" }}>
                  578
                </Typography>
              </Stack>
            </Stack>

            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontSize: "0.78rem" }}
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
        pt={5}
      >
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#AEAEAE", fontWeight: 500, fontSize: 22 }}
          >
            View Coin
          </Link>
          <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 22 }} />
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#AEAEAE", fontWeight: 500, fontSize: 22 }}
          >
            View Proof
          </Link>
          <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 22 }} />
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#AEAEAE", fontWeight: 500, fontSize: 22 }}
          >
            View Coin
          </Link>
          <OpenInNewIcon sx={{ color: "#819EEA", fontSize: 22 }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default EventViewCard;
