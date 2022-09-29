import Button from "@mui/material/Button";

const MobileViewMoreBtn = ({ title }: any) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        borderRadius: "15px",
        textTransform: "capitalize",
        fontSize: "0.675rem",
        height: "30px",
        paddingLeft: 1.5,
        paddingRight: 1.5,
        background: "#030b2e",
        "&:hover": { background: "#14136e" },
      }}
      style={{
        background: "linear-gradient(to right, #5652DD 0%, #104EAB 100%)",
      }}
    >
      {title}
    </Button>
  );
};

export default MobileViewMoreBtn;
