import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { toast } from "material-react-toastify";

const InputSelect = ({
  selectOptions,
  currentStatus,
  setInputSelectValue,
  getInputSelectvalue,
  serverStatus,
}: any) => {
  // let optionSelected = selectOptions.filter(
  //   (optionData: any) => optionData.value === currentStatus
  // );

  const handleChange = (event: SelectChangeEvent) => {
    setInputSelectValue({ ...getInputSelectvalue, status: event.target.value });
    toast.success(
      `Status changed to ${
        parseInt(event.target.value) === 1
          ? "Approved"
          : parseInt(event.target.value) === 2
          ? "Suspended"
          : parseInt(event.target.value) === 3 && "Processing"
      }`,
      {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };
  //  console.log(optionSelected[0].value);
  return (
    <FormControl sx={{ m: 1, width: 300, mt: 0 }}>
      <Select
        displayEmpty
        value={getInputSelectvalue?.status}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          height: "35px",
          width: "184px",
          background: "#f6f6f6",
          borderRadius: "8px",
          color:
            getInputSelectvalue?.status === 1
              ? "#00e396"
              : getInputSelectvalue?.status === 2
              ? "#ff0023"
              : getInputSelectvalue?.status === 3
              ? "#c105ffd4"
              : "#000000",
          fontSize: "14px",
          fontWeight: 600,
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

export default InputSelect;
