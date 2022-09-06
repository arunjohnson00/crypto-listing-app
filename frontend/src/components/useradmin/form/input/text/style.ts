import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "white",
          height: "39px",
          //backgroundColor: "rgb(246, 246, 246)",
          // border: "1px solid rgb(200, 200, 200)",
          fontSize: "14px",
          borderRadius: "8px",
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
