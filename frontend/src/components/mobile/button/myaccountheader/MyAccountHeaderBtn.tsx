import { Button, Typography } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const MyAccountHeaderBtn = ({ title, handler }: any) => {
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  return (
    <Button
      variant="text"
      startIcon={<AccountBoxOutlinedIcon sx={{ color: "#23B184" }} />}
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

export default MyAccountHeaderBtn;
