import { Grid, Typography, Box } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const NetworkView = () => {
  const location: any = useLocation();

  const networkList = useSelector((ntList: any) => {
    return ntList.listNetworkReducer.natworkListAll.data;
  });

  let newArrList = networkList.filter(
    (listData: any) => listData.id === location.state.id
  );
  console.log(newArrList);
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          View Networks
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <img
              src={`${serverAPIUrl}public/uploads/network_icons/t/${newArrList[0].thumb_icon}`}
              alt={newArrList[0].thumb_icon}
              width="100%"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Network Name
            </Typography>

            <InputText
              placeholder="Enter Exchange Name"
              value={newArrList[0].name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Network URL
            </Typography>

            <InputText
              placeholder="Enter Exchange url"
              value={newArrList[0].url}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Chain Id
            </Typography>

            <InputText
              placeholder="Enter Chain Id"
              value={newArrList[0].chain_id}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Explorer URL
            </Typography>

            <InputText
              placeholder="Enter Explorer URL"
              value={newArrList[0].explorer_url}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Currency Symbol
            </Typography>

            <InputText
              placeholder="Enter Currency Symbol"
              value={newArrList[0].currency_symbol}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NetworkView;
