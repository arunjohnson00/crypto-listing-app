import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import IconUploader from "../../../components/form/input/file/icon/IconUploader";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addMenuCardRequest } from "../../../store/action";

const MenuCardAdd = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [addMenuCardData, setAddMenuCard] = useState({
    title: "",
    status: 1,
    sub_title: "",
    thumb_icon: "",
    url: "",
  });

  const [loading, setLoading] = useState(false);

  // Display the key/value pairs

  const menuCardAddHandler = () => {
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
        navigate("/menu-cards");
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
    formData.append("icon", addMenuCardData.thumb_icon);
    formData.append("title", addMenuCardData.title);
    formData.append("sub_title", addMenuCardData.sub_title);
    formData.append("url", addMenuCardData.url);

    formData.append("status", "1");

    dispatch(addMenuCardRequest(formData, successHandler, errorHandler));
  };

  const menuCardTitleHandler = (e: any) => {
    //console.log(e);

    setAddMenuCard({ ...addMenuCardData, title: e });
  };

  const menuCardSubTitleHandler = (e: any) => {
    //console.log(e);

    setAddMenuCard({ ...addMenuCardData, sub_title: e });
  };

  const menuCardURLHandler = (e: any) => {
    //console.log(e);

    setAddMenuCard({ ...addMenuCardData, url: e });
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
                navigate("/menu-cards");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add MenuCards
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
              MenuCard Title
            </Typography>

            <InputText
              placeholder="Enter MenuCard Title"
              inputTextHandler={(e: any) => menuCardTitleHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              MenuCard Subtitle
            </Typography>

            <InputText
              placeholder="Enter MenuCard Subtitle"
              inputTextHandler={(e: any) => menuCardSubTitleHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              MenuCard URL
            </Typography>

            <InputText
              placeholder="Enter URL"
              inputTextHandler={(e: any) => menuCardURLHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              MenuCard Icon
            </Typography>

            <IconUploader
              setAddIcon={setAddMenuCard}
              addIconData={addMenuCardData}
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
                  Title="Add new MenuCard"
                  lgBtnHandler={menuCardAddHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MenuCardAdd;
