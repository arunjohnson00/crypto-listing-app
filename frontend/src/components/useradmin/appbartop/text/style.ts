import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#010619",
          height: "39px",
          color: "#4e566d",
          //backgroundColor: "rgb(246, 246, 246)",
          // border: "1px solid rgb(200, 200, 200)",
          fontSize: ".8rem",
          borderRadius: "20px",
          border: "1px solid #090F2C",
          fontWeight: 400,
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
