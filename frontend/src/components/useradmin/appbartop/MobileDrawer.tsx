import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import userIcon from "../../../assets/userdashboard/user.png";

const MobileDrawer = ({ state, setState, toggleDrawer }: any) => {
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });

  const authUser = JSON.parse(localStorage.getItem("authUser") as any);
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={"left"}
          open={state?.left}
          onClose={toggleDrawer(false)}
          PaperProps={{
            style: {
              background: "#01061A",
              color: "#FFFFFF",
              width: "94%",
            },
          }}
        >
          <Stack
            direction="column"
            spacing={2.5}
            alignItems="flex-start"
            my={2}
            px={1}
          >
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
            >
              <Stack
                direction="row"
                spacing={2.5}
                alignItems="center"
                justifyContent="space-between"
                px={2}
                py={2}
              >
                <Stack direction="row" spacing={2.5} alignItems="center">
                  <Avatar
                    alt="Profile"
                    src={userIcon}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Stack direction="column" spacing={0} alignItems="flex-start">
                    <Typography
                      sx={{
                        fontSize: ".8rem",
                        color: "#26BD96",
                        fontWeight: 600,
                      }}
                    >
                      Good Afternoon
                    </Typography>
                    <Link
                      to="/user-dashboard"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          color: "#FFFFFF",
                          fontWeight: 600,
                        }}
                      >
                        {userData && userData !== undefined
                          ? userData?.user?.name
                          : authUser && authUser?.name}
                      </Typography>
                    </Link>
                  </Stack>
                </Stack>
                <IconButton aria-label="delete">
                  <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                </IconButton>
              </Stack>
            </Box>
            <Stack
              direction="row"
              spacing={2.5}
              alignItems="center"
              justifyContent="space-between"
              px={2}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#B0D1E8",
                  fontWeight: 600,
                }}
              >
                Personal Details
              </Typography>
            </Stack>
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={2.5}
                alignItems="flex-start"
                px={4}
                py={3}
              >
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#D3B00F",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Typography
                        sx={{
                          fontSize: ".85rem",
                          color: "#313335",
                          fontWeight: 600,
                        }}
                      >
                        Name
                      </Typography>
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          {userData && userData !== undefined
                            ? userData?.user?.name
                            : authUser && authUser?.name}
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#F48611",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Typography
                        sx={{
                          fontSize: ".85rem",
                          color: "#313335",
                          fontWeight: 600,
                        }}
                      >
                        Email
                      </Typography>
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          {userData && userData !== undefined
                            ? userData?.user?.email
                            : authUser && authUser?.email}
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#F11E02",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Typography
                        sx={{
                          fontSize: ".85rem",
                          color: "#313335",
                          fontWeight: 600,
                        }}
                      >
                        Change Password
                      </Typography>
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          *********
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>

            <Stack
              direction="row"
              spacing={2.5}
              alignItems="center"
              justifyContent="space-between"
              px={2}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#B0D1E8",
                  fontWeight: 600,
                }}
              >
                For you
              </Typography>
            </Stack>
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={2.5}
                alignItems="flex-start"
                px={4}
                py={3}
              >
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#FD004E",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          Announcement
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={2.5}
                alignItems="flex-start"
                px={4}
                py={3}
              >
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#F903D5",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          Offer Zone
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={2.5}
                alignItems="flex-start"
                px={4}
                py={3}
              >
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#8D00F6",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          Rewards
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
            <Stack
              direction="row"
              spacing={2.5}
              alignItems="center"
              justifyContent="space-between"
              px={2}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#B0D1E8",
                  fontWeight: 600,
                }}
              >
                Help & Support
              </Typography>
            </Stack>
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={2.5}
                alignItems="flex-start"
                px={4}
                py={3}
              >
                <Stack
                  direction="row"
                  spacing={2.5}
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Stack direction="row" spacing={2} alignItems="baseline">
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#2206C6",
                        borderRadius: 10,
                      }}
                    ></Box>
                    <Stack
                      direction="column"
                      spacing={0.5}
                      alignItems="flex-start"
                    >
                      <Link
                        to="/user-dashboard"
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          Check FAQ's or Connect Admin
                        </Typography>
                      </Link>
                    </Stack>
                  </Stack>
                  <IconButton aria-label="delete">
                    <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MobileDrawer;
