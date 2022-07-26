import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";

import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addChartProviderRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";

const CoinsChartProviderAdd = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [addChartProviderData, setAddChartProvider] = useState<any>({
    name: "",
    url: "",
    thumb_icon: "",
    icon: "",
    image: "",
    status: 1,
  });

  console.log(addChartProviderData);

  // Display the key/value pairs

  const coinsChartProviderAddHandler = () => {
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

    formData.append("name", addChartProviderData?.name);

    formData.append("status", addChartProviderData?.status);
    formData.append("thumb_icon", addChartProviderData?.thumb_icon);
    formData.append("url", addChartProviderData?.url);
    dispatch(addChartProviderRequest(formData, successHandler, errorHandler));
  };

  const chartProviderNameHandler = (e: any) => {
    //console.log(e);

    setAddChartProvider({ ...addChartProviderData, name: e });
  };

  const chartProviderURLHandler = (e: any) => {
    //console.log(e);

    setAddChartProvider({ ...addChartProviderData, url: e });
  };

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
                  navigate("/coins-chart-provider");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Add Chart Provider
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
                placeholder="Enter ChartProvider Name"
                inputTextHandler={(e: any) => chartProviderNameHandler(e)}
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
                placeholder="Enter Cart Provider url"
                inputTextHandler={(e: any) => chartProviderURLHandler(e)}
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
                setAddIcon={setAddChartProvider}
                addIconData={addChartProviderData}
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
                currentStatus={addChartProviderData.status}
                setInputSelectValue={setAddChartProvider}
                getInputSelectvalue={addChartProviderData}
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
                    Title="Add Chart Provider "
                    lgBtnHandler={coinsChartProviderAddHandler}
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

export default CoinsChartProviderAdd;
