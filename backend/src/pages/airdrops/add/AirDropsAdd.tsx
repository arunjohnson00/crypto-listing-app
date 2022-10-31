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
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import RichTextEditor from "react-rte";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import { addAirDropsRequest } from "../../../store/action";
import AutoCompleSelect from "../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../components/form/input/date/InputDate";
import RadioBtnGroup from "../../../components/form/input/radiobtngroup/RadioBtnGroup";
//import { listCoinRequest } from "../../../store/action";
import dateFormat, { masks } from "dateformat";
import { Link } from "react-router-dom";
import InputTextArea from "../../../components/form/textarea/InputTextArea";

const AirDropsAdd = () => {
  const [richText, setRichText] = useState({ details: "", description: "" });
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addAirdropsData, setAddAirdrops] = useState<any>({
    item_id: "",
    start_date: new Date(),
    no_of_days: "",
    total_amount: "",
    no_of_winners: "",
    // is_follow_twitter: 1,
    // join_telegram: 1,
    details: "",
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
    formData.append("coin_id", addAirdropsData?.item_id);
    formData.append(
      "start_date",
      dateFormat(new Date(addAirdropsData.start_date), "yyyy-mm-dd")
    );
    formData.append(
      "no_of_days",
      addAirdropsData?.no_of_days?.toString()?.replace(/[^0-9\.]/g, "")
    );
    formData.append(
      "total_amount",
      addAirdropsData?.total_amount?.toString().replace(/[^0-9\.]/g, "")
    );
    formData.append(
      "no_of_winners",
      addAirdropsData?.no_of_winners?.toString().replace(/[^0-9\.]/g, "")
    );
    // formData.append("is_follow_twitter", addAirdropsData?.is_follow_twitter);
    // formData.append("join_telegram", addAirdropsData?.join_telegram);

    formData.append("details", richText?.details);
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
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Search your coin{" "}
              <span style={{ fontSize: ".85rem" }}>
                ( This event is base on a coin listed on coinxhigh.com. if coin
                is not listed{" "}
                <Link to="/coins/add">
                  <span>Add Now</span>
                </Link>
              </span>{" "}
              )
            </Typography>

            <AutoCompleSelect
              inputAutoValue={addAirdropsData}
              setInputAutoValue={setAddAirdrops}
              variant="coin"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
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
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
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
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Total Airdrop Amount
            </Typography>

            <InputText
              placeholder="Eg: 10000000"
              inputTextHandler={(e: any) => airdropsTotalAmountHandler(e)}
              type="number"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
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
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
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
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
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
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Airdrop Details
            </Typography>
            <Box pr={4}>
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
            </Box>
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

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
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
