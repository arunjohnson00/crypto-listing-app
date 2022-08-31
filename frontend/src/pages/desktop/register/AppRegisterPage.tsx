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
import NewsCardTop from "../../../components/desktop/cards/topnewscard/NewsCardTop";
import LatestNewsHeading from "../../../components/desktop/Typography/headings/latestnews/LatestNewsHeading";
import CoinSlider from "../../../components/desktop/coinslider/CoinSlider";
import Marquee from "react-fast-marquee";
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

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LatestNewsScroll from "../../../components/desktop/latestnews/LatestNewsScroll";
import { Link } from "react-router-dom";

const AppRegisterPage = () => {
  const [showPassword, setShowPassword] = useState<any>({
    showPassword: false,
  });

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

  return (
    <Fragment>
      <Grid
        container
        spacing={5}
        sx={{
          dispaly: "flex",
        }}
      >
        {" "}
        <Grid xs={12} sx={{ paddingTop: 3 }}>
          <LatestNewsScroll />
        </Grid>
        <Grid container xs={12} pt={3}>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} pt={3} mb={18}>
            <Stack direction="column" spacing={3} sx={{ alignItems: "center" }}>
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
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{ width: "100%" }}
                px={{ xs: 0, sm: 0, md: 8 }}
                py={{ xs: 0, sm: 0, md: 1 }}
              >
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
                        Email your name
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="filled"
                        placeholder="Enter your name"
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
                        }}
                        InputProps={{
                          disableUnderline: true,

                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircleOutlinedIcon
                                sx={{ color: "#D2D7E2", marginTop: "-16px" }}
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
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#00E27D", fontWeight: 500 }}
                      >
                        Email address
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="filled"
                        placeholder="Enter email address"
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
                        }}
                        InputProps={{
                          disableUnderline: true,

                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailOutlinedIcon
                                sx={{ color: "#D2D7E2", marginTop: "-16px" }}
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
                      pb={0}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#00E27D", fontWeight: 500 }}
                      >
                        Password
                      </Typography>
                      <TextField
                        id="outlined-basic"
                        variant="filled"
                        placeholder="Enter Password"
                        fullWidth
                        type={showPassword.showPassword ? "text" : "password"}
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
                                sx={{ color: "#D2D7E2", marginTop: "-16px" }}
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
                                  <VisibilityOff sx={{ color: "#D2D7E2" }} />
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
                        id="outlined-basic"
                        variant="filled"
                        placeholder="Confirm Password"
                        fullWidth
                        type={showPassword.showPassword ? "text" : "password"}
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
                                sx={{ color: "#D2D7E2", marginTop: "-16px" }}
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
                                  <VisibilityOff sx={{ color: "#D2D7E2" }} />
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
                      style={{ textDecoration: "none", color: "inherit" }}
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
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AppRegisterPage;
