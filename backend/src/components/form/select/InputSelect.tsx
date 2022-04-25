import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { MenuProps } from "./style";

const InputSelect = ({
  selectOptions,
  currentStatus,
  setInputSelectValue,
  getInputSelectvalue,
}: any) => {
  let optionSelected = selectOptions.filter(
    (optionData: any) => optionData.value === currentStatus
  );

  console.log(optionSelected);
  const handleChange = (event: SelectChangeEvent) => {
    setInputSelectValue({ ...getInputSelectvalue, status: event.target.value });
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 0 }}>
      <Select
        displayEmpty
        value={getInputSelectvalue.status}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span>Select Network</span>;
          }

          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          height: "35px",
          width: "184px",
          background: "#f6f6f6",
          borderRadius: "8px",
          color: "rgb(200, 200, 200)",
          fontSize: "14px",
          fontWeight: "100",
          fontStyle: "normal",
        }}
      >
        <MenuItem disabled value="">
          <span>{optionSelected[0].title}</span>
        </MenuItem>
        {selectOptions.map((option: any, index: number) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.title}{" "}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
