import { ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./style/style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
