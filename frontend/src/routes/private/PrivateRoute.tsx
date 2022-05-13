import { Navigate, useLocation } from "react-router-dom";
import AppView from "../../layouts/view/AppView";

const PrivateRoute: any = ({ children }: { children: JSX.Element }) => {
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (!auth) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }
  return <AppView>{children}</AppView>;
};

export default PrivateRoute;
