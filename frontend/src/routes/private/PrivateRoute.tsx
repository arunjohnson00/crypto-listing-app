import { Navigate, useLocation } from "react-router-dom";
import UserAdminView from "../../layouts/useradminview/UserAdminView";

const PrivateRoute: any = ({ children }: { children: JSX.Element }) => {
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (!auth) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  return <UserAdminView>{children}</UserAdminView>;
};

export default PrivateRoute;
