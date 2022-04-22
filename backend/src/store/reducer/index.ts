import { combineReducers } from "redux";
import { update } from "lodash";

import { COMMON } from "../types";

import Auth from "./authReducer";
import addExchangeReducer from "./addExchange";
import listExchangeReducer from "./listExchange";
import addNetworkReducer from "./addNetwork";
import listNetworkReducer from "./listNetwork";

const allReducers = combineReducers({
  Auth,
  addExchangeReducer,
  listExchangeReducer,
  addNetworkReducer,
  listNetworkReducer,
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
