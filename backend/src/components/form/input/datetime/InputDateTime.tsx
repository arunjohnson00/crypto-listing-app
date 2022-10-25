import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InputDateTime = ({
  dateTime,
  setDateTime,
  start_date,
  statusTime,
  ServerValue,
  ads_start_date,
}: any) => {
  const [timeUpdate, setTimeUpdate] = useState<any>(ServerValue);
  useEffect(() => {
    setTimeUpdate(ServerValue);
  }, [ServerValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        minDate={
          new Date(
            new Date(new Date()).setDate(new Date(new Date()).getDate() - 30)
          )
        }
        renderInput={(props: any) => (
          <TextField
            {...props}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "7px",
                height: "43px",
                fontSize: ".85rem",
                minWidth: 311,
              },
            }}
          />
        )}
        // label={
        //   start_date === true
        //     ? "Select Start Date"
        //     : statusTime === true
        //     ? "Status Time"
        //     : "Select End Date"
        // }
        value={
          timeUpdate
            ? timeUpdate
            : statusTime === true
            ? dateTime.statusDateTime
            : start_date === true
            ? dateTime.start_date
            : ads_start_date === true
            ? dateTime?.banner_start_date
            : dateTime.end_date
        }
        onChange={(newValue: any) => {
          statusTime === true
            ? setDateTime({ ...dateTime, statusDateTime: newValue })
            : start_date === true
            ? setDateTime({ ...dateTime, start_date: newValue })
            : ads_start_date === true &&
              setDateTime({ ...dateTime, banner_start_date: newValue });
          start_date === false &&
            setDateTime({ ...dateTime, end_date: newValue });
          timeUpdate && setTimeUpdate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default InputDateTime;
