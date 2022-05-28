import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
  Alert,
  Stack,
} from "@mui/material";
import { toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import CoinxhighIcon from "../../assets/icon/coinxhighicon.jpg";
import { sendLoginCredentials } from "../../store/action";

const Login = () => {
  const theme = createTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginAlrert, setAlert] = useState("");
  const [authCredentials, setAuth] = useState<any>({
    email: "",
    password: "",
    remember: false,
  });

  const loginHandler = () => {
    const successHandler = (res: any) => {
      toast.success(`Welcome ${res.data.user.name}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      if (res?.data?.access_token) {
        sessionStorage.setItem(
          "authToken",
          JSON.stringify(res?.data?.access_token)
        );

        sessionStorage.setItem("authUser", JSON.stringify(res?.data?.user));

        if (authCredentials?.remember === true) {
          localStorage.setItem(
            "authToken",
            JSON.stringify(res.data.access_token)
          );

          localStorage.setItem("authUser", JSON.stringify(res?.data?.user));
        }
      }
      navigate("/dashboard");
    };
    const errorHandler = (err: any) => {
      setAlert(err?.error?.message?.response?.data?.error);
    };
    dispatch(
      sendLoginCredentials(authCredentials, successHandler, errorHandler)
    );
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
        </Link>
        {new Date().getFullYear()}
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
              autoComplete="on"
              onChange={(e: any) =>
                setAuth({ ...authCredentials, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="on"
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e: any) =>
                setAuth({ ...authCredentials, password: e.target.value })
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onClick={(e: any) => {
                    setAuth({
                      ...authCredentials,
                      remember: e.target.checked,
                    });
                  }}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                height: "41px",
                backgroundColor: "rgb(61, 56, 122)",
                borderRadius: "8px",
                fontSize: "14px",
                textTransform: "capitalize",
                fontWeight: "300",
              }}
              onClick={loginHandler}
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
