import Button from "@mui/material/Button";

const MediumBtn = () => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "104px",
        height: "32px",
        backgroundColor: "rgb(61, 56, 122)",
        borderRadius: "6px",
        fontSize: "14px",
        textTransform: "capitalize",
        fontWeight: "300",
      }}
    >
      Medium
    </Button>
  );
};

export default MediumBtn;
