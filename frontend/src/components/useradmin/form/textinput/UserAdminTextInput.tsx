import { TextField } from "@mui/material";
import React from "react";

const UserAdminTextInput = ({ placeholder, inputHandler }: any) => {
  return (
    <TextField
      id="outlined-basic"
      variant="filled"
      placeholder={placeholder}
      fullWidth
      InputProps={{ disableUnderline: true }}
      sx={{
        backgroundColor: "#07012F",
        height: 42,
        borderRadius: 4,
        marginBottom: 0,

        "& .MuiInputBase-root": {
          paddingTop: 0,
          color: "#FFFFFF",
          fontSize: ".85rem",
          fontWeight: 400,
        },

        "& .MuiFilledInput-root": {
          background: "#07012F",
          height: 42,
          borderRadius: 4,
          marginBottom: 0,

          border: "1px solid #180C4E",
        },
        "& .MuiFilledInput-input": {
          paddingTop: 1,
        },
        "&input:-webkit-autofill": {
          borderRadius: "0px",
          backgroundColor: "none",
        },
      }}
      onChange={(e: any) => inputHandler(e?.target?.value)}
    />
  );
};

export default UserAdminTextInput;
