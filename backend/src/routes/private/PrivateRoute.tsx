import { Navigate, useLocation } from "react-router-dom";
import LayoutView from "../../layouts/common/view/LayoutView";

const PrivateRoute: any = ({ children }: { children: JSX.Element }) => {
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (!auth) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  return <LayoutView>{children}</LayoutView>;
};

export default PrivateRoute;
