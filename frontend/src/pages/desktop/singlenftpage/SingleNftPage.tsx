import { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Stack,
  CardMedia,
  Button,
  Typography,
  Divider,
  Box,
  Avatar,
  Chip,
  Dialog,
  DialogContent,
} from "@mui/material";
import moment from "moment";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import BreadCrumbs from "../../../components/desktop/breadcrumbs/BreadCrumbs";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { defaultColor } from "../../../common/common";
import SocialCounterWithGraphCard from "../../../components/desktop/cards/socialcounterwithgraphcard/SocialCounterWithGraphCard";
import { useDispatch, useSelector } from "react-redux";

import FacebookGraphImage from "../../../assets/singlepagecoin/graph/facebook.png";
import DiscordGraphImage from "../../../assets/singlepagecoin/graph/discord.png";
import RedditGraphImage from "../../../assets/singlepagecoin/graph/reddit.png";
import TelegramGraphImage from "../../../assets/singlepagecoin/graph/telegram.png";
import TwitterGraphImage from "../../../assets/singlepagecoin/graph/twitter.png";
import GithubGraphImage from "../../../assets/singlepagecoin/graph/github.png";
import { useLocation, useNavigate } from "react-router-dom";
import { nftSinglePageDetailsRequest } from "../../../store/action";
import { nftVoteRequest } from "../../../store/action/nftAction";
import LoadingButton from "@mui/lab/LoadingButton";
import VotePopupAds from "../../../components/ads/votepopupads/VotePopupAds";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const SingleNftPage = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  const nftSinglePageDetails = useSelector((data: any) => {
    return data?.nftReducer?.nft_single_page_details?.data;
  });
  const [vote, setVote] = useState<any>({
    initial: false,
    completed: false,
    captcha: false,
  });
  const [openCaptcha, setOpenCaptcha] = useState<any>(false);
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  // const coinSocialGraph = useSelector((data: any) => {
  //   return data?.coinReducer?.coin_social_graph;
  // });
  const coinSocialGraph = [1, 44, 7, 3, 22, 100, 10];

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  useEffect(() => {
    const successHandler = (res: any) => {};

    const errorHandler = (err: any) => {
      err?.error?.message?.response?.status === 500 && navigate("/nft");
    };

    dispatch(
      nftSinglePageDetailsRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch, vote]);

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
      nftVoteRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  };

  return (
    <Fragment>
      <Grid container rowSpacing={5} columnSpacing={0}>
        {/* <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={3}>
          <BreadCrumbs
            data={nftSinglePageDetails && nftSinglePageDetails?.data}
            home="Home"
            path="NFT"
          />
        </Grid>

        {nftSinglePageDetails && nftSinglePageDetails?.response === true && (
          <Grid container my={5}>
            <Grid item xs={3}>
              <Box
                mr={2}
                sx={{
                  backgroundColor: "#01061A",
                  border: "2px solid #090F2F",
                  borderTopLeftRadius: 52,
                  borderTopRightRadius: 52,
                  borderBottomLeftRadius: 52,
                  borderBottomRightRadius: 52,
                }}
              >
                <Stack direction="column" alignItems="center" spacing={1.5}>
                  <Avatar
                    src={`${serverAPIUrl}public/uploads/nft_listing_image/${
                      nftSinglePageDetails && nftSinglePageDetails?.data?.image
                    }`}
                    alt={
                      nftSinglePageDetails && nftSinglePageDetails?.data?.title
                    }
                    variant="square"
                    sx={{
                      borderTopLeftRadius: 52,
                      borderTopRightRadius: 52,
                      width: "100%",
                      height: "250px",
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    {nftSinglePageDetails && nftSinglePageDetails?.data?.title}
                  </Typography>
                  <Stack
                    direction="column"
                    alignItems="center"
                    width="100%"
                    spacing={1}
                    pb={2}
                  >
                    <Stack
                      direction="column"
                      alignItems="center"
                      spacing={0}
                      width="-webkit-fill-available"
                      px={3}
                    >
                      <Divider
                        variant="middle"
                        flexItem
                        orientation="horizontal"
                        sx={{
                          borderColor: "#0b1640",
                          borderBottomWidth: 1,
                          mb: 1,
                        }}
                      />
                      <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
                        Price
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.9rem",
                          fontWeight: "bolder",
                          backgroundImage:
                            "linear-gradient(to right, #A828B9, #AF0A47)",
                          filter: "drop-shadow(0 20px 30px #28d8ff33)",

                          WebkitTextFillColor: "transparent",
                          WebkitBackgroundClip: "text",
                          WebkitBoxDecorationBreak: "clone",
                        }}
                      >
                        {/* {data && data?.public_mint_price} {data && data?.symbol} */}
                        {nftSinglePageDetails &&
                          (nftSinglePageDetails?.data?.public_mint_price !==
                            "" ||
                            nftSinglePageDetails?.data?.public_mint_price !==
                              null) &&
                          nftSinglePageDetails?.data?.public_mint_price}{" "}
                        {nftSinglePageDetails &&
                          nftSinglePageDetails?.data?.nft_currency?.map(
                            (item: any, index: number) => (
                              <span>{item?.currency_symbol}</span>
                            )
                          )}
                      </Typography>
                      <Divider
                        variant="middle"
                        flexItem
                        orientation="horizontal"
                        sx={{
                          borderColor: "#0b1640",
                          borderBottomWidth: 1,
                          mt: 1,
                        }}
                      />
                    </Stack>
                    {nftSinglePageDetails &&
                      nftSinglePageDetails?.data?.nft_networks?.map(
                        (item: any, index: number) => (
                          <a
                            href={item?.network_explorer_url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            <Stack
                              direction="column"
                              alignItems="center"
                              spacing={1}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#FFFFFF",
                                  fontSize: "0.9rem",
                                  fontWeight: 600,
                                }}
                              >
                                {item?.network_name}
                              </Typography>
                              {/* <Avatar
                                src={`${serverAPIUrl}public/uploads/network_icons/${item?.network_icon}`}
                                alt={item?.nft_marketplace_name}
                                variant="square"
                                sx={{
                                  width: 20,
                                  height: 20,
                                }}
                              /> */}

                              {item && item?.network_icon === null ? (
                                <Avatar
                                  variant="square"
                                  sx={{
                                    bgcolor: defaultColor[index],
                                    width: 22,
                                    height: 22,
                                  }}
                                >
                                  <Typography sx={{ fontSize: ".6rem" }}>
                                    {item && item?.network_name[0]}
                                  </Typography>
                                </Avatar>
                              ) : (
                                <Avatar
                                  variant="square"
                                  alt={item && item?.network_name}
                                  src={`${serverAPIUrl}public/uploads/network_icons/${item?.network_icon}`}
                                  //src="https://mui.com/static/images/avatar/1.jpg"
                                  sx={{ width: 22, height: 22 }}
                                />
                              )}
                            </Stack>
                          </a>
                        )
                      )}
                  </Stack>
                </Stack>

                <Stack
                  direction="column"
                  alignItems="center"
                  spacing={1.5}
                  pb={2}
                >
                  <Box
                    sx={{ border: "1px solid #0A0F2E", borderRadius: 4 }}
                    px={2}
                    py={1.5}
                  >
                    <Stack direction="column" alignItems="center">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#03FEB5",
                              fontSize: "0.65rem",
                              fontWeight: 400,
                            }}
                          >
                            Presale Mint Price
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {" "}
                            {nftSinglePageDetails &&
                              (nftSinglePageDetails?.data
                                ?.pre_sale_mint_price !== "" ||
                                nftSinglePageDetails?.data
                                  ?.pre_sale_mint_price !== null) &&
                              nftSinglePageDetails?.data
                                ?.pre_sale_mint_price}{" "}
                            {nftSinglePageDetails &&
                              nftSinglePageDetails?.data?.nft_currency?.map(
                                (item: any, index: number) => (
                                  <span>{item?.currency_symbol}</span>
                                )
                              )}
                          </Typography>
                        </Stack>

                        <Divider
                          variant="middle"
                          flexItem
                          orientation="vertical"
                          sx={{
                            borderColor: "#0b1640",
                            borderRightWidth: 1,
                            mb: 1,
                          }}
                        />

                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#03FEB5",
                              fontSize: "0.65rem",
                              fontWeight: 400,
                            }}
                          >
                            Presale Mint Start Date
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {nftSinglePageDetails &&
                              (nftSinglePageDetails?.data
                                ?.pre_sale_start_date !== "" ||
                                nftSinglePageDetails?.data
                                  ?.pre_sale_start_date !== null) &&
                              moment(
                                new Date(
                                  nftSinglePageDetails?.data?.pre_sale_start_date
                                )
                              ).format("DD MMM YYYY")}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                  <Box
                    sx={{ border: "1px solid #0A0F2E", borderRadius: 4 }}
                    px={2}
                    py={1.5}
                  >
                    <Stack direction="column" alignItems="center">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#03FEB5",
                              fontSize: "0.65rem",
                              fontWeight: 400,
                            }}
                          >
                            Public Mint Price
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {nftSinglePageDetails &&
                              (nftSinglePageDetails?.data?.public_mint_price !==
                                "" ||
                                nftSinglePageDetails?.data
                                  ?.public_mint_price !== null) &&
                              nftSinglePageDetails?.data
                                ?.public_mint_price}{" "}
                            {nftSinglePageDetails &&
                              nftSinglePageDetails?.data?.nft_currency?.map(
                                (item: any, index: number) => (
                                  <span>{item?.currency_symbol}</span>
                                )
                              )}
                          </Typography>
                        </Stack>

                        <Divider
                          variant="middle"
                          flexItem
                          orientation="vertical"
                          sx={{
                            borderColor: "#0b1640",
                            borderRightWidth: 1,
                            mb: 1,
                          }}
                        />

                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#03FEB5",
                              fontSize: "0.65rem",
                              fontWeight: 400,
                            }}
                          >
                            Public Mint Start Date
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {nftSinglePageDetails &&
                              (nftSinglePageDetails?.data
                                ?.public_mint_start_date !== "" ||
                                nftSinglePageDetails?.data
                                  ?.public_mint_start_date !== null) &&
                              moment(
                                new Date(
                                  nftSinglePageDetails?.data?.public_mint_start_date
                                )
                              ).format("DD MMM YYYY")}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>

                  {/* <Box
                    sx={{ border: "1px solid #0A0F2E", borderRadius: 4 }}
                    px={2}
                    py={1.5}
                  >
                    <Stack direction="column" alignItems="center">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#03FEB5",
                              fontSize: "0.65rem",
                              fontWeight: 400,
                            }}
                          >
                            Presale Mint Price
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            0.9 BNB
                          </Typography>
                        </Stack>

                        <Divider
                          variant="middle"
                          flexItem
                          orientation="vertical"
                          sx={{
                            borderColor: "#0b1640",
                            borderRightWidth: 1,
                            mb: 1,
                          }}
                        />

                        <Stack direction="column" alignItems="flex-start">
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#03FEB5",
                              fontSize: "0.65rem",
                              fontWeight: 400,
                            }}
                          >
                            Presale Mint Start Date
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            0.9 BNB
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box> */}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Stack
                direction="column"
                alignItems="flex-start"
                spacing={4}
                pl={{ xs: 0, sm: 0, md: 5 }}
              >
                <Stack direction="column" spacing={2}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {nftSinglePageDetails && nftSinglePageDetails?.data?.title}
                  </Typography>
                </Stack>
                <Stack direction="column" alignItems="flex-start" spacing={3}>
                  <Stack direction="row" alignItems="center" spacing={3.5}>
                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Price
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {nftSinglePageDetails &&
                          (nftSinglePageDetails?.data?.public_mint_price !==
                            "" ||
                            nftSinglePageDetails?.data?.public_mint_price !==
                              null) &&
                          nftSinglePageDetails?.data?.public_mint_price}{" "}
                        {nftSinglePageDetails &&
                          nftSinglePageDetails?.data?.nft_currency?.map(
                            (item: any, index: number) => (
                              <span>{item?.currency_symbol}</span>
                            )
                          )}
                      </Typography>
                    </Stack>

                    <Divider
                      variant="middle"
                      flexItem
                      orientation="vertical"
                      sx={{
                        borderColor: "#0b1640",
                        borderRightWidth: 1,
                        mb: 1,
                      }}
                    />

                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Network
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={3.5}>
                        {nftSinglePageDetails &&
                          nftSinglePageDetails?.data?.nft_networks?.map(
                            (item: any, index: number) => (
                              <a
                                href={item?.network_explorer_url}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none" }}
                              >
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={1}
                                >
                                  <Avatar
                                    src={`${serverAPIUrl}public/uploads/network_icons/${item?.network_icon}`}
                                    alt={item?.nft_marketplace_name}
                                    variant="square"
                                    sx={{
                                      width: 16,
                                      height: 16,
                                    }}
                                  />
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      color: "#FFFFFF",
                                      fontSize: "0.9rem",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {item?.network_name}
                                  </Typography>
                                </Stack>
                              </a>
                            )
                          )}
                      </Stack>
                    </Stack>

                    <Divider
                      variant="middle"
                      flexItem
                      orientation="vertical"
                      sx={{
                        borderColor: "#0b1640",
                        borderRightWidth: 1,
                        mb: 1,
                      }}
                    />

                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Listed
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {nftSinglePageDetails &&
                          (nftSinglePageDetails?.data?.created_at !== "" ||
                            nftSinglePageDetails?.data?.created_at !== null) &&
                          moment(
                            new Date(nftSinglePageDetails?.data?.created_at)
                          ).fromNow()}
                      </Typography>
                    </Stack>

                    <Divider
                      variant="middle"
                      flexItem
                      orientation="vertical"
                      sx={{
                        borderColor: "#0b1640",
                        borderRightWidth: 1,
                        mb: 1,
                      }}
                    />

                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Total Supply
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {nftSinglePageDetails &&
                          (nftSinglePageDetails?.data?.max_num_items !== "" ||
                            nftSinglePageDetails?.data?.max_num_items !==
                              null) &&
                          nftSinglePageDetails?.data?.max_num_items}
                      </Typography>
                    </Stack>

                    <Divider
                      variant="middle"
                      flexItem
                      orientation="vertical"
                      sx={{
                        borderColor: "#0b1640",
                        borderRightWidth: 1,
                        mb: 1,
                      }}
                    />

                    <Stack direction="column" alignItems="flex-start">
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#535662",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                        }}
                      >
                        Total Votes
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        {nftSinglePageDetails &&
                          (nftSinglePageDetails?.data?.votes !== "" ||
                            nftSinglePageDetails?.data?.votes !== null) &&
                          nftSinglePageDetails?.data?.votes}
                      </Typography>
                    </Stack>

                    {/* <Divider
                    variant="middle"
                    flexItem
                    orientation="vertical"
                    sx={{
                      borderColor: "#0b1640",
                      borderRightWidth: 1,
                      mb: 1,
                    }}
                  /> */}

                    <Stack direction="column" alignItems="flex-start">
                      {vote &&
                      vote.initial === false &&
                      vote.completed === false &&
                      vote.captcha === false ? (
                        <Button
                          variant="contained"
                          sx={{
                            textTransform: "capitalize",
                            fontSize: ".8rem",
                            borderRadius: 1,
                            backgroundColor: "#061242",
                          }}
                          onClick={captchaHandler}
                        >
                          Vote Now
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
                                    {nftSinglePageDetails &&
                                      nftSinglePageDetails?.data?.title}
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
                        vote.completed === true && (
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "capitalize",
                              fontSize: ".8rem",
                              borderRadius: 1,
                              backgroundColor: "#061242",
                            }}
                          >
                            Voted
                          </Button>
                        )
                      )}
                    </Stack>
                  </Stack>

                  <Divider
                    variant="middle"
                    flexItem
                    orientation="horizontal"
                    sx={{
                      borderColor: "#0b1640",
                      borderBottomWidth: 1,
                      mb: 1,
                    }}
                  />
                  <Stack direction="column" spacing={1.5}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#03FEB5",
                        // fontSize: "0.9rem",
                        // fontWeight: 600,
                      }}
                    >
                      Available on
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={3.5}>
                      {nftSinglePageDetails &&
                        nftSinglePageDetails?.data?.nft_marketplace?.map(
                          (item: any, index: number) => (
                            <a
                              href={item?.marketplace_url}
                              target="_blank"
                              rel="noreferrer"
                              style={{ textDecoration: "none" }}
                            >
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1.5}
                              >
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  {item?.nft_marketplace_name}
                                </Typography>
                                <Avatar
                                  src={`${serverAPIUrl}public/uploads/nft_marketplace_icons/${item?.thumb_icon}`}
                                  alt={item?.nft_marketplace_name}
                                  variant="square"
                                  sx={{
                                    width: 20,
                                    height: 20,
                                  }}
                                />
                              </Stack>
                            </a>
                          )
                        )}
                    </Stack>
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="horizontal"
                    sx={{
                      borderColor: "#0b1640",
                      borderBottomWidth: 1,
                      mb: 1,
                    }}
                  />

                  <Stack direction="column" spacing={1.5}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#03FEB5",
                        // fontSize: "0.9rem",
                        // fontWeight: 600,
                      }}
                    >
                      NFT Category
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      {nftSinglePageDetails &&
                        nftSinglePageDetails?.data?.nft_category?.map(
                          (item: any, index: number) => (
                            <Chip
                              label={item}
                              size="medium"
                              color="primary"
                              sx={{ backgroundColor: defaultColor[index] }}
                            />
                          )
                        )}
                    </Stack>
                  </Stack>
                  <Divider
                    variant="middle"
                    flexItem
                    orientation="horizontal"
                    sx={{
                      borderColor: "#0b1640",
                      borderBottomWidth: 1,
                      mb: 1,
                    }}
                  />

                  {/* <Stack direction="row" alignItems="center" spacing={3.5}>
                    {/* {coinSocialGraph &&
                    coinSocialGraph?.response === true &&
                    coinSocialGraph?.data[0]?.twitter !== undefined &&
                    coinSocialGraph?.data[0]?.twitter.length > 0 && (
                      <SocialCounterWithGraphCard
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
                      <SocialCounterWithGraphCard
                        title={`${
                          coinSocialGraph &&
                          coinSocialGraph?.data[0]?.telegram[0]?.social_platform
                        } Followers`}
                        coinData={
                          coinSocialGraph &&
                          coinSocialGraph?.data[0]?.telegram[0]?.followers
                            ?.split(",")
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
                      <SocialCounterWithGraphCard
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
                      <SocialCounterWithGraphCard
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
                      <SocialCounterWithGraphCard
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
                      <SocialCounterWithGraphCard
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
                    )} */}

                  {/* <SocialCounterWithGraphCard
                      title="Twitter Followers"
                      coinData={coinSocialGraph}
                      icon={
                        coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                      }

                      icon={TwitterGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.twitter[0]?.social_url
                      }
                      endColor="#43baff"
                      startColor="#00e8fd"
                    />

                    <SocialCounterWithGraphCard
                      title={"Discord Followers"}
                      coinData={coinSocialGraph}
                      icon={
                        coinSocialGraph && coinSocialGraph?.data[0]?.discord[0]?.social_icon
                      }

                      icon={DiscordGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.discord[0]?.social_url
                      }
                      endColor="#2415a2"
                      startColor="#404EED"
                    />
                    <SocialCounterWithGraphCard
                      title="Twitter Followers"
                      coinData={coinSocialGraph}
                      icon={
                        coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                      }

                      icon={TwitterGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.twitter[0]?.social_url
                      }
                      endColor="#43baff"
                      startColor="#00e8fd"
                    />

                    <SocialCounterWithGraphCard
                      title={"Discord Followers"}
                      coinData={coinSocialGraph}
                      icon={
                        coinSocialGraph && coinSocialGraph?.data[0]?.discord[0]?.social_icon
                      }

                      icon={DiscordGraphImage}
                      url={
                        coinSocialGraph &&
                        coinSocialGraph?.data[0]?.discord[0]?.social_url
                      }
                      endColor="#2415a2"
                      startColor="#404EED"
                    /> */}
                  {/* </Stack> */}
                  {/* <Divider
                    variant="middle"
                    flexItem
                    orientation="horizontal"
                    sx={{
                      borderColor: "#0b1640",
                      borderBottomWidth: 1,
                      mb: 1,
                    }}
                  /> } */}

                  <Stack direction="column" spacing={1.5}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#cfcfcf",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      Description
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#cfcfcf",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                      }}
                    >
                      {nftSinglePageDetails &&
                        parse(nftSinglePageDetails?.data?.description)}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default SingleNftPage;
