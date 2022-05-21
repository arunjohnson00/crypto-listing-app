import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import AutoCompleSelect from "../../../components/form/autocomplete/AutoCompleSelect";
import InputDate from "../../../components/form/input/date/InputDate";
import RadioBtnGroup from "../../../components/form/input/radiobtngroup/RadioBtnGroup";
//import { listCoinRequest } from "../../../store/action";
import dateFormat, { masks } from "dateformat";

import { viewAirDropsRequest } from "../../../store/action";

const selectOptions = [
  { title: "Approved", value: 1 },
  { title: "Processing", value: 2 },
  { title: "Rejected/Blocked", value: 3 },
];

const AirDropsView = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [viewAirdropsData, setViewAirdrops] = useState<any>({
    id: id,
    coin_id: "",
    start_date: "",
    no_of_days: "",
    total_amount: "",
    no_of_winners: "",
    is_follow_twitter: "",
    join_telegram: "",
    status: "",
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewAirdrops(res?.data?.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewAirDropsRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch]);
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
                navigate("/airdrops");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add Airdrops
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
              Search your coin
            </Typography>
            {viewAirdropsData.coin_id}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Start of the Airdrop
            </Typography>

            {viewAirdropsData.start_date}
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Number of Days (min:5, max:20)
            </Typography>

            <InputText
              placeholder=" Number of Days"
              value={viewAirdropsData.no_of_days}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Total Airdrop Amount
            </Typography>

            <InputText
              placeholder="  Total Airdrop Amount"
              value={viewAirdropsData.total_amount}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Number of Winners
            </Typography>

            <InputText
              placeholder="Enter Number of Winners"
              value={viewAirdropsData.no_of_winners}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Add follow Twitter Step?
            </Typography>
            {viewAirdropsData.is_follow_twitter}
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Add Join to telegram Step?
            </Typography>
            {viewAirdropsData.join_telegram}
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>
            {viewAirdropsData.status}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AirDropsView;
