import { Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const VideosView = () => {
  const videoList = useSelector((vdList: any) => {
    return vdList.listVideoReducer.videoListAll.data;
  });

  const location: any = useLocation();

  const navigate: any = useNavigate();

  console.log(location.state.id);

  let newArrList = videoList.filter(
    (listData: any) => listData.id === location.state.id
  );

  // Display the key/value pairs

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
              value={newArrList[0].v_name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Title
            </Typography>

            <InputText
              placeholder="Enter Video Title"
              value={newArrList[0].v_title}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video Subtitle
            </Typography>

            <InputText
              placeholder="Enter Video Subtitle"
              value={newArrList[0].v_sub_title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Video URL
            </Typography>

            <InputText
              placeholder="Enter Video URL"
              value={newArrList[0].v_url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Button Name
            </Typography>

            <InputText
              placeholder="Enter Button Name"
              value={newArrList[0].v_btn_name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Button URL
            </Typography>

            <InputText
              placeholder="Enter Button URL"
              value={newArrList[0].v_btn_url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <Typography>{newArrList[0].status}</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideosView;
