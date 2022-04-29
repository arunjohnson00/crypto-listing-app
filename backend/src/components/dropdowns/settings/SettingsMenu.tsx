import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

const SettingsMenu = ({
  anchorSettings,
  openSettings,
  handleSettingsClose,
}: any) => {
  return (
    <div>
      <Menu
        id="settings-menu"
        anchorEl={anchorSettings}
        open={openSettings}
        onClose={handleSettingsClose}
        MenuListProps={{
          "aria-labelledby": "settings-button",
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

export default SettingsMenu;
