import { useEffect, useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";

import InputText from "../../../components/form/input/text/InputText";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { viewMenuCardRequest } from "../../../store/action";

const MenuCardView = () => {
  const navigate = useNavigate();
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  let { id } = useParams();

  const [viewMenuCard, setViewMenuCard] = useState({
    id: "",
    title: "",
    status: "",
    sub_title: "",
    thumb_icon: "",
    icon: "",
    url: "",
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewMenuCard(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewMenuCardRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/menu-cards");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            View MenuCards
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
              MenuCard Title
            </Typography>

            <InputText
              placeholder="Enter MenuCard Title"
              value={viewMenuCard?.title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              MenuCard Subtitle
            </Typography>

            <InputText
              placeholder="Enter MenuCard Subtitle"
              value={viewMenuCard?.sub_title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              MenuCard URL
            </Typography>

            <InputText placeholder="Enter URL" value={viewMenuCard?.url} />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            {viewMenuCard?.status}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MenuCardView;
