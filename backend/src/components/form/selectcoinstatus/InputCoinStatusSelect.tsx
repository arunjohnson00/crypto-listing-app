import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { toast } from "material-react-toastify";

const InputCoinStatusSelect = ({
  selectOptions,
  currentStatus,
  setInputSelectValue,
  getInputSelectvalue,
  serverStatus,
}: any) => {
  const handleChange = (event: SelectChangeEvent | any) => {
    // console.log(getInputSelectvalue);
    setInputSelectValue({
      ...getInputSelectvalue,
      status: event.target.value,

      is_scheduled: event.target.value === 2 ? 1 : 0,
    });

    toast.warn(`Status Selected`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 0 }}>
      <Select
        defaultValue={serverStatus && serverStatus}
        displayEmpty
        value={serverStatus ? serverStatus : getInputSelectvalue.status}
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
            <MenuItem
              key={index}
              value={option.value}
              selected={serverStatus && serverStatus === option.value && true}
            >
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default InputCoinStatusSelect;
