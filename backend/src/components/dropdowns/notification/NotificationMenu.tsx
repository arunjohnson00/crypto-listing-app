import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Stack,
  Box,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import parse from "html-react-parser";

import { listUsersNotificationRequest } from "../../../store/action";

import en from "javascript-time-ago/locale/en.json";
import { Link } from "react-router-dom";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

const NotificationMenu = ({
  anchorNotification,
  openNotification,
  handleNotificationClose,
}: any) => {
  const navigate = useNavigate();
  const userNotificationList = useSelector((notificationList: any) => {
    return notificationList.userNotificationReducer.userNotifications.data;
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
          variant="h6"
          sx={{ color: "white", paddingTop: "10px", paddingBottom: "10px" }}
        >
          Notifications
        </Typography>

        <Divider sx={{ borderBottomWidth: 2, backgroundColor: "white" }} />
        {userNotificationList !== undefined &&
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
          })}
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
