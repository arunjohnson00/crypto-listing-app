import { forwardRef, Fragment, useCallback, useEffect, useState } from "react";
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
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import userIcon from "../../../assets/userdashboard/user.svg";
import { TransitionProps } from "@mui/material/transitions";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import InputTextDrawer from "./text/InputTextDrawer";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const serverAPIUrl = process.env.REACT_APP_API_URL;
const MobileDrawer = ({ state, setState, toggleDrawer }: any) => {
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<any>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [cropWindow, setCropWindow] = useState<any>(false);
  const [rotation, setRotation] = useState(0);
  const [menuVariant, setMenuVariant] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });

  const authUser = JSON.parse(localStorage.getItem("authUser") as any);
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");

  const [userSettings, setUserSettings] = useState({
    name: "",
    email: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const userNameHandler = (val: any) => {
    setUserSettings({ ...userSettings, name: val });
  };

  const userEmailHandler = (val: any) => {
    setUserSettings({ ...userSettings, email: val });
  };

  const currentPasswordHandler = (val: any) => {
    setUserSettings({ ...userSettings, current_password: val });
  };

  const newPasswordHandler = (val: any) => {
    setUserSettings({ ...userSettings, new_password: val });
  };

  const confirmNewPasswordHandler = (val: any) => {
    setUserSettings({ ...userSettings, confirm_password: val });
  };
  const handleClickOpen = (variant: any) => {
    setOpen(true);
    setMenuVariant(variant);
  };

  const handleClose = () => {
    setOpen(false);
    setProfileImage(null);
  };

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
      // console.log("donee", { croppedImage });
      // console.log("crop", croppedImage, profileImage);
      setCropWindow(false);
      setCroppedImage(croppedImage);
    } catch (e: any) {
      console.error(e);
    }
  }, [croppedAreaPixels, profileImage]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  useEffect(() => {
    setUserSettings({
      ...userSettings,
      name:
        userData && userData !== undefined
          ? userData?.user?.name
          : authUser && authUser?.name,
      email:
        userData && userData !== undefined
          ? userData?.user?.email
          : authUser && authUser?.email,
    });
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
            <IconButton aria-label="delete" onClick={toggleDrawer(false)}>
              <ArrowBackIosRoundedIcon
                sx={{ color: "#b4bdf6", fontSize: "1.2rem" }}
              />
            </IconButton>
            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
              onClick={() => handleClickOpen("profile-pic")}
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
                    src={
                      profileImage && croppedImage !== null
                        ? croppedImage && croppedImage
                        : `${serverAPIUrl}public/uploads/users/${
                            userData && userData !== undefined
                              ? userData?.user?.avatar
                              : authUser && authUser?.avatar
                          }`
                    }
                    sx={{ width: 50, height: 50 }}
                  />
                  <Stack direction="column" spacing={0} alignItems="flex-start">
                    <Typography
                      sx={{
                        fontSize: ".8rem",
                        color: "#26BD96",
                        fontWeight: 400,
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
                          fontWeight: 400,
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
                  fontWeight: 400,
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
                  onClick={() => handleClickOpen("profile-name")}
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
                          fontWeight: 400,
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
                            fontWeight: 400,
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
                  onClick={() => handleClickOpen("profile-email")}
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
                          fontWeight: 400,
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
                            fontWeight: 400,
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
                  onClick={() => handleClickOpen("profile-password")}
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
                          fontWeight: 400,
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
                            fontWeight: 400,
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
                  fontWeight: 400,
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
              // onClick={() => handleClickOpen("announcement")}
              onClick={toggleDrawer(false)}
            >
              <Link
                to="/user-dashboard/announcement"
                style={{ textDecoration: "none" }}
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
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 400,
                          }}
                        >
                          Announcement
                        </Typography>
                      </Stack>
                    </Stack>
                    <IconButton aria-label="delete">
                      <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Link>
            </Box>

            <Box
              sx={{
                // border: "1px solid #151717",
                backgroundColor: "#00020B",

                borderRadius: 4,
                height: "auto",
                width: "100%",
              }}
              // onClick={() => handleClickOpen("offer-zone")}
              onClick={toggleDrawer(false)}
            >
              <Link
                to="/user-dashboard/offer-zone"
                style={{ textDecoration: "none" }}
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
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            color: "#FFFFFF",
                            fontWeight: 400,
                          }}
                        >
                          Offer Zone
                        </Typography>
                      </Stack>
                    </Stack>
                    <IconButton aria-label="delete">
                      <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Link>
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
                            fontWeight: 400,
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
                  fontWeight: 400,
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
                            fontWeight: 400,
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
          {menuVariant === "profile-pic" && (
            <DialogTitle sx={{ fontSize: "1rem" }}>
              Change Profile Picture
            </DialogTitle>
          )}
          {menuVariant === "profile-name" && (
            <DialogTitle sx={{ fontSize: "1rem" }}>Change Name</DialogTitle>
          )}
          {menuVariant === "profile-email" && (
            <DialogTitle sx={{ fontSize: "1rem" }}>Change E-mail</DialogTitle>
          )}
          {menuVariant === "profile-password" && (
            <DialogTitle sx={{ fontSize: "1rem" }}>Change Password</DialogTitle>
          )}
          {/* {menuVariant === "announcement" && (
            <DialogTitle sx={{ fontSize: "1rem" }}>Announcement</DialogTitle>
          )}

          {menuVariant === "offer-zone" && (
            <DialogTitle sx={{ fontSize: "1rem" }}>Offer Zone</DialogTitle>
          )} */}

          <Divider
            light
            flexItem
            variant="middle"
            orientation="horizontal"
            sx={{ borderColor: "#1F556D" }}
          />
          <DialogContent sx={{ width: "-webkit-fill-available" }}>
            {menuVariant === "profile-pic" && (
              <Stack
                direction="column"
                spacing={2}
                alignItems="center"
                width="100%"
              >
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
            )}

            {menuVariant === "profile-name" && (
              <Stack
                direction="column"
                spacing={4}
                alignItems="center"
                width="100%"
              >
                <Stack
                  direction="column"
                  spacing={0.5}
                  alignItems="center"
                  width="100%"
                >
                  <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                    Current Name
                  </Typography>
                  <Typography sx={{ color: "#16D59B", fontSize: "1rem" }}>
                    {userData && userData !== undefined
                      ? userData?.user?.name
                      : authUser && authUser?.name}
                  </Typography>
                </Stack>

                <Stack
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  width="100%"
                >
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    width="100%"
                  >
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      Enter New Name
                    </Typography>
                    <InputTextDrawer
                      placeholder="Type your name"
                      inputHandler={userNameHandler}
                      value={userSettings?.name}
                      data={userSettings}
                      setData={setUserSettings}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#030881",
                      borderRadius: 10,
                    }}
                  >
                    Update Name
                  </Button>
                </Stack>
              </Stack>
            )}

            {menuVariant === "profile-email" && (
              <Stack
                direction="column"
                spacing={4}
                alignItems="center"
                width="100%"
              >
                <Stack
                  direction="column"
                  spacing={0.5}
                  alignItems="center"
                  width="100%"
                >
                  <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                    Current E-mail
                  </Typography>
                  <Typography sx={{ color: "#16D59B", fontSize: "1rem" }}>
                    {userData && userData !== undefined
                      ? userData?.user?.email
                      : authUser && authUser?.email}
                  </Typography>

                  {((userData &&
                    userData !== undefined &&
                    userData?.user?.email !== undefined) ||
                    authUser?.email !== undefined) && (
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      pt={1}
                    >
                      <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                        Not Verified.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#C7C867", textDecoration: "underline" }}
                      >
                        Verify Now
                      </Typography>
                    </Stack>
                  )}
                </Stack>

                <Stack
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  width="100%"
                >
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    width="100%"
                  >
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      Enter New E-mail
                    </Typography>
                    <InputTextDrawer
                      placeholder="Type your email"
                      value={userSettings?.email}
                      data={userSettings}
                      setData={setUserSettings}
                      inputHandler={userEmailHandler}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#030881",
                      borderRadius: 10,
                    }}
                  >
                    Update E-mail
                  </Button>
                </Stack>
              </Stack>
            )}
            {menuVariant === "profile-password" && (
              <Stack
                direction="column"
                spacing={4}
                alignItems="center"
                width="100%"
              >
                {
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    pt={1}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "#464849", fontWeight: 400 }}
                    >
                      Password Strength
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#D3B138", fontWeight: 400 }}
                    >
                      Medium
                    </Typography>
                  </Stack>
                }

                <Stack
                  direction="column"
                  spacing={2}
                  alignItems="center"
                  width="100%"
                >
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    width="100%"
                  >
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      Enter Current Password
                    </Typography>
                    <InputTextDrawer
                      placeholder="Enter Current Password"
                      inputHandler={currentPasswordHandler}
                    />
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    width="100%"
                  >
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      Enter New Password
                    </Typography>
                    <InputTextDrawer
                      placeholder="Enter New Password"
                      inputHandler={newPasswordHandler}
                    />
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    width="100%"
                  >
                    <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                      Confirm New Password
                    </Typography>
                    <InputTextDrawer
                      placeholder="Confirm New Password"
                      inputHandler={confirmNewPasswordHandler}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#030881",
                      borderRadius: 10,
                    }}
                  >
                    Update Password
                  </Button>
                </Stack>
              </Stack>
            )}

            {/* {menuVariant === "announcement" && (
              <Stack direction="column" spacing={2} alignItems="center">
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
                    spacing={4}
                    alignItems="center"
                    p={3}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      pt={1}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#20DDCF",
                          fontWeight: 400,
                          fontSize: ".9rem",
                        }}
                      >
                        Limited Period Deal
                      </Typography>
                      <Divider
                        light
                        flexItem
                        variant="middle"
                        orientation="horizontal"
                        sx={{ borderColor: "#1F556D" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        We have some new offer for newly added coin.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2092C5",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Contact admin for more details
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4D4E53",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        32 min ago
                      </Typography>
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
                    spacing={4}
                    alignItems="center"
                    p={3}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      pt={1}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#20DDCF",
                          fontWeight: 400,
                          fontSize: ".9rem",
                        }}
                      >
                        Limited Period Deal
                      </Typography>
                      <Divider
                        light
                        flexItem
                        variant="middle"
                        orientation="horizontal"
                        sx={{ borderColor: "#1F556D" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        We have some new offer for newly added coin.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2092C5",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Contact admin for more details
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4D4E53",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        32 min ago
                      </Typography>
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
                    spacing={4}
                    alignItems="center"
                    p={3}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      pt={1}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#20DDCF",
                          fontWeight: 400,
                          fontSize: ".9rem",
                        }}
                      >
                        Limited Period Deal
                      </Typography>
                      <Divider
                        light
                        flexItem
                        variant="middle"
                        orientation="horizontal"
                        sx={{ borderColor: "#1F556D" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        We have some new offer for newly added coin.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2092C5",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Contact admin for more details
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4D4E53",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        32 min ago
                      </Typography>
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
                    spacing={4}
                    alignItems="center"
                    p={3}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      pt={1}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#20DDCF",
                          fontWeight: 400,
                          fontSize: ".9rem",
                        }}
                      >
                        Limited Period Deal
                      </Typography>
                      <Divider
                        light
                        flexItem
                        variant="middle"
                        orientation="horizontal"
                        sx={{ borderColor: "#1F556D" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        We have some new offer for newly added coin.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2092C5",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Contact admin for more details
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4D4E53",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        32 min ago
                      </Typography>
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
                    spacing={4}
                    alignItems="center"
                    p={3}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      pt={1}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#20DDCF",
                          fontWeight: 400,
                          fontSize: ".9rem",
                        }}
                      >
                        Limited Period Deal
                      </Typography>
                      <Divider
                        light
                        flexItem
                        variant="middle"
                        orientation="horizontal"
                        sx={{ borderColor: "#1F556D" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        We have some new offer for newly added coin.
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#2092C5",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Contact admin for more details
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#4D4E53",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        32 min ago
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            )}

            {menuVariant === "offer-zone" && (
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                width="100%"
              >
                <Box
                  sx={{
                    // border: "1px solid #151717",
                    backgroundColor: "#00020B",

                    borderRadius: 4,
                    height: "auto",
                    flexGrow: 1,
                  }}
                  m={1}
                >
                  <Stack
                    direction="column"
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#20DDCF",
                        fontWeight: 400,
                        fontSize: "2rem",
                      }}
                    >
                      Ads
                    </Typography>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    // border: "1px solid #151717",
                    backgroundColor: "#00020B",

                    borderRadius: 4,
                    height: "auto",
                    flexGrow: 1,
                  }}
                  m={1}
                >
                  <Stack
                    direction="column"
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#20DDCF",
                        fontWeight: 400,
                        fontSize: "2rem",
                      }}
                    >
                      Ads
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    // border: "1px solid #151717",
                    backgroundColor: "#00020B",

                    borderRadius: 4,
                    height: "auto",
                    flexGrow: 2,
                  }}
                  m={1}
                >
                  <Stack
                    direction="column"
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#20DDCF",
                        fontWeight: 400,
                        fontSize: "2rem",
                      }}
                    >
                      Ads
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    // border: "1px solid #151717",
                    backgroundColor: "#00020B",

                    borderRadius: 4,
                    height: "auto",
                    flexGrow: 1,
                  }}
                  m={1}
                >
                  <Stack
                    direction="column"
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#20DDCF",
                        fontWeight: 400,
                        fontSize: "2rem",
                      }}
                    >
                      Ads
                    </Typography>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    // border: "1px solid #151717",
                    backgroundColor: "#00020B",

                    borderRadius: 4,
                    height: "auto",
                    flexGrow: 1,
                  }}
                  m={1}
                >
                  <Stack
                    direction="column"
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    p={3}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#20DDCF",
                        fontWeight: 400,
                        fontSize: "2rem",
                      }}
                    >
                      Ads
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            )} */}
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
