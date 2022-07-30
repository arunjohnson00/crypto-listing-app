import { useEffect, useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";

import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { viewCoinAuditRequest } from "../../../store/action";

const CoinsAuditView = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const location: any = useLocation();
  let { id } = useParams();
  console.log(location.state.id);
  const [viewAudit, setViewAudit] = useState({
    id: "",
    name: "",
    status: "",
    icon: "",
    thumb_icon: "",
    url: "",
  });

  // Display the key/value pairs

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewAudit(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewCoinAuditRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);
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
                  navigate("/coins-audit");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Add Audit
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
                Audit Name
              </Typography>

              <InputText
                placeholder="Enter audit Name"
                value={viewAudit?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              {viewAudit?.status}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoinsAuditView;
