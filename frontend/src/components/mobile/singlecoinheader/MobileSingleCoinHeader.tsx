import { useEffect, useState } from "react";

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
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Chip from "@mui/material/Chip";
import MoodIcon from "@mui/icons-material/Mood";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

import { Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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

const MobileSingleCoinHeader = () => {
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  const [copyValue, setCopyValue] = useState(
    "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
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

  return (
    <Fragment>
      <Grid container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          px={0}
          width="100%"
          sx={{ alignItems: "center" }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={2}
            sx={{ alignItems: "center" }}
            py={1}
            width="100%"
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cryptologos.cc/logos/safemoon-safemoon-logo.png?v=022"
                  sx={{ borderRadius: 0, width: 25, height: 25 }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#FFFFF5ae", fontWeight: 600 }}
                  textAlign={{ xs: "center", sm: "center", md: "left" }}
                >
                  Presale starts in :
                  <span style={{ color: "#BDD645" }}> 00days 08 Hours 24</span>
                </Typography>
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
                    variant="h5"
                    sx={{ color: "#FFFFF5", fontWeight: "400" }}
                  >
                    4.9
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 14, height: 14 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
                <Rating
                  name="size-small"
                  defaultValue={5}
                  size="small"
                  readOnly
                  sx={{ fontSize: ".9rem" }}
                />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              width="100%"
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                spacing={-0.5}
                sx={{ alignItems: "flex-start" }}
                width="100%"
              >
                <Typography
                  sx={{ color: "#FFFFF5", fontWeight: 800, fontSize: "1.8rem" }}
                  textAlign={{ xs: "center", sm: "center", md: "left" }}
                >
                  SafeMoon
                </Typography>

                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  spacing={0.5}
                  sx={{ alignItems: "center" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#27D6A2",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                    textAlign={{ xs: "center", sm: "center", md: "left" }}
                  >
                    SafeMoon
                  </Typography>
                  <Rating
                    name="size-large"
                    defaultValue={1}
                    size="large"
                    max={1}
                    icon={<StarOutlineOutlinedIcon sx={{ color: "#FFFFF5" }} />}
                  />
                </Stack>
              </Stack>
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={1}
                sx={{ alignItems: "center" }}
                pt={0.5}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#FFFFF5", fontWeight: "bold" }}
                >
                  $0.0000090756
                </Typography>
                <Chip
                  icon={<ArrowDropDownIcon />}
                  label="4.1%"
                  color="success"
                  sx={{
                    height: "24px",
                    borderRadius: "4px",
                    backgroundColor: "#05BC34",
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={2}
              sx={{ alignItems: "flex-start" }}
              width="100%"
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={0.5}
                sx={{ alignItems: "center" }}
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
                  <Typography variant="subtitle2" sx={{ color: "#FFFFFFae" }}>
                    Listed :
                  </Typography>
                </Stack>

                <Typography variant="subtitle2" sx={{ color: "#00B96E" }}>
                  3 Hrs ago
                </Typography>
              </Stack>
              <Divider
                variant="middle"
                flexItem
                orientation={"vertical"}
                sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
              />
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={0.5}
                sx={{ alignItems: "center" }}
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
                  <Typography variant="subtitle2" sx={{ color: "#FFFFFFae" }}>
                    <ArrowUpwardRoundedIcon sx={{ fontSize: 18 }} />
                  </Typography>
                </Stack>

                <Typography
                  variant="subtitle2"
                  sx={{ color: "#FFFFFFae", fontWeight: 600 }}
                >
                  <span style={{ color: "#06E9DC" }}>1234</span> Votes
                </Typography>
              </Stack>
            </Stack>
          </Stack>

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
                    }}
                  >
                    By on pancakeswap
                  </Button>

                  <Chip
                    label="1675 Votes"
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
                  alignItems: "center",
                }}
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "flex-end",
                }}
              >
                <Box>
                  <MoodIcon sx={{ color: "#FFFFF5" }} />
                </Box>
                <Box>
                  <MoodIcon sx={{ color: "#FFFFF5" }} />
                </Box>
                <Box>
                  <MoodIcon sx={{ color: "#FFFFF5" }} />
                </Box>
                <Box>
                  <MoodIcon sx={{ color: "#FFFFF5" }} />
                </Box>
                <Box>
                  <MoodIcon sx={{ color: "#FFFFF5" }} />
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
            borderTop: "2px solid #292654",
            borderBottom: "2px solid #292654",
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  Listed
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                3 Hrs ago
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  Network
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={0}
              >
                {" "}
                <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                  Biance Smart Chain
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
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  Token contract address
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                sx={{ alignItems: "center" }}
                spacing={0}
              >
                {" "}
                <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                  {"0xED3F52c46280ad96485323Fb6a51242cb4CA45F5".substring(
                    0,
                    14
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
                    sx={{ paddingLeft: 1 }}
                    onClick={() => {
                      setCopyValue(
                        "0xED3F52c46280ad96485323Fb6a51242cb4CA45F5"
                      );
                    }}
                  >
                    <Tooltip title={`${copied ? "Copied" : "Copy this Token"}`}>
                      <ContentCopyIcon
                        sx={{ color: `${copied ? "#23D471" : "#75787c"}` }}
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
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  Total Holders
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
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
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  In Watchlist
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
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
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  Total Liquidity in pool
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Typography variant="subtitle2" sx={{ color: "#FFFFF5" }}>
                $20,185,00
              </Typography>
            </Stack>
            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />
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
                sx={{ width: 30, height: 30 }}
              ></Avatar>
              <Avatar
                src={CoinMarketcapImage}
                sx={{ width: 30, height: 30 }}
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
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            // borderTop: "2px solid #292654",
            borderBottom: "2px solid #292654",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              py={2}
            >
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
                    sx={{ width: 14, height: 14 }}
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
                </Stack>
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />

            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              py={2}
            >
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
                    sx={{ width: 14, height: 14 }}
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
                </Stack>
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              py={2}
            >
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
                    sx={{ width: 14, height: 14 }}
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
              ></Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
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
                    sx={{ width: 14, height: 14 }}
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
                ></Stack>

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
                </Stack>
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              py={2}
            >
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
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                sx={{ alignItems: "flex-start" }}
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
                </Stack>
              </Stack>
            </Stack>

            <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            />

            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              sx={{ alignItems: "center" }}
              py={2}
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
                <Typography variant="caption" sx={{ color: "#23E2A0" }}>
                  Listed
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
              </Stack>

              <Stack
                direction="column"
                spacing={0}
                sx={{ alignItems: "center" }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#FFFFF5", fontWeight: "400" }}
                >
                  4.9
                </Typography>
                <Rating
                  name="size-small"
                  defaultValue={5}
                  size="small"
                  readOnly
                  sx={{ fontSize: ".9rem" }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleCoinHeader;
