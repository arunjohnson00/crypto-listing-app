import { useState } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addNetworkRequest } from "../../../store/action/addNetworkAction";

const NetworkAdd = () => {
  const dispatch = useDispatch();
  const [addNetworkData, setAddNetwork] = useState({
    name: "",
    status: 1,
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
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };

    const formData = new FormData();
    formData.append("thumb_icon", addNetworkData.thumb_icon);
    formData.append("name", addNetworkData.name);
    formData.append("url", addNetworkData.url);
    formData.append("chain_id", addNetworkData.chain_id);
    formData.append("explorer_url", addNetworkData.explorer_url);
    formData.append("currency_symbol", addNetworkData.currency_symbol);

    formData.append("status", "1");

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
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Add Networks
        </Typography>
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
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Network URL
            </Typography>

            <InputText
              placeholder="Enter network url"
              inputTextHandler={(e: any) => networkURLHandler(e)}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Chain Id
            </Typography>

            <InputText
              placeholder="Enter Chain id"
              inputTextHandler={(e: any) => networkChainIdHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Explorer URL
            </Typography>

            <InputText
              placeholder="Enter explorer URL"
              inputTextHandler={(e: any) => networkExplURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Currency Symbol
            </Typography>

            <InputText
              placeholder="Enter currency symbol"
              inputTextHandler={(e: any) => networkCurrencySymbolHandler(e)}
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
              <LargeBtn Title="Add network" lgBtnHandler={networkAddHandler} />
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NetworkAdd;
