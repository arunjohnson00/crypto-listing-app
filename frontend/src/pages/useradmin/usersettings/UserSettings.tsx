import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import UserAdminTextInput from "../../../components/useradmin/form/textinput/UserAdminTextInput";
import MultiSlider from "../../../components/useradmin/multislider/MultiSlider";

import userIcon from "../../../assets/userdashboard/user.png";

const UserSettings = () => {
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

  console.log(userSettings);
  return (
    <Grid container spacing={1}>
      <Box width="100%" my={6}>
        <MultiSlider />
      </Box>

      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#FFFFF5", fontSize: "1rem" }}
          >
            <span>Good Evening,</span>{" "}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#FFFFF5", fontSize: "1.2rem" }}
          >
            {" "}
            Alexander Jacob
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
                        src={userIcon}
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
    </Grid>
  );
};

export default UserSettings;
