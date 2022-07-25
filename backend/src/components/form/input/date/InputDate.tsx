import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InputDate = ({
  date,
  setDate,
  name,
  presaleStart,
  presaleEnd,
  publicMintStart,
  publicMintEnd,
  disabled,
  serverRef,

  airdropStart,
  eventDate,
  adWizard,
  height,
}: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        renderInput={(props: any) => (
          <TextField
            {...props}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "7px",
                height: height ? height : "43px",
                fontSize: ".85rem",
              },
            }}
            name={name}
          />
        )}
        value={
          presaleStart === true
            ? date.start_date
            : presaleEnd === true
            ? date.end_date
            : publicMintStart === true
            ? date.start_date
            : publicMintEnd === true
            ? date.end_date
            : airdropStart === true
            ? date.start_date
            : eventDate === true
            ? date.event_date
            : adWizard === true && date.start_date
        }
        //publicMintStart===true&&date.start_date
        onChange={(newValue) => {
          presaleStart === true && setDate({ ...date, start_date: newValue });
          presaleEnd === true && setDate({ ...date, end_date: newValue });
          publicMintStart === true &&
            setDate({ ...date, start_date: newValue });
          publicMintEnd === true && setDate({ ...date, end_date: newValue });
          airdropStart === true && setDate({ ...date, start_date: newValue });
          eventDate === true && setDate({ ...date, event_date: newValue });
          adWizard === true && setDate({ ...date, start_date: newValue });
        }}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export default InputDate;
