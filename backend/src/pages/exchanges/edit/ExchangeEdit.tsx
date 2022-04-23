import { useState } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateExchangeRequest } from "../../../store/action";

const ExchangeEdit = () => {
  const dispatch = useDispatch();
  const location: any = useLocation();

  const navigate = useNavigate();

  console.log(location.state.id);
  const exchangeList = useSelector((exList: any) => {
    return exList.listExchangeReducer.exchangeListAll.data;
  });

  let newArrList = exchangeList.filter(
    (listData: any) => listData.id === location.state.id
  );
  console.log(newArrList[0].id);
  const [editExchangeData, setEditExchange] = useState({
    id: newArrList[0].id,
    name: newArrList[0].name,
    status: 1,
    url: newArrList[0].url,
    thumb_icon: "",
  });

  // Display the key/value pairs

  const exchangeEditHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };

    const formData = new FormData();

    editExchangeData.thumb_icon !== "" &&
      formData.append("thumb_icon", editExchangeData.thumb_icon);

    formData.append("name", editExchangeData.name);
    formData.append("url", editExchangeData.url);
    formData.append("id", editExchangeData.id);

    formData.append("status", "1");

    dispatch(updateExchangeRequest(formData, successHandler, errorHandler));
    navigate("/exchange");
  };

  const exchageNameHandler = (e: any) => {
    //console.log(e);

    setEditExchange({ ...editExchangeData, name: e });
  };

  const exchageURLHandler = (e: any) => {
    //console.log(e);

    setEditExchange({ ...editExchangeData, url: e });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Edit Exchanges
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
              value={newArrList[0].name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange URL
            </Typography>

            <InputText
              placeholder="Enter Exchange url"
              inputTextHandler={(e: any) => exchageURLHandler(e)}
              value={newArrList[0].url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Exchange Icon
            </Typography>

            <IconUploader
              setAddIcon={setEditExchange}
              addIconData={editExchangeData}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
              <LargeBtn
                Title="Update exchange"
                lgBtnHandler={exchangeEditHandler}
              />
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExchangeEdit;
