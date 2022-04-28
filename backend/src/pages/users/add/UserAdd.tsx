import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import AvatarUploder from "../../../components/form/input/file/avatar/AvatarUploder";
import InputText from "../../../components/form/input/text/InputText";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { addUsersRequest } from "../../../store/action";

const UserAdd = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addUsersData, setAddUser] = useState({
    name: "",
    status: 1,
    email: "",
    password: "",
    avatar: "",
  });

  console.log(addUsersData);

  // Display the key/value pairs

  const userAddHandler = () => {
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
        navigate("/users");
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
    formData.append("avatar", addUsersData.avatar);
    formData.append("name", addUsersData.name);
    formData.append("email", addUsersData.email);
    formData.append("password", addUsersData.password);

    formData.append("status", "1");

    dispatch(addUsersRequest(formData, successHandler, errorHandler));
  };

  const userNameHandler = (e: any) => {
    //console.log(e);

    setAddUser({ ...addUsersData, name: e });
  };

  const userEmailHandler = (e: any) => {
    //console.log(e);

    setAddUser({ ...addUsersData, email: e });
  };

  const userPasswordIdHandler = (e: any) => {
    //console.log(e);

    setAddUser({ ...addUsersData, password: e });
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
                navigate("/users");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Add User
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
              User Name
            </Typography>

            <InputText
              placeholder="Enter User Name"
              inputTextHandler={(e: any) => userNameHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Email
            </Typography>

            <InputText
              placeholder="Enter email"
              inputTextHandler={(e: any) => userEmailHandler(e)}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Password
            </Typography>

            <InputText
              placeholder="Enter Password"
              inputTextHandler={(e: any) => userPasswordIdHandler(e)}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Avatar
            </Typography>

            <AvatarUploder setAddIcon={setAddUser} addIconData={addUsersData} />
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
                <LargeBtn Title="Add User" lgBtnHandler={userAddHandler} />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserAdd;
