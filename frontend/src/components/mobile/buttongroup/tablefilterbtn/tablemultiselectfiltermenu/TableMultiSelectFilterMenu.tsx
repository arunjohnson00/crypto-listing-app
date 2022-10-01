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
  //     ? setPersonName(["Badges"])
  //     : variant === "platform" && setPersonName([]);
  // }, [setPersonName]);

  return (
    <div>
      <FormControl
        sx={{
          mr: 1,
          my: 1,
          maxWidth: 137,
          minWidth: 137,
          border: "1px solid #010e3a",
          borderRadius: 2,
        }}
        variant="filled"
      >
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          // autoWidth={true}
          onChange={handleChange}
          input={
            <OutlinedInput
              label="Tag"
              sx={{
                padding: 0,
                ".MuiSelect-select": {
                  padding: 0,
                },
              }}
            />
          }
          displayEmpty
          renderValue={
            personName.length !== 0
              ? (selected) => selected.join(", ")
              : () =>
                  variant === "badges"
                    ? "By Badges"
                    : variant === "platform" && "By Platform"
          }
          // renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          onClick={() => setSelectedBtn(2)}
          IconComponent={() => (
            <KeyboardArrowDownSharpIcon sx={{ color: "#1976d2" }} />
          )}
          sx={{
            paddingX: 1,
            backgroundColor:
              parseInt(selectedBtn) === parseInt(index)
                ? "transparent"
                : "transparent",
            borderRadius: 0,
            color: "#FFFFFF",
            fontSize: ".75rem",
            height: 39,
            border: 0,
            outline: 0,
            cursor: "pointer",
            ".MuiOutlinedInput-input": { paddingRight: 0 },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: 0,
              outline: 0,
            },
            "&.MuiSelect-select": {
              paddingRight: 0,
              border: 0,
              outline: 0,
            },
            "&.MuiInputBase-input": { paddingRight: 0, border: 0, outline: 0 },
            "&:hover": {
              // backgroundColor: "#0a194c",
              border: 0,
              outline: 0,
            },
            ".MuiOutlinedInput-notchedOutline": { border: 0, outline: 0 },
            ".MuiOutlinedInput-root": {
              background: "transparent",
            },
            "& .MuiInputBase-input ": {
              padding: 1,
              borderRadius: 0,
              border: 0,
              outline: 0,
              background: "transparent",
            },
          }}
        >
          {/* <MenuItem
            disabled
            value="selected"
            // selected
            sx={{ fontSize: ".85rem" }}
          >
            {variant === "badges"
              ? "By Badges"
              : variant === "platform" && "By Platform"}
          </MenuItem> */}
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
                <Typography sx={{ fontSize: ".75rem" }}>{name}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default TableMultiSelectFilterMenu;
