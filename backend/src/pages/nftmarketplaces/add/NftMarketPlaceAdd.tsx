import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addNftMarketPlaceRequest } from "../../../store/action";

const NftMarketPlaceAdd = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [addNftMarketPlaceData, setAddNftMarketPlace] = useState({
    name: "",
    status: 1,
    url: "",
    thumb_icon: "",
  });

  const [loading, setLoading] = useState(false);

  // Display the key/value pairs

  const NftMarketPlaceAddHandler = () => {
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
        navigate("/nft-marketplaces");
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
    formData.append("thumb_icon", addNftMarketPlaceData.thumb_icon);
    formData.append("name", addNftMarketPlaceData.name);
    formData.append("url", addNftMarketPlaceData.url);

    formData.append("status", "1");

    dispatch(addNftMarketPlaceRequest(formData, successHandler, errorHandler));
  };

  const addNftMarketPlacesNameHandler = (e: any) => {
    //console.log(e);

    setAddNftMarketPlace({ ...addNftMarketPlaceData, name: e });
  };

  const addNftMarketPlacesURLHandler = (e: any) => {
    //console.log(e);

    setAddNftMarketPlace({ ...addNftMarketPlaceData, url: e });
  };

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
                navigate("/nft-marketplaces");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add Nft MarketPlaces
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
              Nft MarketPlaces Name
            </Typography>

            <InputText
              placeholder="Enter Exchange Name"
              inputTextHandler={(e: any) => addNftMarketPlacesNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Nft MarketPlaces URL
            </Typography>

            <InputText
              placeholder="Enter Exchange url"
              inputTextHandler={(e: any) => addNftMarketPlacesURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Nft MarketPlaces Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddNftMarketPlace}
              addIconData={addNftMarketPlaceData}
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
                  Title="Add new MarketPlaces"
                  lgBtnHandler={NftMarketPlaceAddHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NftMarketPlaceAdd;
