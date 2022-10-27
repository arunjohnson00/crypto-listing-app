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
import { useNavigate, useParams } from "react-router-dom";
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
import {
  addAdsListRequest,
  editAdsListRequest,
} from "../../../../store/action";
import moment from "moment";
import InputTextArea from "../../../../components/form/textarea/InputTextArea";

const AdWizardEdit = () => {
  let { id } = useParams();
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
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editAdsData, setEditAds] = useState<any>({
    banner_name: "",
    subtitle: "",
    coin_id: "",
    banner_start_date: new Date(),
    no_of_days: "",
    description: "",
    ads_type: "",
    banner_image: "",
    banner_ad_type: "",
    banner_target_link: "",
    search_ad_description: "",
    button_name: "",
    icon: "",
    image: "",
    thumb_icon: "",
    logo: "",
    status: 1,
  });
  console.log(editAdsData);
  const [loading, setLoading] = useState(false);

  const [coinChecked, setcoinChecked] = useState(true);

  const editAdsAddHandler = () => {
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
    editAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_name", editAdsData?.banner_name);
    // formData.append("subtitle", editAdsData?.subtitle);
    // formData.append("description", editAdsData?.description);
    formData.append("banner_ad_type", editAdsData?.banner_ad_type);
    editAdsData?.banner_ad_type === 4 &&
      formData.append("coin_id", editAdsData?.coin_id);
    // editAdsData?.banner_ad_type === 7 &&
    //   formData.append(
    //     "search_ad_description",
    //     editAdsData?.search_ad_description
    //   );
    editAdsData?.banner_ad_type === 7 &&
      formData.append("button_name", editAdsData?.button_name);
    editAdsData?.banner_ad_type !== 4 &&
      editAdsData.banner_image !== "" &&
      typeof editAdsData.banner_image !== "string" &&
      formData.append("banner_image", editAdsData?.banner_image);
    editAdsData?.banner_ad_type !== 4 &&
      formData.append("banner_target_link", editAdsData?.banner_target_link);
    formData.append("banner_ad_type", editAdsData?.banner_ad_type);

    formData.append(
      "banner_start_date",
      dateFormat(new Date(editAdsData.banner_start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", editAdsData.no_of_days);

    formData.append("status", editAdsData?.status);

    dispatch(addAdsListRequest(formData, successHandler, errorHandler));
  };

  const editAdsNumberOfDaysHandler = (e: any) => {
    //console.log(e);

    setEditAds({ ...editAdsData, no_of_days: e });
  };

  const editAdsNameHandler = (e: any) => {
    //console.log(e);

    setEditAds({ ...editAdsData, banner_name: e });
  };

  const editAdsButtonNameHandler = (e: any) => {
    //console.log(e);

    setEditAds({ ...editAdsData, button_name: e });
  };

  // const editAdsSubTitleHandler = (e: any) => {
  //   //console.log(e);

  //   setEditAds({ ...editAdsData, subtitle: e });
  // };
  // const editAdsDescriptionHandler = (e: any) => {
  //   //console.log(e);

  //   setEditAds({ ...editAdsData, description: e });
  // };
  const editAdsLinkHandler = (e: any) => {
    //console.log(e);

    setEditAds({ ...editAdsData, banner_target_link: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditAds(res?.data?.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editAdsListRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch]);

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
            Edit Ads
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
                variant="adslist"
                selectOptions={selectAdsOptions}
                currentStatus={editAdsData && editAdsData?.banner_ad_type}
                setInputSelectValue={setEditAds}
                getInputSelectvalue={editAdsData}
                serverStatus={editAdsData && editAdsData?.banner_ad_type}
              />
            </Grid>
            {editAdsData?.banner_ad_type === 4 && (
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
                  inputAutoValue={editAdsData}
                  setInputAutoValue={setEditAds}
                  variant="coin"
                  serverRef={editAdsData && editAdsData?.coin_id}
                />
              </Grid>
            )}

            {editAdsData?.banner_ad_type !== 4 && (
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
                  inputTextHandler={(e: any) => editAdsNameHandler(e)}
                  value={editAdsData && editAdsData?.banner_name}
                />
              </Grid>
            )}

            {editAdsData?.banner_ad_type !== 4 && (
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
                  inputTextHandler={(e: any) => editAdsLinkHandler(e)}
                  value={editAdsData && editAdsData?.banner_target_link}
                />
              </Grid>
            )}
            {editAdsData?.banner_ad_type === 7 && (
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
                  inputTextHandler={(e: any) => editAdsButtonNameHandler(e)}
                  value={editAdsData && editAdsData?.button_name}
                />
              </Grid>
            )}

            {editAdsData?.banner_ad_type === 7 && (
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
                    value={editAdsData?.search_ad_description}
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
                ads_start_date={true}
                dateTime={editAdsData}
                setDateTime={setEditAds}
                serverRef={
                  editAdsData && moment(new Date(editAdsData.banner_start_date))
                }
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
                inputTextHandler={(e: any) => editAdsNumberOfDaysHandler(e)}
                value={editAdsData && editAdsData?.no_of_days}
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
                inputTextHandler={(e: any) => editAdsSubTitleHandler(e)}
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
                inputTextHandler={(e: any) => editAdsDescriptionHandler(e)}
              />
            </Grid> */}
            {editAdsData?.banner_ad_type !== 4 && (
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                  mb={1}
                >
                  Upload image
                </Typography>

                <IconUploader
                  setAddIcon={setEditAds}
                  addIconData={editAdsData}
                  slug="banner_ads"
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
                setInputSelectValue={setEditAds}
                getInputSelectvalue={editAdsData}
                serverStatus={editAdsData && editAdsData?.status}
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
                  <LargeBtn Title="Update" lgBtnHandler={editAdsAddHandler} />
                )}
              </Stack>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdWizardEdit;
