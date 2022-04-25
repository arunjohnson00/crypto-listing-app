import { useState } from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const UserView = () => {
  const userList = useSelector((usrList: any) => {
    return usrList.listUsersReducer.userListAll.data;
  });

  console.log(userList);

  const location: any = useLocation();

  console.log(location.state.id);

  let newArrList = userList.filter(
    (userData: any) => userData.id === location.state.id
  );

  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          View Users
        </Typography>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <img
              src={`${serverAPIUrl}public/uploads/users/${newArrList[0].avatar}`}
              alt={newArrList[0].avatar}
              width="100%"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Name
            </Typography>

            <InputText
              placeholder="Enter User Name"
              value={newArrList[0].name}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Email
            </Typography>

            <InputText placeholder="Enter email" value={newArrList[0].email} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Password
            </Typography>

            <InputText
              placeholder="Enter Password"
              value={newArrList[0].password}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <Typography>{newArrList[0].status}</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserView;
