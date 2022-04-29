import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";

import InputText from "../../../components/form/input/text/InputText";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const MenuCardView = () => {
  const menuCardList = useSelector((menuList: any) => {
    return menuList.listMenuCardReducer.menuCardListAll.data;
  });

  const navigate = useNavigate();
  const location: any = useLocation();

  console.log(location.state.id);

  let newArrList = menuCardList.filter(
    (listData: any) => listData.id === location.state.id
  );

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
              value={newArrList[0].title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              MenuCard Subtitle
            </Typography>

            <InputText
              placeholder="Enter MenuCard Subtitle"
              value={newArrList[0].sub_title}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              MenuCard URL
            </Typography>

            <InputText placeholder="Enter URL" value={newArrList[0].url} />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            {newArrList[0].status}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MenuCardView;
