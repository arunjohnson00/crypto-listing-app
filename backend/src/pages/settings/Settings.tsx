import { useState, useEffect, Fragment } from "react";
import { Grid, Typography, Stack, Box, Divider, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MediumBtn from "../../components/form/button/medium/MediumBtn";
import BannerUploader from "../../components/form/input/file/banner/BannerUploader";
import InputText from "../../components/form/input/text/InputText";
import InputTextArea from "../../components/form/textarea/InputTextArea";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HorizonatalList from "../../components/list/horizontal/HorizonatalList";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
import { updateDashboardImageSlider } from "../../store/action";
import { updateDashboardInfoBanner } from "../../store/action";
import { listDashboardImageSlider } from "../../store/action";
import { listDashboardInfoBanner } from "../../store/action";
import { deleteDashboardImageSlider } from "../../store/action";
import { deleteDashboardInfoBanner } from "../../store/action";
import DashBoardInfoBanner from "./DashBoardInfoBanner";
import DashBoardImageSlider from "./DashBoardImageSlider";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const settings = useSelector((settingsAll: any) => {
    return settingsAll?.settingsReducer;
  });

  const imageSliderListFetch = useSelector((imageSlider: any) => {
    return imageSlider.settingsReducer.listDashBoardSlider.data;
  });
  const infoBannerListFetch = useSelector((infoBanner: any) => {
    return infoBanner.settingsReducer.listDashBoardInfoBanner.data;
  });

  const [dashBoardImageSliderData, setDashBoardImageSliderData] = useState<any>(
    {}
  );
  console.log(dashBoardImageSliderData);
  const [dashBoardInfoBannerData, setDashBoardInfoBannerData] = useState<any>(
    {}
  );

  const [dashBoardImageSliderCount, setDashboardImageSliderCount] = useState<
    any[]
  >([]);

  const dashBoardImageaddHandle = () => {
    setDashboardImageSliderCount([
      ...dashBoardImageSliderCount,
      { slider: "" },
    ]);
  };

  const dashBoardImageremoveHandle = (index: any) => {
    let dashBoardImageSliderList: any = [...dashBoardImageSliderCount];
    dashBoardImageSliderList.splice(index, 1);
    setDashboardImageSliderCount(dashBoardImageSliderList);
  };

  const [dashBoardInfoBannerCount, setDashBoardInfoBannerCount] = useState<
    any[]
  >([]);

  const dashBoardInfoBanneraddHandle = () => {
    setDashBoardInfoBannerCount([...dashBoardInfoBannerCount, { banner: "" }]);
  };
  const dashBoardInfoBannerRemoveHandle = (index: any) => {
    let infoBannerList = [...dashBoardInfoBannerCount];
    infoBannerList.splice(index, 1);
    setDashBoardInfoBannerCount(infoBannerList);
  };

  const [loading, setLoading] = useState({
    discount: false,
    randomVote: false,
    tobBarNofication: false,
    termsConditions: false,
    privacyPolicy: false,
    disclaimer: false,
    password: false,
    imageSlider: false,
    infoBanner: false,
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

  const imageSliderHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, imageSlider: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, imageSlider: false });
        navigate(0);
      }, 3000);
    };
    const errorHandler = (err: any) => {
      console.log(err);
      toast.warn(`${err}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
    var formDataImageSlider = new FormData(
      document.querySelector("#imageSlider") as any
    );
    // formDataImageSlider.append("store", "true");
    dispatch(
      updateDashboardImageSlider(
        formDataImageSlider,
        successHandler,
        errorHandler
      )
    );
  };

  const infoBannerHandler = () => {
    const successHandler = (res: any) => {
      setLoading({ ...loading, infoBanner: true });
      toast.success(`${res?.data?.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setLoading({ ...loading, infoBanner: false });
        navigate(0);
      }, 3000);
    };
    const errorHandler = (err: any) => {
      console.log(err);
      toast.warn(`${err}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
    var formDataImageSlider = new FormData(
      document.querySelector("#infoBanner") as any
    );
    // formDataImageSlider.append("store", "true");
    dispatch(
      updateDashboardInfoBanner(
        formDataImageSlider,
        successHandler,
        errorHandler
      )
    );
  };

  const imageSliderDeleteHandler = (index: any) => {
    const successHandler = (res: any) => {
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate(0);
      }, 3000);
    };
    const errorHandler = (err: any) => {
      toast.warn(`${err}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    dispatch(
      deleteDashboardImageSlider(parseInt(index), successHandler, errorHandler)
    );
  };

  const InfoBannerDeleteHandler = (index: any) => {
    const successHandler = (res: any) => {
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate(0);
      }, 3000);
    };

    const errorHandler = (err: any) => {
      toast.warn(`${err}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    dispatch(
      deleteDashboardInfoBanner(parseInt(index), successHandler, errorHandler)
    );
  };

  useEffect(() => {
    const successHandler = (res: any) => {};

    const errorHandler = (err: any) => {};

    dispatch(viewDisclaimerStore({ show: true }, successHandler, errorHandler));
    dispatch(
      viewPrivacyPolicyStore({ show: true }, successHandler, errorHandler)
    );
    dispatch(
      viewTermsAndConditionStore({ show: true }, successHandler, errorHandler)
    );
    dispatch(
      viewTopBarNotificationStore({ show: true }, successHandler, errorHandler)
    );
    dispatch(viewRandomVoteStore({ show: true }, successHandler, errorHandler));
    dispatch(viewDiscountStore({ show: true }, successHandler, errorHandler));
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      listDashboardImageSlider({ show: true }, successHandler, errorHandler)
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      listDashboardInfoBanner({ show: true }, successHandler, errorHandler)
    );
  }, [dispatch]);
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
                          value={
                            settings?.viewDiscountStore?.data?.setting &&
                            JSON.parse(
                              settings?.viewDiscountStore?.data?.setting
                            )?.duration
                          }
                        />
                        <Typography variant="subtitle1">Percentage</Typography>
                        <InputText
                          width="auto"
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="percentage"
                          value={
                            settings?.viewDiscountStore?.data?.setting &&
                            JSON.parse(
                              settings?.viewDiscountStore?.data?.setting
                            )?.percentage
                          }
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
                          value={
                            settings?.viewRandomVoteStore?.data?.setting &&
                            JSON.parse(
                              settings?.viewRandomVoteStore?.data?.setting
                            )?.from
                          }
                        />
                        <Typography variant="subtitle1">To</Typography>
                        <InputText
                          width="auto"
                          placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                          name="to"
                          value={
                            settings?.viewRandomVoteStore?.data?.setting &&
                            JSON.parse(
                              settings?.viewRandomVoteStore?.data?.setting
                            )?.to
                          }
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
                          value={
                            settings?.viewTopBarNotificationStore?.data
                              ?.setting &&
                            JSON.parse(
                              settings?.viewTopBarNotificationStore?.data
                                ?.setting
                            )?.top_bar_notification_text
                          }
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
                          value={
                            settings?.viewTermsAndConditionStore?.data
                              ?.setting &&
                            JSON.parse(
                              settings?.viewTermsAndConditionStore?.data
                                ?.setting
                            )?.terms_and_conditions_text
                          }
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
                          value={
                            settings?.viewDisclaimerStore?.data?.setting &&
                            JSON.parse(
                              settings?.viewDisclaimerStore?.data?.setting
                            )?.disclaimer_text
                          }
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
                          value={
                            settings?.viewPrivacyPolicyStore?.data?.setting &&
                            JSON.parse(
                              settings?.viewPrivacyPolicyStore?.data?.setting
                            )?.policy_text
                          }
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
                <Typography variant="h6">
                  User dashboard image slider
                </Typography>
                <Divider />
                <form id="imageSlider">
                  {imageSliderListFetch &&
                  Object.keys(imageSliderListFetch?.images).length !== 0 ? (
                    Object.keys(imageSliderListFetch?.images).map(function (
                      key,
                      index
                    ) {
                      return (
                        <Stack
                          direction="column"
                          spacing={2}
                          pt={3}
                          pb={3}
                          px={3}
                          key={index}
                        >
                          <Stack
                            direction="row"
                            sx={{ justifyContent: " space-between" }}
                          >
                            {" "}
                            <InputText
                              placeholder="Benner Redirection URL"
                              width="auto"
                              name={`redirection_url[${index + 1}]`}
                              id={`redirection_url_${index + 1}`}
                              value={imageSliderListFetch?.redirection_url[key]}
                            />
                            <Avatar
                              alt="Remy Sharp"
                              src={`${serverAPIUrl}public/uploads/slider_image/${imageSliderListFetch?.images[key]}`}
                            />
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <BannerUploader
                              addIconData={dashBoardImageSliderData}
                              setAddIcon={setDashBoardImageSliderData}
                              name={`slider_image[${index + 1}]`}
                            />
                            <MediumBtn
                              mdBtnHandler={imageSliderHandler}
                              Title="Save"
                            />

                            {Object.keys(imageSliderListFetch?.images)
                              .length ===
                            index + 1 ? (
                              <Fragment>
                                <Stack direction="row" spacing={2}>
                                  <IconButton
                                    aria-label="delete"
                                    sx={{ color: "red" }}
                                    onClick={() =>
                                      imageSliderDeleteHandler(key)
                                    }
                                  >
                                    <RemoveCircleOutlineIcon />
                                  </IconButton>
                                  <IconButton
                                    aria-label="delete"
                                    sx={{ color: "green" }}
                                    onClick={dashBoardImageaddHandle}
                                  >
                                    <AddCircleOutlineIcon />
                                  </IconButton>
                                </Stack>
                              </Fragment>
                            ) : (
                              <IconButton
                                aria-label="delete"
                                sx={{ color: "red" }}
                                onClick={() => imageSliderDeleteHandler(key)}
                              >
                                <RemoveCircleOutlineIcon />
                              </IconButton>
                            )}
                          </Stack>
                        </Stack>
                      );
                    })
                  ) : (
                    <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
                      <InputText
                        placeholder="Benner Redirection URL"
                        width="auto"
                        name="redirection_url[1]"
                        id="redirection_url_1"
                      />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: " space-between" }}
                      >
                        <BannerUploader
                          addIconData={dashBoardImageSliderData}
                          setAddIcon={setDashBoardImageSliderData}
                          name="slider_image[1]"
                        />
                        <MediumBtn
                          mdBtnHandler={imageSliderHandler}
                          Title="Save"
                        />
                        <IconButton
                          aria-label="delete"
                          sx={{ color: "green" }}
                          onClick={dashBoardImageaddHandle}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  )}
                  {dashBoardImageSliderCount.map((slider, index) => {
                    return (
                      <div>
                        <DashBoardImageSlider
                          dashBoardImageremoveHandle={
                            dashBoardImageremoveHandle
                          }
                          dashBoardImageSliderCount={dashBoardImageSliderCount}
                          index={
                            imageSliderListFetch !== 0 &&
                            imageSliderListFetch !== undefined
                              ? Object.keys(imageSliderListFetch?.images)
                                  .length -
                                1 +
                                index
                              : index
                          }
                          key={index}
                          dashBoardImageSliderData={dashBoardImageSliderData}
                          setDashBoardImageSliderData={
                            setDashBoardImageSliderData
                          }
                          imageSliderHandler={imageSliderHandler}
                          //data={dashBoardImageSliderList}
                        />
                      </div>
                    );
                  })}
                </form>
              </Grid>
            </Box>
            <Box
              sx={{ width: "100%", background: "white", borderRadius: "7px" }}
              p={4}
              mb={5}
            >
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h6">User dashboard info banner</Typography>
                <Divider />
                <form id="infoBanner">
                  {infoBannerListFetch &&
                  Object.keys(infoBannerListFetch?.images).length !== 0 ? (
                    Object.keys(infoBannerListFetch?.images).map(function (
                      key,
                      index
                    ) {
                      return (
                        <Stack
                          direction="column"
                          spacing={2}
                          pt={3}
                          pb={3}
                          px={3}
                          key={index}
                        >
                          <Stack
                            direction="row"
                            sx={{ justifyContent: " space-between" }}
                          >
                            {" "}
                            <InputText
                              placeholder="Info banner Redirection URL"
                              width="auto"
                              name={`redirection_url[${index + 1}]`}
                              id={`redirection_url_${index + 1}`}
                              value={infoBannerListFetch?.redirection_url[key]}
                            />
                            <Avatar
                              alt="Remy Sharp"
                              src={`${serverAPIUrl}public/uploads/info_banner/${infoBannerListFetch?.images[key]}`}
                            />
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <BannerUploader
                              addIconData={dashBoardInfoBannerData}
                              setAddIcon={setDashBoardInfoBannerData}
                              name={`info_banner[${index + 1}]`}
                            />
                            <MediumBtn
                              mdBtnHandler={infoBannerHandler}
                              Title="Save"
                            />
                            {Object.keys(infoBannerListFetch?.images).length ===
                            index + 1 ? (
                              <Fragment>
                                <Stack direction="row" spacing={2}>
                                  <IconButton
                                    aria-label="delete"
                                    sx={{ color: "red" }}
                                    onClick={() => InfoBannerDeleteHandler(key)}
                                  >
                                    <RemoveCircleOutlineIcon />
                                  </IconButton>
                                  <IconButton
                                    aria-label="delete"
                                    sx={{ color: "green" }}
                                    onClick={dashBoardInfoBanneraddHandle}
                                  >
                                    <AddCircleOutlineIcon />
                                  </IconButton>
                                </Stack>
                              </Fragment>
                            ) : (
                              <IconButton
                                aria-label="delete"
                                sx={{ color: "red" }}
                                onClick={() => InfoBannerDeleteHandler(key)}
                              >
                                <RemoveCircleOutlineIcon />
                              </IconButton>
                            )}
                          </Stack>
                        </Stack>
                      );
                    })
                  ) : (
                    <Stack direction="column" spacing={2} pt={3} pb={3} px={3}>
                      <InputText
                        placeholder="Info Benner Redirection URL"
                        width="auto"
                        name="redirection_url[1]"
                        id="redirection_url_1"
                      />
                      <Stack
                        direction="row"
                        sx={{ justifyContent: " space-between" }}
                      >
                        <BannerUploader
                          addIconData={dashBoardInfoBannerData}
                          setAddIcon={setDashBoardInfoBannerData}
                          name="info_banner[1]"
                        />
                        <MediumBtn
                          mdBtnHandler={infoBannerHandler}
                          Title="Save"
                        />
                        <IconButton
                          aria-label="delete"
                          sx={{ color: "green" }}
                          onClick={dashBoardInfoBanneraddHandle}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </Stack>
                    </Stack>
                  )}
                  {dashBoardInfoBannerCount.map((slider, index) => {
                    return (
                      <div>
                        <DashBoardInfoBanner
                          dashBoardInfoBannerRemoveHandle={
                            dashBoardInfoBannerRemoveHandle
                          }
                          dashBoardInfoBannerCount={dashBoardInfoBannerCount}
                          index={
                            infoBannerListFetch !== 0 &&
                            infoBannerListFetch !== undefined
                              ? Object.keys(infoBannerListFetch?.images)
                                  .length -
                                1 +
                                index
                              : index
                          }
                          key={index}
                          dashBoardInfoBannerData={dashBoardInfoBannerData}
                          setDashBoardInfoBannerData={
                            setDashBoardInfoBannerData
                          }
                          //data={dashBoardImageSliderList}
                          infoBannerHandler={infoBannerHandler}
                        />
                      </div>
                    );
                  })}
                </form>
              </Grid>
            </Box>
          </Grid>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Settings;
