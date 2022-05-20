import { useEffect, useState } from "react";
import { Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import InputText from "../../../components/form/input/text/InputText";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import HorizonatalList from "../../../components/list/horizontal/HorizonatalList";
import { viewUserRequest } from "../../../store/action";

const serverAPIUrl = process.env.REACT_APP_API_URL;

const UserView = () => {
  const location: any = useLocation();
  const navigate: any = useNavigate();

  let { id } = useParams();
  const dispatch: any = useDispatch();

  const [viewUser, setViewUser] = useState({
    id: "",
    name: "",
    status: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
      setViewUser(res.data.data);
    };

    const errorHandler = (err: any) => {
      //console.log(err);
    };
    dispatch(viewUserRequest({ id: id }, successHandler, errorHandler));
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
                navigate("/users");
              }}
            />
          </IconButton>

          <Typography variant="h5" sx={{ textAlign: "left" }}>
            View User
          </Typography>
        </Stack>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={3}
          pl={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <img
              src={`${serverAPIUrl}public/uploads/users/${viewUser?.avatar}`}
              alt={viewUser?.avatar}
              width="100%"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Name
            </Typography>

            <InputText placeholder="Enter User Name" value={viewUser?.name} />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Email
            </Typography>

            <InputText placeholder="Enter email" value={viewUser?.email} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              User Password
            </Typography>

            <InputText
              placeholder="Enter Password"
              value={viewUser?.password}
            />
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pt={3}>
            <Typography variant="subtitle1" sx={{ textAlign: "left" }} mb={1}>
              Status
            </Typography>

            <Typography>{viewUser?.status}</Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserView;
