import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Checkbox,
  Backdrop,
  Link as EventLink,
  CircularProgress,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import LargeBtn from "../../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../../components/form/select/InputSelect";

import dateFormat, { masks } from "dateformat";

import InputSelectAds from "../../../../components/form/selectads/InputSelectAds";
import InputDateTime from "../../../../components/form/input/datetime/InputDateTime";
import { Link } from "react-router-dom";
import AutoCompleSelect from "../../../../components/form/autocomplete/AutoCompleSelect";
import { addAdsListRequest } from "../../../../store/action";
import InputTextArea from "../../../../components/form/textarea/InputTextArea";

const AdWizardAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const selectAdsOptions = [
    { title: "Main banner", value: 1 },
    { title: "Side Square Banner", value: 2 },
    { title: "Side Banner Half", value: 3 },
    { title: "Featured Coin", value: 4 },
    { title: "Video Ads", value: 5 },
    { title: "Vote Click Popup", value: 6 },
    { title: "Search Bar Ad", value: 7 },
    { title: "Welcome Banner Popup", value: 8 },
    { title: "Announcements", value: 9 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createAdsData, setCreateAds] = useState<any>({
    banner_name: "",
    subtitle: "",
    coin_id: "",
    banner_start_date: new Date(),
    no_of_days: "",
    announcements: "",
    description: "",
    ads_type: 1,
    banner_image: "",
    banner_ad_type: 1,
    banner_target_link: "",
    search_ad_description: "",
    button_name: "",
    icon: "",
    image: "",
    thumb_icon: "",
    logo: "",
    status: 1,
  });
  console.log(createAdsData);
  const [loading, setLoading] = useState(false);

  const [coinChecked, setcoinChecked] = useState(true);

  const createAdsAddHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);

      setLoading(true);
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/adslist");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      //console.log(err);

      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    var formData = new FormData(document.querySelector("#eventForm") as any);

    formData.append("banner_name", createAdsData?.banner_name);
    // formData.append("subtitle", createAdsData?.subtitle);
    // formData.append("description", createAdsData?.description);
    // formData.append("ads_type", createAdsData?.ads_type);
    createAdsData?.banner_ad_type === 4 &&
      formData.append("coin_id", createAdsData?.coin_id);
    createAdsData?.banner_ad_type === 9 &&
      formData.append("announcements", createAdsData?.announcements);
    // createAdsData?.banner_ad_type === 7 &&
    //   formData.append(
    //     "search_ad_description",
    //     createAdsData?.search_ad_description
    //   );
    (createAdsData?.banner_ad_type === 7 ||
      createAdsData?.banner_ad_type === 9) &&
      formData.append("button_name", createAdsData?.button_name);
    createAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_image", createAdsData?.banner_image);
    createAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_target_link", createAdsData?.banner_target_link);
    formData.append("banner_ad_type", createAdsData?.banner_ad_type);

    formData.append(
      "banner_start_date",
      dateFormat(new Date(createAdsData.banner_start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", createAdsData.no_of_days);

    formData.append("status", createAdsData?.status);

    dispatch(addAdsListRequest(formData, successHandler, errorHandler));
  };

  const createAdsNumberOfDaysHandler = (e: any) => {
    //console.log(e);

    setCreateAds({ ...createAdsData, no_of_days: e });
  };

  const createAdsNameHandler = (e: any) => {
    //console.log(e);

    setCreateAds({ ...createAdsData, banner_name: e });
  };

  const createAdsButtonNameHandler = (e: any) => {
    //console.log(e);

    setCreateAds({ ...createAdsData, button_name: e });
  };
  const createAdsAnnouncementsNameHandler = (e: any) => {
    //console.log(e);

    setCreateAds({ ...createAdsData, announcements: e });
  };
  // const createAdsSubTitleHandler = (e: any) => {
  //   //console.log(e);

  //   setCreateAds({ ...createAdsData, subtitle: e });
  // };
  // const createAdsDescriptionHandler = (e: any) => {
  //   //console.log(e);

  //   setCreateAds({ ...createAdsData, description: e });
  // };
  const createAdsLinkHandler = (e: any) => {
    //console.log(e);

    setCreateAds({ ...createAdsData, banner_target_link: e });
  };

  return (
    <Grid container spacing={2}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton>
            <ArrowBackIosTwoToneIcon
              onClick={() => {
                navigate("/adslist");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Create Ads
          </Typography>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
          pr={4}
        >
          <form id="eventForm">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} py={2}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Ads Type
              </Typography>

              <InputSelectAds
                selectOptions={selectAdsOptions}
                // currentStatus={newArrList[0].status}
                setInputSelectValue={setCreateAds}
                getInputSelectvalue={createAdsData}
                // serverStatus={newArrList[0].status}
              />
            </Grid>
            {createAdsData?.banner_ad_type === 4 && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                  mb={1}
                >
                  Search your coin{" "}
                  <span style={{ fontSize: ".85rem" }}>
                    ( This Ad is base on a coin listed on coinxhigh.com. if coin
                    is not listed{" "}
                    <Link to="/coins/add">
                      <span>Add Now</span>
                    </Link>
                  </span>{" "}
                  )
                </Typography>

                <AutoCompleSelect
                  inputAutoValue={createAdsData}
                  setInputAutoValue={setCreateAds}
                  variant="coin"
                />
              </Grid>
            )}

            {
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                  mb={1}
                >
                  Ads Name
                </Typography>

                <InputText
                  placeholder="Eg:Main Ads"
                  inputTextHandler={(e: any) => createAdsNameHandler(e)}
                />
              </Grid>
            }

            {createAdsData?.banner_ad_type === 9 && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                  mb={1}
                >
                  Announcements
                </Typography>

                <InputText
                  placeholder="Eg:Buy, trade, and hold 350+ cryptocurrencies on Binance"
                  inputTextHandler={(e: any) =>
                    createAdsAnnouncementsNameHandler(e)
                  }
                  value={createAdsData && createAdsData?.announcements}
                />
              </Grid>
            )}

            {createAdsData?.banner_ad_type !== 4 && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                  mb={1}
                >
                  Enter ads redirection URL
                </Typography>

                <InputText
                  placeholder="Eg:https://coinxhigh.com/ads"
                  inputTextHandler={(e: any) => createAdsLinkHandler(e)}
                />
              </Grid>
            )}

            {(createAdsData?.banner_ad_type === 7 ||
              createAdsData?.banner_ad_type === 9) && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                  mb={1}
                >
                  Button Name
                </Typography>

                <InputText
                  placeholder="Eg:Register Now"
                  inputTextHandler={(e: any) => createAdsButtonNameHandler(e)}
                />
              </Grid>
            )}

            {createAdsData?.banner_ad_type === 7 && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} mb={3} mt={3}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "left",
                    fontSize: ".9rem",
                    fontWeight: 600,
                    color: "#000000",
                  }}
                  mb={1}
                >
                  Ad Description
                </Typography>

                <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                  <InputTextArea
                    placeholder="Enter Detailed Project Details. Recommended word count 450 - 950."
                    name="search_ad_description"
                  />
                </Grid>
              </Grid>
            )}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#000000",
                }}
                mb={1}
              >
                Start Date & Time
              </Typography>

              <InputDateTime
                start_date={true}
                dateTime={createAdsData}
                setDateTime={setCreateAds}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#000000",
                }}
                mb={1}
              >
                No. of days
              </Typography>

              <InputText
                placeholder="Eg:6"
                inputTextHandler={(e: any) => createAdsNumberOfDaysHandler(e)}
              />
            </Grid>
            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#000000",
                }}
                mb={1}
              >
                Subtitle{" "}
              </Typography>

              <InputText
                placeholder="Eg:SubTitle"
                inputTextHandler={(e: any) => createAdsSubTitleHandler(e)}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#000000",
                }}
                mb={1}
              >
                Description{" "}
              </Typography>

              <InputText
                placeholder="Eg:Description"
                inputTextHandler={(e: any) => createAdsDescriptionHandler(e)}
              />
            </Grid> */}
            {createAdsData?.banner_ad_type !== 4 && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                  mb={1}
                >
                  Upload image
                </Typography>

                <IconUploader
                  setAddIcon={setCreateAds}
                  addIconData={createAdsData}
                  variant="ads"
                />
              </Grid>
            )}
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                // currentStatus={newArrList[0].status}
                setInputSelectValue={setCreateAds}
                getInputSelectvalue={createAdsData}
                // serverStatus={newArrList[0].status}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
                {loading ? (
                  <LoadingButton
                    color="secondary"
                    loading={loading}
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
                  <LargeBtn Title="Create" lgBtnHandler={createAdsAddHandler} />
                )}
              </Stack>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdWizardAdd;
