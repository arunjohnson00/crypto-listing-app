import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateChartProviderRequest } from "../../../store/action";
import { editChartProviderRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";

const CoinsChartProviderEdit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();
  let { id } = useParams();
  console.log(location.state.id);

  const [loading, setLoading] = useState(false);
  const [updateCoinChartProviderData, setUpdateCoinChartProvider] = useState({
    id: "",
    name: "",
    status: "",
    icon: "",
    thumb_icon: "",
    url: "",
  });

  console.log(updateCoinChartProviderData);
  // Display the key/value pairs

  const coinChartProviderEditHandler = () => {
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
        navigate("/coins-chart-provider");
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
    formData.append("id", updateCoinChartProviderData?.id);

    formData.append("name", updateCoinChartProviderData?.name);
    formData.append("url", updateCoinChartProviderData?.url);
    formData.append("thumb_icon", updateCoinChartProviderData?.thumb_icon);
    formData.append("status", updateCoinChartProviderData?.status);

    dispatch(
      updateChartProviderRequest(formData, successHandler, errorHandler)
    );
  };

  const chartProviderNameHandler = (e: any) => {
    //console.log(e);
    setUpdateCoinChartProvider({ ...updateCoinChartProviderData, name: e });
  };

  const chartProviderURLHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinChartProvider({ ...updateCoinChartProviderData, url: e });
  };

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setUpdateCoinChartProvider(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      editChartProviderRequest({ id: id }, successHandler, errorHandler)
    );
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
                  navigate("/coins-chart-provider");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Edit Chart Provider
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
                Chart Provider Name
              </Typography>

              <InputText
                placeholder="Enter  Chart Provider Name"
                inputTextHandler={(e: any) => chartProviderNameHandler(e)}
                value={updateCoinChartProviderData?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Chart Provider URL
              </Typography>

              <InputText
                placeholder="Enter Chart Provider url"
                inputTextHandler={(e: any) => chartProviderURLHandler(e)}
                value={updateCoinChartProviderData?.url}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Chart Provider Icon
              </Typography>

              <IconUploader
                setAddIcon={setUpdateCoinChartProvider}
                addIconData={updateCoinChartProviderData}
                slug="coins_chart_provider"
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
                currentStatus={updateCoinChartProviderData?.status}
                setInputSelectValue={setUpdateCoinChartProvider}
                getInputSelectvalue={updateCoinChartProviderData}
                serverStatus={updateCoinChartProviderData?.status}
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
                    Title="Update Chart Provider"
                    lgBtnHandler={coinChartProviderEditHandler}
                    width={200}
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

export default CoinsChartProviderEdit;
