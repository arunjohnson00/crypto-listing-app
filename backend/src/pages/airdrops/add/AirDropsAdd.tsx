import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import { addAirDropsRequest } from "../../../store/action";
import AutoCompleSelect from "../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../components/form/input/date/InputDate";
import RadioBtnGroup from "../../../components/form/input/radiobtngroup/RadioBtnGroup";
//import { listCoinRequest } from "../../../store/action";
import dateFormat, { masks } from "dateformat";

const AirDropsAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addAirdropsData, setAddAirdrops] = useState<any>({
    coin_id: "",
    start_date: new Date(),
    no_of_days: "",
    total_amount: "",
    no_of_winners: "",
    is_follow_twitter: "",
    join_telegram: "",
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
        navigate("/airdrops");
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
    formData.append("coin_id", addAirdropsData?.coin_id);
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

    dispatch(addAirDropsRequest(formData, successHandler, errorHandler));
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
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton>
            <ArrowBackIosTwoToneIcon
              onClick={() => {
                navigate("/airdrops");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add Airdrops
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Search your coin
            </Typography>

            <AutoCompleSelect
              inputAutoValue={addAirdropsData}
              setInputAutoValue={setAddAirdrops}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Start of the Airdrop
            </Typography>

            <InputDate
              airdropStart={true}
              date={addAirdropsData}
              setDate={setAddAirdrops}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Number of Days (min:5, max:20)
            </Typography>

            <InputText
              placeholder=" Number of Days"
              inputTextHandler={(e: any) => airdropsNumDaysHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Total Airdrop Amount
            </Typography>

            <InputText
              placeholder="  Total Airdrop Amount"
              inputTextHandler={(e: any) => airdropsTotalAmountHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Number of Winners
            </Typography>

            <InputText
              placeholder="Enter Airdrops url"
              inputTextHandler={(e: any) => airdropsNumbWinnersHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Add follow Twitter Step?
            </Typography>

            <RadioBtnGroup
              radioValue={addAirdropsData}
              setRadioValue={setAddAirdrops}
              name="is_follow_twitter"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Add Join to telegram Step?
            </Typography>

            <RadioBtnGroup
              radioValue={addAirdropsData}
              setRadioValue={setAddAirdrops}
              name="join_telegram"
            />
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Airdrops Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddAirdrops}
              addIconData={addAirdropsData}
            />
          </Grid> */}

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              // currentStatus={newArrList[0].status}
              setInputSelectValue={setAddAirdrops}
              getInputSelectvalue={addAirdropsData}
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
