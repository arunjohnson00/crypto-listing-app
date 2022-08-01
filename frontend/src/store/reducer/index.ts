import { combineReducers } from "redux";
import { update } from "lodash";
import { COMMON } from "../types";

//Common Reducers

//App Reducers

import homeReducer from "./homeReducer";

const allReducers = combineReducers({
  homeReducer,
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
