import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import LargeBtn from "../../../../../components/useradmin/form/button/large/LargeBtn";
import IconUploader from "../../../../../components/useradmin/form/input/file/icon/IconUploader";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import InputSelect from "../../../../../components/useradmin/form/select/InputSelect";
import AutoCompleSelect from "../../../../../components/useradmin/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../../components/useradmin/form/input/date/InputDate";
import RadioBtnGroup from "../../../../../components/useradmin/form/input/radiobtngroup/RadioBtnGroup";

import dateFormat, { masks } from "dateformat";
import { dashboardAddReviewRequest } from "../../../../../store/action";
import { Helmet } from "react-helmet-async";

const ReviewAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const [addReviewData, setAddReview] = useState<any>({
    item_id: "",
    start_date: new Date(),
    no_of_days: "",
    total_amount: "",
    no_of_winners: "",
    is_follow_twitter: "",
    join_telegram: "",
    logo: "",
    status: 1,
  });

  const [loading, setLoading] = useState(false);

  // Display the key/value pairs

  const reviewAddHandler = () => {
    const successHandler = (res: any) => {
      setLoading(true);
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res?.data?.message}
            </Typography>
          </Stack>
        </Box>,
        {
          position: "top-right",
          icon: false,
          //theme: "colored",
          className: "toast-success-container toast-success-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      setTimeout(() => {
        navigate("/user-dashboard/review");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      toast.error(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CancelRoundedIcon sx={{ color: "#ff3722", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {err.error.message.response.request.responseText}
            </Typography>
          </Stack>
        </Box>,
        {
          icon: false,
          position: "top-right",
          className: "toast-error-container toast-error-container-after",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    };

    const formData = new FormData();
    formData.append("coin_id", addReviewData?.item_id);
    formData.append(
      "start_date",
      dateFormat(new Date(addReviewData.start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", addReviewData?.no_of_days);
    formData.append("total_amount", addReviewData?.total_amount);
    formData.append("no_of_winners", addReviewData?.no_of_winners);
    formData.append("is_follow_twitter", addReviewData?.is_follow_twitter);
    formData.append("join_telegram", addReviewData?.join_telegram);
    formData.append("status", addReviewData?.status);

    dispatch(dashboardAddReviewRequest(formData, successHandler, errorHandler));
  };

  const reviewNumDaysHandler = (e: any) => {
    //console.log(e);

    setAddReview({ ...addReviewData, no_of_days: e });
  };

  const reviewTotalAmountHandler = (e: any) => {
    //console.log(e);

    setAddReview({ ...addReviewData, total_amount: e });
  };

  const reviewNumbWinnersHandler = (e: any) => {
    //console.log(e);

    setAddReview({ ...addReviewData, no_of_winners: e });
  };

  //   useEffect(() => {
  //     const successHandler = (res: any) => {
  //       console.log(res);
  //       setAutoCompleCoin(res.data.data);
  //     };

  //     const errorHandler = (err: any) => {
  //       //console.log(err);
  //     };
  //     dispatch(listCoinRequest("emptyData", successHandler, errorHandler));
  //   }, [dispatch]);
  return (
    <Grid container spacing={2} pb={10}>
      <Helmet>
        <title>Add Review | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Add Review | CoinXhigh.com" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta
          property="og:image"
          content="https://coinxhigh.com/coinxhighlogo.webp"
        />
        <meta property="og:url" content="https://coinxhigh.com/" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Helmet>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center" }}
          px={2}
          pt={3}
        >
          {/* <IconButton>
            <ArrowBackIosTwoToneIcon
              onClick={() => {
                navigate("/review");
              }}
            />
          </IconButton> */}

          <Typography variant="h5" sx={{ textAlign: "left", color: "#FFFFFF" }}>
            Add Review
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{
            maxWidth: "758px",
            background: "linear-gradient(to bottom,#040B27 30%, #01061A 80%)",
            borderRadius: "5px",
          }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Search your coin
            </Typography>

            <AutoCompleSelect
              inputAutoValue={addReviewData}
              setInputAutoValue={setAddReview}
              variant="airdrop"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Start of the Airdrop
            </Typography>

            <InputDate
              airdropStart={true}
              date={addReviewData}
              setDate={setAddReview}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Number of Days (min:5, max:20)
            </Typography>

            <InputText
              placeholder=" Number of Days"
              inputTextHandler={(e: any) => reviewNumDaysHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Total Airdrop Amount
            </Typography>

            <InputText
              placeholder="  Total Airdrop Amount"
              inputTextHandler={(e: any) => reviewTotalAmountHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Number of Winners
            </Typography>

            <InputText
              placeholder="Enter Review url"
              inputTextHandler={(e: any) => reviewNumbWinnersHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Add follow Twitter Step?
            </Typography>

            <RadioBtnGroup
              radioValue={addReviewData}
              setRadioValue={setAddReview}
              name="is_follow_twitter"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Add Join to telegram Step?
            </Typography>

            <RadioBtnGroup
              radioValue={addReviewData}
              setRadioValue={setAddReview}
              name="join_telegram"
            />
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }} mb={1}>
              Review Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddReview}
              addIconData={addReviewData}
            />
          </Grid> */}

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              // currentStatus={newArrList[0].status}
              setInputSelectValue={setAddReview}
              getInputSelectvalue={addReviewData}
              // serverStatus={newArrList[0].status}
            />
          </Grid> */}

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
                <LargeBtn Title="Add Review" lgBtnHandler={reviewAddHandler} />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReviewAdd;
