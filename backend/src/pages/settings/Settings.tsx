import { useState, useEffect } from "react";
import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import MediumBtn from "../../components/form/button/medium/MediumBtn";
import BannerUploader from "../../components/form/input/file/banner/BannerUploader";
import InputText from "../../components/form/input/text/InputText";
import InputTextArea from "../../components/form/textarea/InputTextArea";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import { viewDiscountStore } from "../../store/action";
import { viewRandomVoteStore } from "../../store/action";
import { viewTopBarNotificationStore } from "../../store/action";
import { viewTermsAndConditionStore } from "../../store/action";
import { viewPrivacyPolicyStore } from "../../store/action";
import { viewDisclaimerStore } from "../../store/action";
import { updateRandomVoteStore } from "../../store/action";
import { updateDiscountStore } from "../../store/action";
import { updateTopBarNotificationStore } from "../../store/action";
import { updateTermsAndConditionStore } from "../../store/action";
import { updateDisclaimerStore } from "../../store/action";
import { updatePrivacyPolicyStore } from "../../store/action";
import { updateChangePasswordStore } from "../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Settings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({
    discount: false,
    randomVote: false,
    tobBarNofication: false,
    termsConditions: false,
    privacyPolicy: false,
    disclaimer: false,
    password: false,
  });
  const [settingsData, setSettingsData] = useState({
    discount: "",
    randomVote: "",
    tobBarNofication: "",
    termsConditions: "",
    privacyPolicy: "",
    disclaimer: "",
  });

  const discountHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, discount: true });
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, discount: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      console.log(err.error.message.response.data.percentage.toString());
      toast.warn(
        `${err?.error?.message?.response?.data?.percentage?.toString()}`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formDataDiscount = new FormData(
      document.querySelector("#discount") as any
    );
    formDataDiscount.append("store", "true");

    dispatch(
      updateDiscountStore(formDataDiscount, successHandler, errorHandler)
    );
  };

  const randomVoteHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, randomVote: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, randomVote: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      console.log(err.error.message.response.data.from);
      toast.warn(
        `${[
          ...err?.error?.message?.response?.data?.from,
          ...err?.error?.message?.response?.data?.to,
        ].toString()}`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formDataRandomVote = new FormData(
      document.querySelector("#randomvote") as any
    );
    formDataRandomVote.append("store", "true");
    dispatch(
      updateRandomVoteStore(formDataRandomVote, successHandler, errorHandler)
    );
  };

  const tobBarNoficationHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, tobBarNofication: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, tobBarNofication: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.warn(
        `${err?.error?.message?.response?.data?.top_bar_notification_text.toString()}`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formTopbarnotification = new FormData(
      document.querySelector("#topbarnotification") as any
    );
    formTopbarnotification.append("store", "true");
    dispatch(
      updateTopBarNotificationStore(
        formTopbarnotification,
        successHandler,
        errorHandler
      )
    );
  };

  const termsConditionHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, termsConditions: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, termsConditions: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.warn(
        `${err?.error?.message?.response?.data?.terms_and_conditions_text.toString()}`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formTermsAndCondition = new FormData(
      document.querySelector("#termsandcondition") as any
    );
    formTermsAndCondition.append("store", "true");
    dispatch(
      updateTermsAndConditionStore(
        formTermsAndCondition,
        successHandler,
        errorHandler
      )
    );
  };

  const disclaimerHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, disclaimer: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, disclaimer: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.warn(
        `${err?.error?.message?.response?.data?.disclaimer_text.toString()}`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formDisclaimer = new FormData(
      document.querySelector("#disclaimer") as any
    );
    formDisclaimer.append("store", "true");
    dispatch(
      updateDisclaimerStore(formDisclaimer, successHandler, errorHandler)
    );
  };

  const privacyPolicyHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, privacyPolicy: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, privacyPolicy: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.warn(
        `${err?.error?.message?.response?.data?.policy_text.toString()}`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formPrivacyPolicy = new FormData(
      document.querySelector("#privacypolicy") as any
    );
    formPrivacyPolicy.append("store", "true");
    dispatch(
      updatePrivacyPolicyStore(formPrivacyPolicy, successHandler, errorHandler)
    );
  };

  const changePasswordHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, password: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, password: false });
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.warn(
        `${
          err?.error?.message?.response?.data?.password
            ? err?.error?.message?.response?.data?.password.toString()
            : err?.error?.message?.response?.data?.password_confirmation &&
              err?.error?.message?.response?.data?.password_confirmation.toString()
        }`,
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };
    var formPassword = new FormData(document.querySelector("#password") as any);
    formPassword.append("store", "true");
    dispatch(
      updateChangePasswordStore(formPassword, successHandler, errorHandler)
    );
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      setSettingsData({
        ...settingsData,
        discount: res.data.data,
      });
    };

    const errorHandler = (err: any) => {};
    dispatch(viewDiscountStore({ show: true }, successHandler, errorHandler));
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setSettingsData({
        ...settingsData,
        randomVote: res.data.data,
      });
    };

    const errorHandler = (err: any) => {};
    dispatch(viewRandomVoteStore({ show: true }, successHandler, errorHandler));
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setSettingsData({
        ...settingsData,
        tobBarNofication: res.data.data,
      });
    };

    const errorHandler = (err: any) => {};
    dispatch(
      viewTopBarNotificationStore({ show: true }, successHandler, errorHandler)
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setSettingsData({
        ...settingsData,
        termsConditions: res.data.data,
      });
    };

    const errorHandler = (err: any) => {};
    dispatch(
      viewTermsAndConditionStore({ show: true }, successHandler, errorHandler)
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setSettingsData({
        ...settingsData,
        privacyPolicy: res.data.data,
      });
    };

    const errorHandler = (err: any) => {};
    dispatch(
      viewPrivacyPolicyStore({ show: true }, successHandler, errorHandler)
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setSettingsData({
        ...settingsData,
        tobBarNofication: res.data.data,
      });
    };

    const errorHandler = (err: any) => {};
    dispatch(viewDisclaimerStore({ show: true }, successHandler, errorHandler));
  }, [dispatch]);

  console.log(settingsData?.discount);

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
                    <form id="discount">
                      <Stack direction="row" spacing={2} py={4} px={3}>
                        <Typography variant="subtitle1">Duration</Typography>
                        <InputText
                          width="auto"
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="duration"
                        />
                        <Typography variant="subtitle1">Percentage</Typography>
                        <InputText
                          width="auto"
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="percentage"
                        />

                        {loading.discount ? (
                          <LoadingButton
                            color="secondary"
                            loading={loading.discount}
                            loadingPosition="center"
                            // startIcon={<SaveIcon />}
                            variant="contained"
                            sx={{
                              width: "173px",
                              height: "41px",
                              backgroundColor: "rgb(61, 56, 122)",
                              borderRadius: "8px",
                              fontSize: "14px",
                              textTransform: "capitalize",
                              fontWeight: "300",
                            }}
                          >
                            Saving...Wait
                          </LoadingButton>
                        ) : (
                          <MediumBtn
                            Title="Save ad"
                            mdBtnHandler={discountHandler}
                          />
                        )}
                        <MediumBtn mdBtnHandler Title="Add More" />
                      </Stack>
                    </form>
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
                    <form id="randomvote">
                      <Stack direction="row" spacing={2} pt={3} pb={1} px={3}>
                        <Typography variant="subtitle1">From</Typography>
                        <InputText
                          width="auto"
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="from"
                        />
                        <Typography variant="subtitle1">To</Typography>
                        <InputText
                          width="auto"
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="to"
                        />
                        {loading.randomVote ? (
                          <LoadingButton
                            color="secondary"
                            loading={loading.randomVote}
                            loadingPosition="center"
                            // startIcon={<SaveIcon />}
                            variant="contained"
                            sx={{
                              width: "173px",
                              height: "41px",
                              backgroundColor: "rgb(61, 56, 122)",
                              borderRadius: "8px",
                              fontSize: "14px",
                              textTransform: "capitalize",
                              fontWeight: "300",
                            }}
                          >
                            Saving...Wait
                          </LoadingButton>
                        ) : (
                          <MediumBtn
                            mdBtnHandler={randomVoteHandler}
                            Title="Save"
                          />
                        )}
                      </Stack>
                    </form>
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
                    <form id="topbarnotification">
                      <Stack
                        direction="column"
                        spacing={2}
                        pt={3}
                        pb={1}
                        px={3}
                      >
                        <Typography variant="subtitle1">Enter Text</Typography>
                        <InputTextArea
                          name="top_bar_notification_text"
                          id="description"
                          placeholder="Enter Text"
                        />
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "flex-end" }}
                        >
                          {loading.tobBarNofication ? (
                            <LoadingButton
                              color="secondary"
                              loading={loading.tobBarNofication}
                              loadingPosition="center"
                              // startIcon={<SaveIcon />}
                              variant="contained"
                              sx={{
                                width: "173px",
                                height: "41px",
                                backgroundColor: "rgb(61, 56, 122)",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                fontWeight: "300",
                              }}
                            >
                              Saving...Wait
                            </LoadingButton>
                          ) : (
                            <MediumBtn
                              mdBtnHandler={tobBarNoficationHandler}
                              Title="Save"
                            />
                          )}
                        </Stack>
                      </Stack>
                    </form>
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
                    <form id="password">
                      <Stack
                        direction="column"
                        spacing={2}
                        pt={3}
                        pb={1}
                        px={3}
                      >
                        <Typography variant="subtitle1">
                          Enter new password
                        </Typography>
                        <InputText
                          placeholder="Enter new Password"
                          name="password"
                        />
                        <Typography variant="subtitle1">
                          Confirm Password
                        </Typography>
                        <InputText
                          placeholder="Re-Enter password"
                          name="password_confirmation"
                        />
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "flex-end" }}
                        >
                          {loading.password ? (
                            <LoadingButton
                              color="secondary"
                              loading={loading.password}
                              loadingPosition="center"
                              // startIcon={<SaveIcon />}
                              variant="contained"
                              sx={{
                                width: "173px",
                                height: "41px",
                                backgroundColor: "rgb(61, 56, 122)",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                fontWeight: "300",
                              }}
                            >
                              Saving...Wait
                            </LoadingButton>
                          ) : (
                            <MediumBtn
                              mdBtnHandler={changePasswordHandler}
                              Title="Save"
                            />
                          )}
                        </Stack>
                      </Stack>
                    </form>
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
                    <form id="termsandcondition">
                      <Stack
                        direction="column"
                        spacing={2}
                        pt={3}
                        pb={1}
                        px={3}
                      >
                        <Typography variant="subtitle1">Enter Text</Typography>
                        <InputTextArea
                          name="terms_and_conditions_text"
                          id="description"
                          placeholder="Enter Text"
                        />
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "flex-end" }}
                        >
                          {loading.termsConditions ? (
                            <LoadingButton
                              color="secondary"
                              loading={loading.termsConditions}
                              loadingPosition="center"
                              // startIcon={<SaveIcon />}
                              variant="contained"
                              sx={{
                                width: "173px",
                                height: "41px",
                                backgroundColor: "rgb(61, 56, 122)",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                fontWeight: "300",
                              }}
                            >
                              Saving...Wait
                            </LoadingButton>
                          ) : (
                            <MediumBtn
                              mdBtnHandler={termsConditionHandler}
                              Title="Save"
                            />
                          )}
                        </Stack>
                      </Stack>
                    </form>
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
                    <form id="disclaimer">
                      <Stack
                        direction="column"
                        spacing={2}
                        pt={3}
                        pb={1}
                        px={3}
                      >
                        <Typography variant="subtitle1">Enter Text</Typography>
                        <InputTextArea
                          name="disclaimer_text"
                          id="description"
                          placeholder="Enter Text"
                        />
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "flex-end" }}
                        >
                          {loading.disclaimer ? (
                            <LoadingButton
                              color="secondary"
                              loading={loading.disclaimer}
                              loadingPosition="center"
                              // startIcon={<SaveIcon />}
                              variant="contained"
                              sx={{
                                width: "173px",
                                height: "41px",
                                backgroundColor: "rgb(61, 56, 122)",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                fontWeight: "300",
                              }}
                            >
                              Saving...Wait
                            </LoadingButton>
                          ) : (
                            <MediumBtn
                              mdBtnHandler={disclaimerHandler}
                              Title="Save"
                            />
                          )}
                        </Stack>
                      </Stack>
                    </form>
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
                    <form id="privacypolicy">
                      <Stack
                        direction="column"
                        spacing={2}
                        pt={3}
                        pb={1}
                        px={3}
                      >
                        <Typography variant="subtitle1">Enter Text</Typography>
                        <InputTextArea
                          name="policy_text"
                          id="description"
                          placeholder="Enter Text"
                        />
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "flex-end" }}
                        >
                          {loading.privacyPolicy ? (
                            <LoadingButton
                              color="secondary"
                              loading={loading.privacyPolicy}
                              loadingPosition="center"
                              // startIcon={<SaveIcon />}
                              variant="contained"
                              sx={{
                                width: "173px",
                                height: "41px",
                                backgroundColor: "rgb(61, 56, 122)",
                                borderRadius: "8px",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                fontWeight: "300",
                              }}
                            >
                              Saving...Wait
                            </LoadingButton>
                          ) : (
                            <MediumBtn
                              mdBtnHandler={privacyPolicyHandler}
                              Title="Save"
                            />
                          )}
                        </Stack>
                      </Stack>
                    </form>
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
