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
import UserDashboard from "../pages/useradmin/desktop/dashboard/UserDashboard";
import NftListingsPage from "../pages/desktop/nftlisting/NftListingsPage";
import CoinsListPage from "../pages/desktop/coins/CoinsListPage";
import ComparisonPage from "../pages/desktop/comparisonpage/ComparisonPage";
import CryptoEvents from "../pages/desktop/cryptoevents/CryptoEvents";
import AirdropPage from "../pages/desktop/airdrops/AirdropPage";
import SingleCryptoEventsPage from "../pages/desktop/singlecryptoeventspage/SingleCryptoEventsPage";
import PresaleListPage from "../pages/desktop/presales/PresaleListPage";
import DiscoverPage from "../pages/desktop/discover/DiscoverPage";
import MobileSingleCoinPage from "../pages/mobile/mobilesinglecoinpage/MobileSingleCoinPage";
import LeaderBoardPage from "../pages/desktop/leaderboard/LeaderBoardPage";
import ChartPage from "../pages/desktop/chart/ChartPage";
import FreeCoinPage from "../pages/desktop/freecoin/FreeCoinPage";
import MobileSingleNftPage from "../pages/mobile/mobilesinglenftpage/MobileSingleNftPage";
import MobileCryptoEventsPage from "../pages/mobile/mobilecryptoeventspage/MobileCryptoEventsPage";
import MobileSingleCryptoEventsPage from "../pages/mobile/mobilesinglecryptoeventspage/MobileSingleCryptoEventsPage";
import SingleNftMarketPlacesPage from "../pages/desktop/singlenftmarketplaces/SingleNftMarketPlacesPage";
import BoostPublishPage from "../pages/desktop/boostpublish/BoostPublishPage";
import UserSettings from "../pages/useradmin/desktop/usersettings/UserSettings";
import SelectPlanPage from "../pages/desktop/selectplanpage/SelectPlanPage";
import SelectPlanMailPage from "../pages/desktop/selectplanmailpage/SelectPlanMailPage";
import AddAssetPage from "../pages/desktop/addasset/AddAssetPage";
import CoinListingAdd from "../pages/useradmin/desktop/coin/add/CoinListingAdd";
import CoinListingEdit from "../pages/useradmin/desktop/coin/edit/CoinListingEdit";
import NFTListingAdd from "../pages/useradmin/desktop/nftlisting/add/NFTListingAdd";
import NFTListingEdit from "../pages/useradmin/desktop/nftlisting/edit/NFTListingEdit";
import AirDropsAdd from "../pages/useradmin/desktop/airdrops/add/AirDropsAdd";
import AirDropsEdit from "../pages/useradmin/desktop/airdrops/edit/AirDropsEdit";
import SupportPage from "../pages/desktop/supportpage/SupportPage";
import FearGreedIndexPage from "../pages/desktop/feargreedindexpage/FearGreedIndexPage";
import ReviewEdit from "../pages/useradmin/desktop/review/edit/ReviewEdit";
import MobileAddAssetPage from "../pages/mobile/mobileaddasset/MobileAddAssetPage";
import MobileDiscoverPage from "../pages/mobile/mobilediscover/MobileDiscoverPage";
import MobileUserDashboard from "../pages/useradmin/mobile/dashboard/MobileUserDashboard";
import MobileAnnouncement from "../pages/useradmin/mobile/announcement/MobileAnnouncement";
import MobileOfferZone from "../pages/useradmin/mobile/offerzone/MobileOfferZone";
import UserAdminCoinListingMobilePage from "../pages/useradmin/mobile/useradmincoinlistingmobilepage/UserAdminCoinListingMobilePage";
import UserAdminNftListingMobilePage from "../pages/useradmin/mobile/useradminnftlistingmobilepage/UserAdminNftListingMobilePage";
import UserAdminEventsListingMobilePage from "../pages/useradmin/mobile/useradmineventslistingmobilepage/UserAdminEventsListingMobilePage";
import UserAdminAirdropsListingMobilePage from "../pages/useradmin/mobile/useradminairdropslistingmobilepage/UserAdminAirdropsListingMobilePage";
import UserAdminReviewListingMobilePage from "../pages/useradmin/mobile/useradminreviewlistingmobilepage/UserAdminReviewListingMobilePage";
import AddEventsPage from "../pages/desktop/addevents/AddEventsPage";
import OnlineEventsAdd from "../pages/useradmin/desktop/events/online-events/add/OnlineEventsAdd";
import OnlineEventsEdit from "../pages/useradmin/desktop/events/online-events/edit/OnlineEventsEdit";
import OnsiteEventsAdd from "../pages/useradmin/desktop/events/onsite-events/add/OnsiteEventsAdd";
import OnsiteEventsEdit from "../pages/useradmin/desktop/events/onsite-events/edit/OnsiteEventsEdit";
import UserAdminAddEventsPage from "../pages/useradmin/desktop/addevents/UserAdminAddEventsPage";
import SingleAirdropPage from "../pages/desktop/singleairdroppage/SingleAirdropPage";
import VideosPage from "../pages/desktop/videos/VideosPage";
import FeaturedCoinPage from "../pages/desktop/featuredcoin/FeaturedCoinPage";
import Error404 from "../pages/error404/Error404";

