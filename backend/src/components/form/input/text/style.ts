import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: "312px",
          height: "34px",
          backgroundColor: "rgb(246, 246, 246)",
          // border: "1px solid rgb(200, 200, 200)",
          fontSize: "14px",
          "&$focus": {
            border: "1px solid rgb(200, 200, 200)",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&$focused": {
            border: "1px solid rgb(200, 200, 200)",
          },
        },
      },
    },
  },
});
