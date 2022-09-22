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
import { addNetworkRequest } from "../../../store/action";

const NetworkAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addNetworkData, setAddNetwork] = useState({
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    chain_id: "",
    explorer_url: "",
    currency_symbol: "",
  });

  // Display the key/value pairs

  const networkAddHandler = () => {
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
        navigate("/networks");
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
    formData.append("thumb_icon", addNetworkData.thumb_icon);
    formData.append("name", addNetworkData.name);
    formData.append("url", addNetworkData.url);
    formData.append("chain_id", addNetworkData.chain_id);
    formData.append("explorer_url", addNetworkData.explorer_url);
    formData.append("currency_symbol", addNetworkData.currency_symbol);
    formData.append("status", addNetworkData.status);

    dispatch(addNetworkRequest(formData, successHandler, errorHandler));
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
            Add Networks
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
              Network Name
            </Typography>

            <InputText
              placeholder="Enter network Name"
              inputTextHandler={(e: any) => networkNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Network URL
            </Typography>

            <InputText
              placeholder="Enter network url"
              inputTextHandler={(e: any) => networkURLHandler(e)}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Chain Id
            </Typography>

            <InputText
              placeholder="Enter Chain id"
              inputTextHandler={(e: any) => networkChainIdHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Explorer URL
            </Typography>

            <InputText
              placeholder="Enter explorer URL"
              inputTextHandler={(e: any) => networkExplURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Currency Symbol
            </Typography>

            <InputText
              placeholder="Enter currency symbol"
              inputTextHandler={(e: any) => networkCurrencySymbolHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Network Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddNetwork}
              addIconData={addNetworkData}
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
              setInputSelectValue={setAddNetwork}
              getInputSelectvalue={addNetworkData}
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
                  Title="Add network"
                  lgBtnHandler={networkAddHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NetworkAdd;
