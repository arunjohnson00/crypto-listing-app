import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Stack, Menu, MenuItem, Divider } from "@mui/material";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import parse from "html-react-parser";

import { listUsersNotificationRequest } from "../../../store/action";

const NotificationMenu = ({
  anchorNotification,
  openNotification,
  handleNotificationClose,
}: any) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const dispatch = useDispatch();
  const userNotificationList = useSelector((notificationList: any) => {
    return notificationList.userNotificationReducer.userNotifications.data;
  });

  useEffect(() => {
    const successHandler = (res: any) => {};
    const errorHandler = (err: any) => {};
    dispatch(
      listUsersNotificationRequest("emptyData", successHandler, errorHandler)
    );
  }, [dispatch]);
  return (
    <div>
      <Menu
        id="lock-menu"
        anchorEl={anchorNotification}
        open={openNotification}
        onClose={handleNotificationClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
        sx={{
          "& .MuiPaper-root": {
            background: "#363062",
            width: "500px",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "1rem", fontWeight: 500 }}
          py={1}
        >
          Notifications
        </Typography>

        <Divider sx={{ borderBottomWidth: 2, backgroundColor: "white" }} />
        {userNotificationList !== undefined &&
        userNotificationList.length !== 0 ? (
          userNotificationList.map((notification: any, index: number) => {
            return (
              <MenuItem
                key={index}
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    width: "100%",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography variant="caption" sx={{ color: "white" }}>
                      {index + 1}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "white",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        maxWidth: "340px",
                      }}
                    >
                      {parse(notification.notification_text)}
                    </Typography>
                  </Stack>
                  <Typography variant="caption" sx={{ color: "#00BE78" }}>
                    {timeAgo.format(new Date(notification.created_at))}
                  </Typography>
                </Stack>
              </MenuItem>
            );
          })
        ) : (
          <Stack direction="column" spacing={1} mb={3} py={1.5}>
            <Typography sx={{ color: "white", fontSize: ".8rem" }}>
              Not Data Found
            </Typography>
          </Stack>
        )}
        <Divider sx={{ borderBottomWidth: 1, backgroundColor: "white" }} />
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          <Link to="/user-notifications-all" style={{ textDecoration: "none" }}>
            {" "}
            <Typography variant="caption" sx={{ color: "white" }}>
              View all
            </Typography>
          </Link>
        </Stack>
      </Menu>
    </div>
  );
};

export default NotificationMenu;
