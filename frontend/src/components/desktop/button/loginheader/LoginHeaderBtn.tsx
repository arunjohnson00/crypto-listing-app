import { Button, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LoginHeaderBtn = () => {
  return (
    <Button
      variant="text"
      startIcon={<ExitToAppIcon sx={{ color: "#23B184" }} />}
    >
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "capitalize", color: "white" }}
      >
        Login
      </Typography>
    </Button>
  );
};

export default LoginHeaderBtn;
