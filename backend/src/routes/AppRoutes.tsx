import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Affiliates from "../pages/affiliates/view/Affiliates";
import AirDrops from "../pages/airdrops/AirDrops";
import Badges from "../pages/badges/Badges";
import BadgesAdd from "../pages/badges/add/BadgesAdd";
import BadgesEdit from "../pages/badges/edit/BadgesEdit";
import BadgesView from "../pages/badges/view/BadgesView";
import CoinListing from "../pages/coinlisting/CoinListing";
import Dashboard from "../pages/dashboard/Dashboard";
import Events from "../pages/events/Events";
import Exchanges from "../pages/exchanges/Exchanges";
import MenuCard from "../pages/menucards/MenuCard";
import Networks from "../pages/networks/Networks";
import NFTListing from "../pages/nftlisting/NFTListing";

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
import MenuCardAdd from "../pages/menucards/add/MenuCardAdd";

import NotFound from "../pages/notfound/NotFound";
import MenuCardEdit from "../pages/menucards/edit/MenuCardEdit";
import MenuCardView from "../pages/menucards/view/MenuCardView";
import CoinsAudit from "../pages/coinsaudit/CoinsAudit";
import CoinsAuditAdd from "../pages/coinsaudit/add/CoinsAuditAdd";
import CoinsAuditEdit from "../pages/coinsaudit/edit/CoinsAuditEdit";
import CoinsAuditView from "../pages/coinsaudit/view/CoinsAuditView";
import Settings from "../pages/settings/Settings";
import CoinsChartProviderAdd from "../pages/coinschartprovider/add/CoinsChartProviderAdd";
import CoinsChartProvider from "../pages/coinschartprovider/CoinsChartProvider";
import CoinsChartProviderView from "../pages/coinschartprovider/view/CoinsChartProviderView";
import CoinsChartProviderEdit from "../pages/coinschartprovider/edit/CoinsChartProviderEdit";
import CoinsCommunity from "../pages/coincommunity/CoinsCommunity";
import CoinsCommunityAdd from "../pages/coincommunity/add/CoinsCommunityAdd";
import CoinsCommunityEdit from "../pages/coincommunity/edit/CoinsCommunityEdit";
import CoinsCommunityView from "../pages/coincommunity/view/CoinsCommunityView";
import CoinsChat from "../pages/coinschat/CoinsChat";
import CoinsChatAdd from "../pages/coinschat/add/CoinsChatAdd";
import CoinsChatEdit from "../pages/coinschat/edit/CoinsChatEdit";
import CoinsChatView from "../pages/coinschat/view/CoinsChatView";
import CoinsSocials from "../pages/coinssocials/CoinsSocials";
import CoinsSocialsAdd from "../pages/coinssocials/add/CoinsSocialsAdd";
import CoinsSocialsEdit from "../pages/coinssocials/edit/CoinsSocialsEdit";
import CoinsSocialsView from "../pages/coinssocials/view/CoinsSocialsView";
import NftMarketPlaces from "../pages/nftmarketplaces/NftMarketPlaces";
import NftMarketPlaceAdd from "../pages/nftmarketplaces/add/NftMarketPlaceAdd";
import NftMarketPlaceEdit from "../pages/nftmarketplaces/edit/NftMarketPlaceEdit";
import NftMarketPlaceView from "../pages/nftmarketplaces/view/NftMarketPlaceView";
import NFTListingAdd from "../pages/nftlisting/add/NFTListingAdd";
import NFTListingEdit from "../pages/nftlisting/edit/NFTListingEdit";
import NFTListingView from "../pages/nftlisting/view/NFTListingView";
import CoinListingEdit from "../pages/coinlisting/edit/CoinListingEdit";
import NotificationAll from "../pages/notification/NotificationAll";
import CoinListingView from "../pages/coinlisting/view/CoinListingView";
import NftEventCategory from "../pages/nfteventcategory/NftEventCategory";
import NftTokenCurrency from "../pages/nfteventtokencurrency/NftTokenCurrency";
import NftEventCategoryAdd from "../pages/nfteventcategory/add/NftEventCategoryAdd";
import NftEventCategoryEdit from "../pages/nfteventcategory/edit/NftEventCategoryEdit";
import NftTokenCurrencyEdit from "../pages/nfteventtokencurrency/edit/NftTokenCurrencyEdit";
import NftTokenCurrencyAdd from "../pages/nfteventtokencurrency/add/NftTokenCurrencyAdd";
import NftEventCategoryView from "../pages/nfteventcategory/view/NftEventCategoryView";
import NftTokenCurrencyView from "../pages/nfteventtokencurrency/view/NftTokenCurrencyView";
import AirDropsAdd from "../pages/airdrops/add/AirDropsAdd";
import AirDropsEdit from "../pages/airdrops/edit/AirDropsEdit";
import AirDropsView from "../pages/airdrops/view/AirDropsView";
import EventsAdd from "../pages/events/add/EventsAdd";
import EventsEdit from "../pages/events/edit/EventsEdit";
import EventsView from "../pages/events/view/EventsView";
import EventCategory from "../pages/eventcategory/EventCategory";
import EventCategoryAdd from "../pages/eventcategory/add/EventCategoryAdd";
import EventCategoryEdit from "../pages/eventcategory/edit/EventCategoryEdit";
import EventCategoryView from "../pages/eventcategory/view/EventCategoryView";
import EventRewardAddress from "../pages/eventrewardaddress/EventRewardAddress";
import EventRewardAddressAdd from "../pages/eventrewardaddress/add/EventRewardAddressAdd";
import EventRewardAddressView from "../pages/eventrewardaddress/view/EventRewardAddressView";
import EventRewardAddressEdit from "../pages/eventrewardaddress/edit/EventRewardAddressEdit";
import AdsDashboard from "../pages/ads/dashboard/AdsDashboard";
import ViewFullList from "../pages/viewfulllist/ViewFullList";
import CreateNewAdWizard from "../pages/ads/createnewadwizard/CreateNewAdWizard";
import AdsConfigurationListing from "../pages/adsconfiguration/AdsConfigurationListing";
import CreateNewAdConfiguration from "../pages/adsconfiguration/add/CreateNewAdConfiguration";
import NFTNetworks from "../pages/nftnetworks/NFTNetworks";

