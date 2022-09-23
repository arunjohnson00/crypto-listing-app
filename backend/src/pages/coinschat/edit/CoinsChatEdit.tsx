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
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateCoinChatRequest } from "../../../store/action";
import { editCoinChatRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";

const CoinsChatEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();
  let { id } = useParams();
  console.log(location.state.id);

  const [loading, setLoading] = useState(false);
  const [updateCoinChatData, setUpdateCoinChat] = useState({
    id: "",
    name: "",
    status: "",
    icon: "",
    thumb_icon: "",
    url: "",
    image: "",
  });

  console.log(updateCoinChatData);
  // Display the key/value pairs

  const coinChatEditHandler = () => {
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
        navigate("/coins-chat");
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
    formData.append("id", updateCoinChatData.id);
    formData.append("name", updateCoinChatData.name);
    formData.append("thumb_icon", updateCoinChatData?.thumb_icon);
    formData.append("url", updateCoinChatData?.url);
    formData.append("status", updateCoinChatData.status);

    dispatch(updateCoinChatRequest(formData, successHandler, errorHandler));
  };

  const coinChatNameHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinChat({ ...updateCoinChatData, name: e });
  };

  const coinChatURLHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinChat({ ...updateCoinChatData, url: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setUpdateCoinChat(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editCoinChatRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);

  return (
    <div>
      {" "}
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
                  navigate("/coins-chat");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Add Chat
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
                Chat Name
              </Typography>

              <InputText
                placeholder="Enter Chat Name"
                inputTextHandler={(e: any) => coinChatNameHandler(e)}
                value={updateCoinChatData?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Chat URL
              </Typography>

              <InputText
                placeholder="Enter Chat url"
                inputTextHandler={(e: any) => coinChatURLHandler(e)}
                value={updateCoinChatData?.url}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Audit Icon
              </Typography>

              <IconUploader
                setAddIcon={setUpdateCoinChat}
                addIconData={updateCoinChatData}
                slug="coins_chat"
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
                currentStatus={updateCoinChatData?.status}
                setInputSelectValue={setUpdateCoinChat}
                getInputSelectvalue={updateCoinChatData}
                serverStatus={updateCoinChatData?.status}
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
                    Title="Update Chat"
                    lgBtnHandler={coinChatEditHandler}
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

export default CoinsChatEdit;
