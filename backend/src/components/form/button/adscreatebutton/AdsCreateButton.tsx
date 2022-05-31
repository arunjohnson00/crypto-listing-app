import { Button } from "@mui/material";

const AdsCreateButton = ({ title }: any) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "#363062", borderRadius: 2 }}
    >
      {title}
    </Button>
  );
};

export default AdsCreateButton;
