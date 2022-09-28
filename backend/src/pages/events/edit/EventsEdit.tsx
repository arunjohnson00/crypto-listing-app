import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Checkbox,
  Backdrop,
  CircularProgress,
  FormControlLabel,
} from "@mui/material";
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

import dateFormat, { masks } from "dateformat";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import CheckboxWithLabel from "../../../components/form/input/checkboxwithlabel/CheckboxWithLabel";
import InputTextArea from "../../../components/form/textarea/InputTextArea";
import { allEventsCategoryRequest } from "../../../store/action";
import { allEventsRewardAddressRequest } from "../../../store/action";
import { editEventsRequest } from "../../../store/action";
import { updateEventsRequest } from "../../../store/action";
import { Link } from "react-router-dom";

const EventsEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const [coinChecked, setcoinChecked] = useState(true);

  const coinCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcoinChecked(event.target.checked);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const [editEventsData, setEditEvents] = useState<any>({
    id: "",
    coin_id: "",
    item_id: "",
    title: "",
    category_id: "",
    event_date: new Date(),
    or_earlier: "",
    description: "",
    source_link: "",
    reward_address_id: "",
    address: "",
    twitter_account: "",
    status: "",
    proof: "",
  });
  console.log(editEventsData);
  const [loading, setLoading] = useState(false);
  const [eventsCategory, setEventsCategory] = useState();
  const [eventsRewardAddress, setEventsRewardAddress] = useState();

  // Display the key/value pairs

  const eventsUpdateHandler = () => {
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
        navigate("/events");
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

    var formData = new FormData(document.querySelector("#eventForm") as any);

    formData.append("id", editEventsData?.id);

    formData.append("coin_id", editEventsData?.item_id);
    formData.append(
      "event_date",
      dateFormat(new Date(editEventsData.event_date), "yyyy-mm-dd")
    );
    // formData.append("category_id", editEventsData?.category_id);
    formData.append("title", editEventsData?.title);

    formData.append("source_link", editEventsData?.source_link);
    //formData.append("reward_address_id", editEventsData?.reward_address_id);
    formData.append("address", editEventsData?.address);
    formData.append("twitter_account", editEventsData?.twitter_account);
    editEventsData?.proof !== "" &&
      typeof editEventsData?.proof !== "string" &&
      formData.append("proof", editEventsData?.proof);
    formData.append("status", editEventsData?.status);

    dispatch(updateEventsRequest(formData, successHandler, errorHandler));
  };

  const eventsSourceLinkHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, source_link: e });
  };

  const eventsUpdateressHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, address: e });
  };

  const eventsTwitterAcHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, twitter_account: e });
  };

  const eventsTitleHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, title: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      setEventsCategory(res.data.data);
    };
    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      allEventsCategoryRequest("emptyData", successHandler, errorHandler)
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setEventsRewardAddress(res.data.data);
    };
    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      allEventsRewardAddressRequest("emptyData", successHandler, errorHandler)
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setEditEvents(res.data.data);
    };
    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editEventsRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/events");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Edit Events
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coinChecked}
                      onChange={coinCheckboxHandler}
                      inputProps={{ "aria-label": "controlled" }}
                      name={"has_coin"}
                      sx={{ color: "#181818" }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#13C086" }}>
                      This event is base on a coin listed on coinxhigh.com
                    </Typography>
                  }
                />
                Search your coin{" "}
                <span style={{ fontSize: ".85rem" }}>
                  This event is base on a coin listed on coinxhigh.com. if coin
                  is not listed{" "}
                  <Link to="/coins/add">
                    <span>Add Now</span>
                  </Link>
                </span>
                {coinChecked === true && (
                  <AutoCompleSelect
                    inputAutoValue={editEventsData}
                    setInputAutoValue={setEditEvents}
                    variant="coin"
                    serverRef={editEventsData && editEventsData?.coin_id}
                  />
                )}
              </Stack>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Title
              </Typography>

              <InputText
                placeholder="Title"
                inputTextHandler={(e: any) => eventsTitleHandler(e)}
                value={editEventsData?.title}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Select category
              </Typography>

              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <InputSelectCoin
                  name="category_id"
                  id="category_id"
                  data={eventsCategory}
                  selectedValue={editEventsData?.category_id}
                  height={40}
                />
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Date
              </Typography>

              <InputDate
                eventDate={true}
                date={editEventsData}
                setDate={setEditEvents}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <CheckboxWithLabel
                label=" Or earlier (if it can occur before the date stated)"
                name="or_earlier"
                value={parseInt(editEventsData?.or_earlier)}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <InputTextArea
                name="description"
                id="description"
                placeholder=" description"
                value={editEventsData?.description}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Source Link
              </Typography>

              <InputText
                placeholder=" Source Link"
                inputTextHandler={(e: any) => eventsSourceLinkHandler(e)}
                value={editEventsData?.source_link}
              />
            </Grid>

            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Reward address
              </Typography>
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <InputSelectCoin
                  name="reward_address_id"
                  id="reward_address_id"
                  data={eventsRewardAddress}
                  selectedValue={editEventsData?.reward_address_id}
                  height={40}
                />
              </Grid>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Address
              </Typography>

              <InputText
                placeholder="  Address"
                inputTextHandler={(e: any) => eventsUpdateressHandler(e)}
                value={editEventsData?.address}
              />
            </Grid> */}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Twitter Account
              </Typography>

              <InputText
                placeholder="Enter Twitter account"
                inputTextHandler={(e: any) => eventsTwitterAcHandler(e)}
                value={editEventsData?.twitter_account}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Proof (max 2MB)
              </Typography>

              <IconUploader
                setAddIcon={setEditEvents}
                addIconData={editEventsData}
                slug="event_proof"
              />
            </Grid>

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
                setInputSelectValue={setEditEvents}
                getInputSelectvalue={editEventsData}
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
                    Title="Update Events"
                    lgBtnHandler={eventsUpdateHandler}
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

export default EventsEdit;
