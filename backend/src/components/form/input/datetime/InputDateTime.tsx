import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const InputDateTime = ({
  dateTime,
  setDateTime,
  start_date,
  statusTime,
}: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props: any) => (
          <TextField
            {...props}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "7px",
                height: "43px",
              },
            }}
          />
        )}
        label={
          start_date === true
            ? "Select Start Date"
            : statusTime === true
            ? "Status Time"
            : "Select End Date"
        }
        value={
          statusTime === true
            ? dateTime.statusDateTime
            : start_date === true
            ? dateTime.start_date
            : dateTime.end_date
        }
        onChange={(newValue: any) => {
          statusTime === true
            ? setDateTime({ ...dateTime, statusDateTime: newValue })
            : start_date === true &&
              setDateTime({ ...dateTime, start_date: newValue });
          start_date === false &&
            setDateTime({ ...dateTime, end_date: newValue });
        }}
      />
    </LocalizationProvider>
  );
};

export default InputDateTime;
