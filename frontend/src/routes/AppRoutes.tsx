import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/desktop/home/HomePage";
import PublicRoutes from "./public/PublicRoutes";
import PrivateRoute from "./private/PrivateRoute";
import MobileHomePage from "../pages/mobile/MobileHomePage";
import SingleCoinPage from "../pages/desktop/singlecoinpage/SingleCoinPage";
import SingleNftPage from "../pages/desktop/singlenftpage/SingleNftPage";
import AppLoginPage from "../pages/desktop/login/AppLoginPage";
import AppNewsPage from "../pages/desktop/news/AppNewsPage";
import AppRegisterPage from "../pages/desktop/register/AppRegisterPage";
import UserDashboard from "../pages/useradmin/dashboard/UserDashboard";

const AppRoutes = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWindowInnerWidth(window.innerWidth);
  });

  return (
    <BrowserRouter>
      <Routes>
        {windowInnerWidth >= 900 ? (
          <Route
            path="/"
            element={
              <PublicRoutes>
                <HomePage windowInnerWidth={windowInnerWidth} />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <PublicRoutes>
                <MobileHomePage />
              </PublicRoutes>
            }
          />
        )}
        <Route
          path="/coin"
          element={
            <PublicRoutes>
              <SingleCoinPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/nft"
          element={
            <PublicRoutes>
              <SingleNftPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <AppLoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/news"
          element={
            <PublicRoutes>
              <AppNewsPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <AppRegisterPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />

        {/* <Route path="/" element={<Navigate replace to="/dashboard" />} /> */}
        <Route path="*" element={<p>Theres nothing </p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
