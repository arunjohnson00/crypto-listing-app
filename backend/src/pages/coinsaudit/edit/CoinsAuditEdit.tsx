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
import { updateCoinAuditRequest } from "../../../store/action";
import { editCoinAuditRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";

const CoinsAuditEdit = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [updateCoinAuditData, setUpdateCoinAudit] = useState({
    id: "",
    name: "",
    status: "",
    icon: "",
    thumb_icon: "",
    url: "",
    image: "",
  });

  console.log(updateCoinAuditData);
  // Display the key/value pairs

  const coinAuditEditHandler = () => {
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
        navigate("/coins-audit");
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
    formData.append("id", updateCoinAuditData.id);
    formData.append("thumb_icon", updateCoinAuditData.thumb_icon);
    formData.append("url", updateCoinAuditData.url);
    formData.append("name", updateCoinAuditData.name);

    formData.append("status", updateCoinAuditData.status);

    dispatch(updateCoinAuditRequest(formData, successHandler, errorHandler));
  };

  const coinAuditNameHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinAudit({ ...updateCoinAuditData, name: e });
  };

  const auditURLHandler = (e: any) => {
    //console.log(e);

    setUpdateCoinAudit({ ...updateCoinAuditData, url: e });
  };

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setUpdateCoinAudit(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editCoinAuditRequest({ id: id }, successHandler, errorHandler));
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
                  navigate("/coins-audit");
                }}
              />
            </IconButton>

            <Typography variant="h5" sx={{ textAlign: "left" }}>
              Add Audit
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
                Audit Name
              </Typography>

              <InputText
                placeholder="Enter audit Name"
                inputTextHandler={(e: any) => coinAuditNameHandler(e)}
                value={updateCoinAuditData?.name}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Audit URL
              </Typography>

              <InputText
                placeholder="Enter Audit url"
                inputTextHandler={(e: any) => auditURLHandler(e)}
                value={updateCoinAuditData?.url}
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Audit Icon
              </Typography>

              <IconUploader
                setAddIcon={setUpdateCoinAudit}
                addIconData={updateCoinAuditData}
                slug="coins_audit"
              />
            </Grid>

            <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
                Status
              </Typography>

              <InputSelect
                selectOptions={selectOptions}
                currentStatus={updateCoinAuditData?.status}
                setInputSelectValue={setUpdateCoinAudit}
                getInputSelectvalue={updateCoinAuditData}
                serverStatus={updateCoinAuditData?.status}
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
                    Title="Update User"
                    lgBtnHandler={coinAuditEditHandler}
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

export default CoinsAuditEdit;
