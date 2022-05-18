import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import OutlinedInput from "@mui/material/OutlinedInput";
//import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Checkbox } from "@mui/material";
import { ListItemText } from "@mui/material";
import { toast } from "material-react-toastify";

const getStyles = (
  option: string,
  getInputSelectMultiplevalue: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      getInputSelectMultiplevalue.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const InputSelectMultiple = ({
  selectOptions,
  currentStatus,
  setInputSelectMultipleValue,
  getInputSelectMultiplevalue,
  name,
}: any) => {
  console.log(selectOptions);
  const theme = useTheme();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  // let optionSelected = selectOptions.filter(
  //   (optionData: any) => optionData.value === currentStatus
  // );

  // console.log(optionSelected);

  const handleChange = (
    event: SelectChangeEvent<typeof getInputSelectMultiplevalue>
  ) => {
    const {
      target: { value },
    } = event;
    setInputSelectMultipleValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    //${optionSelected[0].title}

    // toast.warn(`Category Selected  `, {
    //   position: "top-right",
    //   autoClose: 7000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    // });
  };

  //console.log(optionSelected[0].value);
  return (
    <FormControl sx={{ m: 1, width: 300, mt: 0 }}>
      <Select
        multiple
        displayEmpty
        id="demo-multiple-chip"
        value={getInputSelectMultiplevalue}
        onChange={handleChange}
        //  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        inputProps={{ "aria-label": "Without label" }}
        name={name}
        sx={{
          height: "auto",
          width: "auto",
          background: "#f6f6f6",
          borderRadius: "8px",
          color: "rgb(200, 200, 200)",
          fontSize: "14px",
          fontWeight: "100",
          fontStyle: "normal",
        }}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        <MenuItem disabled value="">
          <span>
            {
              //  optionSelected[0].title
            }
          </span>
        </MenuItem>
        {selectOptions?.map((option: any, index: number) => {
          return (
            <MenuItem
              key={index}
              value={option.id}
              style={getStyles(option, getInputSelectMultiplevalue, theme)}
            >
              <Checkbox
                checked={getInputSelectMultiplevalue.indexOf(option.id) > -1}
              />
              <ListItemText primary={option.name} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputSelectMultiple;
