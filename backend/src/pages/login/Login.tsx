import { useState, useEffect } from "react";
import axios from "axios";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@mui/material";

const Login = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const serverAPIUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    loginSend();
  });

  const loginSend: any = () =>
    axios({
      method: "post",
      url: `${serverAPIUrl}api/b/v1/auth/login
      `,
      data: {
        email: "admin@admin.com",
        password: "password",
      },
    });

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={5}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          p={5}
        >
          <Grid item lg={12}>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
            />
          </Grid>
          <Grid item lg={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  //  label={"Keep me logged in"}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" disableElevation>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
