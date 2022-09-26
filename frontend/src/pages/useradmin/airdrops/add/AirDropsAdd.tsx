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
import LargeBtn from "../../../../components/useradmin/form/button/large/LargeBtn";
import IconUploader from "../../../../components/useradmin/form/input/file/icon/IconUploader";
import InputText from "../../../../components/useradmin/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputSelect from "../../../../components/useradmin/form/select/InputSelect";
import AutoCompleSelect from "../../../../components/useradmin/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../components/useradmin/form/input/date/InputDate";
import RadioBtnGroup from "../../../../components/useradmin/form/input/radiobtngroup/RadioBtnGroup";

import dateFormat, { masks } from "dateformat";
import { dashboardAddAirdropsRequest } from "../../../../store/action";
import { Link } from "react-router-dom";

const AirDropsAdd = () => {
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
    status: 1,
  });

  const [loading, setLoading] = useState(false);

  // Display the key/value pairs

  const airdropsAddHandler = () => {
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
        navigate("/user-dashboard");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      console.log(err);

      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const formData = new FormData();
    formData.append("coin_id", addAirdropsData?.item_id);
    formData.append(
      "start_date",
      dateFormat(new Date(addAirdropsData.start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", addAirdropsData?.no_of_days);
    formData.append("total_amount", addAirdropsData?.total_amount);
    formData.append("no_of_winners", addAirdropsData?.no_of_winners);
    formData.append("is_follow_twitter", addAirdropsData?.is_follow_twitter);
    formData.append("join_telegram", addAirdropsData?.join_telegram);
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
    <Grid container spacing={2} pb={10}>
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
                navigate("/airdrops");
              }}
            />
          </IconButton> */}

          <Typography variant="h5" sx={{ textAlign: "left", color: "#FFFFFF" }}>
            Add Airdrops
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "#030921", borderRadius: "5px" }}
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
              Search your coin{" "}
              <span style={{ color: "#FFFFFF" }}>
                ( This event is base on a coin listed on coinxhigh.com. if coin
                is not listed{" "}
                <Link to="/user-dashboard/coin/add">
                  <span>Add Now</span>
                </Link>
              </span>{" "}
              )
            </Typography>

            <AutoCompleSelect
              inputAutoValue={addAirdropsData}
              setInputAutoValue={setAddAirdrops}
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
                fontWeight: 600,
                color: "#13C086",
              }}
              mb={1}
            >
              Number of Days (min:5, max:20)
            </Typography>

            <InputText
              placeholder=" Number of Days"
              inputTextHandler={(e: any) => airdropsNumDaysHandler(e)}
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
              inputTextHandler={(e: any) => airdropsTotalAmountHandler(e)}
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
              placeholder="Enter Airdrops url"
              inputTextHandler={(e: any) => airdropsNumbWinnersHandler(e)}
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
                fontWeight: 600,
                color: "#13C086",
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
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }} mb={1}>
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
              setInputSelectValue={setAddAirdrops}
              getInputSelectvalue={addAirdropsData}
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
