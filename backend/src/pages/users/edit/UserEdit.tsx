import { useState } from "react";
import { Grid, Typography, Box, Stack, IconButton } from "@mui/material";
import LargeBtn from "../../../components/form/button/large/LargeBtn";
import AvatarUploder from "../../../components/form/input/file/avatar/AvatarUploder";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { updateUserRequest } from "../../../store/action";
import InputSelect from "../../../components/form/select/InputSelect";

const UserEdit = () => {
  const userList = useSelector((usrList: any) => {
    return usrList.listUsersReducer.userListAll.data;
  });

  console.log(userList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location: any = useLocation();

  console.log(location.state.id);

  let newArrList = userList.filter(
    (userData: any) => userData.id === location.state.id
  );
  const [updateUsersData, setUpdateUser] = useState({
    id: newArrList[0].id,
    name: newArrList[0].name,
    status: newArrList[0].status,
    email: newArrList[0].email,
    password: newArrList[0].password,
    avatar: "",
  });

  console.log(updateUsersData);

  // Display the key/value pairs

  const userUpdateHandler = () => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };

    const formData = new FormData();
    formData.append("id", updateUsersData.id);
    updateUsersData.avatar !== "" &&
      formData.append("avatar", updateUsersData.avatar);
    formData.append("name", updateUsersData.name);
    formData.append("email", updateUsersData.email);
    formData.append("password", updateUsersData.password);

    formData.append("status", updateUsersData.status);

    dispatch(updateUserRequest(formData, successHandler, errorHandler));
    navigate("/users");
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

  const selectOptions = [
    { title: "Approved", value: 1 },
    { title: "Processing", value: 2 },
    { title: "Rejected/Blocked", value: 3 },
  ];
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
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Name
            </Typography>

            <InputText
              placeholder="Enter User Name"
              inputTextHandler={(e: any) => userNameHandler(e)}
              value={newArrList[0].name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Email
            </Typography>

            <InputText
              placeholder="Enter email"
              inputTextHandler={(e: any) => userEmailHandler(e)}
              value={newArrList[0].email}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Password
            </Typography>

            <InputText
              placeholder="Enter Password"
              inputTextHandler={(e: any) => userPasswordHandler(e)}
              value={newArrList[0].password}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Avatar
            </Typography>

            <AvatarUploder
              setAddIcon={setUpdateUser}
              addIconData={updateUsersData}
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <InputSelect
              selectOptions={selectOptions}
              currentStatus={newArrList[0].status}
              setInputSelectValue={setUpdateUser}
              getInputSelectvalue={updateUsersData}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Stack spacing={2} sx={{ alignItems: "flex-end" }} pb={5} mr={5}>
              <LargeBtn Title="Update User" lgBtnHandler={userUpdateHandler} />
            </Stack>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserEdit;
