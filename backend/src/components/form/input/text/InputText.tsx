import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style";

const InputText = ({
  placeholder,
  inputTextHandler,
  value,
  name,
  id,
  checkboxStatus,
  width,
  InputProps,
}: any) => {
  const [inputValue, setinputValue] = useState();
  useEffect(() => {
    setinputValue(value);
  }, [value]);

  return (
    <ThemeProvider theme={theme}>
      <TextField
        disabled={checkboxStatus}
        id={id}
        label=""
        name={name}
        size="small"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: any) => {
          inputTextHandler && inputTextHandler(e.target.value);
          setinputValue(e.target.value);
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            width: `${!width && "312px"}`,
            paddingRight: `${InputProps && 0}`,
          },
          // "& .MuiInputAdornment-root": {
          //   color: "rgb(61 56 122)",
          // },
        }}
        InputProps={InputProps && InputProps}
      />
    </ThemeProvider>
  );
};

export default InputText;
