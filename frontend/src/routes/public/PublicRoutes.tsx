import { Navigate, useLocation } from "react-router-dom";
import AppView from "../../layouts/view/AppView";

export const PublicRoutes: any = (
  { children }: { children: JSX.Element },
  windowInnerWidth: any
) => {
  // const auth =
  //   sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
  // let location = useLocation();
  // if (auth) {
  //   return <Navigate replace to="/" state={{ from: location }} />;
  // }
  return <AppView windowInnerWidth={windowInnerWidth}>{children}</AppView>;
};

export default PublicRoutes;
