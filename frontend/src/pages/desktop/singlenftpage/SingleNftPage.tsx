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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
import { useSelector } from "react-redux";

import FacebookGraphImage from "../../../assets/singlepagecoin/graph/facebook.png";
import DiscordGraphImage from "../../../assets/singlepagecoin/graph/discord.png";
import RedditGraphImage from "../../../assets/singlepagecoin/graph/reddit.png";
import TelegramGraphImage from "../../../assets/singlepagecoin/graph/telegram.png";
import TwitterGraphImage from "../../../assets/singlepagecoin/graph/twitter.png";
import GithubGraphImage from "../../../assets/singlepagecoin/graph/github.png";

const SingleNftPage = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });
  // const coinSocialGraph = useSelector((data: any) => {
  //   return data?.coinReducer?.coin_social_graph;
  // });
  const coinSocialGraph = [1, 44, 7, 3, 22, 100, 10];

  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  return (
    <Fragment>
      <Grid container rowSpacing={5} columnSpacing={3}>
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <BreadCrumbs data="" home="Home" path="NFT" />
        </Grid>
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
                  // src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
                  src="https://public.nftstatic.com/static/nft/zipped/3935959bce40460fb02c26239ec6dcd8_zipped.png"
                  // alt={data && data?.title}
                  alt=""
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
                  Johny #037
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
                      104 USD
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

                  <Typography variant="caption" sx={{ color: "#FFFFFF" }}>
                    Binance Smart Chain
                  </Typography>
                  {/* {data && data?.currency_icon === null ? (
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: defaultColor[index],
                        width: 22,
                        height: 22,
                      }}
                    >
                      <Typography sx={{ fontSize: ".6rem" }}>
                        Binance Samrt Chain
                      </Typography>
                    </Avatar>
                  ) : (
                    <Avatar
                      variant="square"
                      // alt={data && data?.name}
                      // src={`${serverAPIUrl}public/uploads/nft_currency_icons/${data?.currency_icon}`}
                      src=""
                      //src="https://mui.com/static/images/avatar/1.jpg"
                      sx={{ width: 22, height: 22 }}
                    />
                  )} */}
                  <Avatar
                    variant="square"
                    // alt={data && data?.name}
                    // src={`${serverAPIUrl}public/uploads/nft_currency_icons/${data?.currency_icon}`}
                    src=""
                    //src="https://mui.com/static/images/avatar/1.jpg"
                    sx={{ width: 22, height: 22 }}
                  />
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
                </Box>
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
                  Johny #037
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
                      1.2 BNB
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
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      Binance Smart Chain
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
                      36 min ago
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
                      100,00,000,000,00
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
                      Total Volume
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      13,256
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
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: ".8rem",
                        borderRadius: 1,
                        backgroundColor: "#061242",
                      }}
                    >
                      Vote Now
                    </Button>
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
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        Rarible
                      </Typography>
                      <Avatar
                        // src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
                        src=""
                        // alt={data && data?.title}
                        alt=""
                        variant="square"
                        sx={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        Rarible
                      </Typography>
                      <Avatar
                        // src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
                        src=""
                        // alt={data && data?.title}
                        alt=""
                        variant="square"
                        sx={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                        }}
                      >
                        Rarible
                      </Typography>
                      <Avatar
                        // src={`${serverAPIUrl}public/uploads/nft_listing_image/${data?.image}`}
                        src=""
                        // alt={data && data?.title}
                        alt=""
                        variant="square"
                        sx={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </Stack>
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

                <Stack direction="row" alignItems="center" spacing={3.5}>
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

                  <SocialCounterWithGraphCard
                    title="Twitter Followers"
                    coinData={coinSocialGraph}
                    // icon={
                    //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                    // }

                    icon={TwitterGraphImage}
                    // url={
                    //   coinSocialGraph &&
                    //   coinSocialGraph?.data[0]?.twitter[0]?.social_url
                    // }
                    endColor="#43baff"
                    startColor="#00e8fd"
                  />

                  <SocialCounterWithGraphCard
                    title={"Discord Followers"}
                    coinData={coinSocialGraph}
                    // icon={
                    //   coinSocialGraph && coinSocialGraph?.data[0]?.discord[0]?.social_icon
                    // }

                    icon={DiscordGraphImage}
                    // url={
                    //   coinSocialGraph &&
                    //   coinSocialGraph?.data[0]?.discord[0]?.social_url
                    // }
                    endColor="#2415a2"
                    startColor="#404EED"
                  />
                  <SocialCounterWithGraphCard
                    title="Twitter Followers"
                    coinData={coinSocialGraph}
                    // icon={
                    //   coinSocialGraph && coinSocialGraph?.data[0]?.twitter[0]?.social_icon
                    // }

                    icon={TwitterGraphImage}
                    // url={
                    //   coinSocialGraph &&
                    //   coinSocialGraph?.data[0]?.twitter[0]?.social_url
                    // }
                    endColor="#43baff"
                    startColor="#00e8fd"
                  />

                  <SocialCounterWithGraphCard
                    title={"Discord Followers"}
                    coinData={coinSocialGraph}
                    // icon={
                    //   coinSocialGraph && coinSocialGraph?.data[0]?.discord[0]?.social_icon
                    // }

                    icon={DiscordGraphImage}
                    // url={
                    //   coinSocialGraph &&
                    //   coinSocialGraph?.data[0]?.discord[0]?.social_url
                    // }
                    endColor="#2415a2"
                    startColor="#404EED"
                  />
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum. Perspiciatis minima nesciunt
                    dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit
                    doloribus tenetur fugiat, temporibus enim commodi iusto
                    libero magni deleniti quod quam consequuntur! Commodi minima
                    excepturi repudiandae velit hic maxime doloremque. Quaerat
                    provident commodi consectetur veniam similique ad earum
                    omnis ipsum saepe, voluptas, hic voluptates pariatur est
                    explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                    mollitia maiores labore suscipit quas? Nulla, placeat.
                    Voluptatem quaerat non architecto ab laudantium modi minima
                    sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus
                    quis earum veniam quasi aliquam eligendi, placeat qui
                    corporis!
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleNftPage;
