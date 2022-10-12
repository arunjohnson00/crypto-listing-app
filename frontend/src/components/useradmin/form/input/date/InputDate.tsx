import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMediaQuery } from "@mui/material";

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
  event_start_date,
  event_end_date,
  adWizard,
  height,
}: any) => {
  const matches = useMediaQuery("(min-width:900px)");
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
                height: height ? height : "43px",
                minWidth: matches === true ? 311 : "auto",
                fontSize: ".85rem",
                background: "#010619",
                color: "#878787e8",
                border: "1px solid #090F2C",
                svg: { color: "#878787e8" },
                input: { color: "#878787e8" },
                label: { color: "#878787e8" },
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
            : event_start_date === true
            ? date.start_date !== undefined
              ? date.start_date
              : date.event_date
            : event_end_date === true
            ? date.end_date
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
          (event_start_date === true) === true &&
            setDate({ ...date, start_date: newValue });
          (event_end_date === true) === true &&
            setDate({ ...date, end_date: newValue });
          adWizard === true && setDate({ ...date, start_date: newValue });
        }}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

export default InputDate;
