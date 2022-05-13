import { Button, Typography } from "@mui/material";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";

const AppBarNavBtn = ({ title, iconStatus }: any) => {
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
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "capitalize", color: "white" }}
      >
        {title && title}
      </Typography>
    </Button>
  );
};

export default AppBarNavBtn;
