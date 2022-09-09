import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../../components/useradmin/form/button/large/LargeBtn";
import IconUploader from "../../../../components/useradmin/form/input/file/icon/IconUploader";
import InputText from "../../../../components/useradmin/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import InputSelect from "../../../../components/useradmin/form/select/InputSelect";

import AutoCompleSelect from "../../../../components/useradmin/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../components/useradmin/form/input/date/InputDate";

import dateFormat, { masks } from "dateformat";
import InputSelectCoin from "../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import CheckboxWithLabel from "../../../../components/useradmin/form/input/checkboxwithlabel/CheckboxWithLabel";
import InputTextArea from "../../../../components/useradmin/form/textarea/InputTextArea";
import {
  dashboardEditEventsRequest,
  dashboardEventsCategoryListRequest,
  dashboardEventsRewardAddressListRequest,
  dashboardUpdateEventsRequest,
} from "../../../../store/action";

const EventsEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();

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
    formData.append("event_id", location?.state?.id);
    dispatch(
      dashboardUpdateEventsRequest(formData, successHandler, errorHandler)
    );
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
      dashboardEventsCategoryListRequest(
        "emptyData",
        successHandler,
        errorHandler
      )
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
      dashboardEventsRewardAddressListRequest(
        "emptyData",
        successHandler,
        errorHandler
      )
    );
  }, [dispatch]);

  useEffect(() => {
    const successHandler = (res: any) => {
      setEditEvents(res.data.data);
    };
    const errorHandler = (err: any) => {
      //console.log(err);
    };
    const formData = new FormData();
    formData.append("event_id", location?.state?.id);
    dispatch(
      dashboardEditEventsRequest(formData, successHandler, errorHandler)
    );
  }, [dispatch]);
  return (
    <Grid container spacing={2} pb={10}>
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
                navigate("/events");
              }}
            />
          </IconButton> */}

          <Typography variant="h5" sx={{ textAlign: "left", color: "#FFFFFF" }}>
            Edit Events
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "#030921", borderRadius: "5px" }}
          pt={3}
          pl={4}
          pr={4}
        >
          <form id="eventForm">
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
                Select coin
              </Typography>

              <AutoCompleSelect
                inputAutoValue={editEventsData}
                setInputAutoValue={setEditEvents}
                variant="coin"
              />
            </Grid>
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
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#13C086",
                }}
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
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#13C086",
                }}
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
                label={
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "left",
                      fontSize: ".9rem",
                      fontWeight: 600,
                      color: "#13C086",
                    }}
                  >
                    Or earlier
                    <span
                      style={{
                        color: "#234A84",
                        fontWeight: 600,
                        fontSize: ".75rem",
                      }}
                    >
                      {" "}
                      (if it can occur before the date stated)
                    </span>
                  </Typography>
                }
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
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#13C086",
                }}
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

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
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
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#13C086",
                }}
                mb={1}
              >
                Address
              </Typography>

              <InputText
                placeholder="  Address"
                inputTextHandler={(e: any) => eventsUpdateressHandler(e)}
                value={editEventsData?.address}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
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
                sx={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 600,
                  color: "#13C086",
                }}
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

            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 ,  color: "#13C086",}}
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
                    Title="Add Events"
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
