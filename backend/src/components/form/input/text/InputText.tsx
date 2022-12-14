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
  type,
}: any) => {
  const [inputValue, setinputValue] = useState();
  useEffect(() => {
    setinputValue(
      type === "number" ? value?.toString()?.replace(/[^0-9\.]/g, "") : value
    );
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
          setinputValue(
            type === "number"
              ? e.target.value.replace(/[^0-9\.]/g, "")
              : e.target.value
          );
        }}
        sx={{
          fontSize: ".85rem",
          "& .MuiOutlinedInput-root": {
            width: `${width ? width : "312px"}`,
            paddingRight: `${InputProps && 0}`,
            fontSize: ".85rem",
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
