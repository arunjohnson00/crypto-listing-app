import { Button, Typography } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const AddAsset = ({ handler }: any) => {
  return (
    <Button
      variant="text"
      startIcon={<AddBoxOutlinedIcon sx={{ color: "#23B184" }} />}
      onClick={handler}
    >
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "capitalize", color: "white" }}
      >
        Add Asset
      </Typography>
    </Button>
  );
};

export default AddAsset;
