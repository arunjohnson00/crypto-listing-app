import "./App.css";
import HomePage from "./pages/home/HomePage";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid
        sx={{
          background: "linear-gradient(180deg, #01061A 60%, #00030A)",
        }}
      >
        <Container fixed>
          <HomePage />
        </Container>
      </Grid>
    </div>
  );
}

export default App;
