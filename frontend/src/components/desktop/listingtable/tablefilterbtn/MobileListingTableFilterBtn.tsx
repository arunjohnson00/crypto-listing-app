import { useState } from "react";
import Button from "@mui/material/Button";

import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

import { Box, Divider, Stack } from "@mui/material";
import ListingTableFilterMenu from "./tablefiltermenu/ListingTableFilterMenu";
import ListingTableMultiSelectFilterMenu from "./tablemultiselectfiltermenu/ListingTableMultiSelectFilterMenu";

const MobileListingTableFilterBtn = () => {
  const [selectedBtn, setSelectedBtn] = useState(-1);

  return (
    <Stack
      sx={{
        borderRadius: 4,
        height: "auto",
        backgroundColor: "transparent",
        width: "auto",

        overflow: "hidden",
        alignItems: "flex-end",
        // maxWidth: 334,
      }}
      direction="column"
      spacing={0.4}
      px={0}
    >
      {/* <Button
        sx={{
          //backgroundColor: "#010E3A",
          textTransform: "capitalize",
          fontSize: "0.795rem",
          // borderColor: "#051447",
          color: "#03E2B1",
          "&:hover": { background: "none" },
        }}
        endIcon={<TuneSharpIcon />}
      >
        Filter
      </Button> */}

      <Stack
        direction="row"
        spacing={0}
        px={1}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          sx={{ height: 25, alignSelf: "center", borderColor: "#060e31" }}
        /> */}

        <ListingTableFilterMenu
          data=""
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          index={1}
        />
        {/* <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          sx={{ height: 25, alignSelf: "center", borderColor: "#060e31" }}
        /> */}
        <ListingTableMultiSelectFilterMenu
          data=""
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          index={2}
          variant="badges"
        />
        {/* <Divider
          flexItem
          orientation="vertical"
          variant="middle"
          sx={{ height: 25, alignSelf: "center", borderColor: "#060e31" }}
        /> */}
        <ListingTableMultiSelectFilterMenu
          data=""
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          index={3}
          variant="platform"
        />
      </Stack>
    </Stack>
  );
};

export default MobileListingTableFilterBtn;
