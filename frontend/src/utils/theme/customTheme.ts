import { createTheme } from "@mui/material";
import { Typography } from "@mui/material";

export const customTheme = createTheme({
  typography: {
    fontFamily: [
      "Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica, Arial, sans-serif",
    ].join(","),
  },
});
