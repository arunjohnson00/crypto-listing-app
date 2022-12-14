import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateCoinCommunityRequest } from "../../../store/action";
import { editCoinCommunityRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";

const CoinsCommunityEdit = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [updateCoinsCommunityData, setUpdateCoinsCommunity] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
  });

  console.log(updateCoinsCommunityData);
  // Display the key/value pairs

  const coinsCommunityEditHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);
      setLoading(true);
      toast.success(`${res.data.message}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        navigate("/coins-community");
      }, 3000);
    };

    const errorHandler = (err: any) => {
      console.log(err);
      toast.error(`${err.error.message.response.request.responseText}`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const formData = new FormData();
    formData.append("id", updateCoinsCommunityData.id);

    formData.append("name", updateCoinsCommunityData.name);

    formData.append("status", updateCoinsCommunityData.status);

    dispatch(
      updateCoinCommunityRequest(formData, successHandler, errorHandler)
    );
  };

  const coinCoinsCommunityNameHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinsCommunity({ ...updateCoinsCommunityData, name: e });
  };

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setUpdateCoinsCommunity(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      editCoinCommunityRequest({ id: id }, successHandler, errorHandler)
    );
  }, [dispatch, id]);
  return (
    <div>
      {" "}
      <Grid container spacing={2}>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <HorizonatalList />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton>
              <ArrowBackIosTwoToneIcon
                onClick={() => {
                  navigate("/coins-community");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Edit Community
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
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Community Name
              </Typography>

              <InputText
                placeholder="Enter  Chart Provider Name"
                inputTextHandler={(e: any) => coinCoinsCommunityNameHandler(e)}
                value={updateCoinsCommunityData?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                currentStatus={updateCoinsCommunityData?.status}
                setInputSelectValue={setUpdateCoinsCommunity}
                getInputSelectvalue={updateCoinsCommunityData}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
                {loading ? (
                  <LoadingButton
                    color="secondary"
                    loading={loading}
                    loadingPosition="center"
                    // startIcon={<SaveIcon />}
                    variant="contained"
                    sx={{
                      width: "173px",
                      height: "41px",
                      backgroundColor: "rgb(61, 56, 122)",
                      borderRadius: "8px",
                      fontSize: "14px",
                      textTransform: "capitalize",
                      fontWeight: "300",
                    }}
                  >
                    Saving...Wait
                  </LoadingButton>
                ) : (
                  <LargeBtn
                    Title="Update  Community"
                    lgBtnHandler={coinsCommunityEditHandler}
                  />
                )}
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CoinsCommunityEdit;
