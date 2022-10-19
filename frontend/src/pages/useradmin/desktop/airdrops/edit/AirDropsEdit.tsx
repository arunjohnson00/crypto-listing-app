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
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputSelect from "../../../../../components/useradmin/form/select/InputSelect";
import AutoCompleSelect from "../../../../../components/useradmin/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../../components/useradmin/form/input/date/InputDate";
import RadioBtnGroup from "../../../../../components/useradmin/form/input/radiobtngroup/RadioBtnGroup";
//import { listCoinRequest } from "../../../store/action";
import dateFormat, { masks } from "dateformat";
import {
  dashboardEditAirdropsRequest,
  dashboardUpdateAirdropsRequest,
} from "../../../../../store/action";
import InputTextArea from "../../../../../components/useradmin/form/textarea/InputTextArea";

const selectOptions = [
  { title: "Approved", value: 1 },
  { title: "Processing", value: 2 },
  { title: "Rejected/Blocked", value: 3 },
];

const AirDropsEdit = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const [editAirdropsData, setEditAirdrops] = useState<any>({
    id: location?.state?.id,
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

  const [loading, setLoading] = useState(false);

  // Display the key/value pairs

  const airdropsAddHandler = () => {
    setLoading(true);
    const successHandler = (res: any) => {
      console.log(res);

      setLoading(true);
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res.data.data.original.message}
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
        navigate("/user-dashboard");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      setLoading(false);
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
    formData.append("id", editAirdropsData?.id);
    formData.append("coin_id", editAirdropsData?.item_id);
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
    formData.append("airdrop_id", location?.state?.id);
    dispatch(
      dashboardUpdateAirdropsRequest(formData, successHandler, errorHandler)
    );
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
    const formData = new FormData();
    formData.append("airdrop_id", location?.state?.id);
    dispatch(
      dashboardEditAirdropsRequest(formData, successHandler, errorHandler)
    );
  }, [dispatch]);
  return (
    <Grid container spacing={2} pb={10}>
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
            Edit Airdrops
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
              inputAutoValue={editAirdropsData}
              setInputAutoValue={setEditAirdrops}
              serverRef={editAirdropsData?.item_id}
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
              date={editAirdropsData}
              setDate={setEditAirdrops}
              serverRef={editAirdropsData.start_date}
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
              value={editAirdropsData.no_of_days}
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
              placeholder="Eg: 10000000"
              inputTextHandler={(e: any) => airdropsTotalAmountHandler(e)}
              value={editAirdropsData.total_amount}
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
              value={editAirdropsData?.no_of_winners}
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
              radioValue={editAirdropsData}
              setRadioValue={setEditAirdrops}
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
              radioValue={editAirdropsData}
              setRadioValue={setEditAirdrops}
              name="join_telegram"
            />
          </Grid> */}

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
        <Typography variant="subtitle1" sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 400,
                  color: "#00ff95", }} mb={1}>
          Airdrops Icon
        </Typography>

        <IconUploader
          setAddIcon={setEditAirdrops}
          addIconData={editAirdropsData}
        />
      </Grid> */}

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 400 ,
              color: "#00ff95",}}
              mb={1}
            >
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              // currentStatus={newArrList[0].status}
              setInputSelectValue={setEditAirdrops}
              getInputSelectvalue={editAirdropsData}
              // serverStatus={newArrList[0].status}
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
              // variant="richtext"
              name="airdrop_details"
              id="airdrop_details"
              placeholder="Enter airdrop details. "
              value={editAirdropsData?.airdrop_details}
            />
          </Grid>

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
                  Title="Update Airdrops"
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
