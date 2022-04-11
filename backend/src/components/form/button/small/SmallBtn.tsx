import Button from "@mui/material/Button";

const SmallBtn = () => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "78px",
        height: "30px",
        backgroundColor: "rgb(61, 56, 122)",
        borderRadius: "6px",
        fontSize: "14px",
        textTransform: "capitalize",
        fontWeight: "300",
      }}
    >
      Small
    </Button>
  );
};

export default SmallBtn;
