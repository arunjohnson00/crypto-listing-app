import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Avatar,
  Link,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const AirdropCard = () => {
  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
  );
  const [copied, setCopied] = useState(false);
  return (
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
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 35, height: 35 }}
          />
          <Stack
            direction="column"
            sx={{ alignItems: "flex-start" }}
            spacing={0}
          >
            <Typography
              variant="body2"
              sx={{ color: "#FFFFF5", fontWeight: "bold" }}
            >
              SafeMoon
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#FFFFF5", fontWeight: "300" }}
            >
              SFM
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" sx={{ alignItems: "flex-end" }} spacing={0.7}>
          <Chip
            label="Airdrop is live"
            color="primary"
            sx={{ backgroundColor: "#43C211", fontSize: "0.6125rem" }}
            size="small"
          />
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
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
              1Day 24 Min 16 Sec
            </Typography>
          </Stack>
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
            {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(0, 14) +
              "........." +
              "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".slice(-6)}
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
              24 May 2022
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
              10,000,00000000
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
              24 June 2022
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
              10,000
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider
        variant="fullWidth"
        sx={{ borderColor: "#2F3638", borderBottomWidth: 1.5 }}
        flexItem
      />

      <Stack
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
      </Stack>
    </Box>
  );
};

export default AirdropCard;
