import Checkbox from "@mui/material/Checkbox";

const InputCheckbox = () => {
  return (
    <Checkbox
      defaultChecked
      sx={{
        color: "rgb(54, 48, 98)",
        "&.Mui-checked": {
          color: "rgb(54, 48, 98)",
        },
        "& .MuiSvgIcon-root": { fontSize: 24 },
      }}
    />
  );
};

export default InputCheckbox;
