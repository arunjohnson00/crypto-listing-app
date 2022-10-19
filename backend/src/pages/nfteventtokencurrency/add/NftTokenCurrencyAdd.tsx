import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addNftListingCurrencyRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";

const NftTokenCurrencyAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [addNFTListingCurrencyData, setAddNFTListingCurrency] = useState<any>({
    name: "",
    status: 1,
    symbol: "",
    thumb_icon: "",
  });

  console.log(addNFTListingCurrencyData);

  // Display the key/value pairs

  const nftListingCurrencyAddHandler = () => {
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
        navigate("/nft-listing-currency");
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

    formData.append("name", addNFTListingCurrencyData.name);
    formData.append("symbol", addNFTListingCurrencyData.symbol);
    formData.append("icon", addNFTListingCurrencyData.thumb_icon);
    formData.append("status", addNFTListingCurrencyData.status);

    dispatch(
      addNftListingCurrencyRequest(formData, successHandler, errorHandler)
    );
  };

  const nftListingCurrencyNameHandler = (e: any) => {
    //console.log(e);

    setAddNFTListingCurrency({ ...addNFTListingCurrencyData, name: e });
  };

  const nftListingCurrencySymbolHandler = (e: any) => {
    //console.log(e);

    setAddNFTListingCurrency({ ...addNFTListingCurrencyData, symbol: e });
  };

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
                  navigate("/nft-listing-currency");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Add NFT Currency
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
                Currency Name
              </Typography>

              <InputText
                placeholder="Enter Currency Name"
                inputTextHandler={(e: any) => nftListingCurrencyNameHandler(e)}
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={2}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Currency Symbol
              </Typography>

              <InputText
                placeholder="Enter Currency Symbol"
                inputTextHandler={(e: any) =>
                  nftListingCurrencySymbolHandler(e)
                }
              />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
                mb={1}
              >
                Currency Icon
              </Typography>

              <IconUploader
                setAddIcon={setAddNFTListingCurrency}
                addIconData={addNFTListingCurrencyData}
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
                currentStatus={addNFTListingCurrencyData.status}
                setInputSelectValue={setAddNFTListingCurrency}
                getInputSelectvalue={addNFTListingCurrencyData}
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
                    Title="Add Currency Symbol"
                    lgBtnHandler={nftListingCurrencyAddHandler}
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

export default NftTokenCurrencyAdd;
