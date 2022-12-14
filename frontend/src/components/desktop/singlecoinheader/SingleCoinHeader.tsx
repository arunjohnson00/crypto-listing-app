import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Grid,
  Stack,
  Typography,
  Avatar,
  Button,
  Box,
  Divider,
  Dialog,
  DialogContent,
  CardMedia,
} from "@mui/material";
import Countdown from "react-countdown";
import { upperCaseFirst } from "upper-case-first";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Chip from "@mui/material/Chip";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import SingleCoinChip from "../coinpagechip/SingleCoinChip";
import SocialCounterWithGraphCard from "../cards/socialcounterwithgraphcard/SocialCounterWithGraphCard";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import { addWatchListRequest, coinVoteRequest } from "../../../store/action";
import ToolTipImage from "../../../assets/singlepagecoin/tool-tip.png";
import CoinGeckoImage from "../../../assets/singlepagecoin/coingecko.png";
import CoinMarketcapImage from "../../../assets/singlepagecoin/coinmarketcap.png";
import BscScanImage from "../../../assets/singlepagecoin/bscscan.png";
import FacebookImage from "../../../assets/singlepagecoin/facebook.png";
import InstagramImage from "../../../assets/singlepagecoin/instagram.png";
import RedditImage from "../../../assets/singlepagecoin/reddit.png";
import TelegramImage from "../../../assets/singlepagecoin/telegram.png";
import TwitterImage from "../../../assets/singlepagecoin/twitter.png";
import DiscordImage from "../../../assets/singlepagecoin/discord.png";
import GithubImage from "../../../assets/singlepagecoin/github.png";

import SourcecodeImage from "../../../assets/singlepagecoin/sourcecode.png";
import WhitepaperImage from "../../../assets/singlepagecoin/Whitepaper.png";
import DocsImage from "../../../assets/singlepagecoin/doc.png";
import LinkImage from "../../../assets/singlepagecoin/globe.gif";

import FacebookGraphImage from "../../../assets/singlepagecoin/graph/facebook.png";
import DiscordGraphImage from "../../../assets/singlepagecoin/graph/discord.png";
import RedditGraphImage from "../../../assets/singlepagecoin/graph/reddit.png";
import TelegramGraphImage from "../../../assets/singlepagecoin/graph/telegram.png";
import TwitterGraphImage from "../../../assets/singlepagecoin/graph/twitter.png";
import GithubGraphImage from "../../../assets/singlepagecoin/graph/github.png";
import HeartAnimatedImage from "../../../assets/singlepagecoin/vote-animated.gif";
import DropDownAds from "../dropdownads/DropDownAds";
import { defaultColor } from "../../../common/common";
import { Link } from "react-router-dom";
import {
  coinDetailFirstBlockRequest,
  coinMarketListRequest,
  coinSocialGraphDiscordRequest,
  coinSocialGraphFacebookRequest,
  coinSocialGraphGithubRequest,
  coinSocialGraphRedditRequest,
  coinSocialGraphTelegramRequest,
  coinSocialGraphTwitterRequest,
  coinWatchListRequest,
} from "../../../store/action/coinAction ";
import AnimatedRating from "../animatedrating/AnimatedRating";
import VotePopupAds from "../../ads/votepopupads/VotePopupAds";

