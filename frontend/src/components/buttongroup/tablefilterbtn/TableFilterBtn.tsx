import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

const TableFilterBtn = () => {
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
        endIcon={<TuneSharpIcon />}
      >
        Filter
      </Button>
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
        }}
        endIcon={<KeyboardArrowDownSharpIcon />}
      >
        Network
      </Button>
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
        }}
        endIcon={<KeyboardArrowDownSharpIcon />}
      >
        Badges
      </Button>
      <Button
        sx={{
          backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          borderColor: "#051447",
        }}
        endIcon={<KeyboardArrowDownSharpIcon />}
      >
        Platform
      </Button>
    </ButtonGroup>
  );
};

export default TableFilterBtn;
