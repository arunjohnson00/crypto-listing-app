import { forwardRef, useCallback, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  TextField,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import UserAdminTextInput from "../../../../components/useradmin/form/textinput/UserAdminTextInput";
import MultiSlider from "../../../../components/useradmin/multislider/MultiSlider";

import userIcon from "../../../../assets/userdashboard/user.png";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<any>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [cropWindow, setCropWindow] = useState<any>(false);
  const [rotation, setRotation] = useState(0);
  const [menuVariant, setMenuVariant] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const handleClickOpen = (variant: any) => {
    setOpen(true);
    setMenuVariant(variant);
  };

  const handleClose = () => {
    setOpen(false);
    //setProfileImage(null);
  };
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

  const userData = useSelector((data: any) => {
    return data?.userReducer?.user_login;
  });
  const authUser = JSON.parse(localStorage.getItem("authUser") as any);

  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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

  return (
    <Grid container spacing={1}>
      <Helmet>
        <title>User Settings | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="User Settings  | CoinXhigh.com" />
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
      <Box width="100%" my={6}>
        <MultiSlider />
      </Box>

      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#FFFFF5", fontSize: "1rem" }}
          >
            <span>
              {"Good " +
                ((new Date().getHours() < 12 && "Morning") ||
                  (new Date().getHours() < 18 && "Afternoon") ||
                  "Evening")}
              ,
            </span>{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#FFFFF5", fontSize: "1.2rem" }}
          >
            {" "}
            {userData && userData !== undefined
              ? userData?.user?.name
              : authUser && authUser?.name}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} my={2}>
        {" "}
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#FFFFF5", fontSize: "1.2rem" }}
        >
          {" "}
          Settings
        </Typography>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5} my={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} my={2}>
              <Stack direction="column" spacing={1.5}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#19A1F1", fontSize: ".9rem" }}
                >
                  Set profile picture
                </Typography>

                <Box
                  sx={{
                    borderRadius: 4,
                    backgroundColor: "#0E0931",
                    padding: 2,
                    maxWidth: 350,
                  }}
                >
                  <Stack direction="row" spacing={8} alignItems="center">
                    <Box
                      sx={{
                        borderRadius: 2,
                        backgroundColor: "#080230",
                        border: "1px solid #271D3A",
                        padding: 2,
                        width: 70,
                        height: 70,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar
                        alt="User Icon"
                        src={
                          profileImage && croppedImage !== null
                            ? croppedImage && croppedImage
                            : userIcon
                        }
                        sx={{ width: 56, height: 56 }}
                      />
                    </Box>

                    <Stack direction="column" spacing={2}>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: 6,
                          backgroundColor: "#3F00CC",
                          textTransform: "capitalize",
                          fontSize: ".8rem",
                        }}
                        onClick={handleClickOpen}
                      >
                        Upload Profile Pic
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: 6,
                          borderColor: "#150746",
                          textTransform: "capitalize",
                          fontSize: ".8rem",
                          color: "#FFFFFF",
                        }}
                      >
                        Remove Profile Pic
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} my={2}>
              <Stack direction="column" spacing={1.5}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "#19A1F1", fontSize: ".9rem" }}
                >
                  Change Name
                </Typography>

                <Box
                  sx={{
                    borderRadius: 4,
                    backgroundColor: "#0E0931",
                    paddingX: 2,
                    paddingY: 4,
                    maxWidth: 350,
                  }}
                >
                  <Stack direction="column" spacing={2}>
                    <Stack direction="column" spacing={1}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          color: "#19A1F1",
                          fontSize: ".9rem",
                        }}
                      >
                        Display name
                      </Typography>

                      <UserAdminTextInput
                        placeholder="name"
                        inputHandler={userNameHandler}
                      />
                    </Stack>
                    <Stack direction="column" spacing={1}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          color: "#19A1F1",
                          fontSize: ".9rem",
                        }}
                      >
                        Email
                      </Typography>

                      <UserAdminTextInput
                        placeholder="Email"
                        inputHandler={userEmailHandler}
                      />
                    </Stack>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 6,
                        backgroundColor: "#3F00CC",
                        textTransform: "capitalize",
                        fontSize: ".8rem",
                        width: 150,
                      }}
                    >
                      Save
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <Stack direction="column" spacing={1.5} pt={3.5}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, color: "#19A1F1", fontSize: ".9rem" }}
            >
              Change Password
            </Typography>

            <Box
              sx={{
                borderRadius: 4,
                backgroundColor: "#0E0931",
                paddingX: 2,
                paddingY: 4,
                maxWidth: 350,
              }}
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: "#19A1F1",
                      fontSize: ".9rem",
                    }}
                  >
                    Current password
                  </Typography>

                  <UserAdminTextInput
                    placeholder="Current password"
                    inputHandler={currentPasswordHandler}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: "#19A1F1",
                      fontSize: ".9rem",
                    }}
                  >
                    New password
                  </Typography>

                  <UserAdminTextInput
                    placeholder="New Password"
                    inputHandler={newPasswordHandler}
                  />
                </Stack>
                <Stack direction="column" spacing={1}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      color: "#19A1F1",
                      fontSize: ".9rem",
                    }}
                  >
                    Coinfirm new password
                  </Typography>

                  <UserAdminTextInput
                    placeholder="Confirm new Password"
                    inputHandler={confirmNewPasswordHandler}
                  />
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 6,
                    backgroundColor: "#3F00CC",
                    textTransform: "capitalize",
                    fontSize: ".8rem",
                    width: 150,
                  }}
                >
                  Save
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        // TransitionComponent={Transition}
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
        <DialogContent sx={{ width: "-webkit-fill-available" }}>
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
        </DialogContent>
        {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions> */}
      </Dialog>
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
    </Grid>
  );
};

export default UserSettings;
