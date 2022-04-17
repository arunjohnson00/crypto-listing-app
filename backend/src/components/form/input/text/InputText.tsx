import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style";

const InputText = ({ placeholder, inputTextHandler }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        label=""
        size="small"
        placeholder={placeholder}
        onChange={(e: any) => inputTextHandler(e.target.value)}
      />
    </ThemeProvider>
  );
};

export default InputText;
