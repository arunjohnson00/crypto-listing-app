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
