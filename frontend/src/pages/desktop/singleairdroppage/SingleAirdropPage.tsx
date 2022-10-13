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
  Tooltip,
  IconButton,
} from "@mui/material";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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
import { airdropSinglePageDetailsRequest } from "../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const SingleAirdropPage = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  const [copyValue, setCopyValue] = useState("");
  const [copied, setCopied] = useState(false);

  // useEffect(() => {
  //   data && setCopyValue(data?.contract_address);
  // }, [data]);
  const airdropSinglePageDetails = useSelector((data: any) => {
    return data?.airdropReducer?.airdrop_single_page_details?.data;
  });
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
      // err?.error?.message?.response?.status === 500 && navigate("/nft");
    };

    dispatch(
      airdropSinglePageDetailsRequest(
        location?.pathname?.split("/").pop(),
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  return (
    <Fragment>
      <Grid container rowSpacing={5} columnSpacing={0}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <BreadCrumbs
            data={airdropSinglePageDetails && airdropSinglePageDetails?.data}
            home="Home"
            path="Airdrop"
          />
        </Grid>

        {airdropSinglePageDetails &&
          airdropSinglePageDetails?.response === true && (
            <Grid container my={5}>
              <Grid item xs={3}>
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  spacing={4}
                  width="100%"
                >
                  <Box
                    mr={2}
                    width="100%"
                    sx={{
                      backgroundColor: "#030B2F",
                      borderRadius: 6,
                    }}
                  >
                    <Box py={4}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1.5}
                      >
                        <Avatar
                          src={`${serverAPIUrl}public/uploads/nft_listing_image/${
                            airdropSinglePageDetails &&
                            airdropSinglePageDetails?.data?.image
                          }`}
                          alt={
                            airdropSinglePageDetails &&
                            airdropSinglePageDetails?.data?.title
                          }
                          variant="square"
                          sx={{
                            width: 60,
                            height: 60,
                          }}
                        />
                        <Stack
                          direction="column"
                          alignItems="center"
                          spacing={0}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "1.1rem",
                              fontWeight: 600,
                            }}
                          >
                            {airdropSinglePageDetails &&
                              airdropSinglePageDetails?.data?.coin_name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "0.85rem",
                              fontWeight: 400,
                            }}
                          >
                            $
                            {airdropSinglePageDetails &&
                              airdropSinglePageDetails?.data?.coin_symbol}
                          </Typography>
                        </Stack>
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
                            <Typography
                              variant="caption"
                              sx={{ color: "#FFFFFF", fontSize: ".85rem" }}
                            >
                              Starts in
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>

                      <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1.5}
                        pb={2}
                      >
                        <Box
                          sx={{ backgroundColor: " #00071A", borderRadius: 4 }}
                          px={2}
                          py={1.5}
                        >
                          <Stack direction="column" alignItems="center">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Stack direction="column" alignItems="center">
                                {" "}
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "1.7rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  1
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  Day
                                </Typography>
                              </Stack>
                              <Stack direction="column" alignItems="center">
                                {" "}
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "1.7rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  12
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  Hour
                                </Typography>
                              </Stack>
                              <Stack direction="column" alignItems="center">
                                {" "}
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "1.7rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  12
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    color: "#FFFFFF",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  Min
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
                  </Box>

                  <Box
                    mr={2}
                    width="100%"
                    sx={{
                      backgroundColor: "#030B2F",
                      borderRadius: 6,
                    }}
                  >
                    <Box py={4}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1.5}
                      >
                        <Stack
                          direction="column"
                          alignItems="center"
                          spacing={0}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#4E62A2",
                              fontSize: ".85rem",
                              fontWeight: 500,
                            }}
                          >
                            Airdrop Amount
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "1.45rem",
                              fontWeight: 700,
                            }}
                          >
                            1000000
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>

                  <Box
                    mr={2}
                    width="100%"
                    sx={{
                      backgroundColor: "#030B2F",
                      borderRadius: 6,
                    }}
                  >
                    <Box py={4}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1.5}
                      >
                        <Stack
                          direction="column"
                          alignItems="center"
                          spacing={0}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#4E62A2",
                              fontSize: ".85rem",
                              fontWeight: 500,
                            }}
                          >
                            Winners
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "1.45rem",
                              fontWeight: 700,
                            }}
                          >
                            1000000
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>

                  <Box
                    mr={2}
                    width="100%"
                    sx={{
                      backgroundColor: "#030B2F",
                      borderRadius: 6,
                    }}
                  >
                    <Box py={4}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1.5}
                      >
                        <Stack
                          direction="column"
                          alignItems="center"
                          spacing={0}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#4E62A2",
                              fontSize: ".85rem",
                              fontWeight: 500,
                            }}
                          >
                            Start Date
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "1.45rem",
                              fontWeight: 700,
                            }}
                          >
                            12 May 2022
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>

                  <Box
                    mr={2}
                    width="100%"
                    sx={{
                      backgroundColor: "#030B2F",
                      borderRadius: 6,
                    }}
                  >
                    <Box py={4}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1.5}
                      >
                        <Stack
                          direction="column"
                          alignItems="center"
                          spacing={0}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#4E62A2",
                              fontSize: ".85rem",
                              fontWeight: 500,
                            }}
                          >
                            End Date
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "1.45rem",
                              fontWeight: 700,
                            }}
                          >
                            12 May 2022
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={9}>
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  spacing={2}
                  pl={{ xs: 0, sm: 0, md: 5 }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "1.7rem",
                        fontWeight: 600,
                      }}
                    >
                      Blue Art Token Airdrop
                    </Typography>
                    <Chip
                      label="Live"
                      color="success"
                      variant="filled"
                      sx={{
                        color: "#FFFFFF",
                        minWidth: 80,
                        backgroundColor: "#02BF38",
                      }}
                    />
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "flex-start" }}
                    spacing={1}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#FB8F01",
                          fontWeight: 500,
                          fontSize: "1rem",
                        }}
                      >
                        Contract Address:
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
                        sx={{ color: "#FFFFFF", fontSize: "1rem" }}
                      >
                        {/* {data &&
                            data?.contract_address !== null &&
                            data?.contract_address.slice(0, 12) + "........."}

                          {data &&
                            data?.contract_address !== null &&
                            data?.contract_address.slice(-6)} */}
                        ..............................
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
                          <Tooltip
                            title={`${copied ? "Copied" : "Copy this Token"}`}
                          >
                            <ContentCopyIcon
                              sx={{
                                color: `${copied ? "#23D471" : "#75787c"}`,
                                fontSize: "1rem",
                              }}
                            />
                          </Tooltip>
                        </IconButton>
                      </CopyToClipboard>
                    </Stack>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 25, height: 25 }}
                    />{" "}
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 25, height: 25 }}
                    />
                  </Stack>
                  <Stack direction="column" alignItems="flex-start" spacing={3}>
                    <Stack direction="column" spacing={1.5}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#cfcfcf",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        Airdrop Details
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#cfcfcf",
                          fontSize: "0.85rem",
                          fontWeight: 400,
                        }}
                      >
                        text
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

export default SingleAirdropPage;
