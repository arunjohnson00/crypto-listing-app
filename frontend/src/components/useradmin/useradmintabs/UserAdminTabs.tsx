import React, { useState } from "react";
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import UserAdminShortcuts from "../useradminshortcuts/UserAdminShortcuts";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import UserAdminDonutChart from "../useradmindonutchart/UserAdminDonutChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const UserAdminTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                //display: "none",
                backgroundColor: "#23E2A0",
                // color: "#FFFFF5",
              },

              "& .MuiButtonBase-root.MuiTab-root.Mui-selected": {
                color: "#23E2A0",
                textTransform: "capitalize",
                minHeight: 62,
              },
              "& .MuiButtonBase-root.MuiTab-root": {
                color: "#9D9F9F",
                textTransform: "capitalize",
                minHeight: 62,
                fontSize: 18,
              },
            }}
          >
            <Tab label="Over View" value="1" />
            <Tab label="Badges" value="2" />
            <Tab label="KYC & Audit" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: 0, paddingY: 3 }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={8.5} xl={8.5}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pr={2}>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "auto",
                    borderRadius: 7,
                    backgroundColor: "#11101C",
                  }}
                  px={2.5}
                  py={4}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                    my={1}
                  >
                    <OpenInNewIcon
                      sx={{ color: "#25E595", fontSize: "30px" }}
                    />
                    <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                      Shortcuts
                    </Typography>
                  </Stack>

                  <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    sx={{ alignItems: "center" }}
                    spacing={2}
                    my={2}
                  >
                    <UserAdminShortcuts title="Add Coin" />
                    <UserAdminShortcuts title="Add NFT" />
                    <UserAdminShortcuts title="Add AirDrop" />
                    <UserAdminShortcuts title="Create Ad" />
                  </Stack>
                </Box>
              </Grid>

              <Grid container my={3} spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={3.7} xl={3.7}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: "auto",
                      borderRadius: 7,
                      backgroundColor: "#11101C",
                    }}
                    px={2.5}
                    py={4}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      my={1}
                    >
                      <OpenInNewIcon
                        sx={{ color: "#25E595", fontSize: "30px" }}
                      />
                      <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                        Shortcuts
                      </Typography>
                    </Stack>
                    <Box pl={5.5}>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                        mt={1.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2571DB" }}
                        >
                          Coins 2
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#53EC03" }}
                        >
                          (2)
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                        mt={1.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2571DB" }}
                        >
                          NFT's
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#53EC03" }}
                        >
                          (2)
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                        mt={1.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2571DB" }}
                        >
                          AirDrops
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#53EC03" }}
                        >
                          (2)
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                        mt={3}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#21BE7E" }}
                        >
                          See new listing
                        </Typography>
                        <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: "auto",
                      borderRadius: 7,
                      backgroundColor: "#11101C",
                    }}
                    px={2.5}
                    py={4}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      my={1}
                    >
                      <BubbleChartRoundedIcon
                        sx={{ color: "#25E595", fontSize: "30px" }}
                      />
                      <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                        My Portfolio
                      </Typography>
                    </Stack>
                    <UserAdminDonutChart />
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={3}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#21BE7E" }}
                      >
                        View all
                      </Typography>
                      <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3.5}
              xl={3.5}
              sx={{ flex: 1 }}
              mb={3}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  height: "690px",

                  borderRadius: 7,
                  background:
                    "linear-gradient(145deg, #2569E6 50%, #25E695 100%)",
                }}
                px={2.5}
                py={4}
              >
                hh
              </Box>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "auto",
                    borderRadius: 7,
                    backgroundColor: "#11101C",
                  }}
                  px={2.5}
                  py={4}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                    my={1}
                    py={1}
                  >
                    <OpenInNewIcon
                      sx={{ color: "#25E595", fontSize: "30px" }}
                    />
                    <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                      My Watchlist
                    </Typography>
                  </Stack>
                  <Box pl={5.5}>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#ABABAC" }}
                      >
                        Tether USDT
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#ABABAC" }}
                      >
                        Tether USDT
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#ABABAC" }}
                      >
                        Tether USDT
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#ABABAC" }}
                      >
                        Tether USDT
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#ABABAC" }}
                      >
                        Tether USDT
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={3}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#21BE7E" }}
                      >
                        See full Watchlist
                      </Typography>
                      <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                    </Stack>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4.5} xl={4.5}>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "auto",
                    borderRadius: 7,
                    backgroundColor: "#11101C",
                  }}
                  px={2.5}
                  py={4}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                    my={2}
                  >
                    <ThumbUpIcon sx={{ color: "#25E595", fontSize: "30px" }} />
                    <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                      Recently Voted
                    </Typography>
                  </Stack>
                  <Box pl={5.5}>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        Tether USDT
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        15436 Votes
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        Tether USDT
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        15436 Votes
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        Tether USDT
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        15436 Votes
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        Tether USDT
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        15436 Votes
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        Tether USDT
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        15436 Votes
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={3}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#21BE7E" }}
                      >
                        View all coins
                      </Typography>
                      <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                    </Stack>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={4.5} xl={4.5}>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "auto",
                    borderRadius: 7,
                    backgroundColor: "#11101C",
                  }}
                  px={2.5}
                  py={4}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                    my={2}
                  >
                    <InsertCommentIcon
                      sx={{ color: "#25E595", fontSize: "30px" }}
                    />
                    <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                      My Ratings
                    </Typography>
                  </Stack>
                  <Box pl={5.5}>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={0}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        rating typing......
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        2 days ago
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={0}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        rating typing......
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        2 days ago
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={0}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        rating typing......
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        2 days ago
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={0}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        rating typing......
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        2 days ago
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={0}
                      mt={0.5}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        rating typing......
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#BBBBBC" }}
                      >
                        2 days ago
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={3}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#21BE7E" }}
                      >
                        View all coins
                      </Typography>
                      <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Grid container py={3} spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={4.5} xl={4.5}>
                <Stack direction="column" spacing={2}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      height: "auto",
                      borderRadius: 7,
                      backgroundColor: "#11101C",
                    }}
                    px={2.5}
                    py={4}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      my={2}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/2.jpg"
                        sx={{ width: 50, height: 50 }}
                      />
                      <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                        Profile Settings
                      </Typography>
                    </Stack>
                    <Box pl={8.5}>
                      <Stack
                        direction="column"
                        sx={{ alignItems: "left" }}
                        spacing={0.5}
                        mt={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#1FA971" }}
                        >
                          Change profile picture
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#1FA971" }}
                        >
                          Change password
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      flexGrow: 1,
                      height: "auto",
                      borderRadius: 7,
                      backgroundColor: "#11101C",
                    }}
                    px={2.5}
                    py={4}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={2}
                      my={2}
                    >
                      <BatchPredictionIcon
                        sx={{ color: "#25E595", fontSize: "30px" }}
                      />
                      <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                        My Ads
                      </Typography>
                    </Stack>
                    <Box pl={5.5}>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={2}
                        mt={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          Tether USDT
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#595396" }}
                        >
                          Expired in 27days
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={2}
                        mt={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          Tether USDT
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#595396" }}
                        >
                          Expired in 27days
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={2}
                        mt={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          Tether USDT
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#595396" }}
                        >
                          Expired in 27days
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={2}
                        mt={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          Tether USDT
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#595396" }}
                        >
                          Expired in 27days
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={2}
                        mt={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          Tether USDT
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#595396" }}
                        >
                          Expired in 27days
                        </Typography>
                      </Stack>

                      <Stack
                        direction="row"
                        sx={{ alignItems: "center" }}
                        spacing={1}
                        mt={3}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#21BE7E" }}
                        >
                          View all ads
                        </Typography>
                        <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={7.5} xl={7.5}>
                <Box
                  sx={{
                    flexGrow: 1,
                    height: "auto",
                    borderRadius: 7,
                    backgroundColor: "#11101C",
                  }}
                  px={2.5}
                  py={4}
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center" }}
                    spacing={2}
                    my={2}
                  >
                    <CampaignIcon sx={{ color: "#25E595", fontSize: "30px" }} />
                    <Typography variant="h5" sx={{ color: "#FFFFF5" }}>
                      Announcement
                    </Typography>
                  </Stack>
                  <Box pl={5.5}>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={2}
                      mt={1.5}
                      mb={1.5}
                    >
                      <Stack
                        direction="column"
                        sx={{ alignItems: "left" }}
                        spacing={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          We have some limited period promotion offer
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2184A4" }}
                        >
                          Talk to our admin for more details
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#E4AE13" }}
                      >
                        17 Apr 2022
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: "#242241" }} />

                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={2}
                      mt={1.5}
                      mb={1.5}
                    >
                      <Stack
                        direction="column"
                        sx={{ alignItems: "left" }}
                        spacing={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          NFT market placed Launched on may 2020
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2184A4" }}
                        >
                          See details
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#E4AE13" }}
                      >
                        12 Apr 2022
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: "#242241" }} />
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={2}
                      mt={1.5}
                      mb={1.5}
                    >
                      <Stack
                        direction="column"
                        sx={{ alignItems: "left" }}
                        spacing={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          NFT market placed Launched on may 2020
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2184A4" }}
                        >
                          See details
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#E4AE13" }}
                      >
                        12 Apr 2022
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: "#242241" }} />

                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={2}
                      mt={1.5}
                      mb={1.5}
                    >
                      <Stack
                        direction="column"
                        sx={{ alignItems: "left" }}
                        spacing={0.5}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#BBBBBC" }}
                        >
                          NFT market placed Launched on may 2020
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 500, color: "#2184A4" }}
                        >
                          See details
                        </Typography>
                      </Stack>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#E4AE13" }}
                      >
                        12 Apr 2022
                      </Typography>
                    </Stack>
                    <Divider sx={{ borderColor: "#242241" }} />

                    <Stack
                      direction="row"
                      sx={{ alignItems: "center" }}
                      spacing={1}
                      mt={3}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500, color: "#21BE7E" }}
                      >
                        View all announcement
                      </Typography>
                      <ArrowRightAltOutlinedIcon sx={{ color: "#21BE7E" }} />
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: 0, paddingY: 3 }}>
          Item Two
        </TabPanel>
        <TabPanel value="3" sx={{ padding: 0, paddingY: 3 }}>
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default UserAdminTabs;
