import LayoutView from "./layouts/common/view/LayoutView";
import { useLocation } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  const currentLocation = useLocation();

  const jwToken: any = sessionStorage.getItem("authToken");

  return (
    <div className="App">
      {jwToken && currentLocation.pathname !== "/" ? <LayoutView /> : null}
    </div>
  );
}

export default App;
