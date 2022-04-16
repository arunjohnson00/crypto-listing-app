import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const InputDateTime = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props: any) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default InputDateTime;
