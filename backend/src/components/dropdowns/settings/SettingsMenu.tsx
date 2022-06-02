import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

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
        <MenuItem>
          <Link
            to="/settings"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            Settings
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SettingsMenu;
