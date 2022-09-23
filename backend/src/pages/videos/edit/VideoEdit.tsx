import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import InputText from "../../../components/form/input/text/InputText";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { editVideoRequest } from "../../../store/action";
import { updateVideoRequest } from "../../../store/action";

import InputSelect from "../../../components/form/select/InputSelect";

const VideoEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();
  let { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [editVideosData, setEditVideos] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    button_name: "",
    button_url: "",
    title: "",
    sub_title: "",
  });

  console.log(editVideosData);
  // Display the key/value pairs

  const videoEditHandler = () => {
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
        navigate("/videos");
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
    formData.append("id", editVideosData?.id);
    formData.append("name", editVideosData?.name);
    formData.append("url", editVideosData?.url);
    formData.append("button_name", editVideosData?.button_name);
    formData.append("button_url", editVideosData?.button_url);
    formData.append("title", editVideosData?.title);
    formData.append("sub_title", editVideosData?.sub_title);
    formData.append("status", editVideosData?.status);

    dispatch(updateVideoRequest(formData, successHandler, errorHandler));
  };

  const videoNameHandler = (e: any) => {
    //console.log(e);

    setEditVideos({ ...editVideosData, name: e });
  };

  const videoTitleHandler = (e: any) => {
    //console.log(e);

    setEditVideos({ ...editVideosData, title: e });
  };

  const videoSubtitleHandler = (e: any) => {
    //console.log(e);

    setEditVideos({ ...editVideosData, sub_title: e });
  };

  const videoURLHandler = (e: any) => {
    //console.log(e);

    setEditVideos({ ...editVideosData, url: e });
  };

  const videoBtnNameHandler = (e: any) => {
    //console.log(e);

    setEditVideos({ ...editVideosData, button_name: e });
  };

  const videoBtnURLHandler = (e: any) => {
    //console.log(e);

    setEditVideos({ ...editVideosData, button_url: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);

      setEditVideos({
        id: res.data.data.id,
        name: res.data.data.v_name,
        status: res.data.data.status,
        url: res.data.data.v_url,
        button_name: res.data.data.v_btn_name,
        button_url: res.data.data.v_btn_name,
        title: res.data.data.v_title,
        sub_title: res.data.data.v_sub_title,
      });
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editVideoRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);
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
                navigate("/videos");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Edit Videos
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
              Video Name
            </Typography>

            <InputText
              placeholder="Enter video Name"
              inputTextHandler={(e: any) => videoNameHandler(e)}
              value={editVideosData?.name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Video Title
            </Typography>

            <InputText
              placeholder="Enter Video Title"
              inputTextHandler={(e: any) => videoTitleHandler(e)}
              value={editVideosData?.title}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Video Subtitle
            </Typography>

            <InputText
              placeholder="Enter Video Subtitle"
              inputTextHandler={(e: any) => videoSubtitleHandler(e)}
              value={editVideosData?.sub_title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Video URL
            </Typography>

            <InputText
              placeholder="Enter Video URL"
              inputTextHandler={(e: any) => videoURLHandler(e)}
              value={editVideosData?.url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Button Name
            </Typography>

            <InputText
              placeholder="Enter Button Name"
              inputTextHandler={(e: any) => videoBtnNameHandler(e)}
              value={editVideosData?.button_name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Button URL
            </Typography>

            <InputText
              placeholder="Enter Button URL"
              inputTextHandler={(e: any) => videoBtnURLHandler(e)}
              value={editVideosData?.button_url}
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
              currentStatus={editVideosData?.status}
              setInputSelectValue={setEditVideos}
              getInputSelectvalue={editVideosData}
              serverStatus={editVideosData?.status}
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
                  Title="Update Video"
                  lgBtnHandler={videoEditHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoEdit;
