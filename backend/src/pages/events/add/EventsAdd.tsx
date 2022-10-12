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
import { Link } from "react-router-dom";
import YoutubeDetails from "./YoutubeDetails";

const EventsAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addEventsData, setAddEvents] = useState<any>({
    id: "",
    item_id: "",
    coin_id: "",
    title: "",
    category_id: "",
    start_date: new Date(),
    end_date: new Date(),
    or_earlier: "",
    description: "",
    source_link: "",
    website_url: "",
    reward_address_id: "",
    address: "",
    twitter_account: "",
    facebook_url: "",
    linkedin_url: "",
    is_online: 1,
    status: 1,
    proof: "",
    logo: "",
    has_many_videos: "",
    event_date: new Date(),
    venue: "",
    booking_url: "",
  });

  const [loading, setLoading] = useState(false);
  const [eventsCategory, setEventsCategory] = useState();
  const [eventsRewardAddress, setEventsRewardAddress] = useState();
  const [coinChecked, setcoinChecked] = useState(true);

  const coinCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcoinChecked(event.target.checked);
  };

  const [youtubeCount, setyoutubeCount] = useState<any[]>([]);

  const youtubeaddHandle = () => {
    setyoutubeCount([...youtubeCount, { youtube: "" }]);
  };

  const youtuberemoveHandle = (index: any) => {
    let youtubeList = [...youtubeCount];
    youtubeList.splice(index, 1);
    setyoutubeCount(youtubeList);
  };

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
    formData.append("coin_id", addEventsData?.item_id);
    formData.append(
      "event_date",
      dateFormat(new Date(addEventsData.start_date), "yyyy-mm-dd")
    );

    formData.append(
      "end_date",
      dateFormat(new Date(addEventsData.end_date), "yyyy-mm-dd")
    );
    // formData.append("category_id", addEventsData?.category_id);
    formData.append("title", addEventsData?.title);

    formData.append("source_link", addEventsData?.source_link);
    //formData.append("reward_address_id", addEventsData?.reward_address_id);
    formData.append("address", addEventsData?.address);
    formData.append("twitter_account", addEventsData?.twitter_account);
    formData.append("facebook_url", addEventsData?.facebook_url);
    formData.append("linkedin_url", addEventsData?.linkedin_url);
    formData.append("booking_url", addEventsData?.booking_url);
    formData.append("venue", addEventsData?.venue);
    formData.append("website_url", addEventsData?.website_url);
    formData.append("proof", addEventsData?.proof);
    formData.append("logo", addEventsData?.icon);
    formData.append(
      "is_online",
      addEventsData && parseInt(addEventsData?.is_online)
    );
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

  const eventsFacebookURLHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, facebook_url: e });
  };

  const eventsLinkedinURLHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, linkedin_url: e });
  };

  const eventsWebisteURLHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, website_url: e });
  };

  const eventsBookingURLHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, booking_url: e });
  };
  const eventsVenueURLHandler = (e: any) => {
    //console.log(e);

    setAddEvents({ ...addEventsData, venue: e });
  };

  const eventTypeHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(addEventsData);
    setAddEvents({
      ...addEventsData,
      is_online: (event.target as HTMLInputElement).value,
    });
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
            Add Events
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
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} my={2}>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "left", color: "#000000" }}
                    mb={1}
                  >
                    Event Type
                  </Typography>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={addEventsData && parseInt(addEventsData?.is_online)}
                  onChange={eventTypeHandleChange}
                >
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Online"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Offline"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {addEventsData && parseInt(addEventsData?.is_online) === 1 && (
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
                      <Typography sx={{ color: "#000000" }}>
                        This event is base on a coin listed on coinxhigh.com
                      </Typography>
                    }
                  />
                  Search your coin{" "}
                  <span style={{ fontSize: ".85rem" }}>
                    This event is base on a coin listed on coinxhigh.com. if
                    coin is not listed{" "}
                    <Link to="/coins/add">
                      <span>Add Now</span>
                    </Link>
                  </span>
                  {coinChecked === true && (
                    <AutoCompleSelect
                      inputAutoValue={addEventsData}
                      setInputAutoValue={setAddEvents}
                      variant="coin"
                    />
                  )}
                </Stack>
              </Grid>
            )}
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
                  height={40}
                />
              </Grid>
            </Grid>
            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Date
              </Typography>

              <InputDate
                eventDate={true}
                date={addEventsData}
                setDate={setAddEvents}
              />
            </Grid> */}

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
                Event Start Date
              </Typography>

              <InputDate
                event_start_date={true}
                date={addEventsData}
                setDate={setAddEvents}
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
                Event End Date
              </Typography>

              <InputDate
                event_end_date={true}
                date={addEventsData}
                setDate={setAddEvents}
              />
            </Grid>

            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <CheckboxWithLabel
                label=" Or earlier (if it can occur before the date stated)"
                name="or_earlier"
              />
            </Grid> */}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <InputTextArea
                name="description"
                id="description"
                placeholder=" description"
              />
            </Grid>
            {addEventsData && parseInt(addEventsData?.is_online) === 2 && (
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
                  Venue
                </Typography>

                <InputText
                  placeholder="Enter venue"
                  inputTextHandler={(e: any) => eventsVenueURLHandler(e)}
                />
              </Grid>
            )}
            {addEventsData && parseInt(addEventsData?.is_online) === 2 && (
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
                  Booking URL
                </Typography>

                <InputText
                  placeholder="Enter booking url"
                  inputTextHandler={(e: any) => eventsBookingURLHandler(e)}
                />
              </Grid>
            )}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
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
                inputTextHandler={(e: any) => eventsAddressHandler(e)}
              />
            </Grid> */}

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
                Website URL
              </Typography>

              <InputText
                placeholder="Enter Website url"
                inputTextHandler={(e: any) => eventsWebisteURLHandler(e)}
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
                Twitter Account
              </Typography>

              <InputText
                placeholder="Enter Twitter account"
                inputTextHandler={(e: any) => eventsTwitterAcHandler(e)}
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
                Facebook URL
              </Typography>

              <InputText
                placeholder="Enter Facebook url"
                inputTextHandler={(e: any) => eventsFacebookURLHandler(e)}
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
                Linkedin URL
              </Typography>

              <InputText
                placeholder="Enter Linkedin url"
                inputTextHandler={(e: any) => eventsLinkedinURLHandler(e)}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={3}
              >
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
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
                    Youtube URL
                  </Typography>
                  <InputText
                    placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                    name="youtube_link[1]"
                    id="youtube_link_1"
                  />
                </Grid>
                <Grid
                  item
                  xl={4}
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  pt={{ xs: 0, sm: 0, md: 4.5, lg: 4.5, xl: 4.5 }}
                >
                  <EventLink
                    onClick={youtubeaddHandle}
                    underline="none"
                    sx={{ color: "#1976d2", fontSize: ".9rem" }}
                  >
                    Add more +
                  </EventLink>
                </Grid>
              </Stack>
            </Grid>
            {youtubeCount.map((youtube, index) => {
              return (
                <div>
                  <YoutubeDetails
                    youtubeCount={youtubeCount}
                    index={index}
                    key={index}
                    youtuberemoveHandle={youtuberemoveHandle}
                  />
                </div>
              );
            })}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Proof (max 2MB)
              </Typography>

              <IconUploader
                proof={true}
                setAddIcon={setAddEvents}
                addIconData={addEventsData}
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
                Logo (max 2MB)
              </Typography>

              <IconUploader
                setAddIcon={setAddEvents}
                addIconData={addEventsData}
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