const AppRoutes = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function (event) {
    setWindowInnerWidth(window.innerWidth);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoutes>
              <Error404 />
            </PublicRoutes>
          }
        />
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

        {windowInnerWidth >= 900 ? (
          <Route
            path="/nft/*"
            element={
              <PublicRoutes>
                <SingleNftPage />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/nft/*"
            element={
              <PublicRoutes>
                <MobileSingleNftPage />
              </PublicRoutes>
            }
          />
        )}
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

        {windowInnerWidth >= 900 ? (
          <Route
            path="/add-asset"
            element={
              <PublicRoutes>
                <AddAssetPage windowInnerWidth={windowInnerWidth} />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/add-asset"
            element={
              <PublicRoutes>
                <MobileAddAssetPage windowInnerWidth={windowInnerWidth} />
              </PublicRoutes>
            }
          />
        )}

        {windowInnerWidth >= 900 ? (
          <Route
            path="/add-events"
            element={
              <PublicRoutes>
                <AddEventsPage windowInnerWidth={windowInnerWidth} />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/add-events"
            element={
              <PublicRoutes>
                <AddEventsPage windowInnerWidth={windowInnerWidth} />
              </PublicRoutes>
            }
          />
        )}

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
          path="/nft"
          element={
            <PublicRoutes>
              <NftListingsPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/nft-marketplaces/*"
          element={
            <PublicRoutes>
              <SingleNftMarketPlacesPage />
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
        {windowInnerWidth >= 900 ? (
          <Route
            path="/crypto-events"
            element={
              <PublicRoutes>
                <CryptoEvents />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/crypto-events"
            element={
              <PublicRoutes>
                <MobileCryptoEventsPage />
              </PublicRoutes>
            }
          />
        )}
        <Route
          path="/airdrops"
          element={
            <PublicRoutes>
              <AirdropPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/airdrops/*"
          element={
            <PublicRoutes>
              <SingleAirdropPage />
            </PublicRoutes>
          }
        />
        {windowInnerWidth >= 900 ? (
          <Route
            path="/crypto-events/*"
            element={
              <PublicRoutes>
                <SingleCryptoEventsPage />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/crypto-events/*"
            element={
              <PublicRoutes>
                <MobileSingleCryptoEventsPage />
              </PublicRoutes>
            }
          />
        )}
        {windowInnerWidth >= 900 ? (
          <Route
            path="/discover"
            element={
              <PublicRoutes>
                <DiscoverPage />
              </PublicRoutes>
            }
          />
        ) : (
          <Route
            path="/discover"
            element={
              <PublicRoutes>
                <MobileDiscoverPage />
              </PublicRoutes>
            }
          />
        )}
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
          path="/videos"
          element={
            <PublicRoutes>
              <VideosPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/featured-coin"
          element={
            <PublicRoutes>
              <FeaturedCoinPage />
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
          path="/boost-publish"
          element={
            <PublicRoutes>
              <BoostPublishPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/select-plan"
          element={
            <PublicRoutes>
              <SelectPlanPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/select-plan-mail"
          element={
            <PublicRoutes>
              <SelectPlanMailPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/support"
          element={
            <PublicRoutes>
              <SupportPage />
            </PublicRoutes>
          }
        />

        <Route
          path="/fear-greed-index"
          element={
            <PublicRoutes>
              <FearGreedIndexPage />
            </PublicRoutes>
          }
        />

        {windowInnerWidth >= 900 ? (
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/user-dashboard"
            element={
              <PrivateRoute>
                <MobileUserDashboard />
              </PrivateRoute>
            }
          />
        )}

        {windowInnerWidth >= 900 ? (
          <Route
            path="/user-dashboard/coin"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/user-dashboard/coin"
            element={
              <PrivateRoute>
                <UserAdminCoinListingMobilePage />
              </PrivateRoute>
            }
          />
        )}

        {windowInnerWidth >= 900 ? (
          <Route
            path="/user-dashboard/nft"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/user-dashboard/nft"
            element={
              <PrivateRoute>
                <UserAdminNftListingMobilePage />
              </PrivateRoute>
            }
          />
        )}

        {windowInnerWidth >= 900 ? (
          <Route
            path="/user-dashboard/events"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/user-dashboard/events"
            element={
              <PrivateRoute>
                <UserAdminEventsListingMobilePage />
              </PrivateRoute>
            }
          />
        )}

        {windowInnerWidth >= 900 ? (
          <Route
            path="/user-dashboard/airdrops"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/user-dashboard/airdrops"
            element={
              <PrivateRoute>
                <UserAdminAirdropsListingMobilePage />
              </PrivateRoute>
            }
          />
        )}

        {windowInnerWidth >= 900 ? (
          <Route
            path="/user-dashboard/review"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/user-dashboard/review"
            element={
              <PrivateRoute>
                <UserAdminReviewListingMobilePage />
              </PrivateRoute>
            }
          />
        )}

        <Route
          path="/user-dashboard/settings"
          element={
            <PrivateRoute>
              <UserSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/announcement"
          element={
            <PrivateRoute>
              <MobileAnnouncement />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/offer-zone"
          element={
            <PrivateRoute>
              <MobileOfferZone />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/coin/add"
          element={
            <PrivateRoute>
              <CoinListingAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/coin/edit"
          element={
            <PrivateRoute>
              <CoinListingEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/nft/add"
          element={
            <PrivateRoute>
              <NFTListingAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/nft/edit"
          element={
            <PrivateRoute>
              <NFTListingEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/add-events"
          element={
            <PrivateRoute>
              <UserAdminAddEventsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-dashboard/events/online-events/add"
          element={
            <PrivateRoute>
              <OnlineEventsAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/events/online-events/edit"
          element={
            <PrivateRoute>
              <OnlineEventsEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/events/onsite-events/add"
          element={
            <PrivateRoute>
              <OnsiteEventsAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/events/onsite-events/edit"
          element={
            <PrivateRoute>
              <OnsiteEventsEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/airdrops/add"
          element={
            <PrivateRoute>
              <AirDropsAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/airdrops/edit"
          element={
            <PrivateRoute>
              <AirDropsEdit />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-dashboard/review/edit"
          element={
            <PrivateRoute>
              <ReviewEdit />
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
