import { Avatar, Box } from "@mui/material";
import { StyledBadge } from "./style";
import { Icon } from "@mui/material";
import settingsIcon from "../../../assets/icon/gray/setting_icon_gray.png";
const SettingsBtn = ({ handleSettingsClick }: any) => {
  return (
    <StyledBadge variant="dot" color={"success"}>
      <Box
        onClick={handleSettingsClick}
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
        {/* <Icon>settings</Icon> */}
        <Avatar
          alt="menu"
          variant="square"
          src={settingsIcon}
          sx={{ width: 28, height: 28, padding: 0.2 }}
        />
      </Box>
    </StyledBadge>
  );
};

export default SettingsBtn;
