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
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import useMediaQuery from "@mui/material/useMediaQuery";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegisterRequest } from "../../../store/action";
import "./style.css";
import { Helmet } from "react-helmet-async";

const AppRegisterPage = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const [showPassword, setShowPassword] = useState<any>({
    showPassword: false,
  });
  const [validation, setValidation] = useState<any>({});
  const checkIfKeyExist = (objectName: any, keyName: any) => {
    let keyExist = objectName[keyName]?.toString();
    return keyExist;
  };
  const handleClickShowPassword = () => {
    setShowPassword({
      ...showPassword,
      showPassword: !showPassword.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const theme = useTheme();
  const xsBreakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");

  const registerHandler = () => {
    const formData = new FormData(document.querySelector("#register") as any);
    const successHandler = (res: any) => {
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res?.data?.message}
            </Typography>
          </Stack>
        </Box>,
        {
          position: "top-right",
          icon: false,
          //theme: "colored",
          className: "toast-success-container toast-success-container-after",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setTimeout(function () {
        navigate("/login");
      }, 2000);
    };
    const errorHandler = (err: any) => {
      setValidation(err?.error?.message?.response?.data);
      // toast.warn(
      //   <Box>
      //     <Stack direction="row" spacing={2} alignItems="center">
      //       <CancelRoundedIcon sx={{ color: "#ff3722", fontSize: 50 }} />
      //       <Typography sx={{ fontSize: ".85rem" }}>
      //         {JSON.stringify(err?.error?.message?.response?.data)}
      //       </Typography>
      //     </Stack>
      //   </Box>,
      //   {
      //     icon: false,
      //     className: "toast-error-container toast-error-container-after",
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   }
      // );
    };

    dispatch(userRegisterRequest(formData, successHandler, errorHandler));
  };
  console.log(validation);
  return (
    <Fragment>
      <Helmet>
        <title>Register | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Register  | CoinXhigh.com" />
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
      <Grid container>
        {" "}
        {/* <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid> */}
        <Grid item xs={12} mt={3} mb={15}>
          <Stack
            direction="column"
            spacing={3}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  pt={3}
                  mb={18}
                >
                  <Grid container spacing={0} sx={{ alignItems: "center" }}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      px={{ xs: 0, sm: 0, md: 4 }}
                    >
                      <Stack
                        direction="column"
                        sx={{ alignItems: "center" }}
                        spacing={2.2}
                      >
                        <Typography
                          variant="h5"
                          sx={{ color: "#02AC60", fontWeight: 500 }}
                        >
                          Register
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#FFFFF5", fontWeight: 500 }}
                        >
                          Create your new CoinXHigh account
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                      sx={{ width: "100%" }}
                      px={{ xs: 0, sm: 0, md: 8 }}
                      py={{ xs: 2, sm: 2, md: 3 }}
                    >
                      <form id="register">
                        <Box
                          sx={{
                            flexGrow: 1,
                            background:
                              "linear-gradient(180deg, #020822, #030619)",
                            borderRadius: 4,
                            height: 363,
                          }}
                          px={{ xs: 2, sm: 2, md: 7 }}
                          py={{ xs: 5, sm: 5, md: 7 }}
                        >
                          <Stack
                            direction="column"
                            spacing={2}
                            sx={{ alignItems: "center" }}
                          >
                            <Stack
                              direction="column"
                              spacing={1}
                              sx={{ alignItems: "flex-start", width: "100%" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "#00E27D", fontWeight: 500 }}
                              >
                                Enter your name
                              </Typography>
                              <TextField
                                id="name"
                                variant="filled"
                                placeholder="Enter your name"
                                fullWidth
                                name="name"
                                sx={{
                                  input: {
                                    "&::placeholder": {
                                      color: "#2C3344",
                                    },
                                  },
                                  backgroundColor: "#020822",
                                  height: 42,
                                  borderRadius: 4,
                                  marginBottom: 0,

                                  "& .MuiInputBase-root": {
                                    paddingTop: 0,
                                  },

                                  "& .MuiFilledInput-root": {
                                    background: "#020822",
                                    height: 42,
                                    borderRadius: 4,
                                    marginBottom: 0,

                                    border: "1px solid #111836",
                                  },
                                  "& .MuiFilledInput-input": {
                                    paddingTop: 1,
                                  },
                                }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <AccountCircleOutlinedIcon
                                        sx={{
                                          color: "#D2D7E2",
                                          marginTop: "-16px",
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  style: {
                                    color: "#FFFFFF",
                                    paddingTop: 0,
                                    marginTop: 0,
                                  },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#e21f00",
                                  fontWeight: 400,
                                  fontSize: ".85rem",
                                }}
                              >
                                {validation &&
                                  validation !== "" &&
                                  validation !== undefined &&
                                  validation !== null &&
                                  checkIfKeyExist(validation, "name")}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1}
                              sx={{ alignItems: "flex-start", width: "100%" }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "#00E27D", fontWeight: 500 }}
                              >
                                Email address
                              </Typography>
                              <TextField
                                id="email"
                                variant="filled"
                                placeholder="Enter email address"
                                fullWidth
                                name="email"
                                sx={{
                                  input: {
                                    "&::placeholder": {
                                      color: "#2C3344",
                                    },
                                  },
                                  backgroundColor: "#020822",
                                  height: 42,
                                  borderRadius: 4,
                                  marginBottom: 0,

                                  "& .MuiInputBase-root": {
                                    paddingTop: 0,
                                  },

                                  "& .MuiFilledInput-root": {
                                    background: "#020822",
                                    height: 42,
                                    borderRadius: 4,
                                    marginBottom: 0,

                                    border: "1px solid #111836",
                                  },
                                  "& .MuiFilledInput-input": {
                                    paddingTop: 1,
                                  },
                                }}
                                InputProps={{
                                  disableUnderline: true,

                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <EmailOutlinedIcon
                                        sx={{
                                          color: "#D2D7E2",
                                          marginTop: "-16px",
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  style: {
                                    color: "#FFFFFF",
                                    paddingTop: 0,
                                    marginTop: 0,
                                  },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#e21f00",
                                  fontWeight: 400,
                                  fontSize: ".85rem",
                                }}
                              >
                                {validation &&
                                  validation !== "" &&
                                  validation !== undefined &&
                                  validation !== null &&
                                  checkIfKeyExist(validation, "email")}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1}
                              sx={{ alignItems: "flex-start", width: "100%" }}
                              pb={0}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "#00E27D", fontWeight: 500 }}
                              >
                                Password
                              </Typography>
                              <TextField
                                id="password"
                                variant="filled"
                                placeholder="Enter Password"
                                fullWidth
                                name="password"
                                type={
                                  showPassword.showPassword
                                    ? "text"
                                    : "password"
                                }
                                sx={{
                                  input: {
                                    "&::placeholder": {
                                      color: "#2C3344",
                                    },
                                  },
                                  backgroundColor: "#020822",
                                  height: 42,
                                  borderRadius: 4,
                                  marginBottom: 0,

                                  "& .MuiInputBase-root": {
                                    paddingTop: 0,
                                  },

                                  "& .MuiFilledInput-root": {
                                    background: "#02071F",
                                    height: 42,
                                    borderRadius: 4,
                                    marginBottom: 0,

                                    border: "1px solid #111836",
                                  },
                                  "& .MuiFilledInput-input": {
                                    paddingTop: 1,
                                  },
                                  "&:-webkit-autofill": {
                                    backgroundColor: "none",
                                  },
                                }}
                                InputProps={{
                                  disableUnderline: true,
                                  autoComplete: "off",
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockOutlinedIcon
                                        sx={{
                                          color: "#D2D7E2",
                                          marginTop: "-16px",
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword.showPassword ? (
                                          <VisibilityOff
                                            sx={{ color: "#D2D7E2" }}
                                          />
                                        ) : (
                                          <Visibility
                                            sx={{ color: "#D2D7E2" }}
                                          />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                  style: {
                                    color: "#FFFFFF",
                                    paddingTop: 0,
                                    marginTop: 0,
                                  },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#e21f00",
                                  fontWeight: 400,
                                  fontSize: ".85rem",
                                }}
                              >
                                {validation &&
                                  validation !== "" &&
                                  validation !== undefined &&
                                  validation !== null &&
                                  checkIfKeyExist(validation, "password")}
                              </Typography>
                            </Stack>
                            <Stack
                              direction="column"
                              spacing={1}
                              sx={{ alignItems: "flex-start", width: "100%" }}
                              pb={2}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "#00E27D", fontWeight: 500 }}
                              >
                                Confirm Password
                              </Typography>
                              <TextField
                                id="confirm_pass"
                                variant="filled"
                                placeholder="Confirm Password"
                                name="password_confirmation"
                                fullWidth
                                type={
                                  showPassword.showPassword
                                    ? "text"
                                    : "password"
                                }
                                sx={{
                                  input: {
                                    "&::placeholder": {
                                      color: "#2C3344",
                                    },
                                  },
                                  backgroundColor: "#020822",
                                  height: 42,
                                  borderRadius: 4,
                                  marginBottom: 0,

                                  "& .MuiInputBase-root": {
                                    paddingTop: 0,
                                  },

                                  "& .MuiFilledInput-root": {
                                    background: "#02071F",
                                    height: 42,
                                    borderRadius: 4,
                                    marginBottom: 0,

                                    border: "1px solid #111836",
                                  },
                                  "& .MuiFilledInput-input": {
                                    paddingTop: 1,
                                  },
                                  "&:-webkit-autofill": {
                                    backgroundColor: "none",
                                  },
                                }}
                                InputProps={{
                                  disableUnderline: true,
                                  autoComplete: "off",
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <LockOutlinedIcon
                                        sx={{
                                          color: "#D2D7E2",
                                          marginTop: "-16px",
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword.showPassword ? (
                                          <VisibilityOff
                                            sx={{ color: "#D2D7E2" }}
                                          />
                                        ) : (
                                          <Visibility
                                            sx={{ color: "#D2D7E2" }}
                                          />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                  style: {
                                    color: "#FFFFFF",
                                    paddingTop: 0,
                                    marginTop: 0,
                                  },
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#e21f00",
                                  fontWeight: 400,
                                  fontSize: ".85rem",
                                }}
                              >
                                {validation &&
                                  validation !== "" &&
                                  validation !== undefined &&
                                  validation !== null &&
                                  checkIfKeyExist(validation, "password")}
                              </Typography>
                              <FormGroup>
                                <FormControlLabel
                                  sx={{
                                    color: "#20B5CC",
                                    "&.MuiFormControlLabel-root .MuiFormControlLabel-label":
                                      {
                                        fontSize: ".80rem",
                                      },
                                  }}
                                  control={
                                    <Checkbox
                                      name="receive_newsletter"
                                      defaultChecked
                                      size="small"
                                      value={1}
                                      sx={{
                                        color: "#20B5CC",
                                        "&.Mui-checked": {
                                          color: "#20B5CC",
                                        },
                                      }}
                                    />
                                  }
                                  label="
                          Receive our important updates & newsletter"
                                />
                              </FormGroup>
                              <FormGroup>
                                <FormControlLabel
                                  sx={{
                                    color: "#20B5CC",
                                    "&.MuiFormControlLabel-root .MuiFormControlLabel-label":
                                      {
                                        fontSize: ".80rem",
                                      },
                                  }}
                                  control={
                                    <Checkbox
                                      defaultChecked
                                      size="small"
                                      name="i_agree"
                                      value={1}
                                      sx={{
                                        color: "#20B5CC",
                                        "&.Mui-checked": {
                                          color: "#20B5CC",
                                        },
                                      }}
                                    />
                                  }
                                  label="
                          
I agree to platform terms and Conditions & Privacy Policy"
                                />
                              </FormGroup>
                            </Stack>

                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#1239C4",
                                borderRadius: 4,
                                height: 42,
                                textTransform: "capitalize",
                                paddingX: 15,
                              }}
                              onClick={registerHandler}
                            >
                              Sign Up
                            </Button>
                          </Stack>
                          <Stack
                            direction="column"
                            sx={{ alignItems: "center" }}
                            spacing={1}
                            pt={3}
                          >
                            <Typography
                              variant="body2"
                              sx={{ color: "#18F496", fontWeight: 500 }}
                            >
                              Already have an account?
                            </Typography>
                            <Link
                              to="/login"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              {" "}
                              <Typography
                                variant="body2"
                                sx={{ color: "#1597B5", fontWeight: 500 }}
                              >
                                Log In
                              </Typography>
                            </Link>
                          </Stack>
                        </Box>
                      </form>
                    </Grid>
                  </Grid>
                </Grid>

                {/* <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              pl={{ sx: 0, sm: 0, md: 4 }}
              mt={{ xs: 7, sm: 7, md: 3 }}
              mb={18}
            >
              <Stack
                direction="column"
                sx={{ alignItems: "center" }}
                spacing={1}
                pt={{ xs: 0, sm: 0, md: 25 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 126, height: 126 }}
                />
                <Stack
                  direction="column"
                  spacing={0}
                  pt={3}
                  alignItems={{ xs: "center", sm: "center", md: "flex-start" }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: "#FFFFF5", fontWeight: 700 }}
                    textAlign={{ xs: "center", sm: "center", md: "left" }}
                  >
                    Words fast emerging
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#5A5B63", fontWeight: 600 }}
                    textAlign={{ xs: "center", sm: "center", md: "left" }}
                  >
                    Crypto Listing & News Platform
                  </Typography>
                </Stack>
              </Stack>
            </Grid> */}
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AppRegisterPage;
