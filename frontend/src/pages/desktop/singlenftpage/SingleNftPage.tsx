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
const SingleNftPage = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

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
        <Grid container mt={3}>
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
                  src=""
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
                            color: "#059E91",
                            fontSize: "0.65rem",
                            fontWeight: 600,
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
                            color: "#059E91",
                            fontSize: "0.65rem",
                            fontWeight: 600,
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
                            color: "#059E91",
                            fontSize: "0.65rem",
                            fontWeight: 600,
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
                            color: "#059E91",
                            fontSize: "0.65rem",
                            fontWeight: 600,
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
                            color: "#059E91",
                            fontSize: "0.65rem",
                            fontWeight: 600,
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
                            color: "#059E91",
                            fontSize: "0.65rem",
                            fontWeight: 600,
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
            <Stack direction="column" spacing={2} pl={5}>
              <Typography
                variant="body2"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Johny #037
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SingleNftPage;
