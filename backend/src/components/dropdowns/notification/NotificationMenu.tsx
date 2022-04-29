import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

const NotificationMenu = ({
  anchorNotification,
  openNotification,
  handleNotificationClose,
}: any) => {
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
      >
        {options.map((option: any, index: number) => (
          <MenuItem key={index}>{option}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NotificationMenu;
