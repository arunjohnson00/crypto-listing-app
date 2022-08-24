import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import AddCoinIcon from "../../../assets/userdashboard/add-coin.png";
import AddNFTIcon from "../../../assets/userdashboard/add-nft.png";
import AddEventsIcon from "../../../assets/userdashboard/add-event.png";
import AddAirdropIcon from "../../../assets/userdashboard/add-airdrop.png";
import TelegramIcon from "../../../assets/userdashboard/telegram.png";
import TwitterIcon from "../../../assets/userdashboard/twitter.png";
import AdsImage from "../../../assets/userdashboard/ads.png";
const UserAdminOverview = () => {
  return (
    <Stack direction="row" spacing={6}>
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={6}>
          <Stack direction="column" spacing={2}>
            <Typography
              sx={{ fontSize: "1.1rem", fontWeight: 500, color: "#FFFFFF" }}
            >
              Add Assets
            </Typography>

            <Stack direction="column" spacing={1.5}>
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
            </Stack>
          </Stack>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              borderRightColor: "#281E63",
              borderRightWidth: 2,
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
            </Stack>
            <Stack direction="column" spacing={4}>
              <Stack direction="row" spacing={0.5}>
                <CheckCircleOutlineIcon
                  sx={{ color: "#04B34A", fontSize: ".9rem" }}
                />
                <Stack direction="column" spacing={0.2}>
                  <Typography
                    sx={{
                      fontSize: ".85rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      lineHeight: 1,
                    }}
                  >
                    We have some new offers for newly added coins.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#11A0CA",
                      }}
                    >
                      Contact admin for more details
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#E1EEB9",
                      }}
                    >
                      18 Apr 2022
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={0.5}>
                <CheckCircleOutlineIcon
                  sx={{ color: "#04B34A", fontSize: ".9rem" }}
                />
                <Stack direction="column" spacing={0.2}>
                  <Typography
                    sx={{
                      fontSize: ".85rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      lineHeight: 1,
                    }}
                  >
                    We have some new offers for newly added coins.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#11A0CA",
                      }}
                    >
                      Contact admin for more details
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#E1EEB9",
                      }}
                    >
                      18 Apr 2022
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={0.5}>
                <CheckCircleOutlineIcon
                  sx={{ color: "#04B34A", fontSize: ".9rem" }}
                />
                <Stack direction="column" spacing={0.2}>
                  <Typography
                    sx={{
                      fontSize: ".85rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      lineHeight: 1,
                    }}
                  >
                    We have some new offers for newly added coins.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#11A0CA",
                      }}
                    >
                      Contact admin for more details
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#E1EEB9",
                      }}
                    >
                      18 Apr 2022
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={0.5}>
                <CheckCircleOutlineIcon
                  sx={{ color: "#04B34A", fontSize: ".9rem" }}
                />
                <Stack direction="column" spacing={0.2}>
                  <Typography
                    sx={{
                      fontSize: ".85rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      lineHeight: 1,
                    }}
                  >
                    We have some new offers for newly added coins.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#11A0CA",
                      }}
                    >
                      Contact admin for more details
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#E1EEB9",
                      }}
                    >
                      18 Apr 2022
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={0.5}>
                <CheckCircleOutlineIcon
                  sx={{ color: "#04B34A", fontSize: ".9rem" }}
                />
                <Stack direction="column" spacing={0.2}>
                  <Typography
                    sx={{
                      fontSize: ".85rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      lineHeight: 1,
                    }}
                  >
                    We have some new offers for newly added coins.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#11A0CA",
                      }}
                    >
                      Contact admin for more details
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: ".75rem",
                        fontWeight: 500,
                        color: "#E1EEB9",
                      }}
                    >
                      18 Apr 2022
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
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

              <Typography
                sx={{
                  fontSize: ".75rem",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Connect With Admin
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Telegram"
                src={TelegramIcon}
                sx={{ width: 16, height: 16 }}
              />

              <Typography
                sx={{
                  fontSize: ".75rem",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Official Telegram
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Twitter"
                src={TwitterIcon}
                sx={{ width: 16, height: 16 }}
              />

              <Typography
                sx={{
                  fontSize: ".75rem",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Official Twitter
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          flexGrow: 0,
          height: "auto",
          maxWidth: 400,
        }}
        mt={8}
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
