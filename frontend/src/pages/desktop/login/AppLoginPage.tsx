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
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { Link } from "react-router-dom";
import { userLoginRequest } from "../../../store/action";
import "./style.css";

const AppLoginPage = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const [showPassword, setShowPassword] = useState<any>({
    showPassword: false,
  });

  const [remember, setRemember] = useState<any>(true);

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

  const rememberMeHandler = () => {
    setRemember(!remember);
  };

  const loginHandler = () => {
    const formData = new FormData(document.querySelector("#login") as any);
    const successHandler = (res: any) => {
      if (res?.data?.access_token) {
        sessionStorage.setItem(
          "authToken",
          JSON.stringify(res?.data?.access_token)
        );

        sessionStorage.setItem("authUser", JSON.stringify(res?.data?.user));

        if (remember === true) {
          localStorage.setItem(
            "authToken",
            JSON.stringify(res.data.access_token)
          );

          localStorage.setItem("authUser", JSON.stringify(res?.data?.user));
        }
      }
      toast.success(`${"Login Successfully"}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/user-dashboard");
    };
    const errorHandler = (err: any) => {
      toast.success(`${JSON.stringify(err?.error?.message?.response?.data)}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    dispatch(userLoginRequest(formData, successHandler, errorHandler));
  };

  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  useEffect(() => {
    auth && navigate("/user-dashboard");
  }, []);

  return (
    <Fragment>
      <Grid container>
        {" "}
        <Grid item xs={12}>
          <LatestNewsScroll />
        </Grid>
        <Grid item xs={12}>
          <Grid container pt={0}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} pt={3}>
              <Stack
                direction="column"
                spacing={3}
                sx={{ alignItems: "center" }}
              >
                <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Stack
                    direction="column"
                    sx={{ alignItems: "center" }}
                    spacing={2.2}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#02AC60", fontWeight: 500 }}
                    >
                      Sign In
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#FFFFF5", fontWeight: 500 }}
                    >
                      Login to get access your CoinXHigh account
                    </Typography>
                  </Stack>
                </Grid>

                <Grid
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ width: "100%" }}
                  px={{ xs: 0, sm: 0, md: 8 }}
                  py={{ xs: 0, sm: 0, md: 1 }}
                >
                  <form id="login">
                    <Box
                      sx={{
                        flexGrow: 1,
                        background: "linear-gradient(180deg, #020822, #030619)",
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
                            Email address
                          </Typography>
                          <TextField
                            id="email"
                            variant="filled"
                            placeholder="Enter email address"
                            name="email"
                            fullWidth
                            sx={{
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
                              "&input:-webkit-autofill": {
                                borderRadius: "0px",
                                backgroundColor: "none",
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
                                color: "#2C3344",
                                paddingTop: 0,
                                marginTop: 0,
                              },
                            }}
                          />
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
                            Password
                          </Typography>
                          <TextField
                            id="password"
                            variant="filled"
                            placeholder="Enter Password"
                            fullWidth
                            name="password"
                            type={
                              showPassword.showPassword ? "text" : "password"
                            }
                            sx={{
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
                                      <Visibility sx={{ color: "#D2D7E2" }} />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                              style: {
                                color: "#2C3344",
                                paddingTop: 0,
                                marginTop: 0,
                              },
                            }}
                          />

                          <FormGroup>
                            <FormControlLabel
                              sx={{ color: "#20B5CC" }}
                              control={
                                <Checkbox
                                  //defaultChecked
                                  checked={remember}
                                  size="small"
                                  sx={{
                                    color: "#20B5CC",
                                    "&.Mui-checked": {
                                      color: "#20B5CC",
                                    },
                                  }}
                                  onChange={rememberMeHandler}
                                />
                              }
                              label="Remember me"
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
                          onClick={loginHandler}
                        >
                          Log in
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
                          Forgot Password?
                        </Typography>
                        <Link
                          to="/register"
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          {" "}
                          <Typography
                            variant="body2"
                            sx={{ color: "#1597B5", fontWeight: 500 }}
                          >
                            Register Now
                          </Typography>
                        </Link>
                      </Stack>
                    </Box>
                  </form>
                </Grid>
              </Stack>
            </Grid>

            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              pl={{ sx: 0, sm: 0, md: 4 }}
              mt={{ xs: 7, sm: 7, md: 3 }}
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
                  spacing={0.5}
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AppLoginPage;
