import { useState } from "react";
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
}: any) => {
  console.log(checkboxStatus);

  const [inputValue, setinputValue] = useState(value);
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
          inputTextHandler(e.target.value);
          setinputValue(e.target.value);
        }}
      />
    </ThemeProvider>
  );
};

export default InputText;
