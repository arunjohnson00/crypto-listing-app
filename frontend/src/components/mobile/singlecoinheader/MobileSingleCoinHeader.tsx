import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { textTransform } from "text-transform";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import {
  Grid,
  Stack,
  Typography,
  Avatar,
  Button,
  Box,
  Divider,
  CardMedia,
  Dialog,
  DialogContent,
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

import { coinVoteRequest } from "../../../store/action";
import { CountDownTimer } from "./countdown/CountDownTimer";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import CoinGeckoImage from "../../../assets/singlepagecoin/coingecko.png";
import CoinMarketcapImage from "../../../assets/singlepagecoin/coinmarketcap.png";
import BscScanImage from "../../../assets/singlepagecoin/bscscan.png";
import FacebookImage from "../../../assets/singlepagecoin/facebook.png";
import InstagramImage from "../../../assets/singlepagecoin/instagram.png";
import RedditImage from "../../../assets/singlepagecoin/reddit.png";
import TelegramImage from "../../../assets/singlepagecoin/telegram.png";
import TwitterImage from "../../../assets/singlepagecoin/twitter.png";
import FacebookGraphImage from "../../../assets/singlepagecoin/graph/facebook.png";
import DiscordGraphImage from "../../../assets/singlepagecoin/graph/discord.png";
import RedditGraphImage from "../../../assets/singlepagecoin/graph/reddit.png";
import TelegramGraphImage from "../../../assets/singlepagecoin/graph/telegram.png";
import TwitterGraphImage from "../../../assets/singlepagecoin/graph/twitter.png";
import GithubGraphImage from "../../../assets/singlepagecoin/graph/github.png";
import HeartAnimatedImage from "../../../assets/singlepagecoin/vote-animated.gif";

import SourcecodeImage from "../../../assets/singlepagecoin/sourcecode.png";
import WhitepaperImage from "../../../assets/singlepagecoin/Whitepaper.png";
import DocsImage from "../../../assets/singlepagecoin/doc.png";

import LinkImage from "../../../assets/singlepagecoin/link.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { defaultColor } from "../../../common/common";
import { Link } from "react-router-dom";
import MobileSinglePageTab from "../singlepagetab/MobileSinglePageTab";
import {
  coinMarketListRequest,
  coinSocialGraphRequest,
} from "../../../store/action/coinAction ";
import MobileSocialCounterWithGraphCard from "../cards/socialcounterwithgraphcard/MobileSocialCounterWithGraphCard";
import MobileAnimatedRating from "../animatedrating/MobileAnimatedRating";
import VotePopupAds from "../../ads/votepopupads/VotePopupAds";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileSingleCoinHeader = ({ coinData }: any) => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const location: any = useLocation();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));
  const coinSocialGraph = useSelector((data: any) => {
    return data?.coinReducer?.coin_social_graph;
  });
  const coinMarketLists = useSelector((data: any) => {
    return data?.coinReducer?.coin_market_list?.data;
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

  const captchaOnClose = () => {
    setOpenCaptcha(false);
    setVote({ ...vote, initial: false, completed: false, captcha: false });
  };

  const coinVoteHandler = () => {
    const successHandler = (res: any) => {
      setOpenCaptcha(false);
      setVote({ ...vote, initial: true, completed: false, captcha: false });
      setTimeout(function () {
        toast.success(
          <Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
              <Typography sx={{ fontSize: ".85rem" }}>
                {res?.data?.data}
              </Typography>
            </Stack>
          </Box>,
          {
            position: "top-right",
            icon: false,
            //theme: "colored",
            className: "toast-success-container toast-success-container-after",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );

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

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      coinMarketListRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
    dispatch(
      coinSocialGraphRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  console.log(coinSocialGraph);
  return (
    <Fragment>
      <Grid container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          px={0}
          width="100%"
          sx={{ alignItems: "flex-start" }}
        >
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={1.3}
            sx={{ alignItems: "flex-start" }}
            pt={1}
            width="100%"
          >
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={0}
              sx={{ alignItems: "flex-start" }}
              pt={1}
              width="100%"
            >
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  {coinData && coinData?.logo === null ? (
                    <Avatar
                      sx={{
                        bgcolor: defaultColor[coinData?.name?.length],
                        borderRadius: 0,
                        width: 25,
                        height: 25,
                      }}
                    >
                      <Typography sx={{ fontSize: ".7rem" }}>
                        {coinData && coinData?.name[0]}
                      </Typography>
                    </Avatar>
                  ) : (
                    <Avatar
                      alt={coinData && coinData?.name}
                      src={`${serverAPIUrl}public/uploads/coin_logo/${coinData?.logo}`}
                      //src="https://mui.com/static/images/avatar/1.jpg"
                      sx={{ borderRadius: 0, width: 40, height: 40 }}
                    />
                  )}

                  {/* 
                  {coinData &&
                    coinData?.presale_start_date !== null &&
                    coinData?.presale_end_date !== null && (
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {coinData && parseInt(coinData?.is_presale) === 1 ? (
                          <span>
                            {Math.sign(
                              moment(
                                new Date(coinData?.presale_start_date)
                              ).diff(new Date())
                            ) === -1 &&
                            Math.sign(
                              moment(new Date(coinData?.presale_end_date)).diff(
                                new Date()
                              )
                            ) === 1 ? (
                              <span>
                                {
                                  //  <BounceLoader size={12} color="#00FF00" />
                                  <Stack
                                    direction="row"
                                    spacing={0.5}
                                    alignItems="center"
                                  >
                                    <span className="ripplefeaturedcoin"></span>
                                    <Typography
                                      variant="body2"
                                      sx={{
                                        color: "#6f737f",
                                        fontSize: "0.65rem",
                                      }}
                                    >
                                      Presale ends in{" "}
                                    </Typography>
                                  </Stack>
                                }
                              </span>
                            ) : (
                              <Typography
                                variant="body2"
                                sx={{ color: "#6f737f", fontSize: "0.65rem" }}
                              >
                                Presale starts in{" "}
                              </Typography>
                            )}
                          </span>
                        ) : (
                          coinData && (
                            <Link
                              to={{
                                pathname: `/coin/${coinData?.slug}`,
                              }}
                              state={{ coin_id: coinData?.id }}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              {" "}
                              <Typography
                                variant="body2"
                                sx={{ color: "#dadada", fontSize: "0.7rem" }}
                              >
                                Presale Ended{" "}
                                <span
                                  style={{
                                    color: "rgb(35 177 132)",
                                    fontWeight: 600,
                                    fontSize: "0.75rem",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  
                                  {moment(
                                    new Date(coinData?.presale_end_date),
                                    "YYYYMMDD"
                                  ).fromNow()}
                                </span>
                              </Typography>
                            </Link>
                          )
                        )}

                        {coinData &&
                        parseInt(coinData?.is_presale) === 1 &&
                        Math.sign(
                          moment(new Date(coinData?.presale_start_date)).diff(
                            new Date()
                          )
                        ) === -1 &&
                        Math.sign(
                          moment(new Date(coinData?.presale_end_date)).diff(
                            new Date()
                          )
                        ) === 1 ? (
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "#FFFFFF",

                              fontSize: ".7rem",
                            }}
                          >
                            {CountDownTimer(coinData?.presale_end_date)}
                          </Typography>
                        ) : (
                          ""
                        )}
                      </Stack>
                    )} */}
                </Stack>
                <Stack
                  direction="column"
                  spacing={0}
                  sx={{ alignItems: "flex-end" }}
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
                        ? parseFloat(coinData?.trust_score[0]?.rating).toFixed(
                            1
                          )
                        : "--"}
                    </Typography>
                    {/* <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 14, height: 14 }}
                    ></Avatar>
                  </Tooltip> */}
                  </Stack>
                  {coinData && coinData?.trust_score[0]?.rating !== null && (
                    // <Rating
                    //   name="size-small"
                    //   precision={0.1}
                    //   defaultValue={coinData?.trust_score[0]?.rating}
                    //   value={coinData?.trust_score[0]?.rating}
                    //   size="small"
                    //   readOnly
                    //   sx={{ fontSize: ".9rem" }}
                    // />

                    <MobileAnimatedRating
                      name="size-small"
                      precision={0.1}
                      defaultValue={coinData?.trust_score[0]?.rating}
                      value={coinData?.trust_score[0]?.rating}
                      size="small"
                      readOnly={true}
                      fontSize=".9rem"
                    />
                  )}
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#959595",
                      fontWeight: 400,
                      fontSize: ".65rem",
                    }}
                  >
                    {coinData && coinData?.trust_score[0]?.review_count !== null
                      ? coinData &&
                        coinData?.trust_score[0]?.review_count + " Reviews"
                      : "--"}
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                width="100%"
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  spacing={1}
                  sx={{ alignItems: "baseline" }}
                  width="100%"
                >
                  <Typography
                    sx={{
                      color: "#FFFFF5",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      textTransform: "capitalize",
                    }}
                    textAlign={{ xs: "center", sm: "center", md: "left" }}
                  >
                    {coinData && coinData?.name.length > 14
                      ? coinData?.name.slice(0, 13) + "..."
                      : coinData?.name}
                  </Typography>

                  <Stack
                    direction={{ xs: "row", sm: "row", md: "row" }}
                    spacing={0.5}
                    sx={{ alignItems: "flex-end" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#19ffb0",
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
                      icon={
                        <StarOutlineOutlinedIcon sx={{ color: "#FFFFF5" }} />
                      }
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
                      String(Math.trunc(parseFloat(coinData?.current_price)))
                        .length > 2 ? (
                        "$" +
                        Number(
                          parseFloat(coinData?.current_price).toFixed(2)
                        ).toLocaleString()
                      ) : coinData && Math.abs(coinData?.current_price) > 1 ? (
                        "$" +
                        parseFloat(coinData?.current_price)
                          .toFixed(4)
                          .toLocaleString()
                      ) : (
                        "$" +
                        parseFloat(coinData?.current_price)
                          .toFixed(13)
                          .toLocaleString()
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
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={0.7}
            >
              <Divider
                variant="fullWidth"
                flexItem
                orientation={"horizontal"}
                sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
              />
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
                  sx={{ borderColor: "#0b1640", borderRightWTodayidth: 1 }}
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
                      <Avatar
                        alt="Todays Vote"
                        src={HeartAnimatedImage}
                        sx={{ width: 25, height: 25 }}
                      />
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
                        ? parseInt(coinData?.vote).toLocaleString()
                        : coinData?.vote?.toLocaleString()}
                    </span>{" "}
                    Votes
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={0.5}
                sx={{ alignItems: "flex-start" }}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "flex-start" }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  spacing={1}
                >
                  <Typography variant="subtitle2" sx={{ color: "#FFFFFFae" }}>
                    Today :
                  </Typography>
                </Stack>

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
                      <Avatar
                        alt="Todays Vote"
                        src={HeartAnimatedImage}
                        sx={{ width: 25, height: 25 }}
                      />
                    </Typography>
                  </Stack>

                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#FFFFFFae", fontWeight: 600 }}
                  >
                    <span style={{ color: "#06E9DC" }}>
                      {coinData &&
                      coinData?.todays_vote !== null &&
                      vote?.completed === true
                        ? parseInt(coinData?.todays_vote).toLocaleString()
                        : coinData?.todays_vote?.toLocaleString()}
                    </span>{" "}
                    Votes
                  </Typography>
                </Stack>
              </Stack>
              <Divider
                variant="fullWidth"
                flexItem
                orientation={"horizontal"}
                sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
              />
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "column", md: "column" }}
            spacing={3}
            width="100%"
            alignItems="flex-start"
            py={2}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={1.5}
              sx={{ alignItems: "center", justifyContent: "flex-start" }}
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
                  <Dialog
                    open={openCaptcha}
                    // TransitionComponent={Transition}
                    keepMounted
                    onClose={captchaOnClose}
                    aria-describedby="alert-dialog-slide-description"
                    PaperProps={{
                      style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      },
                    }}
                  >
                    <DialogContent
                      sx={{
                        "&.MuiDialogContent-root": {
                          padding: 0,
                          borderRadius: 3,
                          background: "none",
                        },
                      }}
                    >
                      <Box
                        p={4}
                        sx={{
                          width: "auto",
                          height: "auto",
                          backgroundColor: "#000000",
                          border: "2px solid #121528",
                          borderRadius: 3,
                        }}
                      >
                        <Stack
                          direction="column"
                          spacing={3}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontWeight: 400,
                              fontSize: "1rem",
                            }}
                          >
                            Vote for{" "}
                            <span
                              style={{
                                color: "#1FD47E",
                                fontWeight: 500,
                              }}
                            >
                              {coinData && coinData?.name}
                            </span>{" "}
                            & prove that you are not a robot
                          </Typography>
                          <ReCAPTCHA
                            sitekey="6LeV-IQhAAAAAMwIIrqVh_eqFPl-8IFn1QQWWrEU"
                            onChange={coinVoteHandler}
                            theme="dark"
                          />

                          <VotePopupAds />

                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: 10,
                              backgroundColor: "#00B6FC",
                              textTransform: "none",
                            }}
                            onClick={captchaOnClose}
                          >
                            Close this window
                          </Button>
                        </Stack>
                      </Box>
                    </DialogContent>
                  </Dialog>
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

            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              spacing={0.5}
              sx={{
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              {" "}
              {/* <Divider
                variant="middle"
                flexItem
                orientation={xsBreakPoint ? "horizontal" : "vertical"}
                sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
              /> */}
              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={1}
              >
                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  sx={{ alignItems: "center", minWidth: 80 }}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  }}
                  spacing={1}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#787878",
                      fontSize: "0.65rem",
                    }}
                  >
                    Available on
                  </Typography>
                  <Tooltip title="Delete">
                    <Avatar
                      src={ToolTipImage}
                      sx={{ width: 9, height: 9 }}
                    ></Avatar>
                  </Tooltip>
                </Stack>

                <Stack direction="row" spacing={0.8}>
                  {coinMarketLists &&
                    coinMarketLists
                      ?.slice(0, 7)
                      .map((item: any, index: number) => (
                        <a
                          href={item?.url}
                          target="_blank"
                          rel="noreferrer"
                          key={index}
                        >
                          <Avatar
                            alt={item?.market}
                            src={`${serverAPIUrl}public/uploads/exchange_icons/${item?.thumb_icon}`}
                            sx={{ width: 22, height: 22 }}
                          />
                        </a>
                      ))}

                  <Typography
                    variant="caption"
                    sx={{ color: "#696969", fontSize: "0.70rem" }}
                  >
                    {coinMarketLists && coinMarketLists?.slice(7).length > 0 && (
                      <span style={{ color: "#00b8ff", fontWeight: 500 }}>
                        +{coinMarketLists && coinMarketLists.slice(7).length}{" "}
                        <span style={{ color: "#00b8ff", fontWeight: 400 }}>
                          {" "}
                        </span>{" "}
                      </span>
                    )}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            borderTop: "1px solid #0b1640",
            // borderBottom: "2px solid #292654",
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
                <Typography
                  variant="body2"
                  sx={{ color: "#787878", fontWeight: 400, fontSize: ".65rem" }}
                >
                  Badges
                </Typography>
                <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Stack
                direction="row"
                spacing={0}
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
              >
                {coinData &&
                  coinData?.badges?.map((item: any, index: number) => (
                    <Avatar
                      key={index}
                      alt={item?.name}
                      src={`${serverAPIUrl}public/uploads/badge_icons/${
                        parseInt(item?.status) === 1
                          ? item?.active_icon
                          : item?.inactive_icon
                      }`}
                      sx={{
                        width: 25,
                        height: 25,
                        mr: 0.5,
                        mb: 0.5,
                      }}
                    />
                  ))}
              </Stack>
            </Stack>

            {/* <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
            /> */}
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            // borderTop: "2px solid #292654",
            borderBottom: "1px solid #0b1640",
          }}
        >
          <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
            <Stack
              direction={{ xs: "row", sm: "row", md: "row" }}
              sx={{ alignItems: "center" }}
              spacing={4}
              py={2}
            >
              {/* <Stack direction="row" spacing={1} alignItems="center">
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
                  Socials
                </Typography>
              </Stack> */}
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
                // height={500}
              >
                {coinSocialGraph &&
                  coinSocialGraph?.response === true &&
                  coinSocialGraph?.data[0]?.twitter !== undefined &&
                  coinSocialGraph?.data[0]?.twitter.length > 0 && (
                    <MobileSocialCounterWithGraphCard
                      title={`${
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.twitter[0]?.social_platform
                      } Followers`}
                      coinData={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.twitter[0]?.followers
                          ?.split(",")
                          .reverse()
                      }
                      // icon={
                      //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                      // }

                      icon={TwitterGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.twitter[0]?.social_url
                      }
                      endColor="#43baff"
                      startColor="#00e8fd"
                    />
                  )}

                {coinSocialGraph &&
                  coinSocialGraph?.response === true &&
                  coinSocialGraph?.data[0]?.telegram !== undefined &&
                  coinSocialGraph?.data[0]?.telegram?.length > 0 && (
                    <MobileSocialCounterWithGraphCard
                      title={`${
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.telegram[0]?.social_platform
                      } Followers`}
                      coinData={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.telegram[0]?.followers
                          .split(",")
                          .reverse()
                      }
                      // icon={
                      //   coinSocialGraph &&
                      //   coinSocialGraph?.data[0]?.telegram[0]?.social_icon
                      // }
                      icon={TelegramGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.telegram[0]?.social_url
                      }
                      endColor="#2e67f6"
                      startColor="#13b0fc"
                    />
                  )}

                {coinSocialGraph &&
                  coinSocialGraph?.response === true &&
                  coinSocialGraph?.data[0]?.reddit !== undefined &&
                  coinSocialGraph?.data[0]?.reddit?.length > 0 && (
                    <MobileSocialCounterWithGraphCard
                      title={`${
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.reddit[0]?.social_platform
                      } Followers`}
                      coinData={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.reddit[0]?.followers
                          ?.split(",")
                          .reverse()
                      }
                      // icon={
                      //   coinSocialGraph && coinSocialGraph?.data[0]?.reddit[0]?.social_icon
                      // }

                      icon={RedditGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.reddit[0]?.social_url
                      }
                      endColor="#ff6e4c"
                      startColor="#ff3708"
                    />
                  )}

                {coinSocialGraph &&
                  coinSocialGraph?.response === true &&
                  coinSocialGraph?.data[0]?.facebook !== undefined &&
                  coinSocialGraph?.data[0]?.facebook.length > 0 && (
                    <MobileSocialCounterWithGraphCard
                      title={`${
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.facebook[0]?.social_platform
                      } Followers`}
                      coinData={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.facebook[0]?.followers
                          ?.split(",")
                          .reverse()
                      }
                      // icon={
                      //   coinSocialGraph &&
                      //   coinSocialGraph?.data[0]?.facebook[0]?.social_icon
                      // }
                      icon={FacebookGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.facebook[0]?.social_url
                      }
                      endColor="#ff6e4c"
                      startColor="#ff3708"
                    />
                  )}

                {coinSocialGraph &&
                  coinSocialGraph?.response === true &&
                  coinSocialGraph?.data[0]?.github !== undefined &&
                  coinSocialGraph?.data[0]?.github.length > 0 && (
                    <MobileSocialCounterWithGraphCard
                      title={`${
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.github[0]?.social_platform
                      } Followers`}
                      coinData={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.github[0]?.followers
                          ?.split(",")
                          .reverse()
                      }
                      // icon={
                      //   coinSocialGraph && coinSocialGraph?.data[0]?.github[0]?.social_icon
                      // }

                      icon={GithubGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.github[0]?.social_url
                      }
                      endColor="#ffffff"
                      startColor="#5C6BC0"
                    />
                  )}
                {coinSocialGraph &&
                  coinSocialGraph?.response === true &&
                  coinSocialGraph?.data[0]?.discord !== undefined &&
                  coinSocialGraph?.data[0]?.discord.length > 0 && (
                    <MobileSocialCounterWithGraphCard
                      title={`${
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.discord[0]?.social_platform
                      } Followers`}
                      coinData={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.discord[0]?.followers
                          ?.split(",")
                          .reverse()
                      }
                      // icon={
                      //   coinSocialGraph && coinSocialGraph?.data[0]?.discord[0]?.social_icon
                      // }

                      icon={DiscordGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.discord[0]?.social_url
                      }
                      endColor="#2415a2"
                      startColor="#404EED"
                    />
                  )}
              </Stack>
            </Stack>

            {/* <Divider
              variant="middle"
              flexItem
              orientation={xsBreakPoint ? "horizontal" : "vertical"}
              sx={{ borderColor: "#0b1640", borderRightWidth: 1 }}
            /> */}
          </Stack>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <MobileSinglePageTab />
      </Grid>
    </Fragment>
  );
};

export default MobileSingleCoinHeader;
