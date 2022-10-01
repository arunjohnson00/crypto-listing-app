import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useMediaQuery } from "@mui/material";

const InputDateTime = ({
  dateTime,
  setDateTime,
  start_date,
  statusTime,
  ServerValue,
}: any) => {
  const [timeUpdate, setTimeUpdate] = useState<any>(ServerValue);
  const matches = useMediaQuery("(min-width:900px)");
  useEffect(() => {
    setTimeUpdate(ServerValue);
  }, [ServerValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
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
                minWidth: matches === true ? 311 : "auto",
                background: "#010619",
                color: "#878787e8",
                border: "1px solid #090F2C",
                svg: { color: "#878787e8" },
                input: { color: "#878787e8" },
                label: { color: "#878787e8" },
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
          timeUpdate
            ? timeUpdate
            : statusTime === true
            ? dateTime.statusDateTime
            : start_date === true
            ? dateTime.start_date
            : dateTime.end_date
        }
        onChange={(newValue: any) => {
          statusTime === true || ServerValue
            ? setDateTime({ ...dateTime, statusDateTime: newValue })
            : start_date === true &&
              setDateTime({ ...dateTime, start_date: newValue });
          start_date === false &&
            setDateTime({ ...dateTime, end_date: newValue });
          timeUpdate && setTimeUpdate(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export default InputDateTime;
