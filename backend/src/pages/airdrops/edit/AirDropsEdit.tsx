import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import AutoCompleSelect from "../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../components/form/input/date/InputDate";
import RadioBtnGroup from "../../../components/form/input/radiobtngroup/RadioBtnGroup";
//import { listCoinRequest } from "../../../store/action";
import dateFormat, { masks } from "dateformat";

import { editAirDropsRequest } from "../../../store/action";
import { updateAirDropsRequest } from "../../../store/action";

const selectOptions = [
  { title: "Approved", value: 1 },
  { title: "Processing", value: 2 },
  { title: "Rejected/Blocked", value: 3 },
];

const AirDropsEdit = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editAirdropsData, setEditAirdrops] = useState<any>({
    id: id,
    coin_id: "",
    start_date: "",
    no_of_days: "",
    total_amount: "",
    no_of_winners: "",
    is_follow_twitter: "",
    join_telegram: "",
    status: "",
    logo: "",
  });
  console.log(editAirdropsData);
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
    formData.append("id", editAirdropsData?.id);
    formData.append("coin_id", editAirdropsData?.coin_id);
    formData.append(
      "start_date",
      dateFormat(new Date(editAirdropsData.start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", editAirdropsData?.no_of_days);
    formData.append("total_amount", editAirdropsData?.total_amount);
    formData.append("no_of_winners", editAirdropsData?.no_of_winners);
    formData.append("is_follow_twitter", editAirdropsData?.is_follow_twitter);
    formData.append("join_telegram", editAirdropsData?.join_telegram);
    formData.append("status", editAirdropsData?.status);

    dispatch(updateAirDropsRequest(formData, successHandler, errorHandler));
  };

  const airdropsNumDaysHandler = (e: any) => {
    //console.log(e);

    setEditAirdrops({ ...editAirdropsData, no_of_days: e });
  };

  const airdropsTotalAmountHandler = (e: any) => {
    //console.log(e);

    setEditAirdrops({ ...editAirdropsData, total_amount: e });
  };

  const airdropsNumbWinnersHandler = (e: any) => {
    //console.log(e);

    setEditAirdrops({ ...editAirdropsData, no_of_winners: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditAirdrops(res?.data?.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editAirDropsRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch]);
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
            Edit Airdrops
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
              inputAutoValue={editAirdropsData}
              setInputAutoValue={setEditAirdrops}
              serverRef={editAirdropsData?.coin_id}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Start of the Airdrop
            </Typography>

            <InputDate
              airdropStart={true}
              date={editAirdropsData}
              setDate={setEditAirdrops}
              serverRef={editAirdropsData.start_date}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Number of Days (min:5, max:20)
            </Typography>

            <InputText
              placeholder=" Number of Days"
              inputTextHandler={(e: any) => airdropsNumDaysHandler(e)}
              value={editAirdropsData.no_of_days}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Total Airdrop Amount
            </Typography>

            <InputText
              placeholder="  Total Airdrop Amount"
              inputTextHandler={(e: any) => airdropsTotalAmountHandler(e)}
              value={editAirdropsData.total_amount}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Number of Winners
            </Typography>

            <InputText
              placeholder="Enter Number of Winners"
              inputTextHandler={(e: any) => airdropsNumbWinnersHandler(e)}
              value={editAirdropsData.no_of_winners}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Add follow Twitter Step?
            </Typography>

            <RadioBtnGroup
              radioValue={editAirdropsData}
              setRadioValue={setEditAirdrops}
              name="is_follow_twitter"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Add Join to telegram Step?
            </Typography>

            <RadioBtnGroup
              radioValue={editAirdropsData}
              setRadioValue={setEditAirdrops}
              name="join_telegram"
            />
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
          Airdrops Icon
        </Typography>

        <IconUploader
          setAddIcon={setEditAirdrops}
          addIconData={editAirdropsData}
        />
      </Grid> */}

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              // currentStatus={newArrList[0].status}
              setInputSelectValue={setEditAirdrops}
              getInputSelectvalue={editAirdropsData}
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

export default AirDropsEdit;
