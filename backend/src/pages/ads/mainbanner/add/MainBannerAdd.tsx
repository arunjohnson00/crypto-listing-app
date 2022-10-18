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

import { addCoinChatRequest } from "../../../../store/action";
import InputSelectAds from "../../../../components/form/selectads/InputSelectAds";
import InputDateTime from "../../../../components/form/input/datetime/InputDateTime";

const MainAdsAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const selectAdsOptions = [
    { title: "Header Ads", value: "header_ads" },
    { title: "Search Ads", value: "search_ads" },
    { title: "VoteClick Ads", value: "voteclick_ads" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addMainAdsData, setAddMainAds] = useState<any>({
    title: "",
    subtitle: "",
    start_date: new Date(),
    no_of_days: "",
    description: "",
    ads_type: "",
    link: "",
    status: 1,
  });

  const [loading, setLoading] = useState(false);

  const [coinChecked, setcoinChecked] = useState(true);

  const mainAdsAddHandler = () => {
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
        navigate("/main-banner");
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
    formData.append("title", addMainAdsData?.title);
    formData.append("subtitle", addMainAdsData?.subtitle);
    formData.append("description", addMainAdsData?.description);
    formData.append("ads_type", addMainAdsData?.ads_type);
    formData.append("link", addMainAdsData?.link);
    formData.append(
      "start_date",
      dateFormat(new Date(addMainAdsData.start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", addMainAdsData.no_of_days);

    formData.append("status", addMainAdsData?.status);

    dispatch(addCoinChatRequest(formData, successHandler, errorHandler));
  };

  const mainAdsNumberOfDaysHandler = (e: any) => {
    //console.log(e);

    setAddMainAds({ ...addMainAdsData, no_of_days: e });
  };

  const mainAdsTitleHandler = (e: any) => {
    //console.log(e);

    setAddMainAds({ ...addMainAdsData, title: e });
  };

  const mainAdsSubTitleHandler = (e: any) => {
    //console.log(e);

    setAddMainAds({ ...addMainAdsData, subtitle: e });
  };
  const mainAdsDescriptionHandler = (e: any) => {
    //console.log(e);

    setAddMainAds({ ...addMainAdsData, description: e });
  };
  const mainAdsLinkHandler = (e: any) => {
    //console.log(e);

    setAddMainAds({ ...addMainAdsData, link: e });
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
                navigate("/main-banner");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            MainAds
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
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
                setInputSelectValue={setAddMainAds}
                getInputSelectvalue={addMainAdsData}
                // serverStatus={newArrList[0].status}
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
                Ads Title
              </Typography>

              <InputText
                placeholder="Eg:Main Ads"
                inputTextHandler={(e: any) => mainAdsTitleHandler(e)}
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
                Subtitle{" "}
              </Typography>

              <InputText
                placeholder="Eg:SubTitle"
                inputTextHandler={(e: any) => mainAdsSubTitleHandler(e)}
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
                inputTextHandler={(e: any) => mainAdsDescriptionHandler(e)}
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
                Ads Link
              </Typography>

              <InputText
                placeholder="Eg:https://coinxhigh.com/ads"
                inputTextHandler={(e: any) => mainAdsLinkHandler(e)}
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
                Start Date & Time
              </Typography>

              <InputDateTime
                start_date={true}
                dateTime={addMainAdsData}
                setDateTime={setAddMainAds}
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
                inputTextHandler={(e: any) => mainAdsNumberOfDaysHandler(e)}
              />
            </Grid>

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
                setInputSelectValue={setAddMainAds}
                getInputSelectvalue={addMainAdsData}
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
                  <LargeBtn
                    Title="Set MainAds"
                    lgBtnHandler={mainAdsAddHandler}
                  />
                )}
              </Stack>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainAdsAdd;
