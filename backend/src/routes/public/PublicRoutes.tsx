import { Navigate, useLocation } from "react-router-dom";

export const PublicRoutes: any = ({ children }: { children: JSX.Element }) => {
  const auth =
    sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  let location = useLocation();
  if (auth) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }
  return children;
};

export default PublicRoutes;
