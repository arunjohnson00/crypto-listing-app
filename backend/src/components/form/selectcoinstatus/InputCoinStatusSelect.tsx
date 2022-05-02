import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { toast } from "material-react-toastify";

const InputCoinStatusSelect = ({
  selectOptions,
  currentStatus,
  setInputSelectValue,
  getInputSelectvalue,
}: any) => {
  const handleChange = (event: SelectChangeEvent) => {
    setInputSelectValue({ ...getInputSelectvalue, status: event.target.value });
    toast.warn(`Status Selected`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    getInputSelectvalue.status === 2 &&
      setInputSelectValue({ ...getInputSelectvalue, is_scheduled: 1 });
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 0 }}>
      <Select
        displayEmpty
        value={getInputSelectvalue.status}
        onChange={handleChange}
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
          <span>Select Status</span>
        </MenuItem>
        {selectOptions.map((option: any, index: number) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputCoinStatusSelect;
