import { Box } from "@mui/material";
import { StyledBadge } from "./style";
import { Icon } from "@mui/material";

const SettingsBtn = () => {
  return (
    <StyledBadge variant="dot" color={"success"}>
      <Box
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
        <Icon>settings</Icon>
      </Box>
    </StyledBadge>
  );
};

export default SettingsBtn;
