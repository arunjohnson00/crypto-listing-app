import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style";

const InputText = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        label=""
        size="small"
        placeholder="Placeholder here"
      />
    </ThemeProvider>
  );
};

export default InputText;
