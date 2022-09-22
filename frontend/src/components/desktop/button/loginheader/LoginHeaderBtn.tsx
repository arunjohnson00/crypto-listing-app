import { Button, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginHeaderBtn = ({ title, handler, icon }: any) => {
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  return (
    <Button
      variant="text"
      startIcon={icon}
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
