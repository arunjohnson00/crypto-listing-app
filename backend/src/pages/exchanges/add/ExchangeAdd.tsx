import { useState } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import ExchangeUploader from "../../../components/form/input/file/exchangeicon/ExchangeUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addExchangeRequest } from "../../../store/action/addExchangeAction";

const ExchangeAdd = () => {
  const dispatch = useDispatch();
  const [addExchangeData, setAddExchange] = useState({
    name: "",
    status: 1,
    url: "",
    thumb_icon: "",
  });

  const exchangeAddHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };

    dispatch(addExchangeRequest(addExchangeData, successHandler, errorHandler));
  };

  const exchageNameHandler = (e: any) => {
    //console.log(e);
    setAddExchange({ ...addExchangeData, name: e });
  };

  const exchageURLHandler = (e: any) => {
    //console.log(e);
    setAddExchange({ ...addExchangeData, url: e });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Add Exchanges
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
              Exchange Name
            </Typography>

            <InputText
              placeholder="Enter Exchange Name"
              inputTextHandler={(e: any) => exchageNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange URL
            </Typography>

            <InputText
              placeholder="Enter Exchange url"
              inputTextHandler={(e: any) => exchageURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange Icon
            </Typography>

            <ExchangeUploader
              setAddExchange={setAddExchange}
              addExchangeData={addExchangeData}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
              <LargeBtn
                Title="Add new exchange"
                lgBtnHandler={exchangeAddHandler}
              />
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExchangeAdd;
