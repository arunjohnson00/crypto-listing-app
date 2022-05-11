import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const TableBtnGroup = () => {
  return (
    <ButtonGroup
      variant="contained"
      aria-label="outlined primary button group"
      sx={{ borderRadius: "11px", overflow: "hidden" }}
    >
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
          color: "#03E2B1",
        }}
      >
        All Coins
      </Button>
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
        }}
      >
        Today's Best
      </Button>
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
        }}
      >
        New Listings
      </Button>
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
        }}
      >
        Presales
      </Button>
    </ButtonGroup>
  );
};

export default TableBtnGroup;
