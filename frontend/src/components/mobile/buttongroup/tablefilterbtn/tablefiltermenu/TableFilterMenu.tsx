import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Avatar, FormControl, Stack, Typography } from "@mui/material";

const TableFilterMenu = ({ data, selectedBtn, setSelectedBtn, index }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState<any>("");
  const menuHandleOpen = ({ e }: any) => {
    setMenuOpen(true);
  };
  const handleChange = (event: SelectChangeEvent<typeof menu>) => {
    setMenu(event.target.value);
  };

  const menuHandleClose = () => {
    setMenuOpen(false);
  };
  console.log(menu);
  return (
    <Select
      labelId="demo-controlled-open-select-label"
      id="demo-controlled-open-select"
      open={menuOpen}
      onClose={menuHandleClose}
      onOpen={menuHandleOpen}
      displayEmpty
      renderValue={() => menu !== undefined && "Network"}
      value={menu}
      autoWidth
      onChange={handleChange}
      onClick={(e: any) => setSelectedBtn(e.target.value)}
      IconComponent={() => (
        <KeyboardArrowDownSharpIcon sx={{ color: "#1976d2" }} />
      )}
      sx={{
        border: 0,
        outline: 0,
        paddingRight: 0,
        backgroundColor:
          parseInt(selectedBtn) === parseInt(index)
            ? "transparent"
            : "transparent",
        borderRadius: 0,
        color: "#FFFFFF",
        fontSize: ".75rem",
        height: 39,
        maxWidth: 105,
        "&.MuiInputBase-root .MuiOutlinedInput-root .MuiSelect-root": {
          border: 0,
          outline: 0,
          color: "#FFFFFF",
          backgroundColor: "#040b29",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: 0,
          outline: 0,
          // color: "#FFFFFF",
          // backgroundColor: "#040b29",
        },
        ".MuiOutlinedInput-notchedOutline": { border: 0, outline: 0 },
        "&MuiInputBase-input": { paddingRight: 0 },
        "&:hover": {
          //backgroundColor: "#0a194c",
          border: 0,
          outline: 0,
        },

        "& .MuiInputBase-input ": {
          padding: 1,
          borderRadius: 0,
          border: 0,
          outline: 0,
        },
      }}
    >
      <MenuItem value={1}>
        <Stack direction="row" spacing={1}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 16, height: 16 }}
          />
          <Typography sx={{ fontSize: ".75rem" }}>Network1</Typography>
        </Stack>
      </MenuItem>
      <MenuItem value={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 16, height: 16 }}
          />
          <Typography sx={{ fontSize: ".75rem" }}>Network 2</Typography>
        </Stack>
      </MenuItem>

      <MenuItem value={3}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 16, height: 16 }}
          />
          <Typography sx={{ fontSize: ".85rem" }}>Network 3</Typography>
        </Stack>
      </MenuItem>
    </Select>
  );
};

export default TableFilterMenu;
