import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import { useState } from "react";
import MediumBtn from "../../components/form/button/medium/MediumBtn";
import BannerUploader from "../../components/form/input/file/banner/BannerUploader";
import InputText from "../../components/form/input/text/InputText";
import InputTextArea from "../../components/form/textarea/InputTextArea";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    image: "",
  });
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={1}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "flex-start" }}
            >
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  Settings
                </Typography>
              </Grid>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" spacing={2} pt={3} pb={1} px={3}>
          <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">Discount Settings</Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="row" spacing={2} py={4} px={3}>
                      <Typography variant="subtitle1">Duration</Typography>
                      <InputText
                        width="auto"
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      />
                      <Typography variant="subtitle1">Percentage</Typography>
                      <InputText
                        width="auto"
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      />
                      <MediumBtn mdBtnHandler Title="Save ad" />
                      <MediumBtn mdBtnHandler Title="Add More" />
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">Random Vote</Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="row" spacing={2} pt={3} pb={1} px={3}>
                      <Typography variant="subtitle1">From</Typography>
                      <InputText
                        width="auto"
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      />
                      <Typography variant="subtitle1">To</Typography>
                      <InputText
                        width="auto"
                        placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                      />
                      <MediumBtn mdBtnHandler Title="Save" />
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">
                    Topbar notification with close button
                  </Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="column" spacing={2} pt={3} pb={1} px={3}>
                      <Typography variant="subtitle1">Enter Text</Typography>
                      <InputTextArea
                        name="description"
                        id="description"
                        placeholder="Enter Text"
                      />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "flex-end" }}
                      >
                        <MediumBtn mdBtnHandler Title="Save" />
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">Change Password</Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="column" spacing={2} pt={3} pb={1} px={3}>
                      <Typography variant="subtitle1">
                        Enter new password
                      </Typography>
                      <InputText placeholder="Enter new Password" />
                      <Typography variant="subtitle1">
                        Confirm Password
                      </Typography>
                      <InputText placeholder="Re-Enter password" />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "flex-end" }}
                      >
                        <MediumBtn mdBtnHandler Title="Save" />
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">Terms & Conditions</Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="column" spacing={2} pt={3} pb={1} px={3}>
                      <Typography variant="subtitle1">Enter Text</Typography>
                      <InputTextArea
                        name="description"
                        id="description"
                        placeholder="Enter Text"
                      />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "flex-end" }}
                      >
                        <MediumBtn mdBtnHandler Title="Save" />
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">Disclaimer</Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="column" spacing={2} pt={3} pb={1} px={3}>
                      <Typography variant="subtitle1">Enter Text</Typography>
                      <InputTextArea
                        name="description"
                        id="description"
                        placeholder="Enter Text"
                      />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "flex-end" }}
                      >
                        <MediumBtn mdBtnHandler Title="Save" />
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Box
                sx={{ width: "100%", background: "white", borderRadius: "7px" }}
                p={4}
                mb={5}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h6">Privacy Policy</Typography>
                  <Divider />
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Stack direction="column" spacing={2} pt={3} pb={1} px={3}>
                      <Typography variant="subtitle1">Enter Text</Typography>
                      <InputTextArea
                        name="description"
                        id="description"
                        placeholder="Enter Text"
                      />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "flex-end" }}
                      >
                        <MediumBtn mdBtnHandler Title="Save" />
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <Box
              sx={{ width: "100%", background: "white", borderRadius: "7px" }}
              p={4}
              mb={5}
            >
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6">User dashboard info banner</Typography>
                <Divider />
                <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
                  <Stack direction="row">
                    <Box sx={{ width: 30, height: 30 }}>1</Box>
                    <InputText
                      placeholder="Benner Redirection URL"
                      width="auto"
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{ justifyContent: " space-between" }}
                  >
                    <BannerUploader
                      addIconData={settingsData}
                      setAddIcon={setSettingsData}
                    />
                    <MediumBtn mdBtnHandler Title="Save" />
                    <IconButton aria-label="delete" sx={{ color: "red" }}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
                  <InputText
                    placeholder="Benner Redirection URL"
                    width="auto"
                  />
                  <Stack
                    direction="row"
                    sx={{ justifyContent: " space-between" }}
                  >
                    <BannerUploader
                      addIconData={settingsData}
                      setAddIcon={setSettingsData}
                    />
                    <MediumBtn mdBtnHandler Title="Save" />
                    <IconButton aria-label="delete" sx={{ color: "green" }}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Box>
            <Box
              sx={{ width: "100%", background: "white", borderRadius: "7px" }}
              p={4}
              mb={5}
            >
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6">
                  User dashboard image slider
                </Typography>
                <Divider />
                <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
                  <Stack direction="row">
                    <Box sx={{ width: 30, height: 30 }}>1</Box>
                    <InputText
                      placeholder="Benner Redirection URL"
                      width="auto"
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{ justifyContent: " space-between" }}
                  >
                    <BannerUploader
                      addIconData={settingsData}
                      setAddIcon={setSettingsData}
                    />
                    <MediumBtn mdBtnHandler Title="Save" />
                    <IconButton aria-label="delete" sx={{ color: "red" }}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </Stack>
                </Stack>
                <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
                  <InputText
                    placeholder="Benner Redirection URL"
                    width="auto"
                  />
                  <Stack
                    direction="row"
                    sx={{ justifyContent: " space-between" }}
                  >
                    <BannerUploader
                      addIconData={settingsData}
                      setAddIcon={setSettingsData}
                    />
                    <MediumBtn mdBtnHandler Title="Save" />
                    <IconButton aria-label="delete" sx={{ color: "green" }}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Settings;
