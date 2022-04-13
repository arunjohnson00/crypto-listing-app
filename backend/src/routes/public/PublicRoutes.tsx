import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login/Login";

export const PublicRoutes: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;
