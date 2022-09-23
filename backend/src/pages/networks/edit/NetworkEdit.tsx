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
import { updateNetworkRequest } from "../../../store/action";
import { editNetworkRequest } from "../../../store/action";

const NetworkEdit = () => {
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
  const [editNetworkData, setEditNetwork] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    chain_id: "",
    explorer_url: "",
    currency_symbol: "",
  });

  // Display the key/value pairs
  console.log(editNetworkData);
  const networkEditHandler = () => {
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
    editNetworkData.thumb_icon !== "" &&
      typeof editNetworkData.thumb_icon !== "string" &&
      formData.append("thumb_icon", editNetworkData.thumb_icon);
    formData.append("network_icon", editNetworkData.thumb_icon);
    formData.append("id", editNetworkData.id);
    formData.append("name", editNetworkData.name);
    formData.append("url", editNetworkData.url);
    formData.append("chain_id", editNetworkData.chain_id);
    formData.append("explorer_url", editNetworkData.explorer_url);
    formData.append("currency_symbol", editNetworkData.currency_symbol);

    formData.append("status", editNetworkData.status);

    dispatch(updateNetworkRequest(formData, successHandler, errorHandler));
  };

  const networkNameHandler = (e: any) => {
    //console.log(e);

    setEditNetwork({ ...editNetworkData, name: e });
  };

  const networkURLHandler = (e: any) => {
    //console.log(e);

    setEditNetwork({ ...editNetworkData, url: e });
  };

  const networkChainIdHandler = (e: any) => {
    //console.log(e);

    setEditNetwork({ ...editNetworkData, chain_id: e });
  };

  const networkExplURLHandler = (e: any) => {
    //console.log(e);

    setEditNetwork({ ...editNetworkData, explorer_url: e });
  };

  const networkCurrencySymbolHandler = (e: any) => {
    //console.log(e);

    setEditNetwork({ ...editNetworkData, currency_symbol: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditNetwork(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editNetworkRequest({ id: id }, successHandler, errorHandler));
  }, [dispatch, id]);

  return (
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
              value={editNetworkData?.name}
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
              value={editNetworkData?.url}
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
              value={editNetworkData?.chain_id}
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
              value={editNetworkData?.explorer_url}
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
              value={editNetworkData?.currency_symbol}
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
              setAddIcon={setEditNetwork}
              addIconData={editNetworkData}
              slug="network_icons"
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
              // currentStatus={editNetworkData?.status}
              setInputSelectValue={setEditNetwork}
              getInputSelectvalue={editNetworkData}
              serverStatus={editNetworkData?.status}
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
