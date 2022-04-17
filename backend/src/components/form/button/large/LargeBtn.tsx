import Button from "@mui/material/Button";

const LargeBtn = ({ Title, lgBtnHandler }: any) => {
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
      onClick={lgBtnHandler}
    >
      {Title}
    </Button>
  );
};

export default LargeBtn;
