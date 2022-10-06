import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "./style";

const InputTextDrawer = ({
  placeholder,
  inputTextHandler,
  value,
  name,
  id,
  checkboxStatus,
  width,
  InputProps,
}: any) => {
  const matches = useMediaQuery("(min-width:900px)");
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
          fontSize: ".85rem",
          width: `${width ? width : matches === true ? "312px" : "100%"}`,
          "& .MuiOutlinedInput-root": {
            width: `${width ? width : matches === true ? "312px" : "100%"}`,
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

export default InputTextDrawer;
