import LayoutView from "./layouts/common/view/LayoutView";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const jwToken: any = sessionStorage.getItem("authToken");

  useEffect(() => {
    if (!jwToken) {
      navigate("/");
    }
  }, [jwToken, navigate]);

  return (
    <div className="App">
      {jwToken && currentLocation.pathname !== "/" ? <LayoutView /> : null}
    </div>
  );
}

export default App;
