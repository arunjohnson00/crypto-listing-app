import Button from "@mui/material/Button";

const VoteBtn = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "50px",
        textTransform: "capitalize",
        fontSize: "0.675rem",
        height: 23,
      }}
      style={{
        background: "linear-gradient(to right, #5652DD 0%, #104EAB 100%)",
      }}
    >
      Vote
    </Button>
  );
};

export default VoteBtn;
