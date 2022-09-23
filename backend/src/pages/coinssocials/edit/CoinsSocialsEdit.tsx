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
import { updateCoinSocialRequest } from "../../../store/action";
import { editCoinSocialRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";

const CoinsSocialsEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();
  let { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [updateCoinSocialData, setUpdateCoinSocial] = useState({
    id: "",
    name: "",
    status: "",
    icon: "",
    thumb_icon: "",
    url: "",
    image: "",
  });

  console.log(updateCoinSocialData);
  // Display the key/value pairs

  const coinSocialEditHandler = () => {
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
        navigate("/coins-socials");
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
    formData.append("id", updateCoinSocialData.id);
    formData.append("name", updateCoinSocialData.name);
    formData.append("thumb_icon", updateCoinSocialData?.thumb_icon);
    formData.append("url", updateCoinSocialData?.url);
    formData.append("status", updateCoinSocialData.status);

    dispatch(updateCoinSocialRequest(formData, successHandler, errorHandler));
  };

  const coinSocialNameHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinSocial({ ...updateCoinSocialData, name: e });
  };

  const coinSocialURLHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinSocial({ ...updateCoinSocialData, url: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setUpdateCoinSocial(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editCoinSocialRequest({ id: id }, successHandler, errorHandler));
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
                  navigate("/coins-socials");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Edit Social
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
                Social Name
              </Typography>

              <InputText
                placeholder="Enter Social Name"
                inputTextHandler={(e: any) => coinSocialNameHandler(e)}
                value={updateCoinSocialData?.name}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Social URL
              </Typography>

              <InputText
                placeholder="Enter Social url"
                inputTextHandler={(e: any) => coinSocialURLHandler(e)}
                value={updateCoinSocialData?.url}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Audit Icon
              </Typography>

              <IconUploader
                setAddIcon={setUpdateCoinSocial}
                addIconData={updateCoinSocialData}
                slug="coins_social"
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
                currentStatus={updateCoinSocialData?.status}
                setInputSelectValue={setUpdateCoinSocial}
                getInputSelectvalue={updateCoinSocialData}
                serverStatus={updateCoinSocialData?.status}
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
                    Title="Update Social"
                    lgBtnHandler={coinSocialEditHandler}
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

export default CoinsSocialsEdit;
