import "./App.css";
import HomePage from "./pages/home/HomePage";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid
        sx={{
          backgroundColor: "#01061A",
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
