import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";

const AppBarNavBtn = ({ title, iconStatus, path }: any) => {
  return (
    <Button
      variant="text"
      endIcon={
        iconStatus &&
        iconStatus === true && (
          <KeyboardArrowDownTwoToneIcon sx={{ color: "#23B184" }} />
        )
      }
    >
      <Link
        to={{
          pathname: path,
        }}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="subtitle2"
          sx={{ textTransform: "capitalize", color: "white" }}
        >
          {title && title}
        </Typography>
      </Link>
    </Button>
  );
};

export default AppBarNavBtn;
