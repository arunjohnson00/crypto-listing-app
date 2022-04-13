import React from "react";
import { Routes, Route } from "react-router-dom";
import Affiliates from "../../pages/affiliates/view/Affiliates";
import AirDrops from "../../pages/airdrops/view/AirDrops";
import Badges from "../../pages/badges/view/Badges";
import CoinListing from "../../pages/coinlisting/view/CoinListing";
import Dashboard from "../../pages/dashboard/Dashboard";
import Events from "../../pages/events/view/Events";
import Exchanges from "../../pages/exchanges/view/Exchanges";
import MenuCard from "../../pages/menucards/view/MenuCard";
import Networks from "../../pages/networks/view/Networks";
import NFTListing from "../../pages/nftlisting/view/NFTListing";
import NFTMarketPlaces from "../../pages/nftmarketplaces/view/NFTMarketPlaces";
import ReviewsRating from "../../pages/reviews/view/ReviewsRating";
import Users from "../../pages/users/view/Users";
import Videos from "../../pages/videos/view/Videos";

export const ProtectedRoutes: any = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/coinlistings" element={<CoinListing />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/nftlistings" element={<NFTListing />} />
      <Route path="/nftmarketplaces" element={<NFTMarketPlaces />} />
      <Route path="/airdrops" element={<AirDrops />} />
      <Route path="/networks" element={<Networks />} />
      <Route path="/users" element={<Users />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/menucards" element={<MenuCard />} />
      <Route path="/rating&reviews" element={<ReviewsRating />} />
      <Route path="/events" element={<Events />} />
      <Route path="/affiliates" element={<Affiliates />} />
      <Route path="/badges" element={<Badges />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
};

export default ProtectedRoutes;
