import { useEffect, useState } from "react";
import moment from "moment";
import {
  Grid,
  Stack,
  Typography,
  Avatar,
  Button,
  Box,
  Divider,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Chip from "@mui/material/Chip";
import MoodIcon from "@mui/icons-material/Mood";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShowMoreMenu from "../menu/showmore/ShowMoreMenu";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { RWebShare } from "react-web-share";
import { useTheme } from "@mui/material/styles";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import CoinGeckoImage from "../../../assets/singlepagecoin/coingecko.png";
import CoinMarketcapImage from "../../../assets/singlepagecoin/coinmarketcap.png";
import BscScanImage from "../../../assets/singlepagecoin/bscscan.png";
import FacebookImage from "../../../assets/singlepagecoin/facebook.png";
import InstagramImage from "../../../assets/singlepagecoin/instagram.png";
import RedditImage from "../../../assets/singlepagecoin/reddit.png";
import TelegramImage from "../../../assets/singlepagecoin/telegram.png";
import TwitterImage from "../../../assets/singlepagecoin/twitter.png";

import SourcecodeImage from "../../../assets/singlepagecoin/sourcecode.png";
import WhitepaperImage from "../../../assets/singlepagecoin/Whitepaper.png";
import DocsImage from "../../../assets/singlepagecoin/doc.png";

import LinkImage from "../../../assets/singlepagecoin/link.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import SingleCoinChip from "../coinpagechip/SingleCoinChip";
import SocialCounterWithGraphCard from "../cards/socialcounterwithgraphcard/SocialCounterWithGraphCard";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const SingleCoinHeader = ({ coinData }: any) => {
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  const [copyValue, setCopyValue] = useState(
    coinData &&
      coinData?.address !== null &&
      coinData?.address !== "" &&
      coinData?.address
  );
  const [copied, setCopied] = useState(false);
  const [showMoreAnchorEl, setShowMoreAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const open = Boolean(showMoreAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setShowMoreAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setShowMoreAnchorEl(null);
  };

  useEffect(() => {
    coinData &&
      coinData?.address !== null &&
      coinData?.address !== "" &&
      setCopyValue(coinData?.address);
  }, []);

  return (
    <Fragment>
      <Grid xs={12}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          px={0}
          sx={{ alignItems: "center" }}
        >
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} py={2}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={4}
              sx={{ alignItems: "center" }}
            >
              <Avatar
                alt={coinData?.name}
                src={`${serverAPIUrl}public/uploads/coin_logo/${coinData?.logo}`}
                sx={{ borderRadius: 0, width: 120, height: 120 }}
              />
              <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
                {coinData &&
                  coinData?.presale_start_date !== null &&
                  coinData?.presale_start_date !== "" && (
                    <Typography
                      variant="caption"
                      sx={{ color: "#FFFFF5" }}
                      textAlign={{ xs: "center", sm: "center", md: "left" }}
                    >
                      Presale starts in:
                      <span style={{ color: "#BDD645" }}>
                        {" "}
                        00days 08 Hours 24
                      </span>
                    </Typography>
                  )}

                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  spacing={1}
                  sx={{ alignItems: "flex-end" }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "#FFFFF5", fontWeight: 800 }}
                    textAlign={{ xs: "center", sm: "center", md: "left" }}
                  >
                    {coinData && coinData?.name}
                  </Typography>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    spacing={0.5}
                    sx={{ alignItems: "center" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#FFFFF5",
                        fontWeight: 400,
                        textTransform: "uppercase",
                      }}
                      textAlign={{ xs: "center", sm: "center", md: "left" }}
                    >
                      {coinData && coinData?.symbol !== null
                        ? coinData?.symbol
                        : "--"}
                    </Typography>
                    <Rating
                      name="size-large"
                      defaultValue={1}
                      size="large"
                      max={1}
                      icon={<StarRoundedIcon sx={{ color: "#FAAF00" }} />}
                      emptyIcon={
                        <StarBorderRoundedIcon sx={{ color: "#FFFFF5" }} />
                      }
                    />
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  spacing={2}
                  sx={{ alignItems: "center" }}
                  pt={0.5}
                >
                  <Typography variant="h4" sx={{ color: "#FFFFF5" }}>
                    {coinData && coinData?.current_price !== null ? (
                      coinData && Math.abs(coinData?.current_price) > 1 ? (
                        "$" + parseFloat(coinData?.current_price).toFixed(4)
                      ) : (
                        "$" + parseFloat(coinData?.current_price).toFixed(10)
                      )
                    ) : (
                      <span style={{ color: "#7a7a7a" }}>--</span>
                    )}
                  </Typography>
                  {Math.sign(parseInt(coinData?.percent_change_1h)) === -1 ? (
                    <Chip
                      icon={<ArrowDropDownIcon />}
                      label={`${parseFloat(
                        coinData && coinData?.percent_change_1h
                      )
                        .toFixed(2)
                        .replace("-", "")}%`}
                      color="error"
                      sx={{
                        height: "24px",
                        borderRadius: "4px",
                        backgroundColor: "#ff3708",
                        paddingX: 0,
                        "& .MuiChip-label": {
                          padding: 0.4,
                        },
                      }}
                    />
                  ) : (
                    <Chip
                      icon={<ArrowDropUpIcon />}
                      label={`${parseFloat(
                        coinData && coinData?.percent_change_1h
                      )
                        .toFixed(2)
                        .replace("-", "")}%`}
                      color="success"
                      sx={{
                        height: "24px",
                        borderRadius: "4px",
                        backgroundColor: "#05BC34",
                        paddingX: 0,
                        "& .MuiChip-label": {
                          padding: 0.4,
                        },
                      }}
                    />
                  )}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} py={2}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={3}
            >
              <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={1.5}
                  sx={{ alignItems: "center", justifyContent: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    startIcon={<MoodIcon />}
                    sx={{
                      backgroundColor: "#6252E7",
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                    }}
                  >
                    Buy on pancakeswap
                  </Button>

                  <Chip
                    label={`${
                      coinData && coinData?.vote !== null && coinData?.vote
                    } Votes`}
                    sx={{
                      height: "36px",
                      borderRadius: "4px",
                      color: "#FFFFF5",
                      backgroundColor: "#13133B",
                      fontSize: "1.025rem",
                      "&.MuiChip-deleteIcon": {
                        color: "#FFFFF5",
                      },
                    }}
                    onDelete={() => {}}
                    deleteIcon={
                      <ArrowUpwardRoundedIcon
                        sx={{
                          color: "rgb(255 255 255 / 72%)",
                          "&.MuiChip-deleteIcon": {
                            color: "#FFFFF5",
                          },
                        }}
                      />
                    }
                  />
                </Stack>
              </Grid>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={0.5}
                sx={{
                  alignItems: "flex-start",
                }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "flex-end",
                }}
              >
                <Stack
                  direction="row"
                  spacing={0}
                  alignItems="center"
                  sx={{ flexWrap: "wrap" }}
                >
                  {coinData && coinData?.badges?.vote?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.vote?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.vote?.active_icon
                      }`}
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 0.5,
                        mb: 0.5,
                      }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.vote?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.vote?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}
                  {coinData && coinData?.badges?.airdrop?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.airdrop?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.airdrop?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.airdrop?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.airdrop?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}

                  {coinData && coinData?.badges?.ama?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.ama?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.ama?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.ama?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.ama?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}

                  {coinData && coinData?.badges?.audit?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.audit?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.audit?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.audit?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.audit?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}

                  {coinData && coinData?.badges?.kyc?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.kyc?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.kyc?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.kyc?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.kyc?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}
                  {coinData && coinData?.badges?.liquidity?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.liquidity?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.liquidity?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.liquidity?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.liquidity?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}

                  {coinData && coinData?.badges?.ownership?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.ownership?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.ownership?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.ownership?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.ownership?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}

                  {coinData && coinData?.badges?.presale?.status === 1 ? (
                    <Avatar
                      alt={coinData && coinData?.badges?.presale?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.presale?.active_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.badges?.presale?.name}
                      src={`${serverAPIUrl}public/uploads/badges/${
                        coinData && coinData?.badges?.presale?.inactive_icon
                      }`}
                      sx={{ width: 25, height: 25, mr: 0.5, mb: 0.5 }}
                    />
                  )}
                </Stack>

                <Box>
                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    spacing={1}
                    sx={{ alignItems: "center" }}
                    justifyContent={{
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "flex-start",
                    }}
                  >
                    <Avatar
                      src={CoinGeckoImage}
                      sx={{ width: 24, height: 24 }}
                    ></Avatar>
                    <Avatar
                      src={CoinMarketcapImage}
                      sx={{ width: 24, height: 24 }}
                    ></Avatar>
                    <RWebShare
                      data={{
                        text: "Test Share Text",
                        url: "http://localhost:3000/coin",
                        title: "Coinxhigh",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <IconButton sx={{ padding: 0 }}>
                        <ShareOutlinedIcon sx={{ color: "#575385" }} />
                      </IconButton>
                    </RWebShare>
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            borderTop: "1px solid #292654",
            borderBottom: "1px solid #292654",
          }}
          py={2}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#19ffb0",
                    fontSize: "0.60rem",
                  }}
                >
                  Listed
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Typography
                variant="subtitle2"
                sx={{ color: "#FFFFF5", fontSize: "0.75rem" }}
              >
                {coinData && coinData?.approved_at !== null
                  ? moment(new Date(coinData?.approved_at)).fromNow()
                  : "NA"}
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />

            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#19ffb0", fontSize: "0.60rem" }}
                >
                  Network
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={0}
              >
                {" "}
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFFFF5", fontSize: "0.75rem" }}
                >
                  {coinData && coinData?.network !== null
                    ? coinData?.network
                    : "NA"}
                </Typography>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ padding: 0 }}
                >
                  <MoreVertIcon sx={{ color: "#75787c" }} />
                </IconButton>
                <ShowMoreMenu
                  showMoreAnchorEl={showMoreAnchorEl}
                  open={open}
                  handleClose={handleClose}
                />
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />

            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#19ffb0", fontSize: "0.60rem" }}
                >
                  Token contract address
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={0}
              >
                {" "}
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFFFF5", fontSize: "0.75rem" }}
                >
                  {`${
                    coinData &&
                    coinData?.address !== null &&
                    coinData?.address !== ""
                      ? coinData?.address.substring(0, 14)
                      : "NA"
                  } 
                      .........
                      ${
                        coinData &&
                        coinData?.address !== null &&
                        coinData?.address !== ""
                          ? coinData?.address.slice(-6)
                          : "NA"
                      }`}
                </Typography>
                <CopyToClipboard
                  options={{ message: "" }}
                  text={copyValue}
                  onCopy={() => setCopied(true)}
                >
                  <IconButton
                    sx={{ paddingLeft: 1 }}
                    onClick={() => {
                      setCopyValue(
                        coinData &&
                          coinData?.address !== null &&
                          coinData?.address !== "" &&
                          coinData?.address
                      );
                    }}
                  >
                    <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
                      <ContentCopyIcon
                        sx={{
                          color: `${copied ? "#19ffb0" : "#19ffb0"}`,
                          fontSize: ".9rem",
                        }}
                      />
                    </Tooltip>
                  </IconButton>
                </CopyToClipboard>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{ padding: 0 }}
                >
                  <MoreVertIcon sx={{ color: "#75787c" }} />
                </IconButton>
                <ShowMoreMenu
                  showMoreAnchorEl={showMoreAnchorEl}
                  open={open}
                  handleClose={handleClose}
                />
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />
            {/* <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography variant="caption" sx={{ color: "#19ffb0",fontSize:"0.60rem"  }}>
                  Total Holders
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                187,556
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />

            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography variant="caption" sx={{ color: "#19ffb0",fontSize:"0.60rem"  }}>
                  In Watchlist
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                4444,333
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />
            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography variant="caption" sx={{ color: "#19ffb0",fontSize:"0.60rem"  }}>
                  Total Liquidity in pool
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                $20,185,00
              </Typography>
            </Stack> */}
            <SocialCounterWithGraphCard
              title="Twitter Followers"
              cardData=""
              icon=""
              endColor="#43baff"
              startColor="#00e8fd"
            />
            <SocialCounterWithGraphCard
              title="Telegram Followers"
              cardData=""
              icon=""
              endColor="#2e67f6"
              startColor="#13b0fc"
            />
            <SocialCounterWithGraphCard
              title="Reddit Subscribers"
              cardData=""
              icon=""
              endColor="#ff6e4c"
              startColor="#ff3708"
            />
            {/* <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            /> */}
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            // borderTop: "2px solid #292654",
            borderBottom: "1px solid #292654",
          }}
          py={2}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#4D4E54", fontSize: "8.5px", fontWeight: 500 }}
                >
                  Website
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                alignItems={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
                pt={1}
              >
                {coinData?.website_url &&
                  coinData?.website_url[0]?.url !== null &&
                  coinData?.website_url[0]?.url !== "" &&
                  coinData?.website_url[0]?.url !== undefined && (
                    <SingleCoinChip
                      src={LinkImage}
                      title={coinData?.website_url[0]?.url}
                      link={coinData?.website_url[0]?.url}
                    />
                  )}

                {coinData?.website_url &&
                  coinData?.website_url[1]?.url !== null &&
                  coinData?.website_url[1]?.url !== "" &&
                  coinData?.website_url[1]?.url !== undefined && (
                    <Stack
                      direction={{ xs: "row", sm: "row", md: "row" }}
                      sx={{ alignItems: "center" }}
                      spacing={0}
                      justifyContent={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                      }}
                    >
                      <SingleCoinChip
                        src={LinkImage}
                        title={coinData?.website_url[1]?.url}
                        link={coinData?.website_url[1]?.url}
                      />

                      {coinData?.website_url?.length > 2 && (
                        <Box>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{ padding: 0 }}
                          >
                            <MoreVertIcon sx={{ color: "#75787c" }} />
                          </IconButton>
                          <ShowMoreMenu
                            showMoreAnchorEl={showMoreAnchorEl}
                            open={open}
                            handleClose={handleClose}
                            data={coinData && coinData?.website_url}
                          />
                        </Box>
                      )}
                    </Stack>
                  )}
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />

            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#4D4E54", fontSize: "8.5px", fontWeight: 500 }}
                >
                  Explorers
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                alignItems={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
                pt={1}
              >
                {coinData?.explorer_link &&
                  coinData?.explorer_link[0]?.url !== null &&
                  coinData?.explorer_link[0]?.url !== "" &&
                  coinData?.explorer_link[0]?.url !== undefined && (
                    <SingleCoinChip
                      src={BscScanImage}
                      title={coinData?.explorer_link[0]?.url}
                      link={coinData?.explorer_link[0]?.url}
                    />
                  )}
                {coinData?.explorer_link &&
                  coinData?.explorer_link[1]?.url !== null &&
                  coinData?.explorer_link[1]?.url !== "" &&
                  coinData?.explorer_link[1]?.url !== undefined && (
                    <Stack
                      direction={{ xs: "row", sm: "row", md: "row" }}
                      sx={{ alignItems: "center" }}
                      spacing={0}
                      justifyContent={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                      }}
                    >
                      <SingleCoinChip
                        src={BscScanImage}
                        title={coinData?.explorer_link[1]?.url}
                        link={coinData?.explorer_link[1]?.url}
                      />

                      {coinData?.explorer_link?.length > 2 && (
                        <Box>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{ padding: 0 }}
                          >
                            <MoreVertIcon sx={{ color: "#75787c" }} />
                          </IconButton>
                          <ShowMoreMenu
                            showMoreAnchorEl={showMoreAnchorEl}
                            open={open}
                            handleClose={handleClose}
                            data={coinData && coinData?.explorer_link}
                          />
                        </Box>
                      )}
                    </Stack>
                  )}
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />
            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#4D4E54", fontSize: "8.5px", fontWeight: 500 }}
                >
                  Community
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
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
                spacing={0}
                pt={1}
              >
                <SingleCoinChip src={FacebookImage} title="Facebook" />

                <SingleCoinChip src={InstagramImage} title="Instagram" />
                <SingleCoinChip src={RedditImage} title="Reddit" />
                <SingleCoinChip src={TwitterImage} title="Twitter" />
                <SingleCoinChip src={TelegramImage} title="Telegram" />
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />

            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#4D4E54", fontSize: "8.5px", fontWeight: 500 }}
                >
                  Source Code,White Paper & Audit..
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                alignItems={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
                pt={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  spacing={0}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                >
                  {" "}
                  <SingleCoinChip
                    src={SourcecodeImage}
                    title="Source code"
                  />{" "}
                  <SingleCoinChip src={WhitepaperImage} title="Docs" />
                </Stack>

                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center" }}
                  spacing={0}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                >
                  <SingleCoinChip
                    src={DocsImage}
                    title="Whitepaper"
                    link={coinData && coinData?.whitepaper_link}
                  />

                  {coinData?.audit &&
                    coinData?.audit[0]?.url !== null &&
                    coinData?.audit[0]?.url !== "" &&
                    coinData?.audit[0]?.url !== undefined && (
                      <SingleCoinChip
                        src={SourcecodeImage}
                        title={coinData?.audit[0]?.url}
                        link={coinData?.audit[0]?.url}
                      />
                    )}

                  {/* <SingleCoinChip src={SourcecodeImage} title="Certik" /> */}

                  {coinData?.audit?.length > 1 && (
                    <Box>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{ padding: 0 }}
                      >
                        <MoreVertIcon sx={{ color: "#75787c" }} />
                      </IconButton>
                      <ShowMoreMenu
                        showMoreAnchorEl={showMoreAnchorEl}
                        open={open}
                        handleClose={handleClose}
                        data={coinData && coinData?.audit}
                      />
                    </Box>
                  )}
                </Stack>
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />
            <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={1}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#4D4E54", fontSize: "8.5px", fontWeight: 500 }}
                >
                  Chart
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                alignItems={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
                pt={1}
              >
                {coinData?.chart_link &&
                  coinData?.chart_link[0]?.url !== null &&
                  coinData?.chart_link[0]?.url !== "" &&
                  coinData?.chart_link[0]?.url !== undefined && (
                    <SingleCoinChip
                      src={LinkImage}
                      title={coinData?.chart_link[0]?.url}
                      link={coinData?.chart_link[0]?.url}
                    />
                  )}

                {coinData?.chart_link &&
                  coinData?.chart_link[1]?.url !== null &&
                  coinData?.chart_link[1]?.url !== "" &&
                  coinData?.chart_link[1]?.url !== undefined && (
                    <Stack
                      direction={{ xs: "row", sm: "row", md: "row" }}
                      sx={{ alignItems: "center" }}
                      spacing={0}
                      justifyContent={{
                        xs: "center",
                        sm: "center",
                        md: "center",
                        lg: "flex-start",
                      }}
                    >
                      <SingleCoinChip
                        src={LinkImage}
                        title={coinData?.chart_link[1]?.url}
                        link={coinData?.chart_link[1]?.url}
                      />

                      {coinData?.chart_link?.length > 2 && (
                        <Box>
                          <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? "long-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{ padding: 0 }}
                          >
                            <MoreVertIcon sx={{ color: "#75787c" }} />
                          </IconButton>
                          <ShowMoreMenu
                            showMoreAnchorEl={showMoreAnchorEl}
                            open={open}
                            handleClose={handleClose}
                            data={coinData && coinData?.chart_link}
                          />
                        </Box>
                      )}
                    </Stack>
                  )}
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
            />

            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              sx={{ alignItems: "center", minWidth: 100 }}
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                }}
                spacing={1}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#19ffb0", fontSize: "0.60rem" }}
                >
                  Trust Score
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "center" }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#FFFFF5", fontWeight: "400" }}
                >
                  {coinData && coinData?.trust_score[0]?.rating !== null
                    ? parseFloat(coinData?.trust_score[0]?.rating).toFixed(1)
                    : "--"}
                </Typography>

                {coinData && coinData?.trust_score[0]?.rating !== null && (
                  <Rating
                    name="size-small"
                    precision={0.1}
                    defaultValue={coinData?.trust_score[0]?.rating}
                    value={coinData?.trust_score[0]?.rating}
                    size="small"
                    readOnly
                    sx={{ fontSize: ".9rem" }}
                  />
                )}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default SingleCoinHeader;
