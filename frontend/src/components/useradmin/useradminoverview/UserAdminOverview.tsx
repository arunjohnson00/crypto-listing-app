import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import AddCoinIcon from "../../../assets/userdashboard/add-coin.png";
import AddNFTIcon from "../../../assets/userdashboard/add-nft.png";
import AddEventsIcon from "../../../assets/userdashboard/add-event.png";
import AddAirdropIcon from "../../../assets/userdashboard/add-airdrop.png";
import TelegramIcon from "../../../assets/userdashboard/telegram.png";
import TwitterIcon from "../../../assets/userdashboard/twitter.png";
import AdsImage from "../../../assets/userdashboard/ads.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userAnnouncementsRequest } from "../../../store/action";
import moment from "moment";

const UserAdminOverview = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const dispatch: any = useDispatch();
  const userAnnouncemnts = useSelector((data: any) => {
    return data?.userReducer?.user_announcements;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};

    dispatch(userAnnouncementsRequest("noData", successHandler, errorHandler));
  }, [dispatch]);

  console.log(userAnnouncemnts);
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
      spacing={6}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "column", lg: "column" }}
        spacing={3}
      >
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 3, sm: 3, md: 3, lg: 6 }}
        >
          <Stack direction="column" spacing={2}>
            <Typography
              sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#FFFFFF" }}
            >
              Add Assets
            </Typography>

            <Stack direction="column" spacing={1.5}>
              <Link
                to="/user-dashboard/coin/add"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <Avatar
                      alt="Add Coin"
                      src={AddCoinIcon}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        mr: 2,
                        background: "#081855ab",
                        p: 0.5,
                      }}
                    />
                  }
                  sx={{
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #0C218E 33%, #3E02C4 79%)",
                    width: 300,
                    height: 50,
                    justifyContent: "flex-start",
                    textTransform: "capitalize",
                  }}
                >
                  Add Coin
                </Button>
              </Link>
              <Link
                to="/user-dashboard/nft/add"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <Avatar
                      alt="Add NFT"
                      src={AddNFTIcon}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        mr: 2,
                        background: "#081855ab",
                        p: 0.5,
                      }}
                    />
                  }
                  sx={{
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #008331 33%, #04B34A 79%)",
                    width: 300,
                    height: 50,
                    justifyContent: "flex-start",
                    textTransform: "capitalize",
                  }}
                >
                  Add NFT
                </Button>
              </Link>
              <Link
                to="/user-dashboard/add-events"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <Avatar
                      alt="Add Events"
                      src={AddEventsIcon}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        mr: 2,
                        background: "#081855ab",
                        p: 0.5,
                      }}
                    />
                  }
                  sx={{
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #6C0280 33%, #A70EC1 79%)",
                    width: 300,
                    height: 50,
                    justifyContent: "flex-start",
                    textTransform: "capitalize",
                  }}
                >
                  Add Events
                </Button>
              </Link>

              <Link
                to="/user-dashboard/airdrops/add"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                <Button
                  variant="contained"
                  startIcon={
                    <Avatar
                      alt="Add AirDrops"
                      src={AddAirdropIcon}
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: 2,
                        mr: 2,
                        background: "#081855ab",
                        p: 0.5,
                      }}
                    />
                  }
                  sx={{
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #AC4F02 33%, #E76702 79%)",
                    width: 300,
                    height: 50,
                    justifyContent: "flex-start",
                    textTransform: "capitalize",
                  }}
                >
                  Add Airdrop
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Divider
            flexItem
            orientation={matches === false ? "horizontal" : "vertical"}
            sx={{
              borderRightColor: matches === true ? "none" : "#281E63",
              borderRightWidth: matches === true ? 0 : 2,
              borderBottomColor: matches === false ? "none" : "#281E63",
              borderBottomWidth: matches === false ? 0 : 2,
            }}
          />
          <Stack direction="column" spacing={5} justifyContent="flex-start">
            <Stack direction="row" spacing={2}>
              {" "}
              <Typography
                sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#FFFFFF" }}
              >
                Announcement
              </Typography>
              <Link
                to="/user-dashboard/announcement"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    borderRadius: 6,
                    background: "#3F00C9",
                    fontSize: ".7rem",
                    justifyContent: "flex-start",
                    textTransform: "capitalize",
                  }}
                >
                  View all
                </Button>
              </Link>
            </Stack>
            <Stack direction="column" spacing={0}>
              {userAnnouncemnts && userAnnouncemnts?.response === true ? (
                <Stack direction="column" spacing={2}>
                  {userAnnouncemnts &&
                    userAnnouncemnts?.data?.map((item: any, index: number) => (
                      <Stack direction="row" spacing={0.5} key={index}>
                        <CheckCircleOutlineIcon
                          sx={{ color: "#04B34A", fontSize: ".9rem" }}
                        />
                        <Stack direction="column" spacing={0.4}>
                          <a
                            href={item?.banner_target_link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <Typography
                              sx={{
                                fontSize: ".85rem",
                                fontWeight: 500,
                                color: "#FFFFFF",
                                lineHeight: 1,
                                cursor: "pointer",
                              }}
                            >
                              {item?.announcements}
                            </Typography>
                          </a>
                          <Stack direction="row" spacing={1}>
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
                                sx={{
                                  fontSize: ".75rem",
                                  fontWeight: 500,
                                  color: "#11A0CA",
                                  cursor: "pointer",
                                }}
                              >
                                {item?.button_name}
                              </Typography>
                            </a>
                            <Typography
                              sx={{
                                fontSize: ".75rem",
                                fontWeight: 500,
                                color: "#E1EEB9",
                              }}
                            >
                              {item &&
                                moment(new Date(item?.created_at)).format(
                                  "DD MMM YYYY"
                                )}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
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
          </Stack>
        </Stack>

        <Divider
          flexItem
          orientation="horizontal"
          sx={{
            borderBottomColor: "#281E63",
            borderBottomWidth: 2,
          }}
        />

        <Stack direction="column" spacing={2}>
          <Typography
            sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#FFFFFF" }}
          >
            Support & Assistance
          </Typography>

          <Stack direction="column" spacing={1.5}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Connect With Admin"
                src={TelegramIcon}
                sx={{ width: 16, height: 16 }}
              />
              <a
                href="https://t.me/coinXhigh_admin"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: ".75rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Connect With Admin
                </Typography>
              </a>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Telegram"
                src={TelegramIcon}
                sx={{ width: 16, height: 16 }}
              />
              <a
                href="https://t.me/coinXhigh"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: ".75rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Official Telegram
                </Typography>
              </a>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              {/* <Avatar
                alt="Twitter"
                src={TwitterIcon}
                sx={{ width: 16, height: 16 }}
              /> */}
              <EmailRoundedIcon sx={{ color: "#039BE5", fontSize: "1.1rem" }} />
              <a
                href="mailto:support@coinxhigh.com"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontSize: ".75rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Official Email
                </Typography>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          flexGrow: 0,
          height: "auto",
          maxWidth: 350,
        }}
        pb={10}
      >
        <CardMedia
          component="img"
          height="auto"
          image={AdsImage}
          alt="green iguana"
          sx={{ objectFit: "unset" }}
        />
      </Box>
    </Stack>
  );
};

export default UserAdminOverview;
