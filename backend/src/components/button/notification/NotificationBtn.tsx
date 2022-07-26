import { Avatar, Box } from "@mui/material";
import { StyledBadge } from "./style";
import { Icon } from "@mui/material";
import notificationIcon from "../../../assets/icon/gray/notification_icon_gray.png";

const NotificationBtn = ({ handleNotificationClick }: any) => {
  return (
    <StyledBadge variant="dot" color={"success"}>
      <Box
        onClick={handleNotificationClick}
        component="span"
        sx={{
          width: 45,
          height: 45,
          borderRadius: "8px",
          background: "#FFFFFF",
          border: "#EBEBEB 1px solid ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Icon>notifications_active</Icon> */}
        <Avatar
          alt="menu"
          variant="square"
          src={notificationIcon}
          sx={{ width: 27, height: 27, padding: 0.2 }}
        />
      </Box>
    </StyledBadge>
  );
};

export default NotificationBtn;
