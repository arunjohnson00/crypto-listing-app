import { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";

import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addCoinAuditRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";

const CreateNewAdConfiguration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [addCoinAdsData, setAddCoinAds] = useState<any>({
    name: "",
    description: "",
    thumb_icon: "",
    icon: "",
    image: "",
    amount: "",
    status: 1,
  });

  console.log(addCoinAdsData);

  // Display the key/value pairs

  const coinAdsAddHandler = () => {
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
        navigate("/ads-configuration-listing");
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

    formData.append("name", addCoinAdsData.name);
    formData.append("thumb_icon", addCoinAdsData?.thumb_icon);
    formData.append("description", addCoinAdsData?.description);
    formData.append("amount", addCoinAdsData?.amount);
    formData.append("status", addCoinAdsData.status);

    dispatch(addCoinAuditRequest(formData, successHandler, errorHandler));
  };

  const coinAdsNameHandler = (e: any) => {
    //console.log(e);

    setAddCoinAds({ ...addCoinAdsData, name: e });
  };

  const adsDescriptionHandler = (e: any) => {
    //console.log(e);

    setAddCoinAds({ ...addCoinAdsData, description: e });
  };

  const adsAmountHandler = (e: any) => {
    //console.log(e);

    setAddCoinAds({ ...addCoinAdsData, amount: e });
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
                  navigate("/ads-configuration");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Create New Ad Configuration
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
            pt={3}
            pl={4}
            pr={3}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Ad Name
              </Typography>

              <InputText
                placeholder="Enter ad name"
                inputTextHandler={(e: any) => coinAdsNameHandler(e)}
              />
            </Grid>
            <Grid container spacing={2} pt={3}>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12} pt={3}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                  mb={1}
                >
                  Ads Description
                </Typography>

                <InputText
                  placeholder="Enter ad description"
                  inputTextHandler={(e: any) => adsDescriptionHandler(e)}
                />
              </Grid>

              <Grid item xl={6} lg={6} md={6} sm={12} xs={12} pt={3}>
                <Typography
                  variant="subtitle1"
                  sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                  mb={1}
                >
                  Ads Icon
                </Typography>

                <IconUploader
                  setAddIcon={setAddCoinAds}
                  addIconData={addCoinAdsData}
                />
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Amount/Day
              </Typography>

              <InputText
                placeholder="Enter amount per day"
                inputTextHandler={(e: any) => adsAmountHandler(e)}
              />
            </Grid>
            {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                currentStatus={addCoinAdsData.status}
                setInputSelectValue={setAddCoinAds}
                getInputSelectvalue={addCoinAdsData}
              />
            </Grid> */}

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={8}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "flex-end" }}
                pb={5}
                mr={0}
              >
                <Button
                  variant="text"
                  sx={{ textTransform: "capitalize", fontSize: ".75rem" }}
                  // onClick={cancelAdHandler}
                >
                  Cancel
                </Button>
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
                  <LargeBtn Title="Save" lgBtnHandler={coinAdsAddHandler} />
                )}
              </Stack>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateNewAdConfiguration;
