import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

import { viewEventsRequest } from "../../../store/action";

const EventsView = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const [viewEventsData, setViewEvents] = useState<any>({
    id: "",
    coin_id: "",
    title: "",
    category_id: "",
    event_date: new Date(),
    or_earlier: "",
    description: "",
    source_link: "",
    reward_address_id: "",
    address: "",
    twitter_account: "",
    status: "",
    proof: "",
  });

  // Display the key/value pairs

  useEffect(() => {
    const successHandler = (res: any) => {
      setViewEvents(res.data.data);
    };
    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewEventsRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/events");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add Events
          </Typography>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <form id="eventForm">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                select coin
              </Typography>

              {viewEventsData?.coin_id}
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Title
              </Typography>

              {viewEventsData?.title}
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Select category
              </Typography>

              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                {viewEventsData?.category_id}
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Date
              </Typography>

              {
                //viewEventsData?.event_date
              }
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {parseInt(viewEventsData?.or_earlier)}
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              {viewEventsData?.description}
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Source Link
              </Typography>

              {viewEventsData?.source_link}
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Reward address
              </Typography>
              <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                {viewEventsData?.reward_address_id}
              </Grid>
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Address
              </Typography>

              {viewEventsData?.address}
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Twitter Account
              </Typography>

              {viewEventsData?.twitter_account}
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              {viewEventsData.status}
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EventsView;
