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
        borderRadius: 4,
        background: "linear-gradient(#020C25, #020518)",
        border: "3px solid #09132C",
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
              variant="square"
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
                  sx={{ color: "#FFFFFF", fontWeight: "800" }}
                >
                  {data && data?.name}
                </Typography>
              </Link>
              <Typography
                variant="caption"
                sx={{
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  fontWeight: "400",
                  fontSize: "0.62rem",
                }}
              >
                {data && data?.symbol}
              </Typography>
              {/* <Stack
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
              </Stack> */}
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
        <Divider
          sx={{ borderColor: "#09152F", borderBottomWidth: "2px" }}
          orientation="horizontal"
          flexItem
          variant="fullWidth"
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          py={3}
          px={2}
        >
          <Stack direction="column" spacing={0} alignItems="center">
            <Stack direction="column" spacing={0} alignItems="center">
              {data &&
                moment(new Date(data?.presale_start_date)).isAfter(
                  new Date()
                ) === true && (
                  <Stack direction="column" spacing={-1.5} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      Presale starts in
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#03DDCE",
                        fontSize: ".8rem",
                        fontWeight: "600",
                      }}
                    >
                      {data && (
                        <CountDownTimer data={data?.presale_start_date} />
                      )}
                    </Typography>
                  </Stack>
                )}

              {data &&
                moment(new Date()).isBetween(
                  new Date(data?.presale_start_date),
                  new Date(data?.presale_end_date)
                ) === true && (
                  <Stack direction="column" spacing={-1.5} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      Presale ends in
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#03DDCE",
                        fontSize: ".8rem",
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
                  <Stack
                    direction="column"
                    spacing={0}
                    alignItems="center"
                    pb={1.8}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      Presale status
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#03DDCE",
                        fontSize: ".8rem",
                        fontWeight: "600",
                      }}
                    >
                      Expired
                    </Typography>
                  </Stack>
                )}
            </Stack>

            <Stack direction="column" spacing={0} alignItems="center">
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                }}
              >
                Network
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#979595b5",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                }}
              >
                Network Name
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <Stack
              direction="column"
              spacing={-0.4}
              sx={{
                alignItems: "center",
                justifyContent: " space-between",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#FFFFFF", fontWeight: 500 }}
              >
                Presale Start Date
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#7D7ABB", fontWeight: 500 }}
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
                alignItems: "center",
                justifyContent: " space-between",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#FFFFFF", fontWeight: 500 }}
              >
                Presale End Date
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#7D7ABB", fontWeight: 500 }}
              >
                {data && data?.presale_end_date !== null
                  ? moment(new Date(data?.presale_end_date)).format(
                      "DD MMM YYYY"
                    )
                  : "NA"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} pt={2}>
        <Stack direction="row" spacing={2} justifyContent="space-around">
          <Link
            to={`/coin/${data && data?.slug}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0E0A2E",
                borderRadius: 10,
                px: 3,
                height: 35,
                fontSize: ".8rem",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#18133f",
                },
              }}
            >
              View Coin
            </Button>
          </Link>
          <a
            href={data?.presale_link}
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#041B3A",
                borderRadius: 10,
                px: 3,
                height: 35,
                fontSize: ".8rem",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#18133f",
                },
              }}
            >
              More info
            </Button>
          </a>
        </Stack>
      </Grid>
    </Box>
  );
};

export default PresaleCards;
