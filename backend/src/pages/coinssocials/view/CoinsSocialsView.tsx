import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";

import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const CoinsSocialsView = () => {
  const coinSocialList = useSelector((socialList: any) => {
    return socialList.socialsReducer.listSocials.data;
  });

  const navigate = useNavigate();

  const location: any = useLocation();

  console.log(location.state.id);

  let newArrList = coinSocialList.filter(
    (userData: any) => userData.id === location.state.id
  );

  // Display the key/value pairs

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
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
                  navigate("/coins-socials");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              View Social
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
                Social Name
              </Typography>

              <InputText
                placeholder="Enter Social Name"
                value={newArrList[0].name}
              />
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
    </div>
  );
};

export default CoinsSocialsView;
