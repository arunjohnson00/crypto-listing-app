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

const allReducers = combineReducers({
  commonReducer,
  homeReducer,
  coinReducer,
  coinsReducer,
  nftReducer,
  userReducer,
  dashboardCoinReducer,
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
