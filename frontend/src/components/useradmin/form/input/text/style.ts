import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#010619",
          height: "39px",
          color: "#ffffffe8",
          backgroundColor: "#000000",
          // border: "1px solid rgb(200, 200, 200)",
          fontSize: "14px",
          borderRadius: "8px",
          border: "1.5px solid #4b4b4b",
          fontFamily:
            "Inter,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif",
          "&$focus": {
            border: "1px solid transparent",
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&$focused": {
            border: "1px solid transparent",
          },
          input: {
            "&::placeholder": {
              color: "#cccccc",
              fontSize: ".75rem",
            },
            // if you also want to change the color of the input, this is the prop you'd use
          },
        },
      },
    },
  },
});
