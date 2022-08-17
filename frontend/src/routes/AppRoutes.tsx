import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/desktop/home/HomePage";
import PublicRoutes from "./public/PublicRoutes";
import PrivateRoute from "./private/PrivateRoute";
import MobileHomePage from "../pages/mobile/mobilehome/MobileHomePage";
import SingleCoinPage from "../pages/desktop/singlecoinpage/SingleCoinPage";
import SingleNftPage from "../pages/desktop/singlenftpage/SingleNftPage";
import AppLoginPage from "../pages/desktop/login/AppLoginPage";
import AppNewsPage from "../pages/desktop/news/AppNewsPage";
import AppRegisterPage from "../pages/desktop/register/AppRegisterPage";
import UserDashboard from "../pages/useradmin/dashboard/UserDashboard";
import NftListingsPage from "../pages/desktop/nftlisting/NftListingsPage";
import CoinsListPage from "../pages/desktop/coins/CoinsListPage";
import ComparisonPage from "../pages/desktop/comparisonpage/ComparisonPage";
import UpcomingEvents from "../pages/desktop/upcomingevents/UpcomingEvents";
import AirdropPage from "../pages/desktop/airdrops/AirdropPage";
import EventsViewPage from "../pages/desktop/eventsview/EventsViewPage";
import PresaleListPage from "../pages/desktop/presales/PresaleListPage";
import DiscoverPage from "../pages/desktop/discover/DiscoverPage";
import MobileSingleCoinPage from "../pages/mobile/mobilesinglecoinpage/MobileSingleCoinPage";
import LeaderBoardPage from "../pages/desktop/leaderboard/LeaderBoardPage";
import ChartPage from "../pages/desktop/chart/ChartPage";
import FreeCoinPage from "../pages/desktop/freecoin/FreeCoinPage";

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

        {windowInnerWidth >= 900 ? (
          <Route
            path="/coin/*"
            element={
              <PublicRoutes>
                <SingleCoinPage />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/coin/*"
            element={
              <PublicRoutes>
                <MobileSingleCoinPage />
              </PublicRoutes>
            }
          />
        )}

        <Route
          path="/nft"
          element={
            <PublicRoutes>
              <SingleNftPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/coins/*"
          element={
            <PublicRoutes>
              <CoinsListPage windowInnerWidth={windowInnerWidth} />
            </PublicRoutes>
          }
        />

        <Route
          path="/presale-list"
          element={
            <PublicRoutes>
              <PresaleListPage windowInnerWidth={windowInnerWidth} />
            </PublicRoutes>
          }
        />

        <Route
          path="/leader-board"
          element={
            <PublicRoutes>
              <LeaderBoardPage windowInnerWidth={windowInnerWidth} />
            </PublicRoutes>
          }
        />

        <Route
          path="/chart"
          element={
            <PublicRoutes>
              <ChartPage windowInnerWidth={windowInnerWidth} />
            </PublicRoutes>
          }
        />
        <Route
          path="/free-coin"
          element={
            <PublicRoutes>
              <FreeCoinPage windowInnerWidth={windowInnerWidth} />
            </PublicRoutes>
          }
        />
        <Route
          path="/nftlisting"
          element={
            <PublicRoutes>
              <NftListingsPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/comparison"
          element={
            <PublicRoutes>
              <ComparisonPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/upcoming-events"
          element={
            <PublicRoutes>
              <UpcomingEvents />
            </PublicRoutes>
          }
        />
        <Route
          path="/airdrops"
          element={
            <PublicRoutes>
              <AirdropPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/events-view"
          element={
            <PublicRoutes>
              <EventsViewPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/discover"
          element={
            <PublicRoutes>
              <DiscoverPage />
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
