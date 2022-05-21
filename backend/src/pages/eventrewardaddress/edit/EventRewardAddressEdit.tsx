import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { editEventsRewardAddressRequest } from "../../../store/action";
import { updateEventsRewardAddressRequest } from "../../../store/action";

import InputSelect from "../../../components/form/select/InputSelect";

const EventRewardAddressEdit = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location: any = useLocation();

  // let newArrList = nftEventReward AddressEdit.filter(
  //   (userData: any) => userData.id === location.state.id
  // );
  const [loading, setLoading] = useState(false);
  const [updateEventsRewardAddressData, setUpdateEventsRewardAddress] =
    useState({
      id: "",
      name: "",
      symbol: "",
      status: "",
    });

  console.log(updateEventsRewardAddressData.name);

  const eventsRewardAddressEditHandler = () => {
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
        navigate("/reward-address");
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
    formData.append("id", updateEventsRewardAddressData?.id);

    formData.append("name", updateEventsRewardAddressData?.name);

    formData.append("status", updateEventsRewardAddressData?.status);
    formData.append("symbol", updateEventsRewardAddressData?.symbol);

    dispatch(
      updateEventsRewardAddressRequest(formData, successHandler, errorHandler)
    );
  };

  const eventsRewardAddressNameHandler = (e: any) => {
    //console.log(e);

    setUpdateEventsRewardAddress({ ...updateEventsRewardAddressData, name: e });
  };

  const eventsRewardAddressSymbolHandler = (e: any) => {
    //console.log(e);

    setUpdateEventsRewardAddress({
      ...updateEventsRewardAddressData,
      symbol: e,
    });
  };

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  useEffect(() => {
    const successHandler = (res: any) => {
      setUpdateEventsRewardAddress({
        ...updateEventsRewardAddressData,
        ...res.data.data,
      });
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      editEventsRewardAddressRequest({ id: id }, successHandler, errorHandler)
    );
  }, [dispatch, id]);
  return (
    <div>
      {" "}
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HorizonatalList />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/reward-address");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Update Reward Address
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
                Event Reward Address Title
              </Typography>

              <InputText
                placeholder="Enter  Event Reward Address Title"
                inputTextHandler={(e: any) => eventsRewardAddressNameHandler(e)}
                value={updateEventsRewardAddressData?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Event Reward Address Symbol
              </Typography>

              <InputText
                placeholder="Enter  Event Reward Address Symbol"
                inputTextHandler={(e: any) =>
                  eventsRewardAddressSymbolHandler(e)
                }
                value={updateEventsRewardAddressData?.symbol}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                currentStatus={updateEventsRewardAddressData?.status}
                setInputSelectValue={setUpdateEventsRewardAddress}
                getInputSelectvalue={updateEventsRewardAddressData}
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
                    Title="Update Event Reward Address"
                    lgBtnHandler={eventsRewardAddressEditHandler}
                  />
                )}
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventRewardAddressEdit;
