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
  CircularProgress,
  Rating,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
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
import LeaderBoardCardChip from "../../leaderboardcardchip/LeaderBoardCardChip";

const LeaderBoardCard = () => {
  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
  );
  const [copied, setCopied] = useState(false);
  return (
    <Box
      sx={{
        borderRadius: 8,
        backgroundColor: "#020011",
        border: "1px solid #151345",
      }}
      px={2}
      py={2}
      m={1}
    >
      <Grid item xs={12} pb={1}>
        <Stack
          direction="row"
          spacing={-1}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
          width="100%"
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "flex-start" }}
            width="100%"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60 }}
            />
            <Stack direction="column" spacing={1} width="100%">
              <Stack
                direction="row"
                spacing={0.7}
                sx={{ alignItems: "center" }}
              >
                <Chip
                  label="Rank #1"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
                    height: "20px",
                    fontSize: "0.55rem",

                    borderRadius: 2,
                    fontWeight: 600,
                  }}
                />

                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 16, height: 16 }}
                />

                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: "400", fontSize: ".5rem" }}
                >
                  Binance Smart Chain
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "Capitalize",
                  fontWeight: "500",
                  // marginBlockEnd: 0,
                  // marginBlockStart: 0,
                  fontSize: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Avalanche
              </Typography>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent="space-between"
                width={"100%"}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#01EEB9",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  Avax
                </Typography>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  spacing={0.5}
                >
                  {" "}
                  <Typography variant="caption" sx={{ color: "#FFFFF5" }}>
                    {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(
                      0,
                      7
                    ) +
                      "........." +
                      "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".slice(-6)}
                  </Typography>
                  <CopyToClipboard
                    options={{ message: "" }}
                    text={copyValue}
                    onCopy={() => setCopied(true)}
                  >
                    <IconButton
                      sx={{ padding: 0 }}
                      onClick={() => {
                        setCopyValue(
                          "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
                        );
                      }}
                    >
                      <Tooltip
                        title={`${copied ? "Copied" : "Copy this Token"}`}
                      >
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
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} py={0}>
        <Divider sx={{ borderColor: "#151345" }} />

        <Box
          sx={{ backgroundColor: "#000000", borderRadius: 5, padding: 1.5 }}
          my={1}
        >
          <Stack
            direction="row"
            sx={{ alignItems: "flex-start", justifyContent: "space-around" }}
            width="100%"
          >
            <Stack
              direction="row"
              spacing={0.4}
              sx={{ alignItems: "center" }}
              py={1}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  fontWeight: "400",
                  fontSize: ".5rem",
                }}
              >
                Trust Score
              </Typography>{" "}
              <Tooltip title="Delete">
                <Avatar
                  src={ToolTipImage}
                  sx={{ width: 8, height: 8 }}
                ></Avatar>
              </Tooltip>
            </Stack>

            <Stack
              direction="row"
              spacing={1.2}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              py={1}
            >
              <CircularProgress
                variant="determinate"
                value={76}
                sx={{ color: "#54FFCD" }}
                size={25}
                thickness={7}
              />

              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "flex-end", justifyContent: "space-between" }}
              >
                <Stack
                  direction="row"
                  spacing={0.4}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    75
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4C4C4C",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                  >
                    / 100
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    color: "#00E9B8",
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: ".65rem",
                  }}
                >
                  Excellent
                </Typography>
              </Stack>
            </Stack>
            <Divider
              variant="middle"
              orientation="vertical"
              flexItem
              sx={{ borderColor: "#5A5A5A" }}
            />
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "center", justifyContent: "space-between" }}
              py={1}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 20, height: 20 }}
              />

              <Stack
                direction="column"
                spacing={-1}
                sx={{
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  direction="row"
                  spacing={0.4}
                  sx={{ alignItems: "center" }}
                  py={1}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      fontWeight: "400",
                      fontSize: ".5rem",
                    }}
                  >
                    Security Score
                  </Typography>{" "}
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 8, height: 8 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="row"
                  spacing={0.4}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      fontSize: ".8rem",
                    }}
                  >
                    75
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4C4C4C",
                      textTransform: "capitalize",
                      fontWeight: "500",
                      fontSize: ".8rem",
                    }}
                  >
                    / 100
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
          <Typography
            sx={{
              color: "#737276",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: ".55rem",
            }}
          >
            Highlight and Trust Score details
          </Typography>{" "}
          <Tooltip title="Delete">
            <Avatar src={ToolTipImage} sx={{ width: 8, height: 8 }}></Avatar>
          </Tooltip>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "flex-start" }}
          pt={1}
        >
          <Stack
            direction="column"
            spacing={0.4}
            sx={{ alignItems: "flex-start", flexGrow: 1, minWidth: 150 }}
          >
            <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
              <IconButton sx={{ padding: 0 }}>
                <CheckCircleIcon sx={{ color: "#41AA45", fontSize: ".8rem" }} />
              </IconButton>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: ".55rem",
                }}
              >
                Contracted audited By Cerik
              </Typography>{" "}
            </Stack>
            <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
              <IconButton sx={{ padding: 0 }}>
                <CheckCircleIcon sx={{ color: "#41AA45", fontSize: ".8rem" }} />
              </IconButton>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: ".55rem",
                }}
              >
                Ownership Renounced
              </Typography>{" "}
            </Stack>
            <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
              <IconButton sx={{ padding: 0 }}>
                <CheckCircleIcon sx={{ color: "#41AA45", fontSize: ".8rem" }} />
              </IconButton>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: ".55rem",
                }}
              >
                KYC completed
              </Typography>{" "}
            </Stack>
            <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
              <IconButton sx={{ padding: 0 }}>
                <CheckCircleIcon sx={{ color: "#41AA45", fontSize: ".8rem" }} />
              </IconButton>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: ".55rem",
                }}
              >
                Large Marketcap {"(Top: 25%)"}
              </Typography>{" "}
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#5A5A5A" }}
          />
          <Stack
            direction="column"
            spacing={0.4}
            sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
              <IconButton sx={{ padding: 0 }}>
                <CancelIcon sx={{ color: "#E84142", fontSize: ".8rem" }} />
              </IconButton>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: ".55rem",
                }}
              >
                Source doesnot contain a fee modifier
              </Typography>{" "}
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "flex-start" }}
          py={1}
        >
          <Stack
            direction="column"
            spacing={0.4}
            sx={{ alignItems: "flex-start", flexGrow: 1, minWidth: 150 }}
          >
            <Stack direction="row" spacing={0.4} sx={{ alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#737276",
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: ".55rem",
                }}
              >
                Badges & Honours
              </Typography>{" "}
              <Tooltip title="Delete">
                <Avatar
                  src={ToolTipImage}
                  sx={{ width: 8, height: 8 }}
                ></Avatar>
              </Tooltip>
            </Stack>
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
              <LeaderBoardCardChip src={FacebookImage} title="Facebook" />

              <LeaderBoardCardChip src={InstagramImage} title="Instagram" />
              <LeaderBoardCardChip src={RedditImage} title="Reddit" />
              <LeaderBoardCardChip src={TwitterImage} title="Twitter" />
              <LeaderBoardCardChip src={TelegramImage} title="Telegram" />
              <LeaderBoardCardChip src={LinkImage} title="Link" />
              <LeaderBoardCardChip src={DocsImage} title="Docs" />

              <LeaderBoardCardChip src={SourcecodeImage} title="Source" />
            </Stack>
          </Stack>
          <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{ borderColor: "#5A5A5A" }}
          />
          <Stack
            direction="column"
            spacing={0.4}
            sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "flex-start" }}
            >
              <Stack
                direction="column"
                spacing={0.4}
                sx={{ alignItems: "flex-start" }}
              >
                <Stack
                  direction="row"
                  spacing={0.4}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    sx={{
                      color: "#737276",
                      textTransform: "capitalize",
                      fontWeight: 600,
                      fontSize: ".55rem",
                    }}
                  >
                    Rating
                  </Typography>{" "}
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 8, height: 8 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Stack
                  direction="column"
                  spacing={0}
                  sx={{ alignItems: "flex-start" }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      fontWeight: 600,
                      fontSize: ".6rem",
                    }}
                  >
                    256
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                      fontWeight: 600,
                      fontSize: ".6rem",
                    }}
                  >
                    Reviews
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "center" }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "#FFFFF5", fontWeight: "400" }}
                  >
                    4.9
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 8, height: 8 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Rating
                  name="size-small"
                  defaultValue={5}
                  size="small"
                  readOnly
                  sx={{ fontSize: ".6rem" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Box>
  );
};

export default LeaderBoardCard;
