import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";

import {
  Grid,
  Stack,
  Typography,
  Avatar,
  Button,
  Box,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Rating from "@mui/material/Rating";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

import Chip from "@mui/material/Chip";
import MoodIcon from "@mui/icons-material/Mood";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

import { Fragment } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { RWebShare } from "react-web-share";
import { useTheme } from "@mui/material/styles";

import { coinVoteRequest } from "../../../store/action/commonAction";

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

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileSingleCoinHeader = ({ coinData }: any) => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const location: any = useLocation();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));
  const coinSocialGraph = useSelector((data: any) => {
    return data?.coinReducer?.coin_social_graph?.data;
  });
  const [copyValue, setCopyValue] = useState<any>();
  const [vote, setVote] = useState<any>({
    initial: false,
    completed: false,
    captcha: false,
  });
  const [openCaptcha, setOpenCaptcha] = useState<any>(false);
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

  const captchaHandler = () => {
    setVote({ ...vote, initial: false, completed: false, captcha: true });
    setOpenCaptcha(true);
  };

  // const captchaOnClose = () => {
  //   setOpenCaptcha(false);
  //   setVote({ ...vote, initial: false, completed: false, captcha: false });
  // };

  const coinVoteHandler = () => {
    const successHandler = (res: any) => {
      setOpenCaptcha(false);
      setVote({ ...vote, initial: true, completed: false, captcha: false });
      setTimeout(function () {
        toast.success(`${res?.data?.data}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setVote({ ...vote, initial: false, completed: true, captcha: false });
      }, 2000);
    };
    const errorHandler = (err: any) => {
      console.log(err);
    };

    dispatch(
      coinVoteRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  };

  useEffect(() => {
    coinData &&
      coinData?.contract_address?.length > 0 &&
      setCopyValue(coinData?.contract_address[0]?.addresss);
  }, [setCopyValue]);

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
                  alt={coinData?.name}
                  src={`${serverAPIUrl}public/uploads/coin_logo/${coinData?.logo}`}
                  sx={{ borderRadius: 0, width: 25, height: 25 }}
                />

                {coinData &&
                  coinData?.presale_start_date !== null &&
                  coinData?.presale_start_date !== "" && (
                    <Stack
                      direction="row"
                      spacing={0}
                      sx={{ alignItems: "center", flexWrap: "wrap" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#FFFFF5ae", fontWeight: 600 }}
                        textAlign={{ xs: "center", sm: "center", md: "left" }}
                        mr={1}
                      >
                        Presale starts in :
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#BDD645", fontWeight: 600 }}
                        textAlign={{ xs: "center", sm: "center", md: "left" }}
                      >
                        {" "}
                        00days 08 Hours 24
                      </Typography>
                    </Stack>
                  )}
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
                    {coinData && coinData?.trust_score[0]?.rating !== null
                      ? parseFloat(coinData?.trust_score[0]?.rating).toFixed(1)
                      : "--"}
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 14, height: 14 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>
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
                      color: "#27D6A2",
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
                {Math.sign(parseFloat(coinData?.percent_change_1h)) === -1 ? (
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
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={2}
              sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}
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
                  {coinData && coinData?.approved_at !== null
                    ? moment(new Date(coinData?.approved_at)).fromNow()
                    : "NA"}
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
                  <span style={{ color: "#06E9DC" }}>
                    {coinData &&
                    coinData?.vote !== null &&
                    vote?.completed === true
                      ? parseFloat(coinData?.vote) + 1
                      : coinData?.vote}
                  </span>{" "}
                  Votes
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={3}
            width="100%"
            alignItems="flex-start"
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={1.5}
              sx={{ alignItems: "center", justifyContent: "flex-start" }}
              py={2}
            >
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={1.5}
                sx={{ alignItems: "center", justifyContent: "flex-end" }}
              >
                {vote &&
                vote.initial === false &&
                vote.completed === false &&
                vote.captcha === false ? (
                  <Button
                    variant="contained"
                    startIcon={<ThumbUpOffAltOutlinedIcon />}
                    sx={{
                      backgroundColor: "#6252E7",
                      textTransform: "capitalize",
                      fontSize: ".8rem",
                    }}
                    onClick={captchaHandler}
                  >
                    Vote
                  </Button>
                ) : vote.captcha === true ? (
                  // <Dialog
                  //   open={openCaptcha}
                  //   // TransitionComponent={Transition}
                  //   keepMounted
                  //   onClose={captchaOnClose}
                  //   aria-describedby="alert-dialog-slide-description"
                  // >
                  //   <DialogContent>
                  <ReCAPTCHA
                    sitekey="6LeV-IQhAAAAAMwIIrqVh_eqFPl-8IFn1QQWWrEU"
                    onChange={coinVoteHandler}
                    theme="dark"
                  />
                ) : //   </DialogContent>
                // </Dialog>
                vote.initial === true ? (
                  <LoadingButton
                    loading
                    variant="outlined"
                    sx={{
                      color: "#FFFFFF",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    Submit
                  </LoadingButton>
                ) : (
                  vote.completed === true && (
                    <Button
                      variant="contained"
                      startIcon={<ThumbUpAltRoundedIcon />}
                      sx={{
                        backgroundColor: "#6252E7",
                        textTransform: "capitalize",
                        fontSize: ".8rem",
                      }}
                    >
                      Voted
                    </Button>
                  )
                )}
              </Stack>
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
                <a
                  href={coinData && coinData?.coingecko_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Avatar
                    src={CoinGeckoImage}
                    sx={{ width: 24, height: 24 }}
                  ></Avatar>
                </a>
                <a
                  href={coinData && coinData?.market_cap_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Avatar
                    src={CoinMarketcapImage}
                    sx={{ width: 24, height: 24 }}
                  ></Avatar>
                </a>
                <RWebShare
                  data={{
                    text: "Find out this coin in Coinxhigh",
                    url: window.location.href,
                    title: coinData && coinData?.name,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <IconButton sx={{ padding: 0 }}>
                    <ShareOutlinedIcon sx={{ color: "#575385" }} />
                  </IconButton>
                </RWebShare>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            borderTop: "2px solid #292654",
            borderBottom: "2px solid #292654",
          }}
        >
          <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              sx={{ alignItems: "center" }}
              spacing={4}
              py={2}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 14, height: 14 }}
                  ></Avatar>
                </Tooltip>
                <Typography
                  variant="body2"
                  sx={{ color: "#23E2A0", fontWeight: 500 }}
                >
                  Badges
                </Typography>
              </Stack>
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
            </Stack>

            {/* <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#342D61", borderRightWidth: 2 }}
            /> */}
          </Stack>
        </Box>
      </Grid>
    </Fragment>
  );
};

export default MobileSingleCoinHeader;
