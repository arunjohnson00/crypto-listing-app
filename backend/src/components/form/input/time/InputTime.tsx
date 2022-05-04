import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const InputTime = ({
  time,
  setTime,
  name,
  presaleStart,
  presaleEnd,
  publicMintStart,
  publicMintEnd,
  disabled,
}: any | number) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        // label="Time"
        value={
          presaleStart === true
            ? time.start_time
            : presaleEnd === true
            ? time.end_time
            : publicMintStart === true
            ? time.start_time
            : publicMintEnd === true && time.end_time
        }
        onChange={(newValue) => {
          presaleStart === true && setTime({ ...time, start_time: newValue });
          presaleEnd === true && setTime({ ...time, end_time: newValue });
          publicMintStart === true &&
            setTime({ ...time, start_time: newValue });
          publicMintEnd === true && setTime({ ...time, end_time: newValue });
        }}
        renderInput={(params: any) => (
          <TextField
            {...params}
            name={name}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "7px",
                height: "43px",
              },
            }}
          />
        )}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export default InputTime;
