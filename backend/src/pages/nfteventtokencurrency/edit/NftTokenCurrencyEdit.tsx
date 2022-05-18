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
import { editNftListingCurrencyRequest } from "../../../store/action";
import { updateNftListingCurrencyRequest } from "../../../store/action";

import InputSelect from "../../../components/form/select/InputSelect";

const NftTokenCurrencyEdit = () => {
  let { id } = useParams();

  const nftEventCurrencyEdit = useSelector((nftCurrencyList: any) => {
    return nftCurrencyList.nftListingCurrencyReducer.editNftListingCurrency
      .data;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location: any = useLocation();

  // let newArrList = nftEventCurrencyEdit.filter(
  //   (userData: any) => userData.id === location.state.id
  // );
  const [loading, setLoading] = useState(false);
  const [updateNFTCurrencyData, setUpdateNFTCurrency] = useState({
    id: "",
    name: "",
    symbol: "",
    status: "",
  });

  console.log(updateNFTCurrencyData.name);

  const nftCurrencyEditHandler = () => {
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
    formData.append("id", updateNFTCurrencyData?.id);

    formData.append("name", updateNFTCurrencyData?.name);

    formData.append("status", updateNFTCurrencyData?.status);
    formData.append("symbol", updateNFTCurrencyData?.symbol);

    dispatch(
      updateNftListingCurrencyRequest(formData, successHandler, errorHandler)
    );
  };

  const nftCurrencyNameHandler = (e: any) => {
    //console.log(e);

    setUpdateNFTCurrency({ ...updateNFTCurrencyData, name: e });
  };

  const nftCurrencySymbolHandler = (e: any) => {
    //console.log(e);

    setUpdateNFTCurrency({ ...updateNFTCurrencyData, symbol: e });
  };

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  useEffect(() => {
    const successHandler = (res: any) => {
      setUpdateNFTCurrency({ ...updateNFTCurrencyData, ...res.data.data });
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      editNftListingCurrencyRequest({ id: id }, successHandler, errorHandler)
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
                  navigate("/nft-listing-currency");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Update NFT Event
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
                Event Currency Title
              </Typography>

              <InputText
                placeholder="Enter  Event Currency Title"
                inputTextHandler={(e: any) => nftCurrencyNameHandler(e)}
                value={updateNFTCurrencyData?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Event Currency Title
              </Typography>

              <InputText
                placeholder="Enter  Event Currency Title"
                inputTextHandler={(e: any) => nftCurrencySymbolHandler(e)}
                value={updateNFTCurrencyData?.symbol}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                currentStatus={updateNFTCurrencyData?.status}
                setInputSelectValue={setUpdateNFTCurrency}
                getInputSelectvalue={updateNFTCurrencyData}
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
                    Title="Update Event Currency"
                    lgBtnHandler={nftCurrencyEditHandler}
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

export default NftTokenCurrencyEdit;
