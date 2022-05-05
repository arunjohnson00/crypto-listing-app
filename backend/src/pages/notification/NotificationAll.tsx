import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsersNotificationRequest } from "../../store/action";
import { Grid, Typography, Stack, Box } from "@mui/material";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";

import HorizonatalList from "../../components/list/horizontal/HorizonatalList";

const NotificationAll = () => {
  const navigate = useNavigate();
  const userNotificationList = useSelector((notificationList: any) => {
    return notificationList.userNotificationReducer.notificationListAll.data;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const successHandler = (res: any) => {
      console.log(res);
    };

    const errorHandler = (err: any) => {
      console.log(err);
    };
    dispatch(
      listUsersNotificationRequest("emptyData", successHandler, errorHandler)
    );
  }, [dispatch]);

  console.log(userNotificationList.data);
  return (
    <Grid container spacing={2}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <HorizonatalList />
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
          pt={3}
          pb={1}
        >
          <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <IconButton>
                  <ArrowBackIosTwoToneIcon
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  />
                </IconButton>

                <Typography variant="h5" sx={{ textAlign: "left" }}>
                  Notification
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box
          sx={{ maxWidth: "758px", background: "white", borderRadius: "5px" }}
          pt={5}
          pl={5}
          pb={4}
        >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} pl={3}>
            {userNotificationList &&
              userNotificationList.map((notification: any, index: number) => {
                return (
                  <Stack direction="column" spacing={1} key={index} mb={3}>
                    <Typography variant="subtitle1" sx={{ lineHeight: "1.2" }}>
                      {parse(notification.notification_text)}
                    </Typography>
                    <span
                      style={{
                        color: "blue",
                        marginTop: 0,
                        fontSize: "14px",
                      }}
                    >
                      <i>{moment(notification.created_at).fromNow()}</i>
                    </span>
                  </Stack>
                );
              })}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotificationAll;
