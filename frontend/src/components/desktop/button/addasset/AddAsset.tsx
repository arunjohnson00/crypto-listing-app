import { Button, Typography } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const AddAsset = () => {
  return (
    <Button
      variant="text"
      startIcon={<AddBoxOutlinedIcon sx={{ color: "#23B184" }} />}
    >
      <Typography
        variant="subtitle2"
        sx={{ textTransform: "capitalize", color: "#ffffff", fontWeight: 400 }}
      >
        Add Asset
      </Typography>
    </Button>
  );
};

export default AddAsset;
