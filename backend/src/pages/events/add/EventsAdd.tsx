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
import { addEventsRequest } from "../../../store/action";
import AutoCompleSelect from "../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../components/form/input/date/InputDate";

import dateFormat, { masks } from "dateformat";
import InputSelectCoin from "../../../components/form/selectcoin/InputSelectCoin";
import CheckboxWithLabel from "../../../components/form/input/checkboxwithlabel/CheckboxWithLabel";
import InputTextArea from "../../../components/form/textarea/InputTextArea";
import { allEventsCategoryRequest } from "../../../store/action";
import { allEventsRewardAddressRequest } from "../../../store/action";

const EventsAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addEventsData, setAddEvents] = useState<any>({
    item_id: "",
    coin_id: "",
    title: "",
    category_id: "",
    start_date: new Date(),
    or_earlier: "",
    description: "",
    source_link: "",
    reward_address_id: "",
    address: "",
    twitter_account: "",
    status: 1,
    proof: "",
  });

  const [loading, setLoading] = useState(false);
  const [eventsCategory, setEventsCategory] = useState();
  const [eventsRewardAddress, setEventsRewardAddress] = useState();
  console.log(eventsCategory);
  // Display the key/value pairs

  const eventsAddHandler = () => {
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
    formData.append("coin_id", addEventsData?.item_id);
    formData.append(
      "event_date",
      dateFormat(new Date(addEventsData.start_date), "yyyy-mm-dd")
    );
    // formData.append("category_id", addEventsData?.category_id);
    formData.append("title", addEventsData?.title);

    formData.append("source_link", addEventsData?.source_link);
    //formData.append("reward_address_id", addEventsData?.reward_address_id);
    formData.append("address", addEventsData?.address);
    formData.append("twitter_account", addEventsData?.twitter_account);
    formData.append("proof", addEventsData?.proof);
    formData.append("status", addEventsData?.status);

    dispatch(addEventsRequest(formData, successHandler, errorHandler));
  };

  const eventsSourceLinkHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, source_link: e });
  };

  const eventsAddressHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, address: e });
  };

  const eventsTwitterAcHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, twitter_account: e });
  };

  const eventsTitleHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, title: e });
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
                navigate("/events");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add Events
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <form id="eventForm">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                select coin
              </Typography>

              <AutoCompleSelect
                inputAutoValue={addEventsData}
                setInputAutoValue={setAddEvents}
                variant="coin"
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Title
              </Typography>

              <InputText
                placeholder="Title"
                inputTextHandler={(e: any) => eventsTitleHandler(e)}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Select category
              </Typography>

              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <InputSelectCoin
                  name="category_id"
                  id="category_id"
                  data={eventsCategory}
                />
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Date
              </Typography>

              <InputDate
                eventDate={true}
                date={addEventsData}
                setDate={setAddEvents}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <CheckboxWithLabel
                label=" Or earlier (if it can occur before the date stated)"
                name="or_earlier"
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <InputTextArea
                name="description"
                id="description"
                placeholder=" description"
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Source Link
              </Typography>

              <InputText
                placeholder=" Source Link"
                inputTextHandler={(e: any) => eventsSourceLinkHandler(e)}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Reward address
              </Typography>
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <InputSelectCoin
                  name="reward_address_id"
                  id="reward_address_id"
                  data={eventsRewardAddress}
                />
              </Grid>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Address
              </Typography>

              <InputText
                placeholder="  Address"
                inputTextHandler={(e: any) => eventsAddressHandler(e)}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Twitter Account
              </Typography>

              <InputText
                placeholder="Enter Twitter account"
                inputTextHandler={(e: any) => eventsTwitterAcHandler(e)}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Proof (max 2MB)
              </Typography>

              <IconUploader
                setAddIcon={setAddEvents}
                addIconData={addEventsData}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                // currentStatus={newArrList[0].status}
                setInputSelectValue={setAddEvents}
                getInputSelectvalue={addEventsData}
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
                    Title="Add Events"
                    lgBtnHandler={eventsAddHandler}
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

export default EventsAdd;
