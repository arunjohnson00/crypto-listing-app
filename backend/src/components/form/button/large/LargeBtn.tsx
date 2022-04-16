import Button from "@mui/material/Button";

const LargeBtn = ({ Title }: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: "173px",
        height: "41px",
        backgroundColor: "rgb(61, 56, 122)",
        borderRadius: "8px",
        fontSize: "14px",
        textTransform: "capitalize",
        fontWeight: "300",
      }}
    >
      {Title}
    </Button>
  );
};

export default LargeBtn;