import "./style.css";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const SingleCoinHeader = ({ coinData }: any) => {
  const dispatch: any = useDispatch();
  const theme = useTheme();
  const location: any = useLocation();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));
  const coinSocialGraph = useSelector((data: any) => {
    return data?.coinReducer?.coin_social_graph;
  });

  const coinSocialGraphTwitter = useSelector((data: any) => {
    return data?.coinReducer?.social_graph_twitter;
  });
  const coinSocialGraphTelegram = useSelector((data: any) => {
    return data?.coinReducer?.social_graph_telegram;
  });
  const coinSocialGraphReddit = useSelector((data: any) => {
    return data?.coinReducer?.social_graph_reddit;
  });
  const coinSocialGraphFacebook = useSelector((data: any) => {
    return data?.coinReducer?.social_graph_facebook;
  });
  const coinSocialGraphGithub = useSelector((data: any) => {
    return data?.coinReducer?.social_graph_github;
  });
  const coinSocialGraphDiscord = useSelector((data: any) => {
    return data?.coinReducer?.social_graph_discord;
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
  const [isMouseOver, setIsMouseOver] = useState<any>({ hover: false, id: "" });

  const handleMouseEnter = (index: any) => {
    setIsMouseOver({ isMouseOver, hover: true, id: index });
  };

  const handleMouseLeave = (index: any) => {
    setIsMouseOver({ isMouseOver, hover: false, id: "" });
  };

  const [openCaptcha, setOpenCaptcha] = useState<any>(false);
  const [copied, setCopied] = useState(false);
  // const [showMoreAnchorEl, setShowMoreAnchorEl] = useState<null | HTMLElement>(
  //   null
  // );
  const [showMoreAnchorEl, setShowMoreAnchorEl] = useState<any>(false);
  const open = Boolean(showMoreAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setShowMoreAnchorEl(!showMoreAnchorEl);
  };
  const handleClose = () => {
    setShowMoreAnchorEl(false);
  };

  const captchaHandler = () => {
    setVote({ ...vote, initial: false, completed: false, captcha: true });
    setOpenCaptcha(true);
  };

  const captchaOnClose = () => {
    setOpenCaptcha(false);
    setVote({ ...vote, initial: false, completed: false, captcha: false });
  };
  var voteLocal = JSON.parse(
    localStorage.getItem(`vote_${location?.pathname?.split("/").pop()}`) as any
  );
  const coinVoteHandler = () => {
    const successHandler = (res: any) => {
      setOpenCaptcha(false);
      setVote({ ...vote, initial: true, completed: false, captcha: false });

      if (voteLocal === null) {
        localStorage.setItem(
          `vote_${location?.pathname?.split("/").pop()}`,
          JSON.stringify({
            time: new Date().getTime(),
            status: true,
          })
        );
      }
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
    if (new Date().getTime() - voteLocal?.time > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(`vote_${location?.pathname?.split("/").pop()}`);
    }
  }, [location, voteLocal]);

  const addWatchListHandler = () => {
    const formData = new FormData();
    formData.append("slug", location?.pathname?.split("/").pop());
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
    const errorHandler = (err: any) => {};

    dispatch(coinWatchListRequest(formData, successHandler, errorHandler));
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
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      coinDetailFirstBlockRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [vote]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {
      //console.log(err?.error?.message?.response?.data?.response, "test");
    };
    dispatch(
      coinSocialGraphTwitterRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
    dispatch(
      coinSocialGraphTelegramRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );

    dispatch(
      coinSocialGraphRedditRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );

    dispatch(
      coinSocialGraphFacebookRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );

    dispatch(
      coinSocialGraphGithubRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );

    dispatch(
      coinSocialGraphDiscordRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch, location]);

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
              <Stack
                direction={{ xs: "column", sm: "column", md: "column" }}
                spacing={1}
                alignItems="center"
              >
                {coinData && coinData?.logo === null ? (
                  <Avatar
                    sx={{
                      bgcolor: defaultColor[coinData?.name?.length],
                      borderRadius: 0,
                      width: 120,
                      height: 120,
                    }}
                  >
                    <Typography sx={{ fontSize: "2rem" }}>
                      {coinData && coinData?.name[0]}
                    </Typography>
                  </Avatar>
                ) : (
                  <Avatar
                    alt={coinData && coinData?.name}
                    src={`${serverAPIUrl}public/uploads/coin_logo/${coinData?.logo}`}
                    //src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ borderRadius: 0, width: 120, height: 120 }}
                  />
                )}
                <Chip
                  label={
                    <Typography sx={{ fontSize: "0.7rem" }}>
                      {" "}
                      <span>Rank </span>
                      {"#"}
                      {coinData && coinData?.rank !== null
                        ? coinData && coinData?.rank
                        : "--"}
                    </Typography>
                  }
                  color="primary"
                  size="small"
                  sx={{
                    maxWidth: 90,
                    backgroundColor: "#020e3f",
                    fontSize: "0.7rem",
                    borderRadius: 1.3,
                    color: "#8d8d8d",
                  }}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "column", md: "column" }}>
                {coinData &&
                  parseInt(coinData?.is_presale) === 1 &&
                  moment(new Date(coinData?.presale_start_date)).isAfter(
                    new Date()
                  ) === true && (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={0.5}
                    >
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <span className="ripplefeaturedcoin"></span>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#6f737f",
                            fontSize: "0.65rem",
                          }}
                        >
                          Presale Starts in{" "}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#FFFFFF",

                          fontSize: ".7rem",
                        }}
                      >
                        {coinData && (
                          <Countdown
                            date={new Date(coinData?.presale_start_date)}
                            renderer={({
                              days,
                              hours,
                              minutes,
                              seconds,
                              completed,
                            }) => {
                              return (
                                <span>
                                  {days} Days {hours} Hours {minutes} Minutes{" "}
                                  {seconds} Seconds
                                </span>
                              );
                            }}
                          />
                        )}
                      </Typography>
                    </Stack>
                  )}

                {coinData &&
                  parseInt(coinData?.is_presale) === 1 &&
                  moment(new Date()).isBetween(
                    new Date(coinData?.presale_start_date),
                    new Date(coinData?.presale_end_date)
                  ) === true && (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={0.5}
                    >
                      <Stack direction="row" spacing={0.5} alignItems="center">
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
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#FFFFFF",

                          fontSize: ".7rem",
                        }}
                      >
                        {coinData && (
                          <Countdown
                            date={new Date(coinData?.presale_end_date)}
                            renderer={({
                              days,
                              hours,
                              minutes,
                              seconds,
                              completed,
                            }) => {
                              return (
                                <span>
                                  {days} Days {hours} Hours {minutes} Minutes{" "}
                                  {seconds} Seconds
                                </span>
                              );
                            }}
                          />
                        )}
                      </Typography>
                    </Stack>
                  )}

                {coinData &&
                  parseInt(coinData?.is_presale) === 1 &&
                  moment(coinData?.presale_end_date).isBefore(
                    new Date(),
                    "day"
                  ) === true && (
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={0.5}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#FFFFFF",

                          fontSize: ".7rem",
                        }}
                      >
                        Presale ended
                      </Typography>
                    </Stack>
                  )}
                {coinData &&
                  parseInt(coinData?.is_presale) === 1 &&
                  moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                    moment(coinData?.presale_start_date).format("YYYY-MM-DD")
                  ) === true &&
                  moment(moment(new Date()).format("YYYY-MM-DD")).isSame(
                    moment(coinData?.presale_end_date).format("YYYY-MM-DD")
                  ) === true && (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Stack direction="row" spacing={0.5} alignItems="center">
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
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#FFFFFF",

                          fontSize: ".7rem",
                        }}
                      >
                        {coinData && (
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
                                  {days} Days {hours} Hours {minutes} Minutes{" "}
                                  {seconds} Seconds
                                </span>
                              );
                            }}
                          />
                        )}
                      </Typography>
                    </Stack>
                  )}

                <Stack
                  direction={{ xs: "row", sm: "row", md: "row" }}
                  spacing={1}
                  sx={{ alignItems: "flex-end" }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#FFFFF5",
                      fontWeight: 800,
                      textTransform: "capitalize",
                    }}
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
                      defaultValue={0}
                      size="large"
                      max={1}
                      icon={<StarRoundedIcon sx={{ color: "#FAAF00" }} />}
                      emptyIcon={
                        <StarBorderRoundedIcon sx={{ color: "#FFFFF5" }} />
                      }
                      onChange={addWatchListHandler}
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
                          .toFixed(20)
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
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={0.5}
                  sx={{ alignItems: "center", justifyContent: "flex-start" }}
                  pt={1}
                >
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={0}
                    sx={{ alignItems: "center", justifyContent: "flex-start" }}
                  >
                    {voteLocal === null &&
                    vote &&
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
                            overflow: "hidden",
                          },
                        }}
                      >
                        <DialogContent
                          sx={{
                            "&.MuiDialogContent-root": {
                              padding: 0,
                              borderRadius: 3,
                              background: "none",
                              overflow: "hidden",
                            },
                          }}
                        >
                          <Box
                            p={4}
                            sx={{
                              width: 500,
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
                    ) : vote.initial === true ? (
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
                      (voteLocal !== null ||
                        voteLocal?.status === true ||
                        vote.completed === true) && (
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

                    <Chip
                      label={`${
                        coinData && coinData?.vote !== null
                          ? vote?.completed === true
                            ? parseInt(coinData?.vote).toLocaleString() +
                              " Votes"
                            : coinData?.vote?.toLocaleString() + " Votes"
                          : "0 Votes"
                      } `}
                      sx={{
                        height: "36px",
                        borderRadius: "4px",
                        color: "#FFFFF5",
                        backgroundColor: "transparent",
                        fontSize: "1.025rem",
                        "&.MuiChip-deleteIcon": {
                          color: "#FFFFF5",
                        },
                      }}
                      onDelete={() => {}}
                      deleteIcon={
                        <Avatar
                          alt="Todays Vote"
                          src={HeartAnimatedImage}
                          sx={{ width: 35, height: 35 }}
                        />
                      }
                    />
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
                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={0.5}
                    sx={{
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    {" "}
                    {coinMarketLists && coinMarketLists?.length > 0 && (
                      <Divider
                        variant="middle"
                        flexItem
                        orientation={xsBreakPoint ? "horizontal" : "vertical"}
                        sx={{ borderColor: "#342D61", borderRightWidth: 1 }}
                      />
                    )}
                    {coinMarketLists && coinMarketLists?.length > 0 && (
                      <Stack
                        direction={{ xs: "column", sm: "column", md: "row" }}
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
                            coinMarketLists?.map((item: any, index: number) => (
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
                        </Stack>
                      </Stack>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} py={2}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "column" }}
              spacing={3}
            >
              {/* <Stack
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
                <DropDownAds data="Test One" title="Buy" color="#4AE424" />
                <DropDownAds data="Test Two" title="Exchange" color="#037BFD" />
                <DropDownAds data="Test Three" title="Gaming" color="#FF5111" />
                <DropDownAds
                  data="Test Four"
                  title="Earn Crypto"
                  color="#E13DEE"
                />
              </Stack> */}

              <Stack
                direction={{ xs: "row", sm: "row", md: "row" }}
                spacing={1}
                alignItems="baseline"
                justifyContent={{
                  xs: "center",
                  sm: "center",
                  md: "flex-end",
                }}
              >
                <Stack
                  direction="row"
                  columnGap={1}
                  rowGap={1}
                  alignItems="center"
                  sx={{ flexWrap: "wrap" }}
                >
                  {coinData &&
                    coinData?.badges?.map((item: any, index: number) => (
                      <Box
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        key={index}
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          {isMouseOver?.id !== index && (
                            <Avatar
                              variant="square"
                              alt={item?.name}
                              src={`${serverAPIUrl}public/uploads/badge_icons/${
                                parseInt(item?.status) === 1
                                  ? item?.active_icon
                                  : item?.inactive_icon
                              }`}
                              sx={{
                                width: 35,
                                height: 35,
                                mr: 0.5,
                                mb: 0.5,
                                cursor: "pointer",
                              }}
                            />
                          )}
                          {isMouseOver?.hover === true &&
                            isMouseOver?.id === index && (
                              <CSSTransition
                                in={isMouseOver?.hover}
                                timeout={350}
                                classNames="display"
                                unmountOnExit
                              >
                                <Box
                                  sx={{
                                    padding: 1,
                                    height: 40,

                                    borderRadius: 2,
                                    border: "1.5px solid #1a2063",
                                    backgroundColor: "#121139",
                                    cursor: "pointer",
                                    minWidth: 129,
                                  }}
                                >
                                  <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    height={40}
                                  >
                                    <Box sx={{ minWidth: 40 }}>
                                      <Avatar
                                        variant="square"
                                        alt={item?.name}
                                        src={`${serverAPIUrl}public/uploads/badge_icons/${
                                          parseInt(item?.status) === 1
                                            ? item?.active_icon
                                            : item?.inactive_icon
                                        }`}
                                        className="badgezoom"
                                        sx={{
                                          width: 30,
                                          height: 30,
                                          //mr: 0.5,
                                          // mb: 0.5,
                                        }}
                                      />
                                    </Box>
                                    <Typography
                                      sx={{
                                        color: "#FFFFFF",
                                        fontSize: ".85rem",
                                      }}
                                    >
                                      {item?.name}
                                    </Typography>
                                  </Stack>
                                </Box>
                              </CSSTransition>
                            )}
                        </Stack>
                      </Box>
                    ))}
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
                    {coinData && coinData?.coingecko_url !== null && (
                      <a
                        href={coinData && coinData?.coingecko_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Avatar
                          src={CoinGeckoImage}
                          sx={{ width: 35, height: 35 }}
                        ></Avatar>
                      </a>
                    )}
                    {coinData && coinData?.market_cap_url !== null && (
                      <a
                        href={coinData && coinData?.market_cap_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Avatar
                          src={CoinMarketcapImage}
                          sx={{ width: 35, height: 35 }}
                        ></Avatar>
                      </a>
                    )}
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
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
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
                {coinData && coinData?.created_at !== null
                  ? moment(new Date(coinData?.created_at)).fromNow()
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
                {coinData && coinData?.network?.length > 0 ? (
                  <Stack direction="column" spacing={0}>
                    <a
                      href={coinData && coinData?.network[0]?.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {" "}
                      <Typography
                        variant="subtitle2"
                        sx={{ color: "#FFFFF5", fontSize: "0.75rem" }}
                      >
                        {coinData && coinData?.network[0]?.name}
                      </Typography>
                    </a>
                    <Typography
                      variant="caption"
                      sx={{ color: "#696969", fontSize: "0.70rem" }}
                    >
                      {coinData && coinData?.network?.slice(1).length > 0 && (
                        <span style={{ color: "#00b8ff", fontWeight: 500 }}>
                          +{coinData && coinData?.network?.slice(1).length}{" "}
                          <span style={{ color: "#00b8ff", fontWeight: 400 }}>
                            {" "}
                            Networks
                          </span>{" "}
                        </span>
                      )}
                    </Typography>
                  </Stack>
                ) : (
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#FFFFF5", fontSize: "0.75rem" }}
                  >
                    NA
                  </Typography>
                )}
                {coinData?.network?.length > 1 && (
                  <Box pb={1}>
                    <ShowMoreMenu
                      showMoreAnchorEl={showMoreAnchorEl}
                      open={open}
                      handleClose={handleClose}
                      data={coinData && coinData?.network?.slice(1)}
                      variant="network"
                    />
                  </Box>
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
                {/* <Tooltip title="Delete">
                  <Avatar
                    src={ToolTipImage}
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip> */}
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Avatar
                  alt="Todays Vote"
                  src={HeartAnimatedImage}
                  sx={{ width: 35, height: 35 }}
                />

                <Stack direction="column" spacing={-0.5}>
                  {" "}
                  <Typography
                    variant="caption"
                    sx={{ color: "#19ffb0", fontSize: "0.60rem" }}
                  >
                    Todays vote
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                    }}
                  >
                    {coinData && coinData?.todays_vote !== null
                      ? vote?.completed === true
                        ? parseInt(coinData?.todays_vote)
                        : coinData?.todays_vote
                      : "0"}
                  </Typography>
                </Stack>
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

            {coinSocialGraphTwitter &&
              coinSocialGraphTwitter?.response === true &&
              coinSocialGraphTwitter?.data?.followers?.length > 0 && (
                <SocialCounterWithGraphCard
                  title={`${
                    coinSocialGraphTwitter &&
                    coinSocialGraphTwitter?.data?.social_platform
                  } Followers`}
                  coinData={coinSocialGraphTwitter?.data?.followers?.slice(
                    0,
                    50
                  )}
                  // icon={
                  //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                  // }

                  icon={TwitterGraphImage}
                  url={
                    coinSocialGraphTwitter &&
                    coinSocialGraphTwitter?.data?.social_url
                  }
                  endColor="#43baff"
                  startColor="#00e8fd"
                />
              )}

            {coinSocialGraphTelegram &&
              coinSocialGraphTelegram?.response === true &&
              coinSocialGraphTelegram?.data?.followers?.length > 0 && (
                <SocialCounterWithGraphCard
                  title={`${
                    coinSocialGraphTelegram &&
                    coinSocialGraphTelegram?.data?.social_platform
                  } Followers`}
                  coinData={coinSocialGraphTelegram?.data?.followers?.slice(
                    0,
                    50
                  )}
                  // icon={
                  //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                  // }

                  icon={TelegramGraphImage}
                  url={
                    coinSocialGraphTelegram &&
                    coinSocialGraphTelegram?.data?.social_url
                  }
                  endColor="#2e67f6"
                  startColor="#13b0fc"
                />
              )}

            {coinSocialGraphReddit &&
              coinSocialGraphReddit?.response === true &&
              coinSocialGraphReddit?.data?.followers?.length > 0 && (
                <SocialCounterWithGraphCard
                  title={`${
                    coinSocialGraphReddit &&
                    coinSocialGraphReddit?.data?.social_platform
                  } Followers`}
                  coinData={coinSocialGraphReddit?.data?.followers?.slice(0, 8)}
                  // icon={
                  //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                  // }

                  icon={RedditGraphImage}
                  url={
                    coinSocialGraphReddit &&
                    coinSocialGraphReddit?.data?.social_url
                  }
                  endColor="#ff6e4c"
                  startColor="#ff3708"
                />
              )}

            {coinSocialGraphFacebook &&
              coinSocialGraphFacebook?.response === true &&
              coinSocialGraphFacebook?.data?.followers?.length > 0 && (
                <SocialCounterWithGraphCard
                  title={`${
                    coinSocialGraphFacebook &&
                    coinSocialGraphFacebook?.data?.social_platform
                  } Followers`}
                  coinData={coinSocialGraphFacebook?.data?.followers?.slice(
                    0,
                    50
                  )}
                  // icon={
                  //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                  // }

                  icon={FacebookGraphImage}
                  url={
                    coinSocialGraphFacebook &&
                    coinSocialGraphFacebook?.data?.social_url
                  }
                  endColor="#ff6e4c"
                  startColor="#ff3708"
                />
              )}

            {coinSocialGraphGithub &&
              coinSocialGraphGithub?.response === true &&
              coinSocialGraphGithub?.data?.followers?.length > 0 && (
                <SocialCounterWithGraphCard
                  title={`${
                    coinSocialGraphGithub &&
                    coinSocialGraphGithub?.data?.social_platform
                  } Followers`}
                  coinData={coinSocialGraphGithub?.data?.followers?.slice(0, 8)}
                  // icon={
                  //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                  // }

                  icon={GithubGraphImage}
                  url={
                    coinSocialGraphGithub &&
                    coinSocialGraphGithub?.data?.social_url
                  }
                  endColor="#ffffff"
                  startColor="#5C6BC0"
                />
              )}
            {coinSocialGraphDiscord &&
              coinSocialGraphDiscord?.response === true &&
              coinSocialGraphDiscord?.data?.followers?.length > 0 && (
                <SocialCounterWithGraphCard
                  title={`${
                    coinSocialGraphDiscord &&
                    coinSocialGraphDiscord?.data?.social_platform
                  } Followers`}
                  coinData={coinSocialGraphDiscord?.data?.followers?.slice(
                    0,
                    50
                  )}
                  // icon={
                  //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                  // }

                  icon={DiscordGraphImage}
                  url={
                    coinSocialGraphDiscord &&
                    coinSocialGraphDiscord?.data?.social_url
                  }
                  endColor="#2415a2"
                  startColor="#404EED"
                />
              )}

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
            sx={{ alignItems: "flex-start", justifyContent: "space-between" }}
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
              <Stack direction="column" spacing={0.5} alignItems="flex-start">
                <Stack direction="row" spacing={0.3} alignItems="flex-end">
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
                    {coinData &&
                      coinData?.website_url.length > 0 &&
                      coinData?.website_url
                        ?.slice(0, 2)
                        .map((item: any, index: number) => (
                          <SingleCoinChip
                            key={index}
                            src={LinkImage}
                            title={item?.url}
                            link={item?.url}
                            variant="website"
                          />
                        ))}
                  </Stack>
                  {coinData?.website_url && coinData?.website_url?.length > 2 && (
                    <Box pb={1}>
                      <ShowMoreMenu
                        showMoreAnchorEl={showMoreAnchorEl}
                        open={open}
                        handleClose={handleClose}
                        data={coinData && coinData?.website_url?.slice(2)}
                        variant="website"
                      />
                    </Box>
                  )}
                </Stack>

                <Typography
                  variant="caption"
                  sx={{ color: "#696969", fontSize: "0.70rem" }}
                >
                  {coinData && coinData?.website_url?.slice(2).length > 0 && (
                    <span style={{ color: "#00b8ff", fontWeight: 500 }}>
                      +{coinData && coinData?.website_url?.slice(2).length}{" "}
                      <span style={{ color: "#00b8ff", fontWeight: 400 }}>
                        {" "}
                        Website
                      </span>{" "}
                    </span>
                  )}
                </Typography>
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
              spacing={2}
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
                    sx={{ width: 9, height: 9 }}
                  ></Avatar>
                </Tooltip>
              </Stack>
              <Stack direction="row" spacing={0.3} alignItems="flex-end">
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  alignItems={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
                  maxWidth={124}
                  flexWrap="wrap"
                  spacing={0}
                >
                  {coinData &&
                    coinData?.network.length > 0 &&
                    coinData?.network?.map((item: any, index: number) => (
                      <SingleCoinChip
                        key={index}
                        src={item?.logo}
                        //title={item?.name}
                        link={item?.url}
                        variant="explorer"
                        shape="square"
                      />
                    ))}
                </Stack>
                {/* {coinData?.network && coinData?.network?.length > 2 && (
                  <Box pb={1}>
                    <ShowMoreMenu
                      showMoreAnchorEl={showMoreAnchorEl}
                      open={open}
                      handleClose={handleClose}
                      data={coinData && coinData?.network?.slice(2)}
                      variant="network"
                    />
                  </Box>
                )} */}
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
                  maxWidth: 300,
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
                {coinData &&
                  coinData?.communities?.length > 0 &&
                  coinData?.communities?.map((item: any, index: number) => (
                    <SingleCoinChip
                      key={index}
                      src={item?.logo}
                      title={item?.name}
                      link={item?.url}
                      variant="communities"
                    />
                  ))}
              </Stack>

              {/* <SingleCoinChip src={FacebookImage} title="Facebook" />

              <SingleCoinChip src={InstagramImage} title="Instagram" />
              <SingleCoinChip src={RedditImage} title="Reddit" />

              <SingleCoinChip src={TelegramImage} title="Telegram" /> */}
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
                  {coinData && coinData?.source_code_url !== null && (
                    <SingleCoinChip
                      src={SourcecodeImage}
                      title="Source code"
                      link={coinData && coinData?.source_code_url}
                    />
                  )}{" "}
                  {coinData && coinData?.whitepaper_link !== null && (
                    <SingleCoinChip
                      src={WhitepaperImage}
                      title="Whitepaper"
                      link={coinData && coinData?.whitepaper_link}
                    />
                  )}
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "column" }}
                  sx={{ alignItems: "flex-start" }}
                  spacing={0.5}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "flex-start",
                  }}
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
                    {coinData && coinData?.docs_url !== null && (
                      <SingleCoinChip
                        src={DocsImage}
                        title="Docs"
                        link={coinData && coinData?.docs_url}
                      />
                    )}

                    {coinData &&
                      coinData?.audit?.length > 0 &&
                      coinData?.audit
                        ?.slice(0, 1)
                        .map((item: any, index: number) => (
                          <SingleCoinChip
                            key={index}
                            src={item?.thumb_icon}
                            title={item.name}
                            link={item.url}
                            variant="audit"
                          />
                        ))}

                    {/* <SingleCoinChip src={SourcecodeImage} title="Certik" /> */}

                    {coinData?.audit && coinData?.audit?.length > 2 && (
                      <Box pb={1}>
                        <ShowMoreMenu
                          showMoreAnchorEl={showMoreAnchorEl}
                          open={open}
                          handleClose={handleClose}
                          data={coinData && coinData?.audit?.slice(1)}
                          variant="audit"
                        />
                      </Box>
                    )}
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{ color: "#696969", fontSize: "0.70rem" }}
                  >
                    {coinData && coinData?.audit?.slice(1).length > 0 && (
                      <span style={{ color: "#00b8ff", fontWeight: 500 }}>
                        +{coinData && coinData?.audit?.slice(1).length}{" "}
                        <span style={{ color: "#00b8ff", fontWeight: 400 }}>
                          {" "}
                          Audits
                        </span>{" "}
                      </span>
                    )}
                  </Typography>
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
                  lg: "flex-start",
                }}
                spacing={0.5}
              >
                <Stack direction="row" spacing={0.3} alignItems="flex-end">
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
                    {coinData &&
                      coinData?.chart_link?.length > 0 &&
                      coinData?.chart_link
                        ?.slice(0, 2)
                        .map((item: any, index: number) => (
                          <SingleCoinChip
                            key={index}
                            src={item?.thumb_icon}
                            title={item?.name}
                            link={item?.url}
                            variant="chart"
                          />
                        ))}
                  </Stack>

                  {coinData?.chart_link && coinData?.chart_link?.length > 2 && (
                    <Box pb={1}>
                      <ShowMoreMenu
                        showMoreAnchorEl={showMoreAnchorEl}
                        open={open}
                        handleClose={handleClose}
                        data={coinData && coinData?.chart_link?.slice(2)}
                        variant="chart"
                      />
                    </Box>
                  )}
                </Stack>
                <Typography
                  variant="caption"
                  sx={{ color: "#696969", fontSize: "0.70rem" }}
                >
                  {coinData && coinData?.chart_link?.slice(2).length > 0 && (
                    <span style={{ color: "#00b8ff", fontWeight: 500 }}>
                      +{coinData && coinData?.chart_link?.slice(2).length}{" "}
                      <span style={{ color: "#00b8ff", fontWeight: 400 }}>
                        {" "}
                        Charts
                      </span>{" "}
                    </span>
                  )}
                </Typography>
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
                  // <Rating
                  //   name="size-small"
                  //   precision={0.1}
                  //   defaultValue={coinData?.trust_score[0]?.rating}
                  //   value={coinData?.trust_score[0]?.rating}
                  //   size="small"
                  //   readOnly
                  //   sx={{ fontSize: ".9rem" }}
                  // />
                  <AnimatedRating
                    name="size-small"
                    precision={0.1}
                    defaultValue={coinData?.trust_score[0]?.rating}
                    value={coinData?.trust_score[0]?.rating}
                    size="small"
                    readOnly={true}
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
