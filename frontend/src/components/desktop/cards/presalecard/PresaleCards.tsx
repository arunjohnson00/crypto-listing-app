import { useState } from "react";
import {
  Grid,
  Stack,
  Box,
  Avatar,
  Typography,
  Divider,
  Chip,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PresaleCardChip from "../../presalecardchip/PresaleCardChip";
import ToolTipImage from "../../../../assets/singlepagecoin/tool-tip.png";
import CoinGeckoImage from "../../../../assets/singlepagecoin/coingecko.png";
import CoinMarketcapImage from "../../../../assets/singlepagecoin/coinmarketcap.png";
import BscScanImage from "../../../../assets/singlepagecoin/bscscan.png";
import FacebookImage from "../../../../assets/singlepagecoin/facebook.png";
import InstagramImage from "../../../../assets/singlepagecoin/instagram.png";
import RedditImage from "../../../../assets/singlepagecoin/reddit.png";
import TelegramImage from "../../../../assets/singlepagecoin/telegram.png";
import TwitterImage from "../../../../assets/singlepagecoin/twitter.png";
import SourcecodeImage from "../../../../assets/singlepagecoin/sourcecode.png";
import WhitepaperImage from "../../../../assets/singlepagecoin/Whitepaper.png";
import DocsImage from "../../../../assets/singlepagecoin/doc.png";
import LinkImage from "../../../../assets/singlepagecoin/link.png";
import moment from "moment";
import CountDownTimer from "./countdown/CountDownTimer";
import { Link } from "react-router-dom";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const PresaleCards = ({ data }: any) => {
  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
  );
  const [copied, setCopied] = useState(false);
  return (
    <Box
      sx={{
        borderRadius: 2,
        backgroundColor: "#010C24",
      }}
      px={2}
      py={2}
    >
      <Grid item xs={12} pb={2}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Avatar
              alt={data && data?.name}
              src={`${serverAPIUrl}public/uploads/coin_logo/${data?.logo}`}
              sx={{ width: 40, height: 40 }}
            />
            <Stack direction="column" spacing={-0.3}>
              <Link
                to={`/coin/${data && data?.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: "800" }}
                >
                  {data && data?.name}
                </Typography>
              </Link>
              <Typography
                variant="caption"
                sx={{
                  color: "#39D8ED",
                  textTransform: "uppercase",
                  fontWeight: "400",
                  fontSize: "0.62rem",
                }}
              >
                {data && data?.symbol}
              </Typography>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={0.5}
                pt={1}
              >
                <PresaleCardChip src={FacebookImage} title="Facebook" />

                <PresaleCardChip src={InstagramImage} title="Instagram" />
                <PresaleCardChip src={RedditImage} title="Reddit" />
                <PresaleCardChip src={TwitterImage} title="Twitter" />
                <PresaleCardChip src={TelegramImage} title="Telegram" />
                <PresaleCardChip src={LinkImage} title="Link" />
                <PresaleCardChip src={DocsImage} title="Docs" />

                <PresaleCardChip src={SourcecodeImage} title="Source" />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={0} sx={{ alignItems: "center" }}>
            {data &&
              moment(new Date(data?.presale_start_date)).isAfter(new Date()) ===
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
                new Date(data?.presale_start_date),
                new Date(data?.presale_end_date)
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
              moment(new Date()).isAfter(new Date(data?.presale_end_date)) ===
                true && (
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
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} py={0}>
        <Divider sx={{ borderColor: "#184b7d" }} />
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          py={1}
        >
          <Stack direction="column" spacing={0}>
            {data &&
              moment(new Date(data?.presale_start_date)).isAfter(new Date()) ===
                true && (
                <Stack direction="column" spacing={0}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.775rem",
                      fontWeight: "500",
                    }}
                  >
                    Presale starts in
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#32B3BE",
                      fontSize: ".7rem",
                      fontWeight: "600",
                    }}
                  >
                    {data && <CountDownTimer data={data?.presale_start_date} />}
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(new Date()).isBetween(
                new Date(data?.presale_start_date),
                new Date(data?.presale_end_date)
              ) === true && (
                <Stack direction="column" spacing={0}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.775rem",
                      fontWeight: "500",
                    }}
                  >
                    Presale ends in
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#32B3BE",
                      fontSize: ".7rem",
                      fontWeight: "600",
                    }}
                  >
                    {data && (
                      <CountDownTimer
                        data={moment(new Date(data?.presale_end_date))}
                      />
                    )}
                  </Typography>
                </Stack>
              )}

            {data &&
              moment(new Date()).isAfter(new Date(data?.presale_end_date)) ===
                true && (
                <Stack direction="column" spacing={0}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.775rem",
                      fontWeight: "500",
                    }}
                  >
                    Presale expired
                  </Typography>
                </Stack>
              )}
          </Stack>
          <a
            href={data?.presale_link}
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5744F2",
                borderRadius: 10,
                height: 25,
                fontSize: ".6rem",
                textTransform: "capitalize",
              }}
            >
              View Page
            </Button>
          </a>
        </Stack>

        <Divider sx={{ borderColor: "#184b7d" }} />
      </Grid>

      <Grid item xs={12}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
          py={2}
        >
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 22, height: 22 }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#ffffffa1",
                fontSize: "0.67rem",
                fontWeight: "500",
              }}
            >
              Binance Smart Chain
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "row", sm: "row", md: "row" }}
            sx={{ alignItems: "center" }}
            spacing={0}
          >
            {" "}
            <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
              {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(0, 7) +
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
                      color: `${copied ? "#23D471" : "#23D471"}`,
                      fontSize: 15,
                    }}
                  />
                </Tooltip>
              </IconButton>
            </CopyToClipboard>
          </Stack>
        </Stack>
        <Divider sx={{ borderColor: "#184b7d" }} />
      </Grid>

      <Grid item xs={12} py={0}>
        <Stack
          direction="column"
          spacing={0}
          sx={{
            justifyContent: "flex-start",
          }}
          pt={0}
          pb={1}
        >
          <Grid item xs={12} py={1}>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                alignItems: "center",
                justifyContent: " flex-start",
              }}
            >
              <Stack
                direction="column"
                spacing={-0.4}
                sx={{
                  alignItems: "flex-start",
                  justifyContent: " space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFFF", fontWeight: "Bold" }}
                >
                  Presale Start Date
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#3FE483", fontWeight: "Bold" }}
                >
                  {data && data?.presale_start_date !== null
                    ? moment(new Date(data?.presale_start_date)).format(
                        "DD MMM YYYY"
                      )
                    : "NA"}
                </Typography>
              </Stack>
              <Stack
                direction="column"
                spacing={-0.4}
                sx={{
                  alignItems: "flex-start",
                  justifyContent: " space-between",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#FFFFFF", fontWeight: "Bold" }}
                >
                  Presale End Date
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#3FE483", fontWeight: "Bold" }}
                >
                  {data && data?.presale_end_date !== null
                    ? moment(new Date(data?.presale_end_date)).format(
                        "DD MMM YYYY"
                      )
                    : "NA"}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
};

export default PresaleCards;
