import { ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { theme } from "./style/style";
import { ToastContainer } from "material-react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
