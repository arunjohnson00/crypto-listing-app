import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import { addNFTNetworkRequest } from "../../../store/action";

const NFTNetworkAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addNFTNetworkData, setAddNFTNetwork] = useState({
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    chain_id: "",
    explorer_url: "",
    currency_symbol: "",
  });

  // Display the key/value pairs

  const nftNetworkAddHandler = () => {
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
        navigate("/nftNetworks");
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
    formData.append("thumb_icon", addNFTNetworkData.thumb_icon);
    formData.append("name", addNFTNetworkData.name);
    formData.append("url", addNFTNetworkData.url);
    formData.append("chain_id", addNFTNetworkData.chain_id);
    formData.append("explorer_url", addNFTNetworkData.explorer_url);
    formData.append("currency_symbol", addNFTNetworkData.currency_symbol);
    formData.append("status", addNFTNetworkData.status);

    dispatch(addNFTNetworkRequest(formData, successHandler, errorHandler));
  };

  const nftNetworkNameHandler = (e: any) => {
    //console.log(e);

    setAddNFTNetwork({ ...addNFTNetworkData, name: e });
  };

  const nftNetworkURLHandler = (e: any) => {
    //console.log(e);

    setAddNFTNetwork({ ...addNFTNetworkData, url: e });
  };

  // const nftNetworkChainIdHandler = (e: any) => {
  //   //console.log(e);

  //   setAddNFTNetwork({ ...addNFTNetworkData, chain_id: e });
  // };

  const nftNetworkExplURLHandler = (e: any) => {
    //console.log(e);

    setAddNFTNetwork({ ...addNFTNetworkData, explorer_url: e });
  };

  // const nftNetworkCurrencySymbolHandler = (e: any) => {
  //   //console.log(e);

  //   setAddNFTNetwork({ ...addNFTNetworkData, currency_symbol: e });
  // };

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
                navigate("/nft-networks");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add NFTNetworks
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
              NFT Network Name
            </Typography>

            <InputText
              placeholder="Enter NFT Network Name"
              inputTextHandler={(e: any) => nftNetworkNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              NFT Network URL
            </Typography>

            <InputText
              placeholder="Enter NFT Network url"
              inputTextHandler={(e: any) => nftNetworkURLHandler(e)}
            />
          </Grid>
          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Chain Id
            </Typography>

            <InputText
              placeholder="Enter Chain id"
              inputTextHandler={(e: any) => nftNetworkChainIdHandler(e)}
            />
          </Grid> */}

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Network Explorer URL
            </Typography>

            <InputText
              placeholder="Enter network explorer URL"
              inputTextHandler={(e: any) => nftNetworkExplURLHandler(e)}
            />
          </Grid>

          {/* <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Currency Symbol
            </Typography>

            <InputText
              placeholder="Enter currency symbol"
              inputTextHandler={(e: any) => nftNetworkCurrencySymbolHandler(e)}
            />
          </Grid> */}

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              NFT Network Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddNFTNetwork}
              addIconData={addNFTNetworkData}
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
              // currentStatus={newArrList[0].status}
              setInputSelectValue={setAddNFTNetwork}
              getInputSelectvalue={addNFTNetworkData}
              //serverStatus={newArrList[0].status}
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
                  Title="Add nftNetwork"
                  lgBtnHandler={nftNetworkAddHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NFTNetworkAdd;
