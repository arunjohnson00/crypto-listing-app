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
import moment from "moment";
import { CountDownTimer } from "./countdown/CountDownTimer";
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileEventViewCardCoinPage = ({ viewcoin, data }: any) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background:
          viewcoin === true
            ? "linear-gradient(to top, #000105 , #020E38 70% )"
            : "transparent",
        width: "auto",
        borderRadius: 5,
        border: "1px solid #020E38",
      }}
    >
      <Box sx={{ marginX: 6, marginTop: 3, marginBottom: 6 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          py={2}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <Avatar
              src={`${serverAPIUrl}public/uploads/coin_logo/${data?.coin_logo}`}
              alt={data && data?.title}
              sx={{ width: 50, height: 50 }}
            />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                {data && data?.coin}
              </Typography>
              {viewcoin === true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "flex-end" }}
                  spacing={0.5}
                >
                  <Typography variant="h6" sx={{ color: "#FFFFF5" }}>
                    $0.00000000007678
                  </Typography>

                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={0}
                  >
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
              )}
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-end" }}
            spacing={0.7}
          >
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
          pt={0.5}
          spacing={10}
        >
          <Box
            sx={{
              flexGrow: 0,
              backgroundColor: "#030E46",

              borderRadius: 7,
              border: "1px solid #020E38",
            }}
            mt={2}
          >
            <Box sx={{ mx: 6, my: 3 }}>
              <Stack
                direction="row"
                sx={{ alignItems: "center" }}
                spacing={2}
                py={1}
              >
                <Stack
                  direction="column"
                  sx={{ alignItems: "center" }}
                  spacing={1.3}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#FEFEFE", fontWeight: 500 }}
                  >
                    {data &&
                      moment(new Date(data?.event_date)).format("DD MMM  YYYY")}
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
                      {moment(new Date(data?.event_date)).isBefore(
                        new Date()
                      ) === false && "Event starts in"}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#ECE055", fontWeight: 500 }}
                    >
                      {/* 7D : 12H: 33M : 45S */}
                      {moment(new Date(data?.event_date)).isBefore(
                        new Date()
                      ) === true
                        ? "Event Completed"
                        : CountDownTimer(data?.event_date)}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
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
                  {data && data?.title}
                </Typography>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={1}
                >
                  <Checkbox
                    icon={
                      <ThumbUpOffAltIcon
                        sx={{ color: "#FFFFF5", fontSize: 35 }}
                      />
                    }
                    checkedIcon={
                      <ThumbUpIcon
                        sx={{ color: "#cb9c1d", fontSize: "1.3rem" }}
                      />
                    }
                  />
                  <Typography variant="h6" sx={{ color: "#FFFFF5" }}>
                    578
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontSize: "0.78rem" }}
              >
                {data && data?.description}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          sx={{
            justifyContent: viewcoin === true ? "space-around" : "flex-end",
            fontSize: ".65rem",
            fontWeight: 500,
          }}
          pt={5}
        >
          {viewcoin === true && (
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
              <Link
                href="#"
                underline="none"
                sx={{ color: "#AEAEAE", fontWeight: 500, fontSize: "1.1rem" }}
              >
                View Coin
              </Link>
              <OpenInNewIcon sx={{ color: "#819EEA", fontSize: "1.1rem" }} />
            </Stack>
          )}
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
            }}
            spacing={0.3}
          >
            <Link
              href={data && data?.source_link}
              underline="none"
              sx={{ color: "#AEAEAE", fontWeight: 500, fontSize: "1.1rem" }}
            >
              View Proof
            </Link>
            <OpenInNewIcon sx={{ color: "#819EEA", fontSize: "1.1rem" }} />
          </Stack>
          {viewcoin === true && (
            <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.3}>
              <Link
                href="#"
                underline="none"
                sx={{ color: "#AEAEAE", fontWeight: 500, fontSize: "1.1rem" }}
              >
                View Coin
              </Link>
              <OpenInNewIcon sx={{ color: "#819EEA", fontSize: "1.1rem" }} />
            </Stack>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default MobileEventViewCardCoinPage;
