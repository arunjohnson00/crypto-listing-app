import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import { updateNFTNetworkRequest } from "../../../store/action";
import { editNFTNetworkRequest } from "../../../store/action";

const NFTNetworkEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();
  let { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [editNFTNetworkData, setEditNFTNetwork] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    chain_id: "",
    network_url: "",
    explorer_url: "",
    currency_symbol: "",
  });

  // Display the key/value pairs
  console.log(editNFTNetworkData);
  const nftNetworkEditHandler = () => {
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
        navigate("/nft-listing-network");
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
    editNFTNetworkData.thumb_icon !== "" &&
      typeof editNFTNetworkData.thumb_icon !== "string" &&
      formData.append("thumb_icon", editNFTNetworkData.thumb_icon);
    formData.append("id", editNFTNetworkData.id);
    formData.append("name", editNFTNetworkData.name);
    formData.append("network_url", editNFTNetworkData.network_url);
    formData.append("chain_id", editNFTNetworkData.chain_id);
    formData.append("explorer_url", editNFTNetworkData.explorer_url);
    formData.append("currency_symbol", editNFTNetworkData.currency_symbol);

    formData.append("status", editNFTNetworkData.status);

    dispatch(updateNFTNetworkRequest(formData, successHandler, errorHandler));
  };

  const nftNetworkNameHandler = (e: any) => {
    //console.log(e);

    setEditNFTNetwork({ ...editNFTNetworkData, name: e });
  };

  const nftNetworkURLHandler = (e: any) => {
    //console.log(e);

    setEditNFTNetwork({ ...editNFTNetworkData, network_url: e });
  };

  // const nftNetworkChainIdHandler = (e: any) => {
  //   //console.log(e);

  //   setEditNFTNetwork({ ...editNFTNetworkData, chain_id: e });
  // };

  const nftNetworkExplURLHandler = (e: any) => {
    //console.log(e);

    setEditNFTNetwork({ ...editNFTNetworkData, explorer_url: e });
  };

  // const nftNetworkCurrencySymbolHandler = (e: any) => {
  //   //console.log(e);

  //   setEditNFTNetwork({ ...editNFTNetworkData, currency_symbol: e });
  // };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditNFTNetwork(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editNFTNetworkRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/nft-listing-network");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Edit NFT Networks
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
              value={editNFTNetworkData?.name}
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
              value={editNFTNetworkData?.network_url}
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
              value={editNFTNetworkData?.chain_id}
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
              value={editNFTNetworkData?.explorer_url}
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
              value={editNFTNetworkData?.currency_symbol}
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
              setAddIcon={setEditNFTNetwork}
              addIconData={editNFTNetworkData}
              slug="nft_networks"
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
              // currentStatus={editNFTNetworkData?.status}
              setInputSelectValue={setEditNFTNetwork}
              getInputSelectvalue={editNFTNetworkData}
              serverStatus={editNFTNetworkData?.status}
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
                  Title="Update nftNetwork"
                  lgBtnHandler={nftNetworkEditHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NFTNetworkEdit;
