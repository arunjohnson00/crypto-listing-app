import { combineReducers } from "redux";
import { update } from "lodash";
import { COMMON } from "../types";

//Common Reducers
import commonReducer from "./commonReducer";
//App Reducers

import homeReducer from "./homeReducer";
import coinReducer from "./coinReducer";
import coinsReducer from "./coinsReducer";
import nftReducer from "./nftReducer";
import userReducer from "./userReducer";
import dashboardCoinReducer from "./dashboardCoinReducer";
import dashboardNFTListingReducer from "./dashboardNFTListingReducer";
import dashboardEventReducer from "./dashboardEventReducer";
import dashboardAirdropsReducer from "./dashboardAirdropsReducer";
import discoverReducer from "./discoverReducer";
import feargreedReducer from "./feargreedReducer";
import dashboardReviewReducer from "./dashboardReviewReducer";
import airdropReducer from "./airdropReducer";
import eventsReducer from "./eventsReducer";
import presaleReducer from "./presaleReducer";
import adsReducer from "./adsReducer";
import videoReducer from "./videoReducer";

const allReducers = combineReducers({
  commonReducer,
  homeReducer,
  coinReducer,
  coinsReducer,
  nftReducer,
  userReducer,
  dashboardCoinReducer,
  dashboardNFTListingReducer,
  dashboardEventReducer,
  dashboardAirdropsReducer,
  discoverReducer,
  feargreedReducer,
  dashboardReviewReducer,
  airdropReducer,
  eventsReducer,
  presaleReducer,
  adsReducer,
  videoReducer,
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
