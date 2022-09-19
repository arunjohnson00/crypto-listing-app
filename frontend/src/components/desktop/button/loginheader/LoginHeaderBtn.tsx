import { Button, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginHeaderBtn = ({ title, handler }: any) => {
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  return (
    <Button
      variant="text"
      startIcon={<ExitToAppIcon sx={{ color: "#23B184" }} />}
      onClick={() => handler(navigate, dispatch)}
    >
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "capitalize", color: "white" }}
      >
        {title && title}
      </Typography>
    </Button>
  );
};

export default LoginHeaderBtn;
