import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import moment from "moment";
import Countdown from "react-countdown";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { defaultColor } from "../../../../common/common";
import { Link } from "react-router-dom";
const serverAPIUrl = process.env.REACT_APP_API_URL;

const AirdropCard = ({ data, index }: any) => {
  const [copyValue, setCopyValue] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    data && setCopyValue(data?.contract_address);
  }, [data]);

  return (
    <Link
      to={{
        pathname: `/airdrops/${data?.slug}`,
      }}
      target="_blank"
      state={{ coin_id: data?.coin_id }}
      style={{ textDecoration: "none", color: "#FFFFFF" }}
    >
      <Box
        sx={{
          flexGrow: 1,
          background: "linear-gradient(to top, #000105 , #020E38 )",
          padding: 2.5,
          borderRadius: 5,
          border: "1px solid #2F3638",
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            {data && data?.logo === null ? (
              <Avatar
                sx={{
                  bgcolor: defaultColor[index + 1],
                  width: 35,
                  height: 35,
                }}
              >
                <Typography sx={{ fontSize: ".6rem" }}>
                  {data && data?.name[0]}
                </Typography>
              </Avatar>
            ) : (
              <Avatar
                alt={data && data?.name}
                src={`${serverAPIUrl}public/uploads/coin_logo/${data?.coin_logo}`}
                //src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 35, height: 35 }}
              />
            )}
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                variant="body2"
                sx={{ color: "#FFFFF5", fontWeight: "bold" }}
              >
                {data && data?.coin_name !== null && data?.coin_name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#FFFFF5", fontWeight: "300" }}
              >
                {data && data?.coin_symbol !== null && "$" + data?.coin_symbol}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{ alignItems: "flex-end" }}
            spacing={0.7}
          >
            {data &&
              moment(new Date(data?.start_date)).isAfter(new Date()) ===
                true && (
                <Chip
                  label="Upcoming"
                  color="primary"
                  sx={{
                    backgroundColor: "#1d91b6",
                    fontSize: "0.6125rem",
                    minWidth: 70,
                  }}
                  size="small"
                />
              )}
            {data &&
              moment(new Date()).isBetween(
                new Date(data?.start_date),
                new Date(
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")
                )
              ) === true && (
                <Chip
                  label="Live"
                  color="primary"
                  sx={{
                    backgroundColor: "#299a07",
                    fontSize: "0.6125rem",
                    minWidth: 70,
                  }}
                  size="small"
                />
              )}

            {data &&
              moment(new Date()).isAfter(
                new Date(
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")
                )
              ) === true && (
                <Chip
                  label="Expired"
                  color="primary"
                  sx={{
                    backgroundColor: "#c70a0a",
                    fontSize: "0.6125rem",
                    minWidth: 70,
                  }}
                  size="small"
                />
              )}
            {data &&
              moment(new Date(data?.start_date)).isAfter(new Date()) ===
                true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#FFFFF5", fontWeight: "300", fontSize: 9 }}
                  >
                    Starts in
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
                  >
                    {data && (
                      <Countdown
                        date={new Date(data?.start_date)}
                        renderer={({
                          days,
                          hours,
                          minutes,
                          seconds,
                          completed,
                        }) => {
                          return (
                            <span>
                              {days}D {hours}H {minutes}M {seconds}S
                            </span>
                          );
                        }}
                      />
                    )}
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(new Date()).isBetween(
                new Date(data?.start_date),
                new Date(
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")
                )
              ) === true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#FFFFF5", fontWeight: "300", fontSize: 9 }}
                  >
                    Ends in
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
                  >
                    {data && (
                      <Countdown
                        date={moment(new Date(data?.start_date))
                          .add(data?.no_of_days, "days")
                          .format("YYYY-MM-DD")}
                        renderer={({
                          days,
                          hours,
                          minutes,
                          seconds,
                          completed,
                        }) => {
                          return (
                            <span>
                              {days}D {hours}H {minutes}M {seconds}S
                            </span>
                          );
                        }}
                      />
                    )}
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(new Date()).isAfter(
                new Date(
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")
                )
              ) === true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
                  >
                    Airdrop is expired
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                moment(data?.start_date).format("YYYY-MM-DD")
              ) === true &&
              moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                moment(
                  new Date(
                    moment(new Date(data?.start_date))
                      .add(data?.no_of_days, "days")
                      .format("DD MMM YYYY")
                  )
                ).format("YYYY-MM-DD")
              ) === true && (
                <Stack
                  direction="row"
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#FFFFF5", fontWeight: "300", fontSize: 9 }}
                  >
                    Ends in
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#D1D10E", fontWeight: "500", fontSize: 13 }}
                  >
                    {data && (
                      <Countdown
                        date={moment()
                          .endOf("day")
                          .format("YYYY-MM-DD HH:mm:ss")}
                        renderer={({
                          days,
                          hours,
                          minutes,
                          seconds,
                          completed,
                        }) => {
                          return (
                            <span>
                              {days}D {hours}H {minutes}M {seconds}S
                            </span>
                          );
                        }}
                      />
                    )}
                  </Typography>
                </Stack>
              )}
          </Stack>
        </Stack>

        <Stack
          direction="row"
          sx={{ justifyContent: "flex-start" }}
          pt={2}
          spacing={1}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: 400, fontSize: 9 }}
            >
              Contract:
            </Typography>
          </Stack>

          {data?.contract_address !== null ? (
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              sx={{ alignItems: "center" }}
              spacing={0}
            >
              {" "}
              <Typography
                variant="subtitle2"
                sx={{ color: "#00E7AE", fontSize: 11 }}
              >
                {data &&
                  data?.contract_address !== null &&
                  data?.contract_address.slice(0, 12) + "........."}

                {data &&
                  data?.contract_address !== null &&
                  data?.contract_address.slice(-6)}
              </Typography>
              <CopyToClipboard
                options={{ message: "" }}
                text={copyValue}
                onCopy={() => setCopied(true)}
              >
                <IconButton
                  sx={{ paddingLeft: 1 }}
                  onClick={() => {
                    setCopyValue("0xED3F52c46280ad96485323Fb6a51242cb4CA45F5");
                  }}
                >
                  <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
                    <ContentCopyIcon
                      sx={{
                        color: `${copied ? "#23D471" : "#75787c"}`,
                        fontSize: 14,
                      }}
                    />
                  </Tooltip>
                </IconButton>
              </CopyToClipboard>
            </Stack>
          ) : (
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              sx={{ alignItems: "center" }}
              spacing={0}
              py={0.8}
            >
              {" "}
              <Typography
                variant="subtitle2"
                sx={{ color: "#FFFFFF", fontSize: 11 }}
              >
                NA
              </Typography>
            </Stack>
          )}
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{ borderColor: "#2F3638", borderBottomWidth: 1.5 }}
          flexItem
        />
        <Stack direction="row" sx={{ justifyContent: "space-between" }} pt={2}>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <CalendarMonthIcon sx={{ color: "#F5FAF9", fontSize: 22 }} />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                variant="caption"
                sx={{ color: "#5C8BB3", fontWeight: 600 }}
              >
                Start Date
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                {data &&
                  data?.start_date !== null &&
                  moment(new Date(data?.start_date)).format("DD MMM YYYY")}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <CardGiftcardIcon sx={{ color: "#F5FAF9", fontSize: 22 }} />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                variant="caption"
                sx={{ color: "#5C8BB3", fontWeight: 600 }}
              >
                Rewards
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                {data &&
                  data?.total_amount !== null &&
                  data?.total_amount?.toLocaleString()}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between" }}
          pt={2}
          pb={2}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <CalendarMonthIcon sx={{ color: "#F5FAF9", fontSize: 22 }} />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                variant="caption"
                sx={{ color: "#5C8BB3", fontWeight: 600 }}
              >
                End Date
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                {data &&
                  data?.start_date !== null &&
                  moment(new Date(data?.start_date))
                    .add(data?.no_of_days, "days")
                    .format("DD MMM YYYY")}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={2}>
            <EmojiEventsIcon sx={{ color: "#F5FAF9", fontSize: 22 }} />
            <Stack
              direction="column"
              sx={{ alignItems: "flex-start" }}
              spacing={0}
            >
              <Typography
                variant="caption"
                sx={{ color: "#5C8BB3", fontWeight: 600 }}
              >
                winners
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#FFFFF5", fontWeight: 600 }}
              >
                {data &&
                  data?.no_of_winners !== null &&
                  data?.no_of_winners?.toLocaleString()}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* <Divider
        variant="fullWidth"
        sx={{ borderColor: "#2F3638", borderBottomWidth: 1.5 }}
        flexItem
      /> */}

        {/* <Stack
        direction="row"
        sx={{
          justifyContent: "space-around",
          fontSize: ".65rem",
          fontWeight: 500,
        }}
        pt={2}
      >
        <Stack direction="row" sx={{ alignItems: "flex-end" }} spacing={0.3}>
          <TwitterIcon sx={{ color: "#02A9F1", fontSize: 18 }} />
          <Link
            href="#"
            underline="none"
            sx={{ color: "#6565BE", fontWeight: "bold", fontSize: 11.5 }}
          >
            Twitter
          </Link>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "flex-end" }} spacing={0.3}>
          <TelegramIcon sx={{ color: "#02A9F1", fontSize: 18 }} />
          <Link
            href="#"
            underline="none"
            sx={{ color: "#6565BE", fontWeight: "bold", fontSize: 11.5 }}
          >
            Telegram
          </Link>
        </Stack>

        <Stack direction="row" sx={{ alignItems: "flex-end" }} spacing={0.3}>
          <OpenInNewIcon sx={{ color: "#02A9F1", fontSize: 18 }} />
          <Link
            href="#"
            underline="none"
            sx={{ color: "#6565BE", fontWeight: "bold", fontSize: 11.5 }}
          >
            View Details
          </Link>
        </Stack>
      </Stack> */}
      </Box>
    </Link>
  );
};

export default AirdropCard;
