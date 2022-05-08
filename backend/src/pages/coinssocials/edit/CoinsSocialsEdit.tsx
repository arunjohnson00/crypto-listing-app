import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateCoinSocialRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";

const CoinsSocialsEdit = () => {
  const coinSocialList = useSelector((socialList: any) => {
    return socialList.socialsReducer.listSocials.data;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();

  console.log(location.state.id);

  let newArrList = coinSocialList.filter(
    (userData: any) => userData.id === location.state.id
  );
  const [loading, setLoading] = useState(false);
  const [updateCoinSocialData, setUpdateCoinSocial] = useState({
    id: newArrList[0].id,
    name: newArrList[0].name,
    status: newArrList[0].status,
  });

  console.log(updateCoinSocialData);
  // Display the key/value pairs

  const coinSocialEditHandler = () => {
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
        navigate("/coins-socials");
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
    formData.append("id", updateCoinSocialData.id);

    formData.append("name", updateCoinSocialData.name);

    formData.append("status", updateCoinSocialData.status);

    dispatch(updateCoinSocialRequest(formData, successHandler, errorHandler));
  };

  const coinSocialNameHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinSocial({ ...updateCoinSocialData, name: e });
  };

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
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
                  navigate("/coins-socials");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Edit Social
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
                Social Name
              </Typography>

              <InputText
                placeholder="Enter Social Name"
                inputTextHandler={(e: any) => coinSocialNameHandler(e)}
                value={newArrList[0].name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                currentStatus={newArrList[0].status}
                setInputSelectValue={setUpdateCoinSocial}
                getInputSelectvalue={updateCoinSocialData}
                serverStatus={newArrList[0].status}
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
                    Title="Update Social"
                    lgBtnHandler={coinSocialEditHandler}
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

export default CoinsSocialsEdit;
