import { forwardRef, Fragment, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import userIcon from "../../../assets/userdashboard/user.png";
import { TransitionProps } from "@mui/material/transitions";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const dogImg =
  "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

const MobileDrawer = ({ state, setState, toggleDrawer }: any) => {
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<any>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [cropWindow, setCropWindow] = useState<any>(false);
  const [rotation, setRotation] = useState(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setProfileImage(null);
  };
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });

  const authUser = JSON.parse(localStorage.getItem("authUser") as any);
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  const onDrop = useCallback((acceptedFiles: any) => {
    setProfileImage(acceptedFiles[0]);
    setCropWindow(true);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        URL.createObjectURL(profileImage),
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      console.log("crop", croppedImage, profileImage);
      setCropWindow(false);
      setCroppedImage(croppedImage);
    } catch (e: any) {
      console.error(e);
    }
  }, [croppedAreaPixels, profileImage]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  return (
    <div>
      <Fragment>
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
              onClick={handleClickOpen}
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

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            style: {
              backgroundColor: "#00081f",
              color: "#FFFFFF",
              borderRadius: 16,
              height: "auto",
              alignItems: "center",
              width: "90%",
            },
          }}
          sx={{ borderRadius: 19 }}
        >
          <DialogTitle sx={{ fontSize: "1rem" }}>
            Change Profile Picture
          </DialogTitle>
          <Divider
            light
            flexItem
            variant="middle"
            orientation="horizontal"
            sx={{ borderColor: "#1F556D" }}
          />
          <DialogContent>
            <Stack direction="column" spacing={2} alignItems="center">
              <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                Update profile picture
              </Typography>
              <Avatar
                alt="Change Image"
                src={
                  profileImage && croppedImage !== null
                    ? croppedImage && croppedImage
                    : userIcon
                }
                sx={{ width: 56, height: 56 }}
              />

              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#030881",
                      borderRadius: 10,
                    }}
                  >
                    Edit Profile Picture
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#030881",
                      borderRadius: 10,
                    }}
                  >
                    Edit Profile Picture
                  </Button>
                )}
              </div>

              {cropWindow === true && (
                <Stack direction="column" spacing={2} alignItems="center">
                  <Cropper
                    image={profileImage && URL.createObjectURL(profileImage)}
                    crop={crop}
                    zoom={zoom}
                    aspect={1 / 1}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#030881",
                      borderRadius: 10,
                    }}
                    onClick={showCroppedImage}
                  >
                    Crop
                  </Button>
                </Stack>
              )}
              <Button
                variant="text"
                sx={{ textTransform: "capitalize", color: "#50535C" }}
                onClick={onClose}
              >
                Remove
              </Button>
            </Stack>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions> */}
        </Dialog>
      </Fragment>
    </div>
  );
};

export default MobileDrawer;
