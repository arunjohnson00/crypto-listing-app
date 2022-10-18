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

import AutoCompleSelect from "../../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../components/form/input/date/InputDate";

import dateFormat, { masks } from "dateformat";
import InputSelectCoin from "../../../../components/form/selectcoin/InputSelectCoin";
import CheckboxWithLabel from "../../../../components/form/input/checkboxwithlabel/CheckboxWithLabel";
import InputTextArea from "../../../../components/form/textarea/InputTextArea";

import { Link } from "react-router-dom";
import InputDateTime from "../../../../components/form/input/datetime/InputDateTime";
import { addCoinChatRequest } from "../../../../store/action";

const FeaturedCoinEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addFeaturedCoinData, setAddFeaturedCoin] = useState<any>({
    id: "",
    item_id: "",
    coin_id: "",
    start_date: new Date(),
    no_of_days: "",
    status: 1,
  });

  const [loading, setLoading] = useState(false);

  const [coinChecked, setcoinChecked] = useState(true);

  const featuredCoinAddHandler = () => {
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
        navigate("/featuredCoin");
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
    formData.append("coin_id", addFeaturedCoinData?.item_id);
    formData.append(
      "start_date",
      dateFormat(new Date(addFeaturedCoinData.start_date), "yyyy-mm-dd")
    );
    formData.append("no_of_days", addFeaturedCoinData.no_of_days);

    formData.append("status", addFeaturedCoinData?.status);

    dispatch(addCoinChatRequest(formData, successHandler, errorHandler));
  };

  const featuredCoinNumberOfDaysHandler = (e: any) => {
    //console.log(e);

    setAddFeaturedCoin({ ...addFeaturedCoinData, no_of_days: e });
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
                navigate("/featuredCoin");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            FeaturedCoin
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
            {
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "left" }}
                  mb={1}
                >
                  Select coin
                </Typography>

                <Stack
                  direction="column"
                  spacing={1}
                  alignItems={"flex-start"}
                  pt={1}
                  pb={2}
                >
                  {coinChecked === true && (
                    <AutoCompleSelect
                      inputAutoValue={addFeaturedCoinData}
                      setInputAutoValue={setAddFeaturedCoin}
                      variant="coin"
                    />
                  )}
                </Stack>
              </Grid>
            }

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
                dateTime={addFeaturedCoinData}
                setDateTime={setAddFeaturedCoin}
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
                inputTextHandler={(e: any) =>
                  featuredCoinNumberOfDaysHandler(e)
                }
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
                setInputSelectValue={setAddFeaturedCoin}
                getInputSelectvalue={addFeaturedCoinData}
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
                    Title="Set FeaturedCoin"
                    lgBtnHandler={featuredCoinAddHandler}
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

export default FeaturedCoinEdit;
