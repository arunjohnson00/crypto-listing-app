import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateNetworkRequest } from "../../../store/action";

const NetworkEdit = () => {
  const networkList = useSelector((ntList: any) => {
    return ntList.listNetworkReducer.natworkListAll.data;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();

  console.log(location.state.id);

  let newArrList = networkList.filter(
    (listData: any) => listData.id === location.state.id
  );
  console.log(newArrList[0].id);
  const [loading, setLoading] = useState(false);
  const [addNetworkData, setAddNetwork] = useState({
    id: newArrList[0].id,
    name: newArrList[0].name,
    status: 1,
    url: newArrList[0].url,
    thumb_icon: "",
    chain_id: newArrList[0].chain_id,
    explorer_url: newArrList[0].explorer_url,
    currency_symbol: newArrList[0].currency_symbol,
  });

  // Display the key/value pairs

  const networkEditHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);
      setLoading(true);
      toast.success("Network Successfully Updated", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };

    const formData = new FormData();
    addNetworkData.thumb_icon !== "" &&
      formData.append("thumb_icon", addNetworkData.thumb_icon);
    formData.append("id", addNetworkData.id);
    formData.append("name", addNetworkData.name);
    formData.append("url", addNetworkData.url);
    formData.append("chain_id", addNetworkData.chain_id);
    formData.append("explorer_url", addNetworkData.explorer_url);
    formData.append("currency_symbol", addNetworkData.currency_symbol);

    formData.append("status", "1");

    dispatch(updateNetworkRequest(formData, successHandler, errorHandler));
    setTimeout(() => {
      navigate("/networks");
    }, 3000);
  };

  const networkNameHandler = (e: any) => {
    //console.log(e);

    setAddNetwork({ ...addNetworkData, name: e });
  };

  const networkURLHandler = (e: any) => {
    //console.log(e);

    setAddNetwork({ ...addNetworkData, url: e });
  };

  const networkChainIdHandler = (e: any) => {
    //console.log(e);

    setAddNetwork({ ...addNetworkData, chain_id: e });
  };

  const networkExplURLHandler = (e: any) => {
    //console.log(e);

    setAddNetwork({ ...addNetworkData, explorer_url: e });
  };

  const networkCurrencySymbolHandler = (e: any) => {
    //console.log(e);

    setAddNetwork({ ...addNetworkData, currency_symbol: e });
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
                navigate("/networks");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Edit Networks
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
              Network Name
            </Typography>

            <InputText
              placeholder="Enter network Name"
              inputTextHandler={(e: any) => networkNameHandler(e)}
              value={newArrList[0].name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Network URL
            </Typography>

            <InputText
              placeholder="Enter network url"
              inputTextHandler={(e: any) => networkURLHandler(e)}
              value={newArrList[0].url}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Chain Id
            </Typography>

            <InputText
              placeholder="Enter Chain id"
              inputTextHandler={(e: any) => networkChainIdHandler(e)}
              value={newArrList[0].chain_id}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Explorer URL
            </Typography>

            <InputText
              placeholder="Enter explorer URL"
              inputTextHandler={(e: any) => networkExplURLHandler(e)}
              value={newArrList[0].explorer_url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Currency Symbol
            </Typography>

            <InputText
              placeholder="Enter currency symbol"
              inputTextHandler={(e: any) => networkCurrencySymbolHandler(e)}
              value={newArrList[0].currency_symbol}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Network Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddNetwork}
              addIconData={addNetworkData}
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
                  Title="Update network"
                  lgBtnHandler={networkEditHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NetworkEdit;
