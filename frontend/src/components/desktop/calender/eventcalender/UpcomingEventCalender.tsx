import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const UpcomingEventCalender = ({ date, setDate }: any) => {
  return (
    <Box
      sx={{ backgroundColor: "#030C37", borderRadius: 5, color: "#FFFFF5" }}
      mt={{ xs: 3, sm: 3, md: 7 }}
    >
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </Box>
  );
};

export default UpcomingEventCalender;
