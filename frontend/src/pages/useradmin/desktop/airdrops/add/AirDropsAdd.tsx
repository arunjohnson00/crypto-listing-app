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

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import RichTextEditor from "react-rte";
import dateFormat, { masks } from "dateformat";

import { Link } from "react-router-dom";
import { dashboardAddAirdropsRequest } from "../../../../../store/action";
import AutoCompleSelect from "../../../../../components/useradmin/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../../components/useradmin/form/input/date/InputDate";
import InputText from "../../../../../components/useradmin/form/input/text/InputText";
import RadioBtnGroup from "../../../../../components/useradmin/form/input/radiobtngroup/RadioBtnGroup";
import LargeBtn from "../../../../../components/useradmin/form/button/large/LargeBtn";
import InputTextArea from "../../../../../components/useradmin/form/textarea/InputTextArea";
import { Helmet } from "react-helmet-async";

const AirDropsAdd = () => {
  const [richText, setRichText] = useState({ details: "", description: "" });
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const [addAirdropsData, setAddAirdrops] = useState<any>({
    item_id: "",
    start_date: new Date(),
    no_of_days: "",
    total_amount: "",
    no_of_winners: "",
    is_follow_twitter: "",
    join_telegram: "",
    logo: "",
    details: "",
    status: 1,
  });

  const [loading, setLoading] = useState(false);

  // Display the key/value pairs
  console.log(addAirdropsData);
  const airdropsAddHandler = () => {
    setLoading(true);
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
        navigate("/user-dashboard/airdrops");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      console.log(err);
      setLoading(false);
      toast.error(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CancelRoundedIcon sx={{ color: "#ff3722", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {err && err?.error?.message?.response?.request?.responseText}
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
    formData.append("coin_id", addAirdropsData?.item_id);
    formData.append(
      "start_date",
      dateFormat(new Date(addAirdropsData.start_date), "yyyy-mm-dd")
    );
    formData.append(
      "no_of_days",
      addAirdropsData?.no_of_days?.replace(/[^0-9\.]/g, "")
    );
    formData.append(
      "total_amount",
      addAirdropsData?.total_amount?.replace(/[^0-9\.]/g, "")
    );
    formData.append(
      "no_of_winners",
      addAirdropsData?.no_of_winners?.replace(/[^0-9\.]/g, "")
    );
    // formData.append("is_follow_twitter", addAirdropsData?.is_follow_twitter);
    // formData.append("join_telegram", addAirdropsData?.join_telegram);
    formData.append("details", richText?.details);
    formData.append("status", addAirdropsData?.status);

    dispatch(
      dashboardAddAirdropsRequest(formData, successHandler, errorHandler)
    );
  };

  const airdropsNumDaysHandler = (e: any) => {
    //console.log(e);

    setAddAirdrops({ ...addAirdropsData, no_of_days: e });
  };

  const airdropsTotalAmountHandler = (e: any) => {
    //console.log(e);

    setAddAirdrops({ ...addAirdropsData, total_amount: e });
  };

  const airdropsNumbWinnersHandler = (e: any) => {
    //console.log(e);

    setAddAirdrops({ ...addAirdropsData, no_of_winners: e });
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
    <Grid container rowSpacing={2} pb={10}>
      <Helmet>
        <title>Add Airdrop | CoinXhigh.com</title>
        <meta
          name="description"
          content="CoinxHigh is the world's most prominent community-based platform for Crypto listing, Crypto events listing, NFT Listing, Crypto airdrop listing and more."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:site_name"
          content="Coin Vote, Crypto Events, NFT & Airdrop listing Platform for your favourite Crypto projects. | CoinXhigh.com"
        />
        <meta property="og:title" content="Add Airdrop | CoinXhigh.com" />
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
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }} pt={3}>
          <IconButton
            onClick={() => {
              navigate("/user-dashboard");
            }}
          >
            <ArrowBackIosTwoToneIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>

          <Typography
            variant="h5"
            sx={{ textAlign: "left", color: "#FFFFFF", fontWeight: 600 }}
          >
            Add Airdrops
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
          px={{ xs: 3, sm: 3, md: 5 }}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Search your coin
              <br />
              <span style={{ color: "#FFFFFF" }}>
                {" "}
                ( if coin is not listed Add Now
                <Link to="/user-dashboard/coin/add">
                  {" "}
                  <span>Add Now</span>
                </Link>
              </span>{" "}
              )
            </Typography>

            <AutoCompleSelect
              inputAutoValue={addAirdropsData}
              setInputAutoValue={setAddAirdrops}
              variant="airdrop"
              title="Search coin"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Airdrop start date
            </Typography>

            <InputDate
              airdropStart={true}
              date={addAirdropsData}
              setDate={setAddAirdrops}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Number of Days
            </Typography>

            <InputText
              placeholder="Eg: 5"
              inputTextHandler={(e: any) => airdropsNumDaysHandler(e)}
              type="number"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Total Airdrop Amount
            </Typography>

            <InputText
              //width="100%"
              placeholder="Eg: 10000000"
              inputTextHandler={(e: any) => airdropsTotalAmountHandler(e)}
              type="number"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Number of Winners
            </Typography>

            <InputText
              placeholder="Eg: 1000"
              inputTextHandler={(e: any) => airdropsNumbWinnersHandler(e)}
              type="number"
            />
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Add follow Twitter Step?
            </Typography>

            <RadioBtnGroup
              radioValue={addAirdropsData}
              setRadioValue={setAddAirdrops}
              name="is_follow_twitter"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Add Join to telegram Step?
            </Typography>

            <RadioBtnGroup
              radioValue={addAirdropsData}
              setRadioValue={setAddAirdrops}
              name="join_telegram"
            />
          </Grid> */}

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Airdrop Details
            </Typography>
            <InputTextArea
              variant="richtext"
              name="details"
              id="details"
              placeholder="Enter airdrop details. "
              data={addAirdropsData}
              setData={setAddAirdrops}
              richText={richText}
              setRichText={setRichText}
            />
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 400 }} mb={1}>
              Airdrops Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddAirdrops}
              addIconData={addAirdropsData}
            />
          </Grid> */}

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontSize: ".9rem",
                fontWeight: 400,
                color: "#00ff95",
              }}
              mb={1}
            >
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              // currentStatus={newArrList[0].status}
              setInputSelectValue={setAddAirdrops}
              getInputSelectvalue={addAirdropsData}
              // serverStatus={newArrList[0].status}
            />
          </Grid> */}

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack
              spacing={2}
              sx={{
                alignItems: { xs: "center", sm: "center", md: "flex-end" },
              }}
              pb={5}
              mr={{ xs: 0, sm: 0, md: 5 }}
            >
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
                  Title="Add Airdrops"
                  lgBtnHandler={airdropsAddHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AirDropsAdd;
