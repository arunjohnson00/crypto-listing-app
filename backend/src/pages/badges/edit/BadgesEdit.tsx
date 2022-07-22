import { useState, useEffect } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import InputSelect from "../../../components/form/select/InputSelect";
import { updateBadgeRequest } from "../../../store/action";
import { editBadgeRequest } from "../../../store/action";

const BadgesEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
  const dispatch = useDispatch();
  const location: any = useLocation();

  const navigate = useNavigate();
  let { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [editBadgeData, setEditbadge] = useState({
    id: "",
    name: "",
    status: "",
    url: "",
    thumb_icon: "",
    icon: "",
  });

  // Display the key/value pairs

  const badgeEditHandler = () => {
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
        navigate("/badges");
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

    editBadgeData.icon !== "" &&
      typeof editBadgeData.icon !== "string" &&
      formData.append("icom", editBadgeData.icon);

    formData.append("name", editBadgeData.name);
    formData.append("url", editBadgeData.url);
    formData.append("id", editBadgeData.id);
    formData.append("status", editBadgeData.status);

    dispatch(updateBadgeRequest(formData, successHandler, errorHandler));
  };

  const badgeNameHandler = (e: any) => {
    //console.log(e);

    setEditbadge({ ...editBadgeData, name: e });
  };

  const badgeURLHandler = (e: any) => {
    //console.log(e);

    setEditbadge({ ...editBadgeData, url: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setEditbadge(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editBadgeRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/badges");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Edit badges
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
              badge Name
            </Typography>

            <InputText
              placeholder="Enter badge Name"
              inputTextHandler={(e: any) => badgeNameHandler(e)}
              value={editBadgeData?.name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              badge URL
            </Typography>

            <InputText
              placeholder="Enter badge url"
              inputTextHandler={(e: any) => badgeURLHandler(e)}
              value={editBadgeData?.url}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              badge Icon
            </Typography>

            <IconUploader
              setAddIcon={setEditbadge}
              addIconData={editBadgeData}
              slug="badge_icons"
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              // currentStatus={editBadgeData?.status}
              setInputSelectValue={setEditbadge}
              getInputSelectvalue={editBadgeData}
              serverStatus={editBadgeData?.status}
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
                  Title="Update badge"
                  lgBtnHandler={badgeEditHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BadgesEdit;
