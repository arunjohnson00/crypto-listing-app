import "./App.css";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import AppView from "./layouts/view/AppView";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/theme/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Grid
          sx={{
            background: "linear-gradient(180deg, #01061A 60%, #00030A)",
          }}
        >
          <Container fixed>
            <AppRoutes />
          </Container>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