import NFTNetworkAdd from "../pages/nftnetworks/add/NFTNetworkAdd";
import NFTNetworkEdit from "../pages/nftnetworks/edit/NFTNetworkEdit";
import NFTNetworkView from "../pages/nftnetworks/view/NFTNetworkView";
import CoinListingFee from "../pages/coinlistingfee/CoinListingFee";
import FeaturedCoinEdit from "../pages/ads/featuredcoins/edit/FeaturedCoinEdit";
import MainBannerAdd from "../pages/ads/mainbanner/add/MainBannerAdd";

import AdWizardAdd from "../pages/ads/adwizard/add/AdWizardAdd";
import AdWizardEdit from "../pages/ads/adwizard/edit/AdWizardEdit";
import AdWizard from "../pages/ads/adwizard/AdWizard";

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
          path="/coin-listing-fee"
          element={
            <PrivateRoute>
              <CoinListingFee />
            </PrivateRoute>
          }
        />

        <Route
          path="/coin-status-count"
          element={
            <PrivateRoute>
              <ViewFullList />
            </PrivateRoute>
          }
        />
        <Route
          path="/month-wise-coin-listing"
          element={
            <PrivateRoute>
              <ViewFullList />
            </PrivateRoute>
          }
        />
        <Route
          path="/month-wise-users-count"
          element={
            <PrivateRoute>
              <ViewFullList />
            </PrivateRoute>
          }
        />
        <Route
          path="/live-ads-overview"
          element={
            <PrivateRoute>
              <ViewFullList />
            </PrivateRoute>
          }
        />
        <Route
          path="/recent-listings"
          element={
            <PrivateRoute>
              <ViewFullList />
            </PrivateRoute>
          }
        />
        <Route
          path="/incoming-ad-request"
          element={
            <PrivateRoute>
              <ViewFullList />
            </PrivateRoute>
          }
        />
        <Route
          path="/create-ad-wizard"
          element={
            <PrivateRoute>
              <CreateNewAdWizard />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins"
          element={
            <PrivateRoute>
              <CoinListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins/add"
          element={
            <PrivateRoute>
              <CoinListingAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins/edit/:id"
          element={
            <PrivateRoute>
              <CoinListingEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins/view/:id"
          element={
            <PrivateRoute>
              <CoinListingView />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-audit"
          element={
            <PrivateRoute>
              <CoinsAudit />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-audit/add"
          element={
            <PrivateRoute>
              <CoinsAuditAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-audit/edit/:id"
          element={
            <PrivateRoute>
              <CoinsAuditEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins-audit/view/:id"
          element={
            <PrivateRoute>
              <CoinsAuditView />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins-chart-provider"
          element={
            <PrivateRoute>
              <CoinsChartProvider />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins-chart-provider/add"
          element={
            <PrivateRoute>
              <CoinsChartProviderAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-chart-provider/edit/:id"
          element={
            <PrivateRoute>
              <CoinsChartProviderEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins-chart-provider/view/:id"
          element={
            <PrivateRoute>
              <CoinsChartProviderView />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-community"
          element={
            <PrivateRoute>
              <CoinsCommunity />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-community/add"
          element={
            <PrivateRoute>
              <CoinsCommunityAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-community/edit/:id"
          element={
            <PrivateRoute>
              <CoinsCommunityEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-community/view/:id"
          element={
            <PrivateRoute>
              <CoinsCommunityView />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-chat"
          element={
            <PrivateRoute>
              <CoinsChat />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-chat/add"
          element={
            <PrivateRoute>
              <CoinsChatAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-chat/edit/:id"
          element={
            <PrivateRoute>
              <CoinsChatEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-chat/view/:id"
          element={
            <PrivateRoute>
              <CoinsChatView />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-socials"
          element={
            <PrivateRoute>
              <CoinsSocials />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-socials/add"
          element={
            <PrivateRoute>
              <CoinsSocialsAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/coins-socials/edit/:id"
          element={
            <PrivateRoute>
              <CoinsSocialsEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/coins-socials/view/:id"
          element={
            <PrivateRoute>
              <CoinsSocialsView />
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
          path="/exchange/edit/:id"
          element={
            <PrivateRoute>
              <ExchangeEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/exchange/view/:id"
          element={
            <PrivateRoute>
              <ExchangeView />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing"
          element={
            <PrivateRoute>
              <NFTListing />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing/add"
          element={
            <PrivateRoute>
              <NFTListingAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing/edit/:id"
          element={
            <PrivateRoute>
              <NFTListingEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing/view/:id"
          element={
            <PrivateRoute>
              <NFTListingView />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-marketplaces"
          element={
            <PrivateRoute>
              <NftMarketPlaces />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-marketplaces/add"
          element={
            <PrivateRoute>
              <NftMarketPlaceAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-marketplaces/edit/:id"
          element={
            <PrivateRoute>
              <NftMarketPlaceEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-marketplaces/view/:id"
          element={
            <PrivateRoute>
              <NftMarketPlaceView />
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
          path="/airdrops/add"
          element={
            <PrivateRoute>
              <AirDropsAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/airdrops/edit/:id"
          element={
            <PrivateRoute>
              <AirDropsEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/airdrops/view/:id"
          element={
            <PrivateRoute>
              <AirDropsView />
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
          path="/networks/edit/:id"
          element={
            <PrivateRoute>
              <NetworkEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/networks/view/:id"
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
          path="/users/edit/:id"
          element={
            <PrivateRoute>
              <UserEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/view/:id"
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
              <AdsDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/featured-coin"
          element={
            <PrivateRoute>
              <FeaturedCoinEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/main-banner"
          element={
            <PrivateRoute>
              <MainBannerAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/adslist"
          element={
            <PrivateRoute>
              <AdWizard />
            </PrivateRoute>
          }
        />

        <Route
          path="/adslist/add"
          element={
            <PrivateRoute>
              <AdWizardAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/adslist/edit/:id"
          element={
            <PrivateRoute>
              <AdWizardEdit />
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
          path="/videos/edit/:id"
          element={
            <PrivateRoute>
              <VideoEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/videos/view/:id"
          element={
            <PrivateRoute>
              <VideosView />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu-cards"
          element={
            <PrivateRoute>
              <MenuCard />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu-cards/add"
          element={
            <PrivateRoute>
              <MenuCardAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/menu-cards/edit/:id"
          element={
            <PrivateRoute>
              <MenuCardEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu-cards/view/:id"
          element={
            <PrivateRoute>
              <MenuCardView />
            </PrivateRoute>
          }
        />
        <Route
          path="/rating-reviews"
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
          path="/events/add"
          element={
            <PrivateRoute>
              <EventsAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/events/edit/:id"
          element={
            <PrivateRoute>
              <EventsEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/events/view/:id"
          element={
            <PrivateRoute>
              <EventsView />
            </PrivateRoute>
          }
        />

        <Route
          path="/events-category"
          element={
            <PrivateRoute>
              <EventCategory />
            </PrivateRoute>
          }
        />

        <Route
          path="/events-category/add"
          element={
            <PrivateRoute>
              <EventCategoryAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/events-category/edit/:id"
          element={
            <PrivateRoute>
              <EventCategoryEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/events-category/view/:id"
          element={
            <PrivateRoute>
              <EventCategoryView />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing-network"
          element={
            <PrivateRoute>
              <NFTNetworks />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing-network/add"
          element={
            <PrivateRoute>
              <NFTNetworkAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing-network/edit/:id"
          element={
            <PrivateRoute>
              <NFTNetworkEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing-network/view/:id"
          element={
            <PrivateRoute>
              <NFTNetworkView />
            </PrivateRoute>
          }
        />

        <Route
          path="/reward-address"
          element={
            <PrivateRoute>
              <EventRewardAddress />
            </PrivateRoute>
          }
        />

        <Route
          path="/reward-address/add"
          element={
            <PrivateRoute>
              <EventRewardAddressAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/reward-address/edit/:id"
          element={
            <PrivateRoute>
              <EventRewardAddressEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/reward-address/view/:id"
          element={
            <PrivateRoute>
              <EventRewardAddressView />
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

        <Route
          path="/badges/add"
          element={
            <PrivateRoute>
              <BadgesAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/badges/edit/:id"
          element={
            <PrivateRoute>
              <BadgesEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/badges/view/:id"
          element={
            <PrivateRoute>
              <BadgesView />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-notifications-all"
          element={
            <PrivateRoute>
              <NotificationAll />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-category"
          element={
            <PrivateRoute>
              <NftEventCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-category/add"
          element={
            <PrivateRoute>
              <NftEventCategoryAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-category/edit/:id"
          element={
            <PrivateRoute>
              <NftEventCategoryEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-category/view/:id"
          element={
            <PrivateRoute>
              <NftEventCategoryView />
            </PrivateRoute>
          }
        />

        <Route
          path="/nft-listing-currency"
          element={
            <PrivateRoute>
              <NftTokenCurrency />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-currency/add"
          element={
            <PrivateRoute>
              <NftTokenCurrencyAdd />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-currency/edit/:id"
          element={
            <PrivateRoute>
              <NftTokenCurrencyEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/nft-listing-currency/view/:id"
          element={
            <PrivateRoute>
              <NftTokenCurrencyView />
            </PrivateRoute>
          }
        />
        <Route
          path="/ads-configuration"
          element={
            <PrivateRoute>
              <AdsConfigurationListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/ads-config-listing"
          element={
            <PrivateRoute>
              <AdsConfigurationListing />
            </PrivateRoute>
          }
        />
        <Route
          path="/ads-config-settings"
          element={
            <PrivateRoute>
              <CreateNewAdConfiguration />
            </PrivateRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <NotFound />
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
