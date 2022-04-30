import Button from "@mui/material/Button";

const MediumBtn = ({ Title, mdBtnHandler }: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        minWidth: "104px",
        maxWidth: "104px",
        height: "32px",
        backgroundColor: "rgb(61, 56, 122)",
        borderRadius: "8px",
        fontSize: "14px",
        textTransform: "capitalize",
        fontWeight: "300",
      }}
      onClick={mdBtnHandler}
    >
      {Title}
    </Button>
  );
};

export default MediumBtn;
