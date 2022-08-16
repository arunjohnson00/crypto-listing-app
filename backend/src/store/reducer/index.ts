import { combineReducers } from "redux";
import { update } from "lodash";
import { COMMON } from "../types";

//Common Reducers
import Auth from "./authReducer";
import logoutReducer from "./logout";
import deleteRowReducer from "./deleteRow";
import userNotificationReducer from "./usersNotification";

//App Reducers

import badgesReducer from "./badgesReducer";
import auditReducer from "./coinAuditReducer";
import chartProviderReducer from "./coinChartProviderReducer";
import chatReducer from "./coinChatReducer";
import communityReducer from "./coinCommunityReducer";
import coinReducer from "./coinReducer";
import socialsReducer from "./coinSocialsReducer";
import exchangesReducer from "./exchangeReducer";
import menuCardsReducer from "./menuCardsReducer";
import networksReducer from "./networksReducer";
import nftListingsReducer from "./nftListingReducer";
import nftMarketPlacesReducer from "./nftMarketPlacesReducer";
import usersReducer from "./usersReducer";
import videosReducer from "./videosReducer";
import nftListingCategoryReducer from "./nftListingCategoryReducer";
import nftListingCurrencyReducer from "./nftListingCurrencyReducer";
import airdropsReducer from "./airdropsReducer";
import eventsReducer from "./eventsReducer";
import eventsCategoryReducer from "./eventsCategoryReducer";
import eventsRewardAddressReducer from "./eventsRewardAddressReducer";
import topbarCountReducer from "./tobarCountReducer";
import settingsReducer from "./settingsReducer";
import dashboardReducer from "./dashboardReducer";
import emailReducer from "./emailReducer";
import adsReducer from "./adsReducer";
import nftNetworksReducer from "./nftNetworksReducer";

const allReducers = combineReducers({
  Auth,
  deleteRowReducer,
  logoutReducer,
  userNotificationReducer,
  badgesReducer,
  auditReducer,
  chartProviderReducer,
  chatReducer,
  communityReducer,
  coinReducer,
  socialsReducer,
  exchangesReducer,
  menuCardsReducer,
  networksReducer,
  nftListingsReducer,
  nftMarketPlacesReducer,
  usersReducer,
  videosReducer,
  nftListingCategoryReducer,
  nftListingCurrencyReducer,
  airdropsReducer,
  eventsReducer,
  eventsCategoryReducer,
  eventsRewardAddressReducer,
  topbarCountReducer,
  settingsReducer,
  dashboardReducer,
  emailReducer,
  adsReducer,
  nftNetworksReducer,
});

const rootReducer = (state: any, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    case COMMON.RESET_FIELD:
      if (action.key) {
        newState = update(state, action.key, () => action.value);
      }
      return {
        ...newState,
      };
    default:
    // do nothing;
  }
  return allReducers(newState, action);
};

export default rootReducer;
