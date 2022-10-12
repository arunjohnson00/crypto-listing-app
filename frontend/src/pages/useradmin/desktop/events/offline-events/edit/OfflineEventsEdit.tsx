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
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LargeBtn from "../../../../../../components/useradmin/form/button/large/LargeBtn";
import IconUploader from "../../../../../../components/useradmin/form/input/file/icon/IconUploader";
import InputText from "../../../../../../components/useradmin/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
// import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
// import "material-react-toastify/dist/ReactToastify.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputSelect from "../../../../../../components/useradmin/form/select/InputSelect";

import AutoCompleSelect from "../../../../../../components/useradmin/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../../../../components/useradmin/form/input/date/InputDate";

import dateFormat, { masks } from "dateformat";
import InputSelectCoin from "../../../../../../components/useradmin/form/selectcoin/InputSelectCoin";
import CheckboxWithLabel from "../../../../../../components/useradmin/form/input/checkboxwithlabel/CheckboxWithLabel";
import InputTextArea from "../../../../../../components/useradmin/form/textarea/InputTextArea";
import {
  dashboardEditEventsRequest,
  dashboardEventsCategoryListRequest,
  dashboardEventsRewardAddressListRequest,
  dashboardUpdateEventsRequest,
} from "../../../../../../store/action";
import YoutubeDetails from "./YoutubeDetails";

const OfflineEventsEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const [coinChecked, setcoinChecked] = useState(true);

  const coinCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcoinChecked(event.target.checked);
  };

  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();

  const [editEventsData, setEditEvents] = useState<any>({
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
    is_online: 2,
    status: "",
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

  // Display the key/value pairs
  const [youtubeCount, setyoutubeCount] = useState<any[]>([]);

  const youtubeaddHandle = () => {
    setyoutubeCount([...youtubeCount, { youtube_link: "" }]);
  };

  const youtuberemoveHandle = (index: any) => {
    let youtubeList = [...youtubeCount];
    youtubeList.splice(-1, 1);
    setyoutubeCount(youtubeList);

    const youtubelist = editEventsData?.has_many_videos?.filter((item: any) => {
      return item?.id !== index;
    });

    //console.log(sociallist, index);
    setEditEvents({ ...editEventsData, has_many_videos: youtubelist });
  };
  const eventsUpdateHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);

      setLoading(true);
      toast.success(
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <CheckCircleRoundedIcon sx={{ color: "#5CE32D", fontSize: 50 }} />
            <Typography sx={{ fontSize: ".85rem" }}>
              {res?.data?.message}
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
      console.log(err);

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

    var formData = new FormData(document.querySelector("#eventForm") as any);

    formData.append("id", editEventsData?.id);

    // formData.append(
    //   "coin_id",
    //   editEventsData?.item_id !== undefined
    //     ? editEventsData?.item_id
    //     : editEventsData?.coin_id
    // );
    formData.append(
      "event_date",
      dateFormat(
        editEventsData?.start_date !== undefined
          ? new Date(editEventsData?.start_date)
          : new Date(editEventsData?.event_date),
        "yyyy-mm-dd"
      )
    );

    formData.append(
      "end_date",
      dateFormat(new Date(editEventsData?.end_date), "yyyy-mm-dd")
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

    formData.append("facebook_url", editEventsData?.facebook_url);
    formData.append("linkedin_url", editEventsData?.linkedin_url);
    formData.append("website_url", editEventsData?.website_url);
    formData.append("booking_url", editEventsData?.booking_url);
    formData.append("venue", editEventsData?.venue);
    editEventsData?.logo !== "" &&
      typeof editEventsData?.logo !== "string" &&
      formData.append("logo", editEventsData?.icon);
    formData.append("is_online", editEventsData?.is_online);
    // formData.append("status", editEventsData?.status);
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

  const eventsFacebookURLHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, facebook_url: e });
  };

  const eventsLinkedinURLHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, linkedin_url: e });
  };

  const eventsWebisteURLHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, website_url: e });
  };
  const eventsBookingURLHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, booking_url: e });
  };
  const eventsVenueURLHandler = (e: any) => {
    //console.log(e);

    setEditEvents({ ...editEventsData, venue: e });
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
                navigate("/events");
              }}
            />
          </IconButton> */}

          <Typography variant="h5" sx={{ textAlign: "left", color: "#FFFFFF" }}>
            Edit Offline Events
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
          pl={4}
          pr={4}
        >
          <form id="eventForm">
            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "left",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#13C086",
                }}
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
                      sx={{ color: "#FFFFFF" }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#13C086" }}>
                      This event is base on a coin listed on coinxhigh.com
                    </Typography>
                  }
                />

                {coinChecked === true && (
                  <AutoCompleSelect
                    inputAutoValue={editEventsData}
                    setInputAutoValue={setEditEvents}
                    variant="coin"
                    serverRef={editEventsData && editEventsData?.coin_id}
                  />
                )}
              </Stack>
            </Grid> */}
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
                Event Start Date
              </Typography>

              <InputDate
                event_start_date={true}
                date={editEventsData}
                setDate={setEditEvents}
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
                Event End Date
              </Typography>

              <InputDate
                event_end_date={true}
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
                Venue
              </Typography>

              <InputText
                placeholder="Enter venue"
                inputTextHandler={(e: any) => eventsVenueURLHandler(e)}
                value={editEventsData?.venue}
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
                Booking URL
              </Typography>

              <InputText
                placeholder="Enter booking url"
                inputTextHandler={(e: any) => eventsBookingURLHandler(e)}
                value={editEventsData?.booking_url}
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

            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={1}>
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
            </Grid> */}

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
                Website URL
              </Typography>

              <InputText
                placeholder="Enter Website url"
                inputTextHandler={(e: any) => eventsWebisteURLHandler(e)}
                value={editEventsData?.website_url}
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
                Facebook URL
              </Typography>

              <InputText
                placeholder="Enter Facebook url"
                inputTextHandler={(e: any) => eventsFacebookURLHandler(e)}
                value={editEventsData?.facebook_url}
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
                Linkedin URL
              </Typography>

              <InputText
                placeholder="Enter Linkedin url"
                inputTextHandler={(e: any) => eventsLinkedinURLHandler(e)}
                value={editEventsData?.linkedin_url}
              />
            </Grid>
            {editEventsData?.has_many_videos?.length !== 0 &&
            editEventsData?.has_many_videos !== undefined ? (
              editEventsData?.has_many_videos?.map(
                (youtubes: any, index: number) => {
                  return (
                    <Grid
                      item
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      key={index}
                    >
                      <Stack
                        direction={{
                          xs: "column",
                          sm: "column",
                          md: "row",
                        }}
                        spacing={3}
                      >
                        <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
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
                            Website URL {index + 1}
                          </Typography>
                          <InputText
                            placeholder="Eg:hsofbe7tyeiehdndmdoqcejdhhf"
                            name={`youtube_link[${index + 1}]`}
                            id={`youtube_link_${index + 1}`}
                            value={youtubes.youtube_link}
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
                          {editEventsData?.has_many_videos.length - 1 ===
                          index ? (
                            <Link
                              onClick={youtubeaddHandle}
                              underline="none"
                              sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                            >
                              Add more +
                            </Link>
                          ) : (
                            <IconButton
                              aria-label="delete"
                              size="large"
                              onClick={() => youtuberemoveHandle(youtubes?.id)}
                            >
                              <DeleteIcon
                                fontSize="inherit"
                                sx={{ color: "#fff9" }}
                              />
                            </IconButton>
                          )}
                        </Grid>
                      </Stack>
                    </Grid>
                  );
                }
              )
            ) : (
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
                        color: "#13C086",
                      }}
                      mb={1}
                    >
                      Website URL
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
                    <Link
                      onClick={youtubeaddHandle}
                      underline="none"
                      sx={{ color: "#75ABCF", fontSize: ".8rem" }}
                    >
                      Add more +
                    </Link>
                  </Grid>
                </Stack>
              </Grid>
            )}

            {youtubeCount.map((youtube, index) => {
              return (
                <div>
                  <YoutubeDetails
                    youtubeCount={youtubeCount}
                    index={
                      editEventsData?.has_many_videos &&
                      editEventsData?.has_many_videos !== undefined
                        ? editEventsData?.has_many_videos.length - 1 + index
                        : index
                    }
                    key={index}
                    youtuberemoveHandle={youtuberemoveHandle}
                  />
                </div>
              );
            })}

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
                proof={true}
                setAddIcon={setEditEvents}
                addIconData={editEventsData}
                slug="event_proof"
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
                Logo (max 2MB)
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

export default OfflineEventsEdit;
