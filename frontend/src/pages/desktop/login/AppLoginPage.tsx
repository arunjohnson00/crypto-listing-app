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
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
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

const AppLoginPage = () => {
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
  const { parse } = require("rss-to-json");

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en");
  const [feed, setFeed] = useState<any>();

  useEffect(() => {
    (async () => {
      var rss = await parse("https://news.coinxhigh.com/feed/");

      setFeed(rss);
    })();
  }, []);
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
          <Stack
            direction="row"
            spacing={3}
            sx={{
              borderTop: "1px solid #1a1545",
              borderBottom: "1px solid #1a1545",
              paddingTop: "23px",
              paddingBottom: "23px",
              backgroundColor: "#04091d",
              alignItems: "center",
            }}
          >
            <Grid xs={4} sm={4} md={3} lg={2} xl={2}>
              <LatestNewsHeading />
            </Grid>
            <Grid xs={8} sm={8} md={9} lg={10} xl={10}>
              <Stack direction="row" spacing={3}>
                <Marquee
                  style={{ background: "none" }}
                  pauseOnHover={true}
                  gradient={false}
                  loop={0}
                  delay={0}
                  speed={70}
                >
                  {feed?.items?.map((rssFeed: any, index: number) => {
                    return (
                      <NewsCardTop
                        rssFeed={rssFeed}
                        timeAgo={timeAgo}
                        key={index}
                      />
                    );
                  })}
                </Marquee>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          sx={{
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              //borderTop: "1px solid #1a1545",
              // borderBottom: "1px solid #1a1545",
              paddingTop: "0px",
              paddingBottom: "0px",

              alignItems: "center",
            }}
          >
            <CoinSlider />
          </Stack>
        </Grid>
        <Grid container xs={12} pt={3}>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} pt={3}>
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
                px={{ xs: 2, sm: 0, md: 8 }}
                py={{ xs: 0, sm: 0, md: 1 }}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    background: "linear-gradient(180deg, #020822, #030619)",
                    borderRadius: 4,
                    height: 363,
                    paddingX: 7,
                    paddingY: 7,
                  }}
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
                      pb={2}
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

                      <FormGroup>
                        <FormControlLabel
                          sx={{ color: "#20B5CC" }}
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
                    <Typography
                      variant="body2"
                      sx={{ color: "#1597B5", fontWeight: 500 }}
                    >
                      Register Now
                    </Typography>
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
                sx={{ alignItems: "flex-start" }}
                spacing={0}
                pt={3}
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#FFFFF5", fontWeight: 700 }}
                >
                  Words fast emerging
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#5A5B63", fontWeight: 600 }}
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

export default AppLoginPage;
