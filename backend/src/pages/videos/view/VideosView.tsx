import { useEffect, useState } from "react";
import { Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { viewVideoRequest } from "../../../store/action";

const VideosView = () => {
  const videoList = useSelector((vdList: any) => {
    return vdList.videosReducer.listVideos.data;
  });
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  let { id } = useParams();

  const navigate: any = useNavigate();

  const [viewVideo, setViewVideo] = useState({
    id: "",
    status: "",
    v_name: "",
    v_btn_name: "",
    v_btn_url: "",
    v_url: "",
    v_title: "",
    v_sub_title: "",
  });
  console.log(viewVideo);
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewVideo(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewVideoRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);

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
                navigate("/videos");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            View Videos
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
              Video Name
            </Typography>

            <InputText
              placeholder="Enter video Name"
              value={viewVideo?.v_name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Title
            </Typography>

            <InputText
              placeholder="Enter Video Title"
              value={viewVideo?.v_title}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Subtitle
            </Typography>

            <InputText
              placeholder="Enter Video Subtitle"
              value={viewVideo?.v_sub_title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video URL
            </Typography>

            <InputText placeholder="Enter Video URL" value={viewVideo?.v_url} />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Button Name
            </Typography>

            <InputText
              placeholder="Enter Button Name"
              value={viewVideo?.v_btn_name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Button URL
            </Typography>

            <InputText
              placeholder="Enter Button URL"
              value={viewVideo?.v_btn_url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <Typography>{viewVideo?.status}</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideosView;
