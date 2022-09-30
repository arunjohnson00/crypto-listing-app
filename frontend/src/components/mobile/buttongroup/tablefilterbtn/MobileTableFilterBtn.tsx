import { useState } from "react";
import Button from "@mui/material/Button";

import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import TableFilterMenu from "./tablefiltermenu/TableFilterMenu";
import { Box, Divider, Stack } from "@mui/material";
import TableMultiSelectFilterMenu from "./tablemultiselectfiltermenu/TableMultiSelectFilterMenu";

const MobileTableFilterBtn = () => {
  const [selectedBtn, setSelectedBtn] = useState(-1);

  return (
    <Stack
      sx={{
        borderRadius: 4,
        height: 38,
        backgroundColor: "#010E3A",
        width: 320,

        overflow: "hidden",
        alignItems: "center",
        maxWidth: 320,
      }}
      direction="row"
      spacing={0.4}
      px={1}
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
      <Divider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ height: 25, alignSelf: "center", borderColor: "#1565C0" }}
      />

      <TableFilterMenu
        data=""
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
        index={1}
      />
      <Divider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ height: 25, alignSelf: "center", borderColor: "#1565C0" }}
      />
      <TableMultiSelectFilterMenu
        data=""
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
        index={2}
        varient="badges"
      />
      <Divider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ height: 25, alignSelf: "center", borderColor: "#1565C0" }}
      />
      <TableMultiSelectFilterMenu
        data=""
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
        index={3}
        varient="platform"
      />
    </Stack>
  );
};

export default MobileTableFilterBtn;
