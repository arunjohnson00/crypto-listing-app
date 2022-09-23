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
import AvatarUploder from "../../../components/form/input/file/avatar/AvatarUploder";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "material-react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";
import "material-react-toastify/dist/ReactToastify.css";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { editUserRequest } from "../../../store/action";
import { updateUserRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";

const UserEdit = () => {
  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Suspended", value: 2 },
    { title: "Processing", value: 3 },
  ];

  let { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();

  console.log(location.state.id);

  const [loading, setLoading] = useState(false);
  const [updateUsersData, setUpdateUser] = useState({
    id: "",
    name: "",
    status: "",
    email: "",
    password: "",
    avatar: "",
  });

  console.log(updateUsersData);

  // Display the key/value pairs

  const userUpdateHandler = () => {
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
    formData.append("id", updateUsersData.id);
    updateUsersData.avatar !== "" &&
      typeof updateUsersData.avatar !== "string" &&
      formData.append("avatar", updateUsersData.avatar);
    formData.append("name", updateUsersData.name);
    formData.append("email", updateUsersData.email);
    formData.append("password", updateUsersData.password);

    formData.append("status", updateUsersData.status);

    dispatch(updateUserRequest(formData, successHandler, errorHandler));
  };

  const userNameHandler = (e: any) => {
    //console.log(e);

    setUpdateUser({ ...updateUsersData, name: e });
  };

  const userEmailHandler = (e: any) => {
    //console.log(e);

    setUpdateUser({ ...updateUsersData, email: e });
  };

  const userPasswordHandler = (e: any) => {
    //console.log(e);

    setUpdateUser({ ...updateUsersData, password: e });
  };

  useEffect(() => {
    const successHandler = (res: any) => {
      setUpdateUser(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(editUserRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/users");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            Edit User
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
              User Name
            </Typography>

            <InputText
              placeholder="Enter User Name"
              inputTextHandler={(e: any) => userNameHandler(e)}
              value={updateUsersData?.name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              User Email
            </Typography>

            <InputText
              placeholder="Enter email"
              inputTextHandler={(e: any) => userEmailHandler(e)}
              value={updateUsersData?.email}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              User Password
            </Typography>

            <InputText
              placeholder="Enter Password"
              inputTextHandler={(e: any) => userPasswordHandler(e)}
              value={updateUsersData?.password}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", fontSize: ".9rem", fontWeight: 600 }}
              mb={1}
            >
              Avatar
            </Typography>

            <AvatarUploder
              setAddIcon={setUpdateUser}
              addIconData={updateUsersData}
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
              currentStatus={updateUsersData?.status}
              setInputSelectValue={setUpdateUser}
              getInputSelectvalue={updateUsersData}
              serverStatus={updateUsersData?.status}
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
                  lgBtnHandler={userUpdateHandler}
                />
              )}
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserEdit;
