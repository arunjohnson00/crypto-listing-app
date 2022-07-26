import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import { editNftMarketPlaceRequest } from "../../../store/action";
import { updateNftMarketPlaceRequest } from "../../../store/action";

const NftMarketPlaceEdit = () => {
  let { id } = useParams();
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
  const dispatch = useDispatch();
  //const location: any = useLocation();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [editNftMarketPlaceData, setEditNftMarketPlace] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
  });

  // Display the key/value pairs

  const nftMarketPlacesEditHandler = () => {
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

    editNftMarketPlaceData.thumb_icon !== "" &&
      typeof editNftMarketPlaceData.thumb_icon !== "string" &&
      formData.append("thumb_icon", editNftMarketPlaceData.thumb_icon);

    formData.append("name", editNftMarketPlaceData.name);
    formData.append("url", editNftMarketPlaceData.url);
    formData.append("id", editNftMarketPlaceData.id);
    formData.append("status", editNftMarketPlaceData.status);

    dispatch(
      updateNftMarketPlaceRequest(formData, successHandler, errorHandler)
    );
  };

  const nftMarketPlacesNameHandler = (e: any) => {
    //console.log(e);

    setEditNftMarketPlace({ ...editNftMarketPlaceData, name: e });
  };

  const nftMarketPlacesURLHandler = (e: any) => {
    //console.log(e);

    setEditNftMarketPlace({ ...editNftMarketPlaceData, url: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditNftMarketPlace(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(
      editNftMarketPlaceRequest({ id: id }, successHandler, errorHandler)
    );
  }, [dispatch, id]);

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
            Edit Nft MarketPlace
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
              Nft MarketPlace Name
            </Typography>

            <InputText
              placeholder="Enter  MarketPlace Name"
              inputTextHandler={(e: any) => nftMarketPlacesNameHandler(e)}
              value={editNftMarketPlaceData?.name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Nft MarketPlaceURL
            </Typography>

            <InputText
              placeholder="Enter  MarketPlace url"
              inputTextHandler={(e: any) => nftMarketPlacesURLHandler(e)}
              value={editNftMarketPlaceData?.url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Nft MarketPlace Icon
            </Typography>

            <IconUploader
              setAddIcon={setEditNftMarketPlace}
              addIconData={editNftMarketPlaceData}
              slug="nft_marketplace_icons"
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
              // currentStatus={editNftMarketPlaceData?.status}
              setInputSelectValue={setEditNftMarketPlace}
              getInputSelectvalue={editNftMarketPlaceData}
              serverStatus={editNftMarketPlaceData?.status}
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
                  Title="Update Market Place"
                  lgBtnHandler={nftMarketPlacesEditHandler}
                  width={200}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NftMarketPlaceEdit;
