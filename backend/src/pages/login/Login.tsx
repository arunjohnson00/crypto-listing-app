import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";

import { appRequest } from "../../utils/fetchhandler";
import CoinxhighIcon from "../../assets/icon/coinxhighicon.jpg";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const theme = createTheme();

const Login = () => {
  const [authCredentials, setAuth] = useState({});
  const [loginAlrert, setAlert] = useState("");
  const dispatch = useDispatch();
  const storeData = useSelector((store) => {
    return store;
  });

  const loginHadler = () => {
    dispatch({ type: "loginpath" });
    appRequest(authCredentials, reDirectHandler, LoginError, storeData);
  };

  const jwToken =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    jwToken && navigate("/dashboard");
  }, [navigate, jwToken]);

  const reDirectHandler = (authData: any) => {
    if (
      authData.data.access_token !== null ||
      authData.data.access_token !== undefined ||
      authData.data.access_token !== "" ||
      jwToken
    ) {
      navigate("/dashboard");
    }
  };
  const LoginError = (error: any) => {
    console.log(error);
    setAlert("Unauthorized Username & Password " + error);
  };

  function Copyright(props: any) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https:coinxhigh.com">
          CoinXhigh
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <img
              src={CoinxhighIcon}
              alt="coinxhighicon"
              style={{ width: "100%" }}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              onChange={(e) =>
                setAuth({ ...authCredentials, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) =>
                setAuth({ ...authCredentials, password: e.target.value })
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onClick={(e: any) => {
                    setAuth({ ...authCredentials, remember: e.target.checked });
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginHadler}
            >
              Sign In
            </Button>
            <Stack sx={{ width: "100%" }} spacing={2}>
              {loginAlrert && <Alert severity="error"> {loginAlrert} !</Alert>}
            </Stack>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
