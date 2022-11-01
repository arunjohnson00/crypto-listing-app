import { Divider, Stack, Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { userAnnouncementsRequest } from "../../../../store/action";
import { useEffect } from "react";
import moment from "moment";

const MobileAnnouncement = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const userAnnouncemnts = useSelector((data: any) => {
    return data?.userReducer?.user_announcements;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(userAnnouncementsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  return (
    <Stack direction="column" spacing={2} alignItems="center" py={3}>
      <Helmet>
        <title> Announcement | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Announcement | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Box
        sx={{
          // border: "1px solid #151717",
          backgroundColor: "#00020B",

          borderRadius: 4,
          height: "auto",
          width: "100%",
        }}
      >
        <Stack direction="row" alignItems="center" width="100%" px={2} py={1}>
          <Stack direction="row" alignItems="flex-start" sx={{ flexGrow: 0 }}>
            <IconButton aria-label="delete" onClick={() => navigate(-1)}>
              <ArrowBackIosRoundedIcon
                sx={{ color: "#b4bdf6", fontSize: "1.2rem" }}
              />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ flexGrow: 1 }}
          >
            <Typography sx={{ fontSize: "1rem", color: "#FFFFFF", mr: "67px" }}>
              Announcement
            </Typography>
          </Stack>
        </Stack>
      </Box>
      {/* <Divider
        light
        flexItem
        variant="middle"
        orientation="horizontal"
        sx={{ borderColor: "#1F556D" }}
      /> */}
      {userAnnouncemnts && userAnnouncemnts?.response === true ? (
        <Stack direction="column" spacing={2} alignItems="center" width="100%">
          {userAnnouncemnts &&
            userAnnouncemnts?.data?.map((item: any, index: number) => (
              <Box
                sx={{
                  // border: "1px solid #151717",
                  backgroundColor: "#00020B",

                  borderRadius: 4,
                  height: "auto",
                  width: "100%",
                }}
              >
                <Stack direction="column" spacing={4} alignItems="center" p={3}>
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    pt={1}
                  >
                    <a
                      href={item?.banner_target_link}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#20DDCF",
                          fontWeight: 500,
                          fontSize: ".9rem",
                          textAlign: "center",
                        }}
                      >
                        {item?.announcements}
                      </Typography>
                    </a>
                    <Divider
                      light
                      flexItem
                      variant="middle"
                      orientation="horizontal"
                      sx={{ borderColor: "#1F556D" }}
                    />
                    {/* <Typography
                      variant="body2"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      We have some new offer for newly added coin.
                    </Typography> */}
                    <a
                      href={item?.banner_target_link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2092C5",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        {item?.button_name}
                      </Typography>
                    </a>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4D4E53",
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      {item && moment(new Date(item?.created_at)).fromNow()}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
        </Stack>
      ) : (
        <Typography
          sx={{
            fontSize: ".85rem",
            fontWeight: 500,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          Currently no data available
        </Typography>
      )}
    </Stack>
  );
};

export default MobileAnnouncement;
