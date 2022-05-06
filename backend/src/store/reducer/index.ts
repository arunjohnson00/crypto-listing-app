import { combineReducers } from "redux";
import { update } from "lodash";

import { COMMON } from "../types";

import Auth from "./authReducer";
import addExchangeReducer from "./addExchange";
import updateExchangeReducer from "./updateExchange";

import listExchangeReducer from "./listExchange";
import addNetworkReducer from "./addNetwork";
import listNetworkReducer from "./listNetwork";
import viewExchangeReducer from "./viewExchange";
import updateNetworkReducer from "./updateNetwork";
import deleteRowReducer from "./deleteRow";
import listVideoReducer from "./listVideos";
import addVideoReducer from "./addVideos";
import updateVideosReducer from "./updateVideo";
import listUsersReducer from "./listUsers";
import addUserReducer from "./addUsers";
import updateUsersReducer from "./updateUser";
import logoutReducer from "./logout";
import listCoinReducer from "./listCoin";
import addCoinReducer from "./addCoin";
import listMenuCardReducer from "./listMenuCard";
import addMenuCardReducer from "./addMenuCard";
import updateMenuCardReducer from "./updateMenuCard";
import listCoinAuditReducer from "./listCoinAudit";
import addCoinAuditReducer from "./addCoinAudit";
import updateCoinAuditReducer from "./updateCoinAudit";
import listCoinChartProviderReducer from "./listCoinChartProvider";
import addCoinChartProviderReducer from "./addCoinChartProvider";
import updateCoinChartProviderReducer from "./updateCoinChartProvider";
import listCoinCommunityReducer from "./listCoinCommunity";
import addCoinCommunityReducer from "./addCoinCommunity";
import updateCoinCommunityReducer from "./updateCoinCommunity";
import listCoinChatReducer from "./listCoinChat";
import addCoinChatReducer from "./addCoinChat";
import updateCoinChatReducer from "./updateCoinChat";
import listCoinSocialReducer from "./listCoinSocials";
import addCoinSocialReducer from "./addCoinSocials";
import updateCoinSocialReducer from "./updateCoinSocial";
import listNftMarketPlcesReducer from "./listNftMaketPlaces";
import listNftLisingsReducer from "./listNftListing";
import addNftListingsReducer from "./addNftListing";
import updateNftListingsReducer from "./updateNftListing";
import editCoinReducer from "./editCoin";
import userNotificationReducer from "./usersNotification";
import updateCoinsReducer from "./updateCoin";
import listBadgesReducer from "./listBadges";
import addBadgesReducer from "./addBadges";

const allReducers = combineReducers({
  Auth,
  addExchangeReducer,
  updateExchangeReducer,
  deleteRowReducer,
  viewExchangeReducer,
  listExchangeReducer,
  addNetworkReducer,
  listNetworkReducer,
  updateNetworkReducer,
  listVideoReducer,
  addVideoReducer,
  updateVideosReducer,
  listUsersReducer,
  addUserReducer,
  updateUsersReducer,
  logoutReducer,
  listCoinReducer,
  addCoinReducer,
  listMenuCardReducer,
  addMenuCardReducer,
  updateMenuCardReducer,
  listCoinAuditReducer,
  addCoinAuditReducer,
  updateCoinAuditReducer,
  listCoinChartProviderReducer,
  addCoinChartProviderReducer,
  updateCoinChartProviderReducer,
  listCoinCommunityReducer,
  addCoinCommunityReducer,
  updateCoinCommunityReducer,
  listCoinChatReducer,
  addCoinChatReducer,
  updateCoinChatReducer,
  listCoinSocialReducer,
  addCoinSocialReducer,
  updateCoinSocialReducer,
  listNftMarketPlcesReducer,
  listNftLisingsReducer,
  addNftListingsReducer,
  updateNftListingsReducer,
  editCoinReducer,
  userNotificationReducer,
  updateCoinsReducer,
  listBadgesReducer,
  addBadgesReducer,
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
