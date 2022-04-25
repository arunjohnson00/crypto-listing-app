import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Affiliates from "../pages/affiliates/view/Affiliates";
import AirDrops from "../pages/airdrops/view/AirDrops";
import Badges from "../pages/badges/view/Badges";
import CoinListing from "../pages/coinlisting/CoinListing";
import Dashboard from "../pages/dashboard/Dashboard";
import Events from "../pages/events/view/Events";
import Exchanges from "../pages/exchanges/Exchanges";
import MenuCard from "../pages/menucards/view/MenuCard";
import Networks from "../pages/networks/Networks";
import NFTListing from "../pages/nftlisting/view/NFTListing";
import NFTMarketPlaces from "../pages/nftmarketplaces/view/NFTMarketPlaces";
import ReviewsRating from "../pages/reviews/view/ReviewsRating";
import Users from "../pages/users/Users";
import Videos from "../pages/videos/Videos";
import ExchangeAdd from "../pages/exchanges/add/ExchangeAdd";
import ExchangeEdit from "../pages/exchanges/edit/ExchangeEdit";
import CoinListingAdd from "../pages/coinlisting/add/CoinListingAdd";
import NetworkAdd from "../pages/networks/add/NetworkAdd";

import PrivateRoute from "./private/PrivateRoute";
import PublicRoutes from "./public/PublicRoutes";
import ExchangeView from "../pages/exchanges/view/ExchangeView";
import NetworkEdit from "../pages/networks/edit/NetworkEdit";
import NetworkView from "../pages/networks/view/NetworkView";
import VideosAdd from "../pages/videos/add/VideosAdd";
import VideoEdit from "../pages/videos/edit/VideoEdit";
import VideosView from "../pages/videos/view/VideosView";
import UserEdit from "../pages/users/edit/UserEdit";
import UserAdd from "../pages/users/add/UserAdd";
import UserView from "../pages/users/view/UserView";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/coinlistings"
          element={
            <PrivateRoute>
              <CoinListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/coinlisting/add"
          element={
            <PrivateRoute>
              <CoinListingAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/exchange"
          element={
            <PrivateRoute>
              <Exchanges />
            </PrivateRoute>
          }
        />

        <Route
          path="/exchange/add"
          element={
            <PrivateRoute>
              <ExchangeAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/exchange/edit"
          element={
            <PrivateRoute>
              <ExchangeEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/exchange/view"
          element={
            <PrivateRoute>
              <ExchangeView />
            </PrivateRoute>
          }
        />

        <Route
          path="/nftlistings"
          element={
            <PrivateRoute>
              <NFTListing />
            </PrivateRoute>
          }
        />

        <Route
          path="/nftmarketplaces"
          element={
            <PrivateRoute>
              <NFTMarketPlaces />
            </PrivateRoute>
          }
        />
        <Route
          path="/airdrops"
          element={
            <PrivateRoute>
              <AirDrops />
            </PrivateRoute>
          }
        />
        <Route
          path="/networks"
          element={
            <PrivateRoute>
              <Networks />
            </PrivateRoute>
          }
        />

        <Route
          path="/networks/add"
          element={
            <PrivateRoute>
              <NetworkAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/networks/edit"
          element={
            <PrivateRoute>
              <NetworkEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/networks/view"
          element={
            <PrivateRoute>
              <NetworkView />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/add"
          element={
            <PrivateRoute>
              <UserAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/edit"
          element={
            <PrivateRoute>
              <UserEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/view"
          element={
            <PrivateRoute>
              <UserView />
            </PrivateRoute>
          }
        />
        <Route
          path="/ads"
          element={
            <PrivateRoute>
              <p>ads</p>
            </PrivateRoute>
          }
        />
        <Route
          path="/videos"
          element={
            <PrivateRoute>
              <Videos />
            </PrivateRoute>
          }
        />
        <Route
          path="/videos/add"
          element={
            <PrivateRoute>
              <VideosAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/videos/edit"
          element={
            <PrivateRoute>
              <VideoEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/videos/view"
          element={
            <PrivateRoute>
              <VideosView />
            </PrivateRoute>
          }
        />
        <Route
          path="/menucards"
          element={
            <PrivateRoute>
              <MenuCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/rating&reviews"
          element={
            <PrivateRoute>
              <ReviewsRating />
            </PrivateRoute>
          }
        />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="/affiliates"
          element={
            <PrivateRoute>
              <Affiliates />
            </PrivateRoute>
          }
        />
        <Route
          path="/badges"
          element={
            <PrivateRoute>
              <Badges />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="*" element={<p>Theres nothing </p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
