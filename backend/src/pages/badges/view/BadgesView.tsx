import { useEffect, useState } from "react";
import { Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { viewBadgeRequest } from "../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;
const BadgesView = () => {
  const location: any = useLocation();
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  let { id } = useParams();

  const [viewBadgeData, setViewBadge] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    icon: "",
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewBadge(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewBadgeRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/badges");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            View badges
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
            <img
              src={`${serverAPIUrl}public/uploads/badge_icons/${viewBadgeData?.icon}`}
              alt={viewBadgeData?.icon}
              width="100%"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              badge Name
            </Typography>

            <InputText
              placeholder="Enter badge Name"
              value={viewBadgeData?.name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              badge URL
            </Typography>

            <InputText
              placeholder="Enter badge url"
              value={viewBadgeData?.url}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BadgesView;
