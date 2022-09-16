import { Grid } from "@mui/material";
import AppView from "./layouts/view/AppView";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/theme/customTheme";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Grid
          sx={{
            background: "linear-gradient(180deg, #01061A 60%, #00030A)",
          }}
        >
          <AppRoutes />
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
