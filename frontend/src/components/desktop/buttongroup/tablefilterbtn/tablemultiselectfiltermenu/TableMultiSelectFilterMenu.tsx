import { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { Avatar, Stack, Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "#020b33",
      color: "#FFFFFF",
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const TableMultiSelectFilterMenu = ({
  data,
  selectedBtn,
  setSelectedBtn,
  index,
  variant,
}: any) => {
  const [personName, setPersonName] = useState<any>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // useEffect(() => {
  //   variant === "badges"
  //     ? setPersonName(["By Badges"])
  //     : variant === "platform" && setPersonName(["By Platform"]);
  // }, [setPersonName]);

  return (
    <div>
      <FormControl sx={{ m: 0, width: 140 }}>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          displayEmpty
          renderValue={
            personName.length !== 0
              ? (selected) => selected.join(", ")
              : () =>
                  variant === "badges"
                    ? "By Badges"
                    : variant === "platform" && "By Platform"
          }
          MenuProps={MenuProps}
          onClick={() => setSelectedBtn(2)}
          IconComponent={() => (
            <KeyboardArrowDownSharpIcon sx={{ color: "#1976d2" }} />
          )}
          sx={{
            backgroundColor:
              parseInt(selectedBtn) === parseInt(index)
                ? "transparent"
                : "#010E3A",
            borderRadius: 0,
            color: "#FFFFFF",
            fontSize: ".85rem",
            height: 39,

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: 0,
              outline: 0,
            },
            ".MuiOutlinedInput-notchedOutline": { border: 0, outline: 0 },
            "&MuiInputBase-input": { paddingRight: 0 },
            "&:hover": {
              backgroundColor: "#0a194c",
            },

            "& .MuiInputBase-input ": {
              padding: 1,
              borderRadius: 0,
            },
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                size="small"
                checked={personName.indexOf(name) > -1}
                sx={{ color: "#FFFFFF" }}
              />
              {/* <ListItemText primary={name} /> */}

              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                  sx={{ width: 16, height: 16 }}
                />
                <Typography sx={{ fontSize: ".85rem" }}>{name}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default TableMultiSelectFilterMenu;
