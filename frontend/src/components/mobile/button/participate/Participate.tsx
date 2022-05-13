import Button from "@mui/material/Button";

const Participate = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50px",
        textTransform: "capitalize",
        fontSize: "0.775rem",
        height: "35px",
      }}
      style={{
        background: "#3c38ff",
      }}
    >
      Participate
    </Button>
  );
};

export default Participate;
