import Button from "@mui/material/Button";

const ViewMoreBtn = ({ title }: any) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "15px",
        textTransform: "capitalize",
        fontSize: "0.775rem",
        height: "40px",
        paddingLeft: 3,
        paddingRight: 3,
      }}
      style={{
        background: "linear-gradient(to right, #5652DD 0%, #104EAB 100%)",
      }}
    >
      {title}
    </Button>
  );
};

export default ViewMoreBtn;
