import { useState } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addVideosRequest } from "../../../store/action";
const VideosAdd = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [addVideosData, setAddVideos] = useState({
    name: "",
    status: 1,
    url: "",
    button_name: "",
    button_url: "",
    title: "",
    sub_title: "",
  });

  // Display the key/value pairs

  const videoAddHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };

    const formData = new FormData();

    formData.append("name", addVideosData.name);
    formData.append("url", addVideosData.url);
    formData.append("button_name", addVideosData.button_name);
    formData.append("button_url", addVideosData.button_url);
    formData.append("title", addVideosData.title);
    formData.append("sub_title", addVideosData.sub_title);

    formData.append("status", "1");

    dispatch(addVideosRequest(formData, successHandler, errorHandler));
    navigate("/videos");
  };

  const videoNameHandler = (e: any) => {
    //console.log(e);

    setAddVideos({ ...addVideosData, name: e });
  };

  const videoTitleHandler = (e: any) => {
    //console.log(e);

    setAddVideos({ ...addVideosData, title: e });
  };

  const videoSubtitleHandler = (e: any) => {
    //console.log(e);

    setAddVideos({ ...addVideosData, sub_title: e });
  };

  const videoURLHandler = (e: any) => {
    //console.log(e);

    setAddVideos({ ...addVideosData, url: e });
  };

  const videoBtnNameHandler = (e: any) => {
    //console.log(e);

    setAddVideos({ ...addVideosData, button_name: e });
  };

  const videoBtnURLHandler = (e: any) => {
    //console.log(e);

    setAddVideos({ ...addVideosData, button_url: e });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Add Videos
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Name
            </Typography>

            <InputText
              placeholder="Enter video Name"
              inputTextHandler={(e: any) => videoNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Title
            </Typography>

            <InputText
              placeholder="Enter Video Title"
              inputTextHandler={(e: any) => videoTitleHandler(e)}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Subtitle
            </Typography>

            <InputText
              placeholder="Enter Video Subtitle"
              inputTextHandler={(e: any) => videoSubtitleHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video URL
            </Typography>

            <InputText
              placeholder="Enter Video URL"
              inputTextHandler={(e: any) => videoURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Button Name
            </Typography>

            <InputText
              placeholder="Enter Button Name"
              inputTextHandler={(e: any) => videoBtnNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Button URL
            </Typography>

            <InputText
              placeholder="Enter Button URL"
              inputTextHandler={(e: any) => videoBtnURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
              <LargeBtn Title="Add Video" lgBtnHandler={videoAddHandler} />
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideosAdd;
